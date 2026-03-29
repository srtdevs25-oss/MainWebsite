import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Gauge, Activity, Droplets, CircuitBoard } from 'lucide-react';

const equipment = [
  {
    icon: Activity,
    title: 'RPM Meter Calibrator',
    description: 'High precision RPM measurement and calibration equipment for rotational speed instruments.',
  },
  {
    icon: CircuitBoard,
    title: 'Multi Function Calibrator',
    description: 'Versatile calibration source for multiple electrical parameters including voltage, current, and resistance.',
  },
  {
    icon: Droplets,
    title: 'Humidity Generator',
    description: 'Precision humidity generation system for calibrating hygrometers and humidity sensors.',
  },
  {
    icon: Gauge,
    title: 'Resistance Bank',
    description: 'High accuracy resistance standards for calibrating ohmmeters and resistance measuring devices.',
  },
];

const Equipment = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="equipment" className="py-20 lg:py-28 section-gradient">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Our Equipment</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-6">
            State-of-the-Art <span className="text-gradient">Calibration Equipment</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            We invest in the latest calibration technology to ensure the highest accuracy and 
            reliability for all our services.
          </p>
        </motion.div>

        {/* Equipment Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {equipment.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="group relative bg-card rounded-2xl overflow-hidden card-elevated"
            >
              {/* Accent bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent to-accent/60" />
              
              <div className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-accent/10 transition-colors">
                  <item.icon className="w-6 h-6 text-primary group-hover:text-accent transition-colors" />
                </div>
                <h3 className="font-display text-lg font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Equipment;
