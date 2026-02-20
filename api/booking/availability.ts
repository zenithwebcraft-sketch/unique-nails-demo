import type { VercelRequest, VercelResponse } from '@vercel/node';
import { google } from 'googleapis';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { date, duration = '60' } = req.query;

  if (!date || typeof date !== 'string') {
    return res.status(400).json({ error: 'Date is required' });
  }

  // ── Verificar variables de entorno ──────────────────────────
  const clientId     = process.env.GOOGLE_CLIENT_ID;
  const clientSecret = process.env.GOOGLE_CLIENT_SECRET;
  const refreshToken = process.env.GOOGLE_REFRESH_TOKEN;
  const calendarId   = process.env.GOOGLE_CALENDAR_ID || 'primary';

  if (!clientId || !clientSecret || !refreshToken) {
    console.error('Missing OAuth2 credentials:', { clientId: !!clientId, clientSecret: !!clientSecret, refreshToken: !!refreshToken });
    return res.status(500).json({
      error: 'Server configuration error',
      message: 'Missing Google OAuth2 credentials',
    });
  }

  try {
    // ── OAuth2 Client ────────────────────────────────────────
    const oauth2Client = new google.auth.OAuth2(
      clientId,
      clientSecret,
      'http://localhost:8080/auth/google/callback'
    );

    oauth2Client.setCredentials({ refresh_token: refreshToken });

    const calendar = google.calendar({ version: 'v3', auth: oauth2Client });

    // ── Rango del día (Eastern Time / Florida) ───────────────
    const OPEN_HOUR  = 9;
    const CLOSE_HOUR = 17;
    const SLOT_INTERVAL  = 30;
    const serviceDuration = parseInt(duration as string) || 60;

    const startOfDay = new Date(`${date}T09:00:00-05:00`);
    const endOfDay   = new Date(`${date}T17:00:00-05:00`);

    // ── Obtener eventos de Google Calendar ───────────────────
    const eventsResponse = await calendar.events.list({
      calendarId,
      timeMin: startOfDay.toISOString(),
      timeMax: endOfDay.toISOString(),
      singleEvents: true,
      orderBy: 'startTime',
    });

    const existingEvents = eventsResponse.data.items || [];
    const now = new Date();
    const slots = [];
    let current = new Date(startOfDay);

    while (current < endOfDay) {
      const slotEnd = new Date(current.getTime() + serviceDuration * 60000);
      if (slotEnd > endOfDay) break;

      const isOccupied = existingEvents.some((event) => {
        const eventStart = new Date(event.start?.dateTime || event.start?.date || '');
        const eventEnd   = new Date(event.end?.dateTime   || event.end?.date   || '');
        return current < eventEnd && slotEnd > eventStart;
      });

      const isPast = current < now;

      // Formato HH:MM (ej: "09:00")
      const hours   = current.getUTCHours().toString().padStart(2, '0');
      const minutes = current.getUTCMinutes().toString().padStart(2, '0');

      slots.push({
        time: `${hours}:${minutes}`,
        available: !isOccupied && !isPast,
      });

      current = new Date(current.getTime() + SLOT_INTERVAL * 60000);
    }

    console.log(`✅ Slots generated for ${date}:`, slots.length);
    return res.status(200).json({ slots, date });

  } catch (error: any) {
    console.error('❌ Availability error:', error.message);
    return res.status(500).json({
      error: 'Error loading availability',
      message: error.message,
    });
  }
}
