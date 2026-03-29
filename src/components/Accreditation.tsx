import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Shield, FileText, Award, BadgeCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';

const accreditations = [
  {
    icon: Shield,
    title: 'NABL Electro Technical',
    issuer: 'National Accreditation Board for Testing and Calibration Laboratories',
    description: 'Accredited for calibration of electro-technical instruments and equipment.',
  },
  {
    icon: Award,
    title: 'NABL Mechanical Calibration',
    issuer: 'National Accreditation Board for Testing and Calibration Laboratories',
    description: 'Accredited for precision mechanical calibration services.',
  },
  {
    icon: BadgeCheck,
    title: 'NABL Thermal Calibration',
    issuer: 'National Accreditation Board for Testing and Calibration Laboratories',
    description: 'Accredited for thermal and temperature instrument calibration.',
  },
  {
    icon: FileText,
    title: 'Weight Registration',
    issuer: 'Central Board of Excise and Customs, Department of Revenue',
    description: 'Registered for services weight and mass measurements.',
  },
];

const Accreditation = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const nablCertificateUrl = import.meta.env.VITE_NABL_CERTIFICATE_URL;
  const nablScopeUrl = import.meta.env.VITE_NABL_SCOPE_URL;

  return (
    <section id="accreditation" className="py-20 lg:py-28 bg-secondary relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Accreditation</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-3 mb-6">
            Certified <span className="text-accent">Excellence</span>
          </h2>
          <p className="text-white/80 text-lg">
            Our laboratory is accredited by national and government bodies, ensuring the highest 
            standards of quality and reliability in all our calibration services.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <Button variant="hero" size="lg" asChild>
            <a href={nablCertificateUrl} target="_blank" rel="noreferrer">
              NABL Certificate
            </a>
          </Button>
          <Button variant="hero" size="lg" asChild>
            <a href={nablScopeUrl} target="_blank" rel="noreferrer">
              NABL Scope
            </a>
          </Button>
        </motion.div>

        {/* Accreditation Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {accreditations.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="group bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300"
            >
              <div className="flex gap-5">
                <div className="w-14 h-14 bg-accent/20 rounded-xl flex items-center justify-center shrink-0">
                  <item.icon className="w-7 h-7 text-accent" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-white mb-1">
                    {item.title}
                  </h3>
                  <p className="text-accent text-sm font-medium mb-2">
                    {item.issuer}
                  </p>
                  <p className="text-white/70 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ISO Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 bg-accent px-8 py-4 rounded-full">
            <Award className="w-6 h-6 text-accent-foreground" />
            <span className="font-display font-bold text-accent-foreground text-lg">ISO/IEC 17025:2017 Certified Laboratory | CC-2779</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Accreditation;
