import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  // { name: 'Equipment', href: '#equipment' },
  { name: 'Accreditation', href: '#accreditation' },
  { name: 'Contact', href: '#contact' },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top bar - Red/Maroon brand color */}
      <div className="bg-[color:hsl(235_100%_22%)] text-primary-foreground py-2">
        <div className="container mx-auto px-4 flex items-center justify-center md:justify-between text-xs sm:text-sm">
          <div className="flex items-center gap-4 sm:gap-6 whitespace-nowrap">
            <a href="tel:+919414932080" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Phone className="w-4 h-4" />
              <span>+91-9414932080, 8696932080</span>
            </a>
            <a href="mailto:abhay_jangid@yahoo.co.in" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Mail className="w-4 h-4" />
              <span>abhay_jangid@yahoo.co.in</span>
            </a>
          </div>
          {/* <div className="text-primary-foreground/90">
              NABL Accredited Calibration Laboratory CC-2779
          </div> */}
        </div>
      </div>

      {/* Main header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-background/95 backdrop-blur-md shadow-lg'
            : 'bg-background'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="#home" className="flex items-center gap-3 text-center sm:text-left">
              <img 
                src="/logo.png" 
                alt="Shree Radhey Technology Logo" 
                className="w-13 h-12 object-contain"
              />
              <div className="text-center sm:text-left">
                <h1 className="font-display font-bold text-xl text-foreground leading-tight">
                  Shree Radhey Technology
                </h1>
                <p className="text-xs text-muted-foreground">An NABL Accredited Calibration Laboratory</p>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="nav-link px-4 py-2 text-foreground hover:text-accent"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* CTA Button */}
            {/* <div className="hidden lg:flex items-center gap-4">
              <Button variant="accent" size="lg" asChild>
                <a href="#contact">Get Quote</a>
              </Button>
            </div> */}

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-foreground hover:text-accent transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-background border-t border-border overflow-hidden"
            >
              <nav className="container mx-auto px-4 py-4 flex flex-col gap-2">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="py-3 px-4 text-foreground hover:text-accent hover:bg-muted rounded-lg transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
                <Button variant="accent" size="lg" className="mt-4" asChild>
                  <a href="#contact">Get Quote</a>
                </Button>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default Header;
