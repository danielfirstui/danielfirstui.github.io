import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const DOMAIN = 'https://transportoradea.com';
const OG_IMAGE = `${DOMAIN}/img/og-image.jpg`;

interface SEOMeta {
  title: string;
  description: string;
  keywords: string;
  ogLocale: string;
  ogTitle: string;
  ogDescription: string;
}

const SEO_DATA: Record<string, SEOMeta> = {
  ro: {
    title: 'Transport Oradea Aeroport Budapesta | Transfer Privat | transportoradea.com',
    description: 'Transport privat din Oradea către Aeroportul Budapesta, Debrecen, Timișoara și Cluj. Șofer profesionist cu 25 ani experiență. Prețuri fixe, Škoda Octavia 2019. Rezervă pe WhatsApp!',
    keywords: 'transport Oradea Aeroport Budapesta, transfer Oradea Debrecen, taxi Oradea Cluj, cursa Oradea Timisoara, masina privata aeroport, transfer privat Oradea, transport aeroport Budapesta, shuttle Oradea Budapesta',
    ogLocale: 'ro_RO',
    ogTitle: 'Transport Privat Oradea → Budapesta | Prețuri Fixe | WhatsApp',
    ogDescription: 'Transfer privat de la ușă la ușă. Șofer profesionist multilingv (EN/NL/RO/HU). Rezervă acum pe WhatsApp!',
  },
  en: {
    title: 'Oradea to Budapest Airport Transfer | Private Car Service | transportoradea.com',
    description: 'Private transfers from Oradea to Budapest Airport, Debrecen, Timișoara & Cluj. Professional driver with 25 years experience. Fixed prices, Škoda Octavia 2019. Book via WhatsApp!',
    keywords: 'Oradea to Budapest Airport transfer, Oradea Debrecen taxi, private car Oradea Cluj, Oradea Timisoara transport, Budapest airport shuttle Oradea, private transfer Oradea Hungary, door to door transport Oradea',
    ogLocale: 'en_US',
    ogTitle: 'Private Transfer Oradea → Budapest Airport | Fixed Prices',
    ogDescription: 'Door-to-door private transfer service. Professional multilingual driver (EN/NL/RO/HU). Book now via WhatsApp!',
  },
  de: {
    title: 'Transfer Oradea nach Flughafen Budapest | Privattransfer | transportoradea.com',
    description: 'Privattransfer von Oradea zum Flughafen Budapest, Debrecen, Temeswar & Klausenburg. Berufsfahrer mit 25 Jahren Erfahrung. Festpreise, Škoda Octavia 2019. Buchung per WhatsApp!',
    keywords: 'Transfer Oradea nach Flughafen Budapest, Oradea Debrecen Taxi, Privattransfer Oradea Klausenburg, Flughafentransfer Ungarn Rumänien, Privat Transfer Oradea Budapest',
    ogLocale: 'de_DE',
    ogTitle: 'Privattransfer Oradea → Flughafen Budapest | Festpreise',
    ogDescription: 'Tür-zu-Tür Privattransfer. Mehrsprachiger Berufsfahrer (EN/NL/RO/HU). Jetzt per WhatsApp buchen!',
  },
};

export default function SEO() {
  const { i18n } = useTranslation();
  const lang = i18n.language === 'ro' || i18n.language === 'en' || i18n.language === 'de'
    ? i18n.language
    : 'ro';
  const meta = SEO_DATA[lang];

  useEffect(() => {
    const setMetaContent = (name: string, content: string) => {
      let el = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute('name', name);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    const setMetaProperty = (property: string, content: string) => {
      let el = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute('property', property);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    // Basic meta
    document.title = meta.title;
    setMetaContent('description', meta.description);
    setMetaContent('keywords', meta.keywords);
    setMetaContent('author', 'transportoradea.com');
    setMetaContent('robots', 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');

    // Canonical
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', `${DOMAIN}/`);

    // Hreflang tags
    const existingHreflang = document.querySelectorAll('link[rel="alternate"][hreflang]');
    existingHreflang.forEach(el => el.remove());

    const langs = [
      { lang: 'ro', href: `${DOMAIN}/` },
      { lang: 'en', href: `${DOMAIN}/` },
      { lang: 'de', href: `${DOMAIN}/` },
      { lang: 'x-default', href: `${DOMAIN}/` },
    ];
    langs.forEach(({ lang, href }) => {
      const link = document.createElement('link');
      link.setAttribute('rel', 'alternate');
      link.setAttribute('hreflang', lang);
      link.setAttribute('href', href);
      document.head.appendChild(link);
    });

    // Open Graph
    setMetaProperty('og:type', 'website');
    setMetaProperty('og:url', `${DOMAIN}/`);
    setMetaProperty('og:title', meta.ogTitle);
    setMetaProperty('og:description', meta.ogDescription);
    setMetaProperty('og:locale', meta.ogLocale);
    setMetaProperty('og:image', OG_IMAGE);
    setMetaProperty('og:image:width', '1200');
    setMetaProperty('og:image:height', '630');
    setMetaProperty('og:image:alt', 'transportoradea.com - Transport privat Oradea');
    setMetaProperty('og:site_name', 'transportoradea.com');

    // Twitter Card
    setMetaContent('twitter:card', 'summary_large_image');
    setMetaContent('twitter:title', meta.ogTitle);
    setMetaContent('twitter:description', meta.ogDescription);
    setMetaContent('twitter:image', OG_IMAGE);

    // Clean up removed hreflangs on unmount
    return () => {
      document.querySelectorAll('link[rel="alternate"][hreflang]').forEach(el => el.remove());
    };
  }, [lang, meta]);

  // JSON-LD Schema.org structured data
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${DOMAIN}/#business`,
    name: 'transportoradea.com',
    description: meta.description,
    url: `${DOMAIN}/`,
    telephone: '+40-752-562-503',
    email: 'kavarscars@gmail.com',
    image: `${DOMAIN}/img/vehicle-octavia.jpg`,
    priceRange: '€€',
    areaServed: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: '47.0465',
        longitude: '21.9189',
      },
      geoRadius: '200000',
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Oradea',
      addressRegion: 'Bihor',
      addressCountry: 'RO',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '47.0465',
      longitude: '21.9189',
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59',
    },
    paymentAccepted: 'Cash, EUR',
    currenciesAccepted: 'EUR',
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Airport Transfer',
    provider: {
      '@type': 'LocalBusiness',
      name: 'transportoradea.com',
      telephone: '+40-752-562-503',
      areaServed: {
        '@type': 'City',
        name: 'Oradea',
      },
    },
    areaServed: [
      { '@type': 'Airport', name: 'Budapest Ferenc Liszt International Airport', iataCode: 'BUD' },
      { '@type': 'City', name: 'Debrecen' },
      { '@type': 'City', name: 'Timișoara' },
      { '@type': 'City', name: 'Cluj-Napoca' },
      { '@type': 'City', name: 'Oradea' },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Airport Transfer Routes',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: 'Oradea to Budapest Airport Transfer' },
          price: '180',
          priceCurrency: 'EUR',
          priceValidUntil: '2026-12-31',
        },
        {
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: 'Oradea to Debrecen Transfer' },
          price: '60',
          priceCurrency: 'EUR',
          priceValidUntil: '2026-12-31',
        },
        {
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: 'Oradea to Timișoara Transfer' },
          price: '120',
          priceCurrency: 'EUR',
          priceValidUntil: '2026-12-31',
        },
        {
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: 'Oradea to Cluj-Napoca Transfer' },
          price: '120',
          priceCurrency: 'EUR',
          priceValidUntil: '2026-12-31',
        },
      ],
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: lang === 'ro' ? 'Cât costă transferul de la Oradea la Aeroportul Budapesta?' : lang === 'de' ? 'Wie viel kostet der Transfer von Oradea zum Flughafen Budapest?' : 'How much does the transfer from Oradea to Budapest Airport cost?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: lang === 'ro' ? 'Transferul de la Oradea la Aeroportul Budapesta costă 180 EUR pentru 1-4 pasageri. Prețul este fix și nu se schimbă indiferent de trafic.' : lang === 'de' ? 'Der Transfer von Oradea zum Flughafen Budapest kostet 180 EUR für 1-4 Passagiere. Der Preis ist fest und ändert sich unabhängig vom Verkehr nicht.' : 'The transfer from Oradea to Budapest Airport costs 180 EUR for 1-4 passengers. The price is fixed and does not change regardless of traffic.',
        },
      },
      {
        '@type': 'Question',
        name: lang === 'ro' ? 'Câte persoane încap în mașină?' : lang === 'de' ? 'Wie viele Personen passen ins Auto?' : 'How many people fit in the car?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: lang === 'ro' ? 'În Škoda Octavia 2019 break încap maxim 4 pasageri, cu suficient spațiu în portbagaj pentru bagaje.' : lang === 'de' ? 'In den Škoda Octavia 2019 Kombi passen maximal 4 Passagiere, mit genug Kofferraum für Gepäck.' : 'The Škoda Octavia 2019 estate fits up to 4 passengers, with plenty of trunk space for luggage.',
        },
      },
      {
        '@type': 'Question',
        name: lang === 'ro' ? 'În ce limbi vorbește șoferul?' : lang === 'de' ? 'In welchen Sprachen spricht der Fahrer?' : 'What languages does the driver speak?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: lang === 'ro' ? 'Șoferul vorbește engleză, olandeză, română și maghiară. Este un profesionist cu peste 25 de ani de experiență.' : lang === 'de' ? 'Der Fahrer spricht Englisch, Niederländisch, Rumänisch und Ungarisch. Er ist ein Profi mit über 25 Jahren Erfahrung.' : 'The driver speaks English, Dutch, Romanian and Hungarian. He is a professional with over 25 years of experience.',
        },
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(serviceSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>
    </>
  );
}