import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail } from 'lucide-react';

interface EmailCaptureProps {
  onSubmit: (email: string) => void;
  onBack: () => void;
  initialEmail?: string;
}

export const EmailCapture = ({ onSubmit, onBack, initialEmail = '' }: EmailCaptureProps) => {
  const [email, setEmail] = useState(initialEmail);
  const [error, setError] = useState('');

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim()) {
      setError('Por favor ingresa tu email');
      return;
    }
    
    if (!validateEmail(email)) {
      setError('Por favor ingresa un email válido');
      return;
    }
    
    setError('');
    onSubmit(email);
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-pink-100 rounded-full mb-4">
          <Mail className="h-8 w-8 text-pink-600" />
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          ¿Cuál es tu email?
        </h2>
        <p className="text-gray-600">
          Te enviaremos la confirmación de tu cita aquí
        </p>
      </div>

      <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-6">
        <div>
          <Input
            type="email"
            placeholder="tu@email.com"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setError('');
            }}
            className={`text-lg py-6 ${error ? 'border-red-500' : ''}`}
            autoFocus
          />
          {error && (
            <p className="text-red-500 text-sm mt-2">{error}</p>
          )}
        </div>

        <div className="flex gap-4">
          <Button
            type="button"
            variant="outline"
            onClick={onBack}
            className="flex-1 py-6"
          >
            Volver
          </Button>
          <Button
            type="submit"
            className="flex-1 py-6"
          >
            Continuar
          </Button>
        </div>

        <p className="text-xs text-gray-500 text-center">
          Al continuar aceptas recibir confirmaciones y recordatorios por email
        </p>
      </form>
    </div>
  );
};
