import { Container } from "@/components/layout"
import type { BlogPost } from "@/lib/mdx/types"

interface BlogContentProps {
  post: BlogPost
}

export function BlogContent({ post }: BlogContentProps) {
  return (
    <article className="py-12 lg:py-20">
      <Container>
        {/* Header */}
        <header className="mx-auto max-w-3xl text-center mb-12">
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary"
              >
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl mb-6">
            {post.title}
          </h1>
          <div className="flex items-center justify-center gap-4 text-muted-foreground">
            <span className="font-medium">{post.author.name}</span>
            <span>•</span>
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </time>
          </div>
        </header>

        {/* Cover Image Placeholder */}
        <div className="mx-auto max-w-4xl mb-12">
          <div className="aspect-video rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
            <div className="text-6xl font-bold text-primary/30">
              {post.title.charAt(0)}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="mx-auto max-w-3xl">
          <div
            className="prose prose-lg dark:prose-invert max-w-none
              prose-headings:font-bold prose-headings:tracking-tight
              prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4
              prose-p:text-muted-foreground prose-p:leading-relaxed
              prose-a:text-primary prose-a:no-underline hover:prose-a:underline
              prose-ul:text-muted-foreground
              prose-li:marker:text-primary
              prose-pre:bg-muted prose-pre:text-foreground
              prose-code:text-primary prose-code:bg-muted prose-code:px-1 prose-code:py-0.5 prose-code:rounded"
          >
            {post.content}
          </div>
        </div>

        {/* Footer */}
        <footer className="mx-auto max-w-3xl mt-16 pt-8 border-t">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
              <span className="text-lg font-bold text-primary/50">
                {post.author.name.charAt(0)}
              </span>
            </div>
            <div>
              <p className="font-semibold">{post.author.name}</p>
              <p className="text-sm text-muted-foreground">Author</p>
            </div>
          </div>
        </footer>
      </Container>
    </article>
  )
}
