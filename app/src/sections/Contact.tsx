import { useTranslation } from 'react-i18next';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function Contact() {
  const { t } = useTranslation();

  return (
    <section
      id="contact"
      className="bg-[#1E293B] px-4 sm:px-6 lg:px-8 py-24 lg:py-32"
      aria-label="Contact transportoradea.com"
      itemScope
      itemType="https://schema.org/LocalBusiness"
    >
      <meta itemProp="name" content="transportoradea.com" />
      <meta itemProp="telephone" content="+40-752-562-503" />
      <meta itemProp="email" content="kavarscars@gmail.com" />
      <meta itemProp="priceRange" content="$$" />
      <link itemProp="url" href="https://transportoradea.com/" />

      <div className="max-w-[800px] mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#F8FAFC] mb-4 tracking-tight">
          {t('contact.heading')}
        </h2>
        <p className="text-[#94A3B8] mb-10 max-w-[600px] mx-auto">
          {t('contact.subheading')}
        </p>

        <div className="bg-[#0F172A] rounded-xl p-8 sm:p-10 mb-8 inline-block w-full max-w-[500px]">
          <WhatsAppButton
            label={t('footer.cta')}
            size="large"
            className="mb-6 w-full justify-center"
          />
          <div className="space-y-3 text-left">
            <p className="text-[#F8FAFC] text-lg">
              <span itemProp="telephone">{t('footer.phone')}</span>
            </p>
            <p className="text-[#94A3B8]">
              <span itemProp="email">{t('footer.email')}</span>
            </p>
            <div itemProp="address" itemScope itemType="https://schema.org/PostalAddress" className="text-[#94A3B8] text-sm pt-2 border-t border-slate-700">
              <span itemProp="addressLocality">Oradea</span>,
              <span itemProp="addressRegion"> Bihor</span>,
              <span itemProp="addressCountry"> România</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}