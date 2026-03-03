import { Sparkles, Heart, Zap, ShieldCheck } from 'lucide-react';

const values = [
    {
        icon: Sparkles,
        title: 'Excellence',
        description: 'We never settle for "good enough" in our content or community.',
    },
    {
        icon: Heart,
        title: 'Empathy',
        description: 'Teachers deserve to be understood, not just instructed.',
    },
    {
        icon: Zap,
        title: 'Impact',
        description: 'Every lesson we teach aims to transform a classroom somewhere.',
    },
    {
        icon: ShieldCheck,
        title: 'Integrity',
        description: 'Transparency and trust are the foundation of Teachifyy.',
    },
];

export default function CoreValuesSection() {
    return (
        <section className="py-20 md:py-28 bg-[#111827]"> {/* Deep dark navy/black color */}
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="mb-12 md:mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3 text-white">
                        Our Core Values
                    </h2>
                    <p className="text-white/70 text-lg max-w-xl">
                        The principles that guide every decision we make.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {values.map((value, index) => {
                        const Icon = value.icon;
                        return (
                            <div
                                key={index}
                                className="bg-[#DDE6F2] rounded-2xl p-8 flex flex-col transition-transform hover:-translate-y-1 hover:shadow-xl"
                            >
                                <div className="mb-6 w-10 h-10 rounded-full flex items-center justify-center bg-blue-100 text-[#1F4862]">
                                    <Icon className="w-5 h-5" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h3>
                                <p className="text-slate-600 leading-relaxed text-sm">
                                    {value.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
