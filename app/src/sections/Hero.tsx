import { useTranslation } from 'react-i18next';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section
      className="relative min-h-[90vh] flex items-center justify-center text-center px-4 sm:px-6 lg:px-8 pt-36 pb-24"
      style={{
        background: '#0F172A',
        backgroundImage: 'radial-gradient(ellipse at 50% 0%, rgba(30, 41, 59, 0.8) 0%, transparent 70%)',
      }}
      aria-label="Transfer privat Oradea Aeroport Budapesta"
    >
      <div className="max-w-[800px] mx-auto">
        {/* Headline */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F8FAFC] leading-tight tracking-tight mb-6">
          {t('hero.headline')}
        </h1>

        {/* Subheadline */}
        <p className="text-lg text-[#94A3B8] max-w-[640px] mx-auto mb-10 leading-relaxed">
          {t('hero.subheadline')}
        </p>

        {/* CTA Button */}
        <WhatsAppButton
          label={t('hero.cta')}
          size="large"
          className="mb-6"
        />

        {/* Trust Indicator */}
        <p className="text-sm text-[#94A3B8] tracking-wide">
          {t('hero.trust')}
        </p>
      </div>
    </section>
  );
}