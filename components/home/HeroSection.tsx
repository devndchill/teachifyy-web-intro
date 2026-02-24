"use client";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  const heroSlides = [
    {
      title: (
        <>
          Your next classroom could <br className="hidden md:block" />
          be in{" "}
          <span className="text-[#FF4D67] font-bold">
            Dubai, Vietnam, or <br className="hidden lg:block" /> beyond
          </span>
        </>
      ),
      subtitle:
        "The global mobility network of Teachifyy can take your career there.",
    },
    {
      title: (
        <>
          Waking up every day wanting to{" "}
          <span className="text-[#FF4D67] font-bold">
            change your current job?
          </span>
        </>
      ),
      subtitle:
        "Visualize the role you deserve and plan accordingly, start with the assessment below.",
    },
    {
      title: (
        <>
          Get the{" "}
          <span className="text-[#FF4D67] font-bold">
            Skills to Secure Interviews
          </span>{" "}
          at Top-Tier Schools
        </>
      ),
      subtitle:
        "Learn what it takes to train and stand out in the hiring process.",
    },
  ];
  return (
    <section className="relative w-full overflow-hidden bg-white">
      {/* Background Layer with subtle peach and light blue glows */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-[#FFF0EA] rounded-full blur-[100px] opacity-100" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-[#EBF3FC] rounded-full blur-[100px] opacity-100" />
      </div>

      <div className="max-w-[1440px] mx-auto w-full relative z-10">
        <div className="max-w-[1248px] mx-auto px-5 lg:px-12 py-10 md:py-10 lg:py-12 flex items-center">
          <div className="grid lg:grid-cols-[1fr_0.9fr] gap-12 lg:gap-16 items-center w-full">
            {/* Left Content */}
            <div className="flex flex-col items-start text-left">
              {/* Badge */}
              <div className="inline-flex items-center bg-[#DDE6F2] text-[#000000] text-[10px] font-[400] uppercase tracking-wider rounded-full px-[24px] py-[6px] mb-6">
                PROFESSIONAL TEACHER DEVELOPMENT
              </div>

              {/* Heading */}
              <div key={currentSlide} className="fade-slide">
                <h1 className="text-[#111827] text-[44px] font-normal leading-none tracking-normal mb-6 font-Inter">
                  {heroSlides[currentSlide].title}
                </h1>

                <p className="text-[#475569] text-[18px] md:text-[20px] mb-10 font-Inter max-w-[540px]">
                  {heroSlides[currentSlide].subtitle}
                </p>
                <div className="flex gap-2 mt-6">
                </div>
              </div>


              {/* Feature Checklist */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-8 mb-12">
                <div className="flex items-center gap-[8px]">
                  <div className="w-[16px] h-[16px] rounded-full bg-[#34A853] flex items-center justify-center shrink-0">
                    <Check
                      className="w-[10px] h-[10px] text-white"
                      strokeWidth={4}
                    />
                  </div>
                  <span className="text-[#334155] text-[13px] md:text-[12px] font-medium font-sans">
                    UK-research backed
                  </span>
                </div>
                <div className="flex items-center gap-[8px]">
                  <div className="w-[16px] h-[16px] rounded-full bg-[#34A853] flex items-center justify-center shrink-0">
                    <Check
                      className="w-[10px] h-[10px] text-white"
                      strokeWidth={4}
                    />
                  </div>
                  <span className="text-[#334155] text-[13px] md:text-[12px] font-medium font-sans">
                    Real classroom application
                  </span>
                </div>
                <div className="flex items-center gap-[8px]">
                  <div className="w-[16px] h-[16px] rounded-full bg-[#34A853] flex items-center justify-center shrink-0">
                    <Check
                      className="w-[10px] h-[10px] text-white"
                      strokeWidth={4}
                    />
                  </div>
                  <span className="text-[#334155] text-[13px] md:text-[12px] font-medium font-sans">
                    Global career mobility
                  </span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center gap-[14px]">
                <Link href="/courses">
                  <button className="flex items-center justify-center bg-[#FF4D67] text-white font-medium text-[15px] pt-[14px] pb-[14px] pl-[28px] pr-[24px] rounded-full hover:bg-[#ff3b57] transition-colors">
                    Register for Webinar
                    <ArrowRight className="w-[18px] h-[18px] ml-2" />
                  </button>
                </Link>
                <Link href="/assessment">
                  <button className="flex items-center justify-center bg-transparent text-[#111827] border-[1px] border-[#FFc6ce] font-medium text-[15px] py-[14px] px-[28px] rounded-full hover:bg-slate-50 hover:border-[#FF4D67] transition-colors">
                    Take Assessment
                  </button>
                </Link>
              </div>

            </div>

            {/* Right Content - Image */}
            <div className="relative w-full mt-8 lg:mt-0 lg:ml-auto max-w-[580px]">
              {/* Image Container with Custom Corners */}
              <div className="relative w-full aspect-[4/3] rounded-[26.5px] overflow-hidden z-10">
                <Image
                  src="/assets/teacher-classroom.png"
                  alt="Teacher pointing in a classroom with a global cityscape view"
                  fill
                  className="object-cover"
                  priority
                />

                {/* Decorative Frame Overlay (User's Custom Image) - Moved INSIDE so it fully clips the outer rounded corners! */}
                <div className="absolute top-0 left-0 w-[55%] h-[55%] sm:w-[50%] sm:h-[50%] z-20 pointer-events-none">
                  <Image
                    src="/assets/corner-frame.png"
                    alt="Decorative corner frame"
                    fill
                    priority
                    className="object-contain object-left-top"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
