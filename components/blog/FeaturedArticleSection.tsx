import Image from "next/image";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { Blog } from "@/types/blog";

interface Props {
  blog: Blog | null;
}

export default function FeaturedArticleSection({ blog }: Props) {
  if (!blog) return null;

  return (
    <section className="pb-16 mt-6">
      <div className="container-custom max-w-5xl">
        <Link
          href={`/blog/${blog.id}`}
          className="bg-white rounded-[2rem] border border-gray-100/50 shadow-[0_8px_30px_rgb(0,0,0,0.06)] overflow-hidden flex flex-col md:flex-row p-3 gap-8 items-center group hover:shadow-[0_8px_30px_rgb(0,0,0,0.1)] transition-all "
        >
          <div className="w-full md:w-[50%] relative aspect-[4/3] rounded-3xl overflow-hidden self-stretch">
            <Image
              src={blog.thumbnail}
              alt={blog.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              unoptimized
            />
          </div>
          <div className="w-full md:w-[50%] py-8 pr-8 flex flex-col justify-center">
            <div className="flex items-center gap-4 mb-5">
              <span className="bg-[#EBF3FB] text-dark-900 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                {blog.category}
              </span>
              <span className="text-sm text-gray-400 font-medium flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-gray-300 block"></span>
                {new Date(blog.createdAt).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
            </div>
            <h2 className="text-[1.75rem] md:text-xl text-gray-900 mb-4 leading-snug group-hover:text-primary transition-colors tracking-tight">
              {blog.title}
            </h2>
            <p className="text-gray-500 mb-8 leading-relaxed">
              {blog.description}
            </p>
            <div className="mt-auto flex justify-end">
              <span className="inline-flex items-center gap-2 text-[15px] font-bold text-gray-900 group-hover:text-primary transition-colors">
                Read Article <ChevronRight className="w-4 h-4 stroke-[2.5]" />
              </span>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}
