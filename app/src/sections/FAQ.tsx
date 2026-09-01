import { useTranslation } from 'react-i18next';

interface FaqItem {
  question: string;
  answer: string;
}

export default function FAQ() {
  const { t } = useTranslation();
  const faqs = t('faq.items', { returnObjects: true }) as FaqItem[];

  return (
    <section
      id="faq"
      className="bg-[#1E293B] px-4 sm:px-6 lg:px-8 py-24 lg:py-32"
      aria-label="Intrebari frecvente transfer Oradea"
    >
      <div className="max-w-[800px] mx-auto">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#F8FAFC] text-center mb-4 tracking-tight">
          {t('faq.heading')}
        </h2>
        <p className="text-[#94A3B8] text-center mb-12">
          {t('faq.subheading')}
        </p>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-[#0F172A] rounded-lg p-6 border border-slate-700/50"
              itemScope
              itemType="https://schema.org/Question"
            >
              <h3
                className="text-lg font-semibold text-[#F8FAFC] mb-2"
                itemProp="name"
              >
                {faq.question}
              </h3>
              <div
                className="text-[#94A3B8] leading-relaxed"
                itemScope
                itemProp="acceptedAnswer"
                itemType="https://schema.org/Answer"
              >
                <p itemProp="text">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}