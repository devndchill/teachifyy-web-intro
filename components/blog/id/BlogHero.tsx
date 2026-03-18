import Image from "next/image";
import { BlogDetailHero } from "@/types/blog";

export default function BlogHero({ hero }: { hero: BlogDetailHero }) {
  return (
    <section className="pt-8 pb-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="order-2 lg:order-1 flex flex-col items-start gap-4">
            <span className="px-3 py-1 bg-[#DDE6F2] dark:bg-zinc-800 text-black dark:text-zinc-300 rounded-full text-xs tracking-wider uppercase border border-zinc-200 dark:border-zinc-700 shadow-sm">
              {hero.category}{" "}
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-zinc-900 dark:text-white leading-tight">
              {hero.title}
            </h1>
            <p className="text-zinc-600 dark:text-zinc-400 text-base md:text-lg">
              {hero.description}
            </p>
            <div className="flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400 mt-2">
              <span className="font-medium">By {hero.author.name}</span>
              <span>•</span>
              <span>{hero.author.readTime} min read</span>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-zinc-100 dark:border-zinc-800">
              <Image
                src={hero.image}
                alt={hero.title}
                fill
                className="object-cover"
                priority
                unoptimized
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
