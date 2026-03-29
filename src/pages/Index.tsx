import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
// import Equipment from '@/components/Equipment';
import Accreditation from '@/components/Accreditation';
import Clients from '@/components/Clients';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Clients />
        <Accreditation />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
