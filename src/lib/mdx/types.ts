export interface BlogFrontmatter {
  title: string
  date: string
  author: {
    name: string
    avatar?: string
  }
  coverImage: string
  tags: string[]
  excerpt: string
}

export interface BlogPost extends BlogFrontmatter {
  slug: string
  content: React.ReactNode
}

export interface BlogPostMeta extends BlogFrontmatter {
  slug: string
}
