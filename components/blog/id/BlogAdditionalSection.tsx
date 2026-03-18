import { BlogDetailAdditionalSection } from '@/types/blog';

export default function BlogAdditionalSection({ data }: { data: BlogDetailAdditionalSection }) {
    return (
        <section className="pb-16 pt-8">
            <div className="container-custom max-w-4xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-white mb-6">
                    {data.title}
                </h2>
                <div className="space-y-6">
                    {data.paragraphs.map((para, idx) => (
                        <p key={idx} className="text-zinc-700 dark:text-zinc-300 text-lg leading-relaxed">
                            {para}
                        </p>
                    ))}
                </div>
            </div>
        </section>
    );
}
