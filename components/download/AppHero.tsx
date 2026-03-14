import Image from 'next/image';
import Link from 'next/link';

export default function AppHero() {
  return (
    <section className="relative w-full overflow-hidden py-10 md:py-20">
      {/* Background soft glows */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] bg-[#FFF0EA] rounded-full blur-[100px] opacity-60" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-[#EBF3FC] rounded-full blur-[100px] opacity-60" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <div className="flex flex-col items-start max-w-xl">
            {/* Badge */}
            <div className="inline-flex items-center rounded-full border  bg-[#DDE6F2] px-4 py-1.5 shadow-sm mb-6">
              <span className="text-xs  text-slate-700 tracking-widest uppercase">MOBILE APP</span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-5xl font-light tracking-tight text-slate-900 mb-5 leading-[1.15]">
              Learn Anywhere with{' '}
              <br />
              the{' '}
              <span className="text-[#FF4667] font-semibold">Teachifyy App</span>
            </h1>

            {/* Subtext */}
            <p className="text-slate-600 mb-8 max-w-md leading-relaxed text-lg">
              Continue your teaching journey on the Teachifyy mobile app. Access courses, track progress, and connect with mentors anytime from any device.
            </p>

            {/* Store Badges */}
            <div className="flex items-center justify-center gap-4 mb-6">
              <Link
                href="https://play.google.com/store"
                target="_blank"
                rel="noreferrer"
                className="flex items-center"
              >
                <Image
                  src="/assets/androidDownload.png"
                  alt="Download on Android"
                  width={160}
                  height={160}
                  className="object-contain drop-shadow-xl rounded-lg w-[130px] sm:w-[150px] md:w-[160px]"
                  priority
                />
              </Link>

              <Link
                href="https://apps.apple.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center"
              >
                <Image
                  src="/assets/IosDownload.png"
                  alt="Download on iOS"
                  width={160}
                  height={160}
                  className="object-contain drop-shadow-xl rounded-lg w-[130px] sm:w-[150px] md:w-[160px]"
                  priority
                />
              </Link>
            </div>

            <p className="text-slate-400 text-sm flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 inline-block"></span>
              Available for iOS and Android devices
            </p>
          </div>

          {/* Right Content — App Mockup */}
          <div className="relative flex items-center justify-center md:justify-end">
            <div className="relative w-[280px] md:w-[320px]">
              <Image
                src="/assets/teachifyyAppHero1.png"
                alt="Teachifyy App Mockup"
                width={320}
                height={620}
                className="object-contain drop-shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
