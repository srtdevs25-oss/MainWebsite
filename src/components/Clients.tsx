import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Building2 } from 'lucide-react';

const clients = [
  { name: 'Larsen & Toubro (L&T)', logo: '/logos/larsen-toubro.jpg' },
  { name: 'National Test Hosue', logo: '/logos/nth-logo.png' },
  { name: 'Indian Railway', logo: '/logos/Indian_Railways.svg' },
  { name: 'Jk Cement', logo: '/logos/new-logo-jk.png' },
  { name: 'Shree Cement', logo: '/logos/logo-shree-cement.jpg' },
  { name: 'Adani Power', logo: '/logos/adani-power-logo.jpeg' },
  { name: 'Afcons Infrastructure', logo: '/logos/Afcons-Logo-Rounded.png' },
  { name: 'Tata Projects', logo: '/logos/tata-round-logo.jpg' },
  { name: 'RVPNL', logo: '/logos/rvpnl-logo.jpeg' },
  { name: 'JCB Ltd', logo: '/logos/jcb-logo.png' },
  { name: 'PWD', logo: '/logos/pwd-logo.png' },
  { name: 'Gammon Engineers', logo: '/logos/gammon-logo.jpeg' },
  { name: 'Power Grid Corporation of India', logo: '/logos/powergrid-logo.jpeg' },
  { name: 'Indian Oil Corporation', logo: '/logos/iocl-logo.png' },
  { name: 'Jindal SAW Ltd.', logo: '/logos/jindalsaw-logo-white.png' },
  { name: 'Mahindra Susten', logo: '/logos/susten_logo.svg' },
  { name: 'Maruti Suzuki', logo: '/logos/Maruti_Suzuki.jpg' },
];

const Clients = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Our Clients</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-6">
            Trusted by <span className="text-gradient">Leading Companies</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            We proudly serve some of India's most respected companies, providing reliable calibration 
            services that meet the highest quality standards.
          </p>
        </motion.div>

        {/* Clients Carousel */}
        <div className="relative overflow-hidden">
          {/* Gradient overlays for fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

          <div className="marquee">
            <div className="marquee__track">
              {clients.map((client) => (
                <div
                  key={`${client.name}-track-1`}
                  className="flex-shrink-0 group flex flex-col items-center justify-center p-6 bg-card rounded-xl border border-border/50 hover:border-accent/30 transition-all duration-300 w-[240px] h-[160px]"
                >
                  <div className="w-full h-20 flex items-center justify-center mb-3">
                    <img
                      src={client.logo}
                      alt={`${client.name} logo`}
                      className="max-w-full max-h-full object-contain opacity-90 transition-opacity"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                        if (fallback) fallback.style.display = 'flex';
                      }}
                    />
                    <div className="w-12 h-12 bg-muted rounded-xl hidden items-center justify-center group-hover:bg-accent/10 transition-colors">
                      <Building2 className="w-6 h-6 text-muted-foreground group-hover:text-accent transition-colors" />
                    </div>
                  </div>
                  <span className="font-medium text-foreground text-center text-sm">
                    {client.name}
                  </span>
                </div>
              ))}
            </div>

            <div className="marquee__track" aria-hidden="true">
              {clients.map((client) => (
                <div
                  key={`${client.name}-track-2`}
                  className="flex-shrink-0 group flex flex-col items-center justify-center p-6 bg-card rounded-xl border border-border/50 hover:border-accent/30 transition-all duration-300 w-[240px] h-[160px]"
                >
                  <div className="w-full h-20 flex items-center justify-center mb-3">
                    <img
                      src={client.logo}
                      alt={`${client.name} logo`}
                      className="max-w-full max-h-full object-contain opacity-90 transition-opacity"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                        if (fallback) fallback.style.display = 'flex';
                      }}
                    />
                    <div className="w-12 h-12 bg-muted rounded-xl hidden items-center justify-center group-hover:bg-accent/10 transition-colors">
                      <Building2 className="w-6 h-6 text-muted-foreground group-hover:text-accent transition-colors" />
                    </div>
                  </div>
                  <span className="font-medium text-foreground text-center text-sm">
                    {client.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Trust statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground text-lg">
            Join <span className="text-accent font-semibold">1000+ companies</span> that trust 
            Shree Radhey Technology for their calibration needs
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Clients;
