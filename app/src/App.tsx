import Header from '@/components/Header';
import Hero from '@/sections/Hero';
import Pricing from '@/sections/Pricing';
import Vehicle from '@/sections/Vehicle';
import WhyUs from '@/sections/WhyUs';
import FAQ from '@/sections/FAQ';
import HowItWorks from '@/sections/HowItWorks';
import Destinations from '@/sections/Destinations';
import Contact from '@/sections/Contact';
import Footer from '@/sections/Footer';
import SEO from '@/components/SEO';
import { useSEO } from '@/hooks/useSEO';

function App() {
  useSEO();

  return (
    <>
      <SEO />
      <div className="min-h-screen bg-[#0F172A]">
        <Header />
        <main>
          <Hero />
          <HowItWorks />
          <Pricing />
          <Destinations />
          <Vehicle />
          <WhyUs />
          <FAQ />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;