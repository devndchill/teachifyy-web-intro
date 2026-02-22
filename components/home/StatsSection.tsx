import React from "react";
import { BarChart3 } from "lucide-react";

const StatsSection = () => {
  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-[1248px] mx-auto px-6 lg:px-12 flex flex-col items-center">
        {/* Badge */}
        <div className="inline-flex items-center bg-[#DDE6F2] text-[#000000] text-[10px] font-[400] uppercase tracking-wider rounded-full px-[24px] py-[6px] mb-6">
          THE TEACHING EMPLOYMENT GAP
        </div>

        {/* Heading */}
        <h2 className="text-[#0F172A] text-[32px] md:text-[40px] font-bold font-sans tracking-tight mb-12 text-center">
          The Numbers Behind the Challenge
        </h2>

        {/* Card */}
        <div className="w-full max-w-[1000px] bg-[#2C4A70] rounded-[24px] p-8 md:p-12 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-12 shadow-lg">
          {/* Left Content */}
          <div className="flex-1 text-white relative z-10 w-full pl-0 md:pl-4">
            <h3 className="text-[13px] md:text-[14px] text-white font-bold tracking-wider uppercase mb-4">
              EVERY YEAR IN INDIA
            </h3>

            <div className="flex items-baseline gap-2 mb-1">
              <span className="text-[54px] md:text-[64px] font-bold leading-none font-sans tracking-tight">
                6 Lakh <span className="text-[48px]">+</span>
              </span>
            </div>

            <p className="text-[15px] md:text-[16px] text-white/90 mb-10 font-medium">
              teacher graduates enter the job market
            </p>

            <p className="text-[18px] md:text-[22px] text-white leading-snug font-sans font-light">
              but only <span className="font-bold">58%</span> find teaching jobs
              within <span className="font-bold">12 months</span> of graduation.
            </p>
          </div>

          {/* Right Content - Chart Mockup */}
          <div className="w-full md:w-[340px] h-[260px] bg-[#537497] rounded-[32px] p-6 relative z-10 flex flex-col justify-between shadow-[0_8px_30px_rgba(0,0,0,0.12)]">
            <h4 className="text-white text-[18px] md:text-[20px] font-bold font-sans tracking-tight">
              Placement Rate
            </h4>

            <div className="flex justify-center items-end h-[160px] gap-4 w-full px-2">
              {/* Bar 1 */}
              <div className="flex flex-col items-center gap-[6px] flex-1 h-full justify-end">
                <span className="text-white/90 text-[10px] md:text-[11px] font-medium whitespace-nowrap mb-1">
                  Total Grads
                </span>
                <div className="w-full max-w-[48px] bg-[#2C4A70] rounded-t-[16px] h-[100%]" />
                <span className="text-white/90 text-[11px] md:text-[12px] font-medium leading-none mt-2">
                  6L+
                </span>
              </div>

              {/* Bar 2 */}
              <div className="flex flex-col items-center gap-[6px] flex-1 h-full justify-end">
                <span className="text-white/90 text-[10px] md:text-[11px] font-medium whitespace-nowrap mb-1">
                  Employed
                </span>
                <div className="w-full max-w-[48px] bg-white rounded-t-[16px] h-[58%]" />
                <span className="text-white/90 text-[11px] md:text-[12px] font-medium leading-none mt-2">
                  58%
                </span>
              </div>

              {/* Bar 3 */}
              <div className="flex flex-col items-center gap-[6px] flex-1 h-full justify-end">
                <span className="text-white/90 text-[10px] md:text-[11px] font-medium whitespace-nowrap mb-1">
                  Gap
                </span>
                <div className="w-full max-w-[48px] bg-[#2C4A70] rounded-t-[16px] h-[42%]" />
                <span className="text-white/90 text-[11px] md:text-[12px] font-medium leading-none mt-2">
                  42%
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
