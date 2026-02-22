import { Metadata } from 'next';
import ArticleCard from '@/components/blog/ArticleCard';
import { articles } from '@/data/articles';
import { constructMetadata } from '@/lib/metadata';

export const metadata: Metadata = constructMetadata({
  title: 'Blog',
  description: 'Read our latest articles on web development, programming best practices, and industry insights.',
});

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="section-padding bg-gradient-to-b from-dark to-dark-50">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="text-primary">Blog</span>
            </h1>
            <p className="text-lg text-zinc-400">
              Stay updated with the latest web development trends, tutorials, and best practices from industry experts.
            </p>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-12 md:py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {articles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
