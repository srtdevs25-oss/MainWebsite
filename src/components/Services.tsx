import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Zap, Wrench, Thermometer, Scale, FileCheck, Settings } from 'lucide-react';

const services = [
  {
    icon: Zap,
    title: 'Electro-Technical Calibration',
    description: 'NABL accredited calibration for electrical and electronic measuring instruments including multimeters, oscilloscopes, power supplies, and more.',
    color: 'bg-blue-500/10 text-blue-600',
  },
  {
    icon: Wrench,
    title: 'Mechanical Calibration',
    description: 'Precision calibration for mechanical instruments including pressure gauges, torque wrenches, force gauges, and dimensional measuring tools.',
    color: 'bg-emerald-500/10 text-emerald-600',
  },
  {
    icon: Thermometer,
    title: 'Thermal Calibration',
    description: 'Accurate calibration of temperature measuring instruments including thermocouples, RTDs, temperature controllers, and humidity meters.',
    color: 'bg-orange-500/10 text-orange-600',
  },
  {
    icon: Scale,
    title: 'Weight & Mass Calibration',
    description: 'Calibration services for weighing instruments registered with Central Board of Excise and Customs, Department of Revenue.',
    color: 'bg-purple-500/10 text-purple-600',
  },
  {
    icon: Settings,
    title: 'Instrument Repair',
    description: 'Expert repair and maintenance services for all types of testing and measuring instruments to ensure optimal performance.',
    color: 'bg-rose-500/10 text-rose-600',
  },
  {
    icon: FileCheck,
    title: 'Training & Consultation',
    description: 'Quality policy training programmes certified by Indian Institute of Quality Management to enhance your team capabilities.',
    color: 'bg-cyan-500/10 text-cyan-600',
  },
];

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="services" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Our Services</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-6">
            Comprehensive <span className="text-gradient">Calibration Services</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            We offer a wide range of NABL accredited calibration and repair services to meet 
            all your testing and measurement needs.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="group bg-card rounded-2xl p-8 card-elevated border border-border/50 hover:border-accent/30"
            >
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${service.color} transition-transform group-hover:scale-110`}>
                <service.icon className="w-7 h-7" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
