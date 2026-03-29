import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const contactInfo = [
  {
    icon: MapPin,
    title: 'Address',
    content: 'S-19-20-21, Riico Industrial Area, Bindayaka, JAIPUR-302012 (Rajasthan)',
  },
  {
    icon: Phone,
    title: 'Phone',
    content: '0141-2240915, 9414932080, 8696932080',
    href: 'tel:+919414932080',
  },
  {
    icon: Mail,
    title: 'Email',
    content: 'abhay_jangid@yahoo.co.in',
    href: 'mailto:abhay_jangid@yahoo.co.in',
  },
  {
    icon: Clock,
    title: 'Working Hours',
    content: 'Mon - Sat: 9:00 AM - 6:00 PM',
  },
];

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const emailJsPublicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  const emailJsServiceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const emailJsTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      if (!emailJsPublicKey || !emailJsServiceId || !emailJsTemplateId) {
        throw new Error('EmailJS configuration is missing.');
      }

      const form = e.target as HTMLFormElement;
      const formData = new FormData(form);

      const payload = {
        service_id: emailJsServiceId,
        template_id: emailJsTemplateId,
        user_id: emailJsPublicKey,
        template_params: {
          from_name: String(formData.get('name') ?? ''),
          from_email: String(formData.get('email') ?? ''),
          phone: String(formData.get('phone') ?? ''),
          company: String(formData.get('company') ?? ''),
          message: String(formData.get('message') ?? ''),
        },
      };

      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error('Email sending failed.');
      }

      toast({
        title: 'Message Sent!',
        description: "Thank you for contacting us. We'll get back to you soon.",
      });

      form.reset();
    } catch {
      //print error in terminal
      console.error('Failed to send message');
      toast({
        title: 'Submission Failed',
        description: 'Unable to send your message right now. Please try again later.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-28 section-gradient">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Contact Us</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-6">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Have questions about our calibration services? Contact us today and our team 
            will be happy to assist you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="space-y-6">
              {contactInfo.map((item) => (
                <div
                  key={item.title}
                  className="flex gap-4 p-5 bg-card rounded-xl border border-border/50 card-elevated"
                >
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center shrink-0">
                    <item.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-muted-foreground hover:text-accent transition-colors"
                      >
                        {item.content}
                      </a>
                    ) : (
                      <p className="text-muted-foreground">{item.content}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Map placeholder */}
            <div className="mt-8 h-64 bg-muted rounded-xl overflow-hidden relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.4916245174654!2d75.64528531187709!3d26.91962477654573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4c6c69aa8949%3A0xbda69826e2694dab!2sShree%20Radhey%20Technology!5e0!3m2!1sen!2sin!4v1769870654683!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Shree Radhey Technology Location"
              />
              {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.4916245174654!2d75.64528531187709!3d26.91962477654573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4c6c69aa8949%3A0xbda69826e2694dab!2sShree%20Radhey%20Technology!5e0!3m2!1sen!2sin!4v1769870654683!5m2!1sen!2sin"  */}
              {/* width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-8 border border-border/50 card-elevated">
              <h3 className="font-display text-2xl font-bold text-foreground mb-6">
                Request a Quote
              </h3>
              
              <div className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Full Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      required
                      className="h-12"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="Your phone"
                      required
                      className="h-12"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    required
                    className="h-12"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                    Company Name
                  </label>
                  <Input
                    id="company"
                    name="company"
                    placeholder="Your company"
                    className="h-12"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your calibration requirements..."
                    rows={5}
                    required
                  />
                </div>

                <Button
                  type="submit"
                  variant="accent"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
