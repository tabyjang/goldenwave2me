import { MainLayout } from "@/components/layout"
import { Hero, BlogCard } from "@/components/sections"
import { getAllPosts } from "@/lib/mdx"
import { constructMetadata } from "@/lib/metadata"

export const metadata = constructMetadata({
  title: "Blog",
  description:
    "Insights, tutorials, and updates on web development. Stay up to date with the latest in Next.js, React, and more.",
})

interface BlogPageProps {
  params: Promise<{ locale: string }>
}

export default async function BlogPage({ params }: BlogPageProps) {
  const { locale } = await params
  const posts = await getAllPosts(locale)

  return (
    <MainLayout>
      <Hero
        title="Blog"
        subtitle="Insights, tutorials, and updates from our team. Stay up to date with the latest in web development."
      />
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, index) => (
              <BlogCard key={post.slug} post={post} index={index} />
            ))}
          </div>
        </div>
      </section>
    </MainLayout>
  )
}
