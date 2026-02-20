import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle2, Calendar, Clock, MapPin, User, Mail, Phone } from 'lucide-react';
import { format } from 'date-fns';
import { es, enUS } from 'date-fns/locale';
import businessData from '@/config/business.json';
import { useLanguage } from '@/hooks/useLanguage';

interface BookingConfirmationProps {
  bookingData: {
    service: {
      title: string;
      priceEUR: number;
      durationMin: number;
    };
    date: string;
    time: string;
    email: string;
    phone: string;
    firstName: string;
    lastName: string;
  };
  onBookAnother: () => void;
}

export const BookingConfirmation = ({ bookingData, onBookAnother }: BookingConfirmationProps) => {
  const { translations, language } = useLanguage();
  const bookingId = `MCM-${Date.now().toString().slice(-8)}`; // ← MCM en vez de VNY
  const locale = language === 'es' ? es : enUS;
  const location = businessData.business.locations[0];

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      {/* Success Header */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100">
          <CheckCircle2 className="h-12 w-12 text-green-600" />
        </div>
        <h2 className="text-4xl font-bold text-gray-900">
          {translations.booking.confirmationPage.title}
        </h2>
        <p className="text-gray-600">
          {translations.booking.confirmationPage.subtitle}
        </p>
        <p className="text-lg font-medium text-gray-900">
          <strong>{bookingData.email}</strong>
        </p>
        <p className="text-sm text-gray-500">
          {translations.booking.confirmationPage.bookingId}: {bookingId}
        </p>
      </div>

      {/* Booking Details */}
      <Card>
        <CardContent className="p-6 space-y-6">

          {/* Service */}
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Clock className="h-6 w-6 text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900 mb-1">
                {translations.booking.confirmationPage.service}
              </h3>
              <p className="text-lg font-medium text-gray-900">{bookingData.service.title}</p>
              {/* ✅ $ en lugar de € */}
              <p className="text-sm text-gray-600">
                {bookingData.service.durationMin} {translations.booking.minutes} • ${bookingData.service.priceEUR}
              </p>
            </div>
          </div>

          {/* Date & Time */}
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Calendar className="h-6 w-6 text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900 mb-1">
                {translations.booking.confirmationPage.dateTime}
              </h3>
              <p className="text-lg font-medium text-gray-900">
                {format(new Date(bookingData.date), "EEEE, MMMM d, yyyy", { locale })}
              </p>
              <p className="text-sm text-gray-600">{bookingData.time}</p>
            </div>
          </div>

          {/* Location — ✅ Desde business.json */}
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <MapPin className="h-6 w-6 text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900 mb-1">
                {translations.booking.confirmationPage.location}
              </h3>
              <p className="text-gray-900">
                {businessData.business.name} — {location.name}
              </p>
              {/* ✅ Dirección de business.json, no hardcodeada */}
              <p className="text-sm text-gray-600">
                {location.address}<br />
                {location.city}
              </p>
            </div>
          </div>

          {/* Consultant — ✅ No más "Stylist" */}
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <User className="h-6 w-6 text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900 mb-1">
                {translations.booking.confirmationPage.stylist}
              </h3>
              <p className="text-gray-900">{translations.booking.confirmationPage.noPreference}</p>
              <p className="text-sm text-gray-600">
                {translations.booking.confirmationPage.noPreferenceDesc}
              </p>
            </div>
          </div>

          {/* Client Info */}
          <div className="border-t pt-6 space-y-4">
            <div className="flex items-center gap-3">
              <User className="h-5 w-5 text-gray-400" />
              <div>
                <p className="text-sm text-gray-600">{translations.booking.confirmationPage.client}</p>
                <p className="font-medium text-gray-900">
                  {bookingData.firstName} {bookingData.lastName}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-gray-400" />
              <div>
                <p className="text-sm text-gray-600">Email</p>
                <p className="font-medium text-gray-900">{bookingData.email}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-gray-400" />
              <div>
                <p className="text-sm text-gray-600">{translations.booking.confirmationPage.phone}</p>
                <p className="font-medium text-gray-900">{bookingData.phone}</p>
              </div>
            </div>
          </div>

          {/* Payment Info — ✅ $0 en lugar de 0€ */}
          <div className="border-t pt-6">
            <div className="bg-primary/5 rounded-lg p-4 space-y-2">
              <p className="text-sm font-medium text-gray-900">
                💳 {translations.booking.confirmationPage.chargedToday}: $0
              </p>
              <p className="text-sm text-gray-600">
                {translations.booking.confirmationPage.paymentNote}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Help Text */}
      <p className="text-center text-sm text-gray-600">
        {translations.booking.confirmationPage.needChange} {businessData.business.contact.phone}
      </p>

      {/* Actions */}
      <div className="flex gap-4">
        <Button variant="outline" onClick={() => window.location.href = '/'} className="flex-1">
          {translations.booking.confirmationPage.backHome}
        </Button>
        <Button onClick={onBookAnother} className="flex-1">
          {translations.booking.confirmationPage.bookAnother}
        </Button>
      </div>
    </div>
  );
};
