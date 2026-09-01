import { useTranslation } from 'react-i18next';

interface Step {
  number: string;
  title: string;
  description: string;
}

export default function HowItWorks() {
  const { t } = useTranslation();
  const steps = t('howItWorks.steps', { returnObjects: true }) as Step[];

  return (
    <section
      id="cum-functioneaza"
      className="bg-[#0F172A] px-4 sm:px-6 lg:px-8 py-24 lg:py-32"
      aria-label="Cum functioneaza transferul Oradea"
    >
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#F8FAFC] text-center mb-4 tracking-tight">
          {t('howItWorks.heading')}
        </h2>
        <p className="text-[#94A3B8] text-center mb-12 max-w-[600px] mx-auto">
          {t('howItWorks.subheading')}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 rounded-full bg-green-500/20 border-2 border-green-500 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-400">{step.number}</span>
              </div>
              <h3 className="text-lg font-semibold text-[#F8FAFC] mb-2">
                {step.title}
              </h3>
              <p className="text-[#94A3B8] text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}