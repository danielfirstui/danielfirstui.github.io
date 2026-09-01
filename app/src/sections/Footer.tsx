import { useTranslation } from 'react-i18next';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-[#0F172A] px-4 sm:px-6 lg:px-8 py-20 lg:py-24 border-t border-slate-800">
      <div className="max-w-[1200px] mx-auto text-center">
        {/* WhatsApp CTA */}
        <WhatsAppButton
          label={t('footer.cta')}
          size="medium"
          className="mb-8"
        />

        {/* Phone & Email */}
        <div className="space-y-2 mb-12">
          <p className="text-lg text-[#F8FAFC]">{t('footer.phone')}</p>
          <p className="text-base text-[#94A3B8]">{t('footer.email')}</p>
        </div>

        {/* Copyright */}
        <p className="text-sm text-[#94A3B8]">{t('footer.copyright')}</p>
      </div>
    </footer>
  );
}