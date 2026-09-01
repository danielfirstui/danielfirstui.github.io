import { useTranslation } from 'react-i18next';

interface Destination {
  name: string;
  description: string;
}

export default function Destinations() {
  const { t } = useTranslation();
  const destinations = t('destinations.items', { returnObjects: true }) as Destination[];

  return (
    <section
      id="destinatii"
      className="bg-[#0F172A] px-4 sm:px-6 lg:px-8 py-24 lg:py-32"
      aria-label="Destinatii transfer Oradea"
    >
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#F8FAFC] text-center mb-4 tracking-tight">
          {t('destinations.heading')}
        </h2>
        <p className="text-[#94A3B8] text-center mb-12 max-w-[700px] mx-auto">
          {t('destinations.subheading')}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {destinations.map((dest, index) => (
            <div
              key={index}
              className="bg-[#1E293B] rounded-xl p-6 border-l-4 border-green-500 hover:border-l-[6px] transition-all duration-200"
            >
              <h3 className="text-lg font-semibold text-[#F8FAFC] mb-2">
                {dest.name}
              </h3>
              <p className="text-[#94A3B8] text-sm leading-relaxed">
                {dest.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}