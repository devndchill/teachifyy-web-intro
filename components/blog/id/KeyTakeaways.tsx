import { CheckCircle2 } from 'lucide-react';
import { BlogDetailKeyTakeaways } from '@/types/blog';

export default function KeyTakeaways({ data }: { data: BlogDetailKeyTakeaways }) {
    return (
        <section className="pb-12">
            <div className="container-custom max-w-4xl mx-auto">
                <div className="bg-white dark:bg-zinc-900 rounded-3xl p-6 md:p-10 shadow-sm border border-zinc-100 dark:border-zinc-800 relative z-10">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                            <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-500" />
                        </div>
                        <h2 className="text-xl md:text-2xl font-bold text-zinc-900 dark:text-white">
                            {data.title}
                        </h2>
                    </div>
                    <ul className="space-y-4">
                        {data.points.map((point, index) => (
                            <li key={index} className="flex items-start gap-3">
                                <span className="text-black dark:text-zinc-500 mt-1 flex-shrink-0">{index + 1}.</span>
                                <span className="text-zinc-700 dark:text-zinc-300 mt-1">
                                    {point}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}
