import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { User, Phone } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';

interface PersonalDetailsFormProps {
  onSubmit: (data: { phone: string; firstName: string; lastName: string }) => void;
  onBack: () => void;
  initialData?: {
    phone?: string;
    firstName?: string;
    lastName?: string;
  };
}

export const PersonalDetailsForm = ({
  onSubmit,
  onBack,
  initialData = {},
}: PersonalDetailsFormProps) => {
  const { translations } = useLanguage();
  const [phone, setPhone] = useState(initialData.phone || '');
  const [firstName, setFirstName] = useState(initialData.firstName || '');
  const [lastName, setLastName] = useState(initialData.lastName || '');
  const [errors, setErrors] = useState<{
    phone?: string;
    firstName?: string;
    lastName?: string;
  }>({});

  const validatePhone = (phone: string): boolean => {
    const phoneRegex = /^\d{9,}$/;
    return phoneRegex.test(phone.replace(/\s/g, ''));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: typeof errors = {};

    if (!phone.trim()) {
      newErrors.phone = translations.booking.personalDetails.phoneRequired;
    } else if (!validatePhone(phone)) {
      newErrors.phone = translations.booking.personalDetails.phoneInvalid;
    }

    if (!firstName.trim()) {
      newErrors.firstName = translations.booking.personalDetails.firstNameRequired;
    }

    if (!lastName.trim()) {
      newErrors.lastName = translations.booking.personalDetails.lastNameRequired;
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    onSubmit({
      phone: phone.replace(/\s/g, ''),
      firstName: firstName.trim(),
      lastName: lastName.trim(),
    });
  };

  return (
    <div className="max-w-md mx-auto space-y-6">
      <div className="text-center space-y-2">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-pink-100 mb-4">
          <User className="h-8 w-8 text-pink-600" />
        </div>
        <h2 className="text-3xl font-bold text-gray-900">
          {translations.booking.personalDetails.title}
        </h2>
        <p className="text-gray-600">
          {translations.booking.personalDetails.subtitle}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <label htmlFor="firstName" className="text-sm font-medium text-gray-700">
            {translations.booking.personalDetails.firstNameLabel}
          </label>
          <Input
            id="firstName"
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value);
              setErrors((prev) => ({ ...prev, firstName: undefined }));
            }}
            placeholder={translations.booking.personalDetails.firstNamePlaceholder}
            className={errors.firstName ? 'border-red-500' : ''}
          />
          {errors.firstName && (
            <p className="text-sm text-red-600">{errors.firstName}</p>
          )}
        </div>

        <div className="space-y-2">
          <label htmlFor="lastName" className="text-sm font-medium text-gray-700">
            {translations.booking.personalDetails.lastNameLabel}
          </label>
          <Input
            id="lastName"
            value={lastName}
            onChange={(e) => {
              setLastName(e.target.value);
              setErrors((prev) => ({ ...prev, lastName: undefined }));
            }}
            placeholder={translations.booking.personalDetails.lastNamePlaceholder}
            className={errors.lastName ? 'border-red-500' : ''}
          />
          {errors.lastName && (
            <p className="text-sm text-red-600">{errors.lastName}</p>
          )}
        </div>

        <div className="space-y-2">
          <label htmlFor="phone" className="text-sm font-medium text-gray-700">
            {translations.booking.personalDetails.phoneLabel}
          </label>
          <div className="relative">
            <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              id="phone"
              type="tel"
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
                setErrors((prev) => ({ ...prev, phone: undefined }));
              }}
              placeholder={translations.booking.personalDetails.phonePlaceholder}
              className={`pl-10 ${errors.phone ? 'border-red-500' : ''}`}
            />
          </div>
          {errors.phone && (
            <p className="text-sm text-red-600">{errors.phone}</p>
          )}
        </div>

        <div className="flex gap-3 pt-4">
          <Button type="button" variant="outline" onClick={onBack} className="flex-1">
            {translations.booking.back}
          </Button>
          <Button type="submit" className="flex-1">
            {translations.booking.next}
          </Button>
        </div>
      </form>
    </div>
  );
};
