import { MapPin, Phone, Mail } from 'lucide-react';
import type { ContactDetail } from '../types';
import { translations } from '../i18n/translations';
import type { Language } from '../types';

export function getContactDetails(language: Language): ContactDetail[] {
  const details = translations[language].contact.details;
  return [
    { id: 'address', Icon: MapPin, value: details.address },
    { id: 'phone', Icon: Phone, value: details.phone },
    { id: 'email', Icon: Mail, value: details.email },
  ];
}