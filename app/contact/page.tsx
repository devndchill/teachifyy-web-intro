import { Metadata } from 'next';
import Image from 'next/image';
import ContactFaq from '@/components/contact/ContactFaq';
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';
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
      value: '+91 7877447884 | +91 6291507718',
      href: 'tel:+917877447884',
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
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="md:pt-16 pt-5  pb-16 overflow-hidden">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <div className="inline-block px-3 py-1 bg-[#DDE6F2] text-black text-xs  tracking-widest uppercase rounded-full">
                DEDICATED SUPPORT TEAM
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-medium leading-tight text-[#1a202c] tracking-tight">
                We&apos;re Here to<br />
                Support Your<br />
                Teaching Journey
              </h1>
              <p className="text-base text-zinc-600 max-w-md font-normal leading-relaxed">
                Whether you have questions about our programs, career opportunities, or admissions, our team is here to guide you
              </p>
            </div>

            {/* Right Image */}
            <div className="relative rounded-[2rem] overflow-hidden h-[300px] lg:h-[380px] w-full max-w-lg mx-auto lg:ml-auto shadow-2xl">
              <Image
                src="/assets/contactUsHero.jpg"
                alt="Teacher on laptop"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section with Gradient Background */}
      <section className="relative py-28 bg-gradient-to-tr from-[#ffebe6] via-white to-[#e6f0ff]">
        <div className="container-custom relative z-10 flex justify-center">
          <div className="bg-white rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] w-full max-w-5xl min-h-[600px] overflow-hidden flex flex-col md:flex-row">

            {/* Left Column: Contact Information */}
            <div className="bg-[#0E172B] text-white p-10 md:p-14 w-full flex flex-col relative overflow-hidden">
              <div className="relative z-10 flex-grow max-w-2xl mx-auto w-full">
                <h3 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-white ">Contact Information</h3>
                <div className="space-y-8 md:space-y-10">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex gap-4">
                      <info.icon className="w-5 h-5 text-[#FF4667] shrink-0 mt-1" strokeWidth={2} />
                      <div className="space-y-1 border-b border-white/10 pb-4 w-full">
                        <h4 className="text-sm text-zinc-400 font-medium tracking-wide uppercase">{info.title}</h4>
                        <div className="text-base md:text-[17px] font-medium">
                          {info.href ? (
                            <a href={info.href} className="hover:text-[#FF4667] transition-colors">{info.value}</a>
                          ) : (
                            <span>{info.value}</span>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Social Links & Decorative shapes */}
                <div className="relative z-10 mt-12 flex gap-4">
                  {socialLinks.map((social, index) => (
                    <a key={index} href={social.href} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#FF4667] hover:scale-105 active:scale-95 transition-all">
                      <social.icon className="w-[18px] h-[18px]" strokeWidth={2} />
                      <span className="sr-only">{social.label}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Decorative Background blur circles */}
              <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-[#FF4667]/20 rounded-full blur-3xl pointer-events-none"></div>
              <div className="absolute top-12 -right-12 w-32 h-32 bg-[#FF4667]/10 rounded-full blur-2xl pointer-events-none"></div>
            </div>

            {/* Right Column: Empty Form Section */}
            {/* <div className="w-full md:w-7/12 p-10 md:p-14 min-h-[600px] flex items-center justify-center bg-gray-50/50">

              <p className="text-zinc-400 font-medium text-center">Form fields will go here eventually</p>
            </div> */}
          </div>
        </div>
      </section>

      {/* Program Selection CTA */}
      <section className="bg-[#0E172B] py-24 text-center ">
        <div className="container-custom max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Not Sure Which Program is <span className="text-[#FF4667]">Right for You?</span>
          </h2>
          <p className="text-zinc-300 text-base md:text-lg font-light">
            Our advisors can help you understand your career goals and guide you toward the right learning path for your professional growth.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4 tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-zinc-600 text-base max-w-2xl mx-auto">
              Find answers to some of the most frequent inquiries from our community.
            </p>
          </div>

          <ContactFaq />
        </div>
      </section>
    </div>
  );
}
