import { Metadata } from 'next';
import { Mail, MapPin, Phone, Linkedin, Twitter } from 'lucide-react';
import ContactForm from '@/components/contact/ContactForm';
import { constructMetadata } from '@/lib/metadata';

export const metadata: Metadata = constructMetadata({
  title: 'Contact Us',
  description: 'Get in touch with us. We\'re here to help with any questions about our courses and programs.',
});

export default function ContactPage() {
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'Support@teachifyy.com',
      href: 'mailto:Support@teachifyy.com',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+917877447884 | +916291507718',
      href: 'tel:+917877447884 | +916291507718',
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Jaipur | Delhi | Kolkata',
      href: null,
    },
  ];

  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/company/teachifyy/', label: 'LinkedIn' },
    // { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      {/* <section className="section-padding bg-gradient-to-b from-dark to-dark-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Get in <span className="text-primary">Touch</span>
            </h1>
            <p className="text-lg text-zinc-400">
              Have a question or want to learn more about our courses? We'd love to hear from you.
            </p>
          </div>
        </div>
      </section> */}

      {/* Contact Section */}
      <section className="py-12 md:py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 justify-center">
            {/* Contact Info */}
            <div className="lg:col-span-3 flex flex-col items-center">
              <h2 className="text-2xl font-bold mb-6 text-center">
                Contact <span className="text-primary">Information</span>
              </h2>

              <div className="space-y-6 mb-8 w-full max-w-md">
                {contactInfo.map((info) => {
                  const Icon = info.icon;
                  const content = (
                    <div className="flex items-start gap-4 p-4 rounded-lg bg-dark-50 border border-zinc-800 hover:border-primary/50 transition-colors">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-zinc-400 mb-1">{info.title}</p>
                        <p className=" font-medium">{info.value}</p>
                      </div>
                    </div>
                  );

                  return info.href ? (
                    <a key={info.title} href={info.href} className="block">
                      {content}
                    </a>
                  ) : (
                    <div key={info.title}>{content}</div>
                  );
                })}
              </div>

              {/* Social Links */}
              <div className="text-center">
                <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                <div className="flex items-center justify-center gap-3">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-lg bg-zinc-800 hover:bg-primary hover:text-dark text-zinc-300 transition-all"
                        aria-label={social.label}
                      >
                        <Icon className="w-5 h-5" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            {/* <div className="lg:col-span-2">
              <div className="card p-8">
                <h2 className="text-2xl font-bold mb-6">
                  Send us a <span className="text-primary">Message</span>
                </h2>
                <ContactForm />
              </div>
            </div> */}
          </div>
        </div>
      </section>


    </div>
  );
}
