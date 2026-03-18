"use client";
import BlogHero from "@/components/blog/BlogHero";
import FeaturedArticleSection from "@/components/blog/FeaturedArticleSection";
import BlogListSection from "@/components/blog/BlogListSection";
import BlogCTA from "@/components/blog/BlogCTA";
import BlogNewsletter from "@/components/blog/BlogNewsletter";
import { useGetBlogsQuery } from "../api/blog";
import { Blog } from "@/types/blog";

export default function BlogPage() {
  const { data, isLoading } = useGetBlogsQuery();

  const blogs: Blog[] = data?.data ?? [];
  const featuredBlog: Blog | null = blogs.length > 0 ? blogs[blogs.length - 1] : null;

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white font-sans text-gray-900 overflow-x-hidden flex items-center justify-center">
        <div className="text-gray-400 text-lg animate-pulse">Loading blogs...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 overflow-x-hidden">
      <BlogHero />
      <FeaturedArticleSection blog={featuredBlog} />
      <BlogListSection blogs={blogs} />
      <BlogCTA />
      <BlogNewsletter />
    </div>
  );
}
