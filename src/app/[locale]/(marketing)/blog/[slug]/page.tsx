import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { MainLayout } from "@/components/layout"
import { BlogContent } from "@/components/sections"
import { BlogPostingJsonLd } from "@/components/json-ld"
import { getPostBySlug, getAllPostParams } from "@/lib/mdx"
import { siteConfig } from "@/lib/site-config"

interface BlogPostPageProps {
  params: Promise<{ slug: string; locale: string }>
}

export async function generateStaticParams() {
  return getAllPostParams()
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug, locale } = await params
  const post = await getPostBySlug(slug, locale)

  if (!post) {
    return {
      title: "Post Not Found",
    }
  }

  return {
    title: `${post.title} | ${siteConfig.name}`,
    description: post.excerpt,
    authors: [{ name: post.author.name }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author.name],
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug, locale } = await params
  const post = await getPostBySlug(slug, locale)

  if (!post) {
    notFound()
  }

  return (
    <MainLayout>
      <BlogPostingJsonLd
        title={post.title}
        description={post.excerpt}
        datePublished={post.date}
        authorName={post.author.name}
        url={`${siteConfig.url}/${locale}/blog/${post.slug}`}
        tags={post.tags}
      />
      <BlogContent post={post} />
    </MainLayout>
  )
}
