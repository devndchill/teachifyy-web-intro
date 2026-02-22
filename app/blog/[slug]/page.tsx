import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Clock, ArrowLeft, Tag } from 'lucide-react';
import SocialShare from '@/components/ui/SocialShare';
import ArticleCard from '@/components/blog/ArticleCard';
import { getArticleBySlug, articles } from '@/data/articles';
import { formatDate } from '@/lib/utils';
import { constructMetadata } from '@/lib/metadata';

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return constructMetadata({});
  }

  return constructMetadata({
    title: `${article.title} - Teachifyy Blog`,
    description: article.excerpt,
  });
}

export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = articles
    .filter((a) => a.id !== article.id && a.category === article.category)
    .slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-dark-50 border-b border-zinc-800">
        <div className="container-custom py-4">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-zinc-400 hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
        </div>
      </div>

      {/* Article Header */}
      <article className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {/* Meta */}
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                {article.category}
              </span>
              <span className="flex items-center gap-2 text-zinc-400 text-sm">
                <Calendar className="w-4 h-4" />
                {formatDate(article.publishedAt)}
              </span>
              <span className="flex items-center gap-2 text-zinc-400 text-sm">
                <Clock className="w-4 h-4" />
                {article.readTime} min read
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              {article.title}
            </h1>

            {/* Author */}
            <div className="flex items-center justify-between mb-8 pb-8 border-b border-zinc-800">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-zinc-700 overflow-hidden relative">
                  <Image
                    src={article.author.avatar}
                    alt={article.author.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-white">{article.author.name}</p>
                  <p className="text-sm text-zinc-400">{article.author.bio}</p>
                </div>
              </div>

              {/* Social Share */}
              <SocialShare
                url={`#`}
                title={article.title}
                description={article.excerpt}
                className="hidden md:flex"
              />
            </div>

            {/* Featured Image */}
            <div className="relative aspect-video rounded-2xl overflow-hidden mb-8 bg-zinc-800">
              <Image
                src={article.thumbnail}
                alt={article.title}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Mobile Social Share */}
            <div className="md:hidden mb-8">
              <SocialShare
                url={`#`}
                title={article.title}
                description={article.excerpt}
              />
            </div>

            {/* Content */}
            <div className="prose prose-invert prose-lg max-w-none mb-12">
              <div
                className="text-zinc-300 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: article.content.replace(/\n/g, '<br />') }}
              />
            </div>

            {/* Tags */}
            {article.tags.length > 0 && (
              <div className="flex items-center gap-3 flex-wrap mb-8 pb-8 border-b border-zinc-800">
                <Tag className="w-5 h-5 text-zinc-400" />
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-zinc-800 text-zinc-300 rounded-full text-sm hover:bg-zinc-700 transition-colors cursor-pointer"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {/* Author Bio */}
            <div className="card p-6 mb-12">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-full bg-zinc-700 overflow-hidden relative shrink-0">
                  <Image
                    src={article.author.avatar}
                    alt={article.author.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm text-zinc-400 mb-1">Written by</p>
                  <p className="font-semibold text-white text-lg mb-2">{article.author.name}</p>
                  <p className="text-zinc-400">{article.author.bio}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="py-12 md:py-16 bg-dark-50">
          <div className="container-custom">
            <h2 className="text-2xl md:text-3xl font-bold mb-8">
              Related <span className="text-primary">Articles</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {relatedArticles.map((relatedArticle) => (
                <ArticleCard key={relatedArticle.id} article={relatedArticle} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
