"use client";
import Link from "next/link";
import { ArrowRight, Check, ChartNoAxesCombined } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  });

  return (
    <section className="relative w-full overflow-hidden bg-white">
      {/* Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute bottom-[-20%] left-[-10%] w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-[#FFF0EA] rounded-full blur-[100px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[350px] h-[350px] md:w-[500px] md:h-[500px] bg-[#EBF3FC] rounded-full blur-[100px]" />
      </div>

      <div className="max-w-[1440px] mx-auto relative z-10">
        <div className="max-w-[1248px] mx-auto px-4 sm:px-6 lg:px-12 py-8 md:py-10 lg:py-12">
          <div className="grid lg:grid-cols-[1fr_0.9fr] gap-10 lg:gap-16 items-center">
            {/* LEFT */}
            <div className="flex flex-col items-start text-left">
              {/* Badge */}
              <div className="inline-flex items-center bg-[#DDE6F2] text-black text-[9px] sm:text-[10px] uppercase tracking-wider rounded-full px-4 sm:px-6 py-1.5 mb-5">
                PROFESSIONAL TEACHER DEVELOPMENT
              </div>

              {/* Heading */}
              <div
                key={currentSlide}
                className="animate-fade-in lg:h-[250px] h-[180px]"
              >
                <h1
                  className="text-[#111827] 
                  text-[28px] 
                  sm:text-[34px] 
                  md:text-[40px] 
                  lg:text-[44px] 
                  leading-tight 
                  mb-4 
                  font-Inter
                  font-light"
                >
                  {heroSlides[currentSlide].title}
                </h1>

                <p
                  className="text-[#475569] 
                  text-[13px] 
                  sm:text-[14px] 
                  md:text-[16px] 
                  mb-6 
                  max-w-full 
                  lg:max-w-[540px]"
                >
                  {heroSlides[currentSlide].subtitle}
                </p>
              </div>

              {/* Checklist */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 mb-8">
                {[
                  "UK-research backed",
                  "Real classroom application",
                  "Global career mobility",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-[#34A853] flex items-center justify-center">
                      <Check
                        className="w-2.5 h-2.5 text-white"
                        strokeWidth={4}
                      />
                    </div>
                    <span className="text-[#334155] text-[12px] sm:text-[13px] font-medium">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row w-full sm:w-auto gap-3 sm:gap-4">
                <Link href="/courses" className="w-full sm:w-auto">
                  <button className="w-full sm:w-auto flex items-center justify-center bg-[#FF4D67] text-white text-[14px] sm:text-[15px] py-3 px-6 rounded-full">
                    Register for Webinar
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </Link>

                <Link href="/assessment" className="w-full sm:w-auto">
                  <button className="w-full sm:w-auto flex items-center justify-center border border-[#FFc6ce] text-[#111827] text-[14px] sm:text-[15px] py-3 px-6 rounded-full">
                    Take Assessment
                  </button>
                </Link>
              </div>

              {/* Logos */}
              <div className="flex flex-wrap items-center gap-4 mt-8">
                {["herosmall1.png", "herosmall2.png", "herosmall3.png"].map(
                  (img, i) => (
                    <Image
                      key={i}
                      src={`/assets/${img}`}
                      alt="feature"
                      width={120}
                      height={40}
                      className="h-[30px] sm:h-[40px] md:h-[50px] w-auto object-contain"
                    />
                  ),
                )}
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="relative w-full max-w-[450px] mx-auto ">
              <div className="relative w-full h-[450px] max-w-full rounded-[50px] overflow-hidden">
                <Image
                  src="/assets/teacher-classroom.png"
                  alt="Teacher"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Floating Card */}
              <div
                className="absolute 
                bottom-[-20px] 
                sm:bottom-4 
                left-1/2 
                -translate-x-1/2 
                lg:left-[-20px] 
                lg:translate-x-0 
                bg-white rounded-xl sm:rounded-2xl 
                px-4 py-3 
                shadow-lg 
                flex items-center gap-3 
                min-w-[200px]"
              >
                <ChartNoAxesCombined className="w-6 h-6 text-[#34A853]" />
                <div>
                  <p className="font-bold text-[13px]">Success</p>
                  <p className="text-[11px] text-gray-500">
                    Up to 167% salary growth
                  </p>
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
