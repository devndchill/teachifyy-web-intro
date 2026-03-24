"use client";
import BlogHero from "@/components/blog/id/BlogHero";
import KeyTakeaways from "@/components/blog/id/KeyTakeaways";
import BlogContentSection from "@/components/blog/id/BlogContentSection";
import BlogAdditionalSection from "@/components/blog/id/BlogAdditionalSection";
import BlogCTA from "@/components/blog/id/BlogCTA";
import BlogListSection from "@/components/blog/BlogListSection";
import { useGetBlogByIdQuery } from "@/app/api/blog";
import { useParams } from "next/navigation";
import BlogNewsletter from "@/components/blog/BlogNewsletter";

export default function BlogByIdPage() {
  const { id } = useParams();
  const { data, isLoading } = useGetBlogByIdQuery(id as string);

  const blog = data?.data;

  if (isLoading) {
    return (
      <main className="min-h-screen bg-white dark:bg-black flex items-center justify-center">
        <div className="text-zinc-500 text-lg animate-pulse">
          Loading blog...
        </div>
      </main>
    );
  }

  if (!blog) return null;

  return (
    <main className="min-h-screen bg-white dark:bg-black">
      <BlogHero hero={{ ...blog.hero, category: blog?.category }} date={blog.createdAt} />
      <KeyTakeaways data={blog.keyTakeaways} />
      <BlogContentSection content={blog.content} />
      {blog.additionalSection && (
        <BlogAdditionalSection data={blog.additionalSection} />
      )}
      <BlogCTA />
      <BlogListSection blogs={[]} />
      <BlogNewsletter />
    </main>
  );
}
