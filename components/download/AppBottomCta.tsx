import Link from 'next/link';
import { Download } from 'lucide-react';

export default function AppBottomCta() {
  return (
    <section className="py-16 md:py-20 bg-[#214671]">
      <div className="container-custom">
        <div className=" rounded-3xl text-center ">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-5 leading-[1.2] tracking-tight">
            Teaching Requires{' '}
            <span className="text-[#FF4667]">Continuous Learning</span>
          </h2>
          <p className="text-white/70 text-base leading-relaxed mb-10 max-w-lg mx-auto">
            Join educators who are building better classrooms through continuous learning. The Teachifyy app puts professional growth in your pocket.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="https://apps.apple.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 border border-white text-white font-medium text-[15px] py-3 px-7 rounded-full hover:bg-white hover:text-[#2b5585] transition-all duration-200"
            >
              <Download className="w-4 h-4" />
              Download on App Store
            </Link>
            <Link
              href="https://play.google.com/store/apps/details?id=com.teachifyy.app&pcampaignid=web_share"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 border border-white text-white font-medium text-[15px] py-3 px-7 rounded-full hover:bg-white hover:text-[#2b5585] transition-all duration-200"
            >
              <Download className="w-4 h-4" />
              Download on Play Store
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
