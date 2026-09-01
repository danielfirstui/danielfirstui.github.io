import { useTranslation } from 'react-i18next';

interface Card {
  icon: string;
  title: string;
  description: string;
}

export default function WhyUs() {
  const { t } = useTranslation();
  const cards = t('whyUs.cards', { returnObjects: true }) as Card[];

  return (
    <section
      id="why-us"
      className="bg-[#0F172A] px-4 sm:px-6 lg:px-8 py-24 lg:py-32"
      aria-label="De ce sa alegeti transportoradea.com"
    >
      <div className="max-w-[1200px] mx-auto">
        {/* Section Heading */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#F8FAFC] text-center mb-12 lg:mb-16 tracking-tight">
          {t('whyUs.heading')}
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[900px] mx-auto">
          {cards.map((card, index) => (
            <div
              key={index}
              className="
                bg-[#1E293B] rounded-xl p-8 text-center
                border-t-[3px] border-green-500
                transition-all duration-200 ease-out
                hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.2)]
              "
            >
              <div className="text-4xl mb-4">{card.icon}</div>
              <h3 className="text-lg font-semibold text-[#F8FAFC] mb-3">
                {card.title}
              </h3>
              <p className="text-[#94A3B8] leading-relaxed text-sm">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}