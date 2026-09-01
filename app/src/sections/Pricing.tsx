import { useTranslation } from 'react-i18next';
import { WHATSAPP_URL } from '@/components/WhatsAppButton';

interface Route {
  name: string;
  price: string;
}

export default function Pricing() {
  const { t } = useTranslation();
  const routes = t('pricing.routes', { returnObjects: true }) as Route[];

  return (
    <section
      id="pricing"
      className="bg-[#0F172A] px-4 sm:px-6 lg:px-8 py-24 lg:py-32"
      aria-label="Preturi transfer Oradea Budapesta Debrecen Timisoara Cluj"
    >
      <div className="max-w-[800px] mx-auto">
        {/* Section Heading */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#F8FAFC] text-center mb-3 tracking-tight">
          {t('pricing.heading')}
        </h2>

        {/* Section Subheading */}
        <p className="text-base text-[#94A3B8] text-center mb-12">
          {t('pricing.subheading')}
        </p>

        {/* Fixed Price Banner */}
        <div
          className="mb-10 px-5 py-4 rounded-lg"
          style={{
            backgroundColor: 'rgba(34, 197, 94, 0.15)',
            borderLeft: '4px solid #22C55E',
          }}
        >
          <p className="text-[#86EFAC] text-base leading-relaxed">
            {t('pricing.banner')}
          </p>
        </div>

        {/* Pricing Table */}
        <div className="space-y-4">
          {routes.map((route, index) => (
            <div
              key={index}
              className="
                bg-[#1E293B] rounded-lg px-5 py-5
                border-l-4 border-green-500
                flex flex-col sm:flex-row sm:items-center sm:justify-between
                gap-2 sm:gap-4
                transition-all duration-200 ease-out
                hover:translate-x-1 hover:border-l-[6px]
                cursor-default
              "
            >
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-semibold text-[#F8FAFC]">
                  {route.name}
                </h3>
                <p className="text-sm text-[#94A3B8] mt-0.5">
                  {t('pricing.passengers')}
                </p>
              </div>
              <div className="text-xl sm:text-2xl font-bold text-green-400 whitespace-nowrap">
                {route.price}
              </div>
            </div>
          ))}
        </div>

        {/* Custom Note */}
        <p className="text-center text-[#94A3B8] mt-8 text-base">
          {t('pricing.customNote').split(t('pricing.customNoteLink'))[0]}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-400 hover:underline transition-all duration-200"
          >
            {t('pricing.customNoteLink')}
          </a>
          {t('pricing.customNote').split(t('pricing.customNoteLink'))[1]}
        </p>
      </div>
    </section>
  );
}