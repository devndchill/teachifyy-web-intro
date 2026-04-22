import Link from "next/link";
import Image from "next/image";
import { Linkedin, Instagram, Facebook, Youtube, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#2b5585] w-full pt-16 pb-20">
      <div className="max-w-[1248px] mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr] gap-x-12 gap-y-12">
        {/* Column 1: Brand & Social */}
        <div className="flex flex-col items-start pr-8">
          <Link href="/" className="flex items-center mb-4">
            <div className="relative w-[140px] h-[40px]">
              <Image
                src="/assets/white-logo.png"
                alt="Teachifyy Logo"
                fill
                sizes="(max-width: 768px) 120px, 140px"
                className="object-contain"
              />
            </div>
          </Link>
          <p className="text-white/80 text-[14px] leading-[1.6] mb-8 font-medium">
            Empowering future Educators with
            <br className="hidden lg:block" />
            structured, Application-Focused Training.
          </p>
          <div className="flex items-center gap-3">
            <a
              href="https://www.linkedin.com/company/teachifyy"
              target="_blank"
              rel="noreferrer"
              className="w-[38px] h-[38px] rounded-full border-[1.5px] border-[#386b9b] flex items-center justify-center hover:bg-white/10 transition-colors"
            >
              <Linkedin
                className="w-[18px] h-[18px] text-white"
                strokeWidth={1.5}
              />
            </a>
            <a
              href="https://www.instagram.com/teachifyy.india/"
              target="_blank"
              rel="noreferrer"
              className="w-[38px] h-[38px] rounded-full border-[1.5px] border-[#386b9b] flex items-center justify-center hover:bg-white/10 transition-colors"
            >
              <Instagram
                className="w-[18px] h-[18px] text-white"
                strokeWidth={1.5}
              />
            </a>
            <a
              href="https://www.facebook.com/people/Teachifyyindia/61583690497699/"
              target="_blank"
              rel="noreferrer"
              className="w-[38px] h-[38px] rounded-full border-[1.5px] border-[#386b9b] flex items-center justify-center hover:bg-white/10 transition-colors"
            >
              <Facebook
                className="w-[18px] h-[18px] text-white"
                strokeWidth={1.5}
              />
            </a>
            <a
              href="https://www.youtube.com/@teachifyy_india"
              target="_blank"
              rel="noreferrer"
              className="w-[38px] h-[38px] rounded-full border-[1.5px] border-[#386b9b] flex items-center justify-center hover:bg-white/10 transition-colors"
            >
              <Youtube
                className="w-[18px] h-[18px] text-white"
                strokeWidth={1.5}
              />
            </a>
          </div>
          <div className="flex gap-4 mt-8 items-center">
            <Link href="https://play.google.com/store/apps/details?id=com.teachifyy.app" className="hover:opacity-80 transition-opacity ">
              <Image src="/assets/androidDownload.png" alt="Get it on Google Play" width={140} height={42} className="h-[42px] w-auto rounded-lg" />
            </Link>
            <Link href="#" className="hover:opacity-80 transition-opacity">
              <Image src="/assets/IosDownload.png" alt="Download on the App Store" width={140} height={42} className="h-[42px] w-auto rounded-lg" />
            </Link>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="flex flex-col">
          <h3 className="text-white font-bold text-[18px] tracking-wide mb-6">
            Quick Links
          </h3>
          <ul className="flex flex-col gap-4">
            {[
              { label: "Home", path: "/" },
              { label: "Courses", path: "/courses" },
              { label: "Assessment", path: "/assessment" },
              { label: "Blogs", path: "/blog" },
              { label: "About Us", path: "/about" },
              { label: "Career", path: "/career" },
              { label: "Contact", path: "/contact" },
              { label: "Community Guidelines", path: "/community-guidelines" },
              { label: "Download App", path: "/download" },
              { label: "Terms & Conditions", path: "/terms-and-conditions" },
            ].map((link) => (
              <li key={link.label}>
                <Link
                  href={link.path}
                  className="text-[#cbd5e1] text-[15px] font-[400] hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Contact Us */}
        <div className="flex flex-col">
          <h3 className="text-white font-bold text-[18px] tracking-wide mb-6">
            Contact Us
          </h3>
          <ul className="flex flex-col gap-5">
            <li className="flex items-center gap-4 text-[#cbd5e1] text-[15px] font-[400]">
              <Mail className="w-[18px] h-[18px] shrink-0" strokeWidth={1.5} />
              <a
                href="mailto:support@teachifyy.com"
                className="hover:text-white transition-colors"
              >
                support@teachifyy.com
              </a>
            </li>
            <li className="flex items-center gap-4 text-[#cbd5e1] text-[15px] font-[400]">
              <Phone className="w-[18px] h-[18px] shrink-0" strokeWidth={1.5} />
              <a
                href="tel:+917877447884"
                className="hover:text-white transition-colors"
              >
                +91 7877447884
              </a>
            </li>
            <li className="flex items-center gap-4 text-[#cbd5e1] text-[15px] font-[400]">
              <MapPin
                className="w-[18px] h-[18px] shrink-0"
                strokeWidth={1.5}
              />
              <span>New Delhi.</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="max-w-[1248px] mx-auto px-6 lg:px-12 mt-16 pt-8 border-t border-[#386b9b] flex flex-col md:flex-row justify-center items-center text-center">
        <p className="text-[#cbd5e1] text-[14px]">
          Copyright 2026  &copy; Claremont Education LLP All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
