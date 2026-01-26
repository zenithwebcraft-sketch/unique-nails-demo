import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';

interface EmailCaptureProps {
  onSubmit: (email: string) => void;
  onBack: () => void;
  initialEmail?: string;
}

export const EmailCapture = ({ onSubmit, onBack, initialEmail = '' }: EmailCaptureProps) => {
  const { translations } = useLanguage();
  const [email, setEmail] = useState(initialEmail);
  const [error, setError] = useState('');

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim()) {
      setError(translations.booking.emailCapture.emailRequired);
      return;
    }

    if (!validateEmail(email)) {
      setError(translations.booking.emailCapture.emailInvalid);
      return;
    }

    setError('');
    onSubmit(email);
  };

  return (
    <div className="max-w-md mx-auto space-y-6">
      <div className="text-center space-y-2">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-pink-100 mb-4">
          <Mail className="h-8 w-8 text-pink-600" />
        </div>
        <h2 className="text-3xl font-bold text-gray-900">
          {translations.booking.emailCapture.title}
        </h2>
        <p className="text-gray-600">
          {translations.booking.emailCapture.subtitle}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-gray-700">
            {translations.booking.emailCapture.emailLabel}
          </label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setError('');
            }}
            placeholder={translations.booking.emailCapture.emailPlaceholder}
            className={error ? 'border-red-500' : ''}
          />
          {error && (
            <p className="text-sm text-red-600">{error}</p>
          )}
        </div>

        <div className="flex gap-3">
          <Button type="button" variant="outline" onClick={onBack} className="flex-1">
            {translations.booking.back}
          </Button>
          <Button type="submit" className="flex-1">
            {translations.booking.emailCapture.continueButton}
          </Button>
        </div>
      </form>
    </div>
  );
};
