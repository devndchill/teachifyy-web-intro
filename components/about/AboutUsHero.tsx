import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function AboutUsHero() {
    return (
        <section className="relative w-full overflow-hidden py-5 md:py-16">
            {/* Background Layer with subtle peach and light blue glows */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-[#FFF0EA] rounded-full blur-[100px] opacity-100" />
                <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-[#EBF3FC] rounded-full blur-[100px] opacity-100" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="flex flex-col items-start max-w-xl">
                        {/* Badge */}
                        <div className="inline-flex items-center rounded-full border border-blue-100 bg-white px-4 py-1.5 shadow-sm mb-6">
                            <span className="text-sm font-semibold text-slate-800">EMPOWERING EDUCATORS</span>
                        </div>

                        {/* Heading */}
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-6 leading-[1.1]">
                            Built for teachers<br />
                            who <span className="text-[#ff4d67]">deserve</span><br />
                            <span className="text-[#ff4d67]">better.</span>
                        </h1>

                        {/* Subtext */}
                        <p className="text-lg text-slate-600 mb-8 max-w-md">
                            For every teacher seeking progress, this is home. We provide the tools, the community, and the growth you have been waiting for.
                        </p>

                        {/* CTA Button */}
                        <Link
                            href="/join"
                            className="inline-flex items-center justify-center rounded-full bg-[#ff4d67] px-8 py-3.5 text-base font-medium text-white shadow-sm gap-2"
                        >
                            Learn More
                            <ArrowRight className="h-5 w-5" />
                        </Link>
                    </div>

                    {/* Right Content - Image */}
                    <div className="relative w-full aspect-[4/3] max-w-lg mx-auto md:ml-auto rounded-3xl overflow-hidden shadow-2xl rotate-6">
                        {/* Using a placeholder for now since we don't have the exact image asset */}
                        <div className="absolute inset-0 bg-slate-200">
                            <Image
                                src="/assets/aboutHero.jpg"
                                alt="Teachers in a classroom setting"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
