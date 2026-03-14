import Image from 'next/image';
import { ArrowRight, ChevronRight } from 'lucide-react';
import Link from 'next/link';

const articles = [
  {
    image: '/assets/secondblog.jpg',
    badge: 'TIPS',
    readTime: '4 min read',
    title: 'Thinking of Opening a Preschool? Build These Core Skills First',
    description: 'The journey from educator to entrepreneur requires a specific set of leadership and operational competencies.',
  },
  {
    image: '/assets/thirdBlog.jpg',
    badge: 'TIPS',
    readTime: '4 min read',
    title: 'Is Starting a Preschool the Right Fit for You?',
    description: 'Evaluating your personal goals, financial readiness, and passion for early childhood development.',
  },
  {
    image: '/assets/fourthBlog.jpg',
    badge: 'LEARNING',
    readTime: '4 min read',
    title: 'Adapting to AI: Curriculum Design for Preschool Teachers',
    description: 'How artificial intelligence is reshaping how we think about early learning frameworks and personalized instruction.',
  }
];

export default function BlogListSection() {
  return (
    <section className="py-12 pb-24 relative overflow-hidden">
      <div className="container-custom relative max-w-[1280px]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {articles.map((article, idx) => (
            <Link href="/blog/1" key={idx} className="bg-white rounded-[2rem] border border-gray-100 shadow-[0_4px_24px_rgb(0,0,0,0.03)] overflow-hidden flex flex-col group hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all h-full">
              <div className="relative aspect-[16/10] overflow-hidden m-3 rounded-[1.5rem]">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              <div className="p-6 pt-3 flex flex-col flex-grow">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-[#EBF3FB] text-dark-900 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {article.badge}
                  </span>
                  <span className="text-xs text-gray-400 font-medium flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-gray-300 block"></span>
                    {article.readTime}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 leading-snug group-hover:text-primary transition-colors tracking-tight">
                  {article.title}
                </h3>
                <p className="text-gray-500 text-sm mb-6 line-clamp-2 leading-relaxed">
                  {article.description}
                </p>
                <div className="mt-auto">
                  <span className="inline-flex items-center gap-1.5 text-[13px] font-bold text-gray-900 group-hover:text-primary transition-colors hover:underline underline-offset-4 decoration-2">
                    Read More <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Arrow button right */}
        <button className="hidden lg:flex absolute right-4 top-1/2 -translate-y-1/2 translate-x-1/2 w-[52px] h-[52px] bg-white rounded-full shadow-[0_4px_20px_rgb(0,0,0,0.12)] border border-gray-50 items-center justify-center text-gray-900 hover:text-primary hover:scale-105 transition-all z-10">
          <ChevronRight className="w-6 h-6 stroke-[2]" />
        </button>
      </div>
    </section>
  );
}
