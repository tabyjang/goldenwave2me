"use client"

import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { SlideIn } from "@/components/animation"
import type { BlogPostMeta } from "@/lib/mdx/types"

interface BlogCardProps {
  post: BlogPostMeta
  index?: number
}

export function BlogCard({ post, index = 0 }: BlogCardProps) {
  return (
    <SlideIn direction="up" delay={0.1 * (index + 1)}>
      <Link href={`/blog/${post.slug}`}>
        <Card className="h-full overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1">
          <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
            <div className="text-4xl font-bold text-primary/30">
              {post.title.charAt(0)}
            </div>
          </div>
          <CardContent className="p-6">
            <div className="flex flex-wrap gap-2 mb-3">
              {post.tags.slice(0, 2).map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h3 className="font-semibold text-lg line-clamp-2 mb-2">
              {post.title}
            </h3>
            <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
              {post.excerpt}
            </p>
            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <span>{post.author.name}</span>
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </time>
            </div>
          </CardContent>
        </Card>
      </Link>
    </SlideIn>
  )
}
