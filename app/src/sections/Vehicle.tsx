import { useTranslation } from 'react-i18next';

interface Feature {
  icon: string;
  text: string;
}

export default function Vehicle() {
  const { t } = useTranslation();
  const features = t('vehicle.features', { returnObjects: true }) as Feature[];

  return (
    <section
      id="vehicle"
      className="bg-[#1E293B] px-4 sm:px-6 lg:px-8 py-24 lg:py-32"
    >
      <div className="max-w-[1200px] mx-auto">
        {/* Section Heading */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#F8FAFC] text-center mb-12 lg:mb-16 tracking-tight">
          {t('vehicle.heading')}
        </h2>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[45%_55%] gap-8 lg:gap-12 items-center">
          {/* Vehicle Image */}
          <div className="order-1">
            <img
              src="./img/vehicle-octavia.jpg"
              alt="Skoda Octavia 2019 negru break - masina pentru transfer privat Oradea Budapesta, Climatronic, transmisie automata, portbagaj spatios pentru 4 pasageri"
              className="w-full rounded-xl object-cover aspect-[4/3] shadow-xl"
              loading="lazy"
              width="800"
              height="600"
            />
          </div>

          {/* Vehicle Info Card */}
          <div className="order-2 bg-[#0F172A] rounded-xl p-6 sm:p-8 lg:p-10">
            <h3 className="text-xl sm:text-2xl font-semibold text-[#F8FAFC] mb-6">
              {t('vehicle.name')}
            </h3>

            <div className="space-y-5">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <span className="text-xl flex-shrink-0 mt-0.5">{feature.icon}</span>
                  <p className="text-[#94A3B8] leading-relaxed">{feature.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}