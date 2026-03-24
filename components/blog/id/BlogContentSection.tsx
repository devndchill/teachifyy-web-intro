import Image from 'next/image';
import { Check } from 'lucide-react';
import { BlogDetailContentSection } from '@/types/blog';

export default function BlogContentSection({ content }: { content: BlogDetailContentSection[] }) {
    return (
        <section className="pb-12">
            <div className="container-custom max-w-4xl mx-auto space-y-16">
                {content.map((section, index) => (
                    <div key={index} className="space-y-6">
                        <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-white leading-tight">
                            {section.title}
                        </h2>

                        {section.paragraphs.map((para, pIdx) => (
                            <p key={pIdx} className="text-zinc-700 dark:text-zinc-300 text-lg leading-relaxed">
                                {para}
                            </p>
                        ))}

                        {section.images && section.images.length > 0 && (
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 mb-8">
                                {section.images.map((img, iIdx) => (
                                    <div key={iIdx} className="relative aspect-video rounded-2xl overflow-hidden border border-zinc-100 dark:border-zinc-800 shadow-sm">
                                        <Image
                                            src={img}
                                            alt={`${section.title} image ${iIdx + 1}`}
                                            fill
                                            className="object-cover"
                                            unoptimized
                                        />
                                    </div>
                                ))}
                            </div>
                        )}

                        {section.highlightPoints && section.highlightPoints.length > 0 && (
                            <div className="mt-8">
                                <div className="border-l-4 border-[#FF4667] pl-6 py-2 space-y-4">
                                    {section.highlightPoints.map((point, hIdx) => (
                                        <div key={hIdx} className="flex items-start gap-3">
                                            <div className="mt-1 w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                                                <Check className="w-3 h-3 text-[#FF4667]" />
                                            </div>
                                            <span className="text-zinc-800 dark:text-zinc-200 font-medium">
                                                {point}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}

