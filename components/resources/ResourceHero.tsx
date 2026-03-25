import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ResourceHero() {
  return (
    <section className="relative overflow-hidden bg-white pt-16 pb-20">
      {/* Background blobs — same as HeroSection */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute bottom-[-20%] left-[-10%] w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-[#FFF0EA] rounded-full blur-[100px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[350px] h-[350px] md:w-[500px] md:h-[500px] bg-[#EBF3FC] rounded-full blur-[100px]" />
      </div>

      <div className="container-custom relative z-10 max-w-[1248px] mx-auto px-6 lg:px-12">
        {/* Badge */}
        <div className="inline-flex items-center bg-[#DDE6F2] text-black text-[9px] sm:text-[10px] uppercase tracking-wider rounded-full px-4 sm:px-6 py-1.5 mb-5">
          Inspired Teaching Starts Here
        </div>

        <h1 className="text-[2.8rem] md:text-[3.5rem] lg:text-[4rem] font-light text-gray-900 leading-[1.1] mb-5 max-w-full">
          <span className="text-[#FF4D67] font-bold">Free resources</span> for
          real
          <br />
          classrooms
        </h1>

        {/* Sub-text */}
        <p className="text-[16px] md:text-[17px] text-gray-500 mb-9 max-w-[440px] leading-relaxed">
          Practical, ready-to-use materials for teachers
        </p>

        {/* CTA */}
        <Link href="#">
          <button className="inline-flex items-center gap-2 bg-[#FF4D67] text-white font-semibold text-[15px] px-7 py-3.5 rounded-full hover:bg-[#e63d57] transition-all shadow-[0_6px_24px_rgba(255,77,103,0.35)] hover:shadow-[0_8px_28px_rgba(255,77,103,0.45)] hover:-translate-y-0.5">
            Premium Resources <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </button>
        </Link>
      </div>
    </section>
  );
}
