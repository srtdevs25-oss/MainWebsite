import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Building2, Users, Gauge, Clock } from 'lucide-react';

const stats = [
  { icon: Clock, value: '15+', label: 'Years of Excellence' },
  { icon: Users, value: '1000+', label: 'Happy Clients' },
  { icon: Gauge, value: '10,000+', label: 'Instruments Calibrated' },
  { icon: Building2, value: '50+', label: 'Industries Served' },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-20 lg:py-28 section-gradient">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">About Us</span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-6">
              Your Trusted Partner in <span className="text-gradient">Calibration Excellence</span>
            </h2>
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>
                Shree Radhey Technology is an independent facility that provides quality repair & 
                calibration services for testing & measuring instruments since 2009.
              </p>
              <p>
                We are accredited as per ISO/9001:2008 by NABL (National Accreditation Board for Testing 
                and Calibration Laboratories), Department of Science & Technology for Electro-Technical, 
                Mechanical & Thermal Parameters.
              </p>
              <p>
                In less than a decade, we have built strong business relationships and a wealth of 
                engineering experience, creating sustainable value for companies relying on test, 
                measurement and control instrumentation through an extensive network of measurement 
                team represented by strong technical work staffs.
              </p>
            </div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="bg-card rounded-2xl p-6 card-elevated text-center"
              >
                <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-7 h-7 text-accent" />
                </div>
                <div className="font-display text-3xl md:text-4xl font-bold text-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
