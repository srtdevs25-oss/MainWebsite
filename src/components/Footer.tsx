import { Phone, Mail, MapPin, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4">
        {/* Main footer */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img 
                src="/logo.png" 
                alt="Shree Radhey Technology Logo" 
                className="w-13 h-12 object-contain bg-white p-2 rounded-lg"
              />
              <div>
                <h3 className="font-display font-bold text-xl">Shree Radhey Technology</h3>
                <p className="text-secondary-foreground/70 text-sm">An NABL Accredited Calibration Laboratory</p>
              </div>
            </div>
            <p className="text-secondary-foreground/80 leading-relaxed max-w-90 mb-6 justify-evenly">
              Legal Entity: SHREE RADHEY INSTRUMENTATION & TECHNOLOGY PRIVATE LIMITED. 
              An NABL accredited laboratory providing quality repair & calibration services for 
              testing & measuring instruments since 2009.
            </p>
            <div className="flex items-center gap-2 px-4 py-2 bg-accent/20 rounded-lg inline-flex">
              <span className="text-accent font-semibold">ISO/IEC 17025:2017 Certified</span>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About', 'Services', 'Accreditation', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-secondary-foreground/70 hover:text-accent transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span className="text-secondary-foreground/80 text-sm">S-19-20-21, Riico Industrial Area, Bindayaka, Jaipur-302012 (Rajasthan)</span>
              </li>
              <li>
                <a
                  href="tel:+919414932080"
                  className="flex gap-3 text-secondary-foreground/80 hover:text-accent transition-colors"
                >
                  <Phone className="w-5 h-5 text-accent shrink-0" />
                  <span className="text-sm">0141-2240915, 9414932080, 8696932080</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:abhay_jangid@yahoo.co.in"
                  className="flex gap-3 text-secondary-foreground/80 hover:text-accent transition-colors"
                >
                  <Mail className="w-5 h-5 text-accent shrink-0" />
                  <span className="text-sm">abhay_jangid@yahoo.co.in</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-secondary-foreground/20 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-secondary-foreground/70 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Shree Radhey Instrumentation & Technology Pvt. Ltd. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-secondary-foreground/70 hover:text-accent transition-colors text-sm"
          >
            Back to top
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
