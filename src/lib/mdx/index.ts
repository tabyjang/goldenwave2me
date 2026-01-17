import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { compileMDX } from "next-mdx-remote/rsc"
import { mdxComponents } from "./components"
import type { BlogFrontmatter, BlogPost, BlogPostMeta } from "./types"

const CONTENT_PATH = path.join(process.cwd(), "content/blog")

/**
 * 모든 포스트 메타데이터 조회 (목록용)
 */
export async function getAllPosts(locale: string = "ko"): Promise<BlogPostMeta[]> {
  const localePath = path.join(CONTENT_PATH, locale)

  if (!fs.existsSync(localePath)) {
    return []
  }

  const files = fs.readdirSync(localePath).filter((f) => f.endsWith(".mdx"))

  const posts = files.map((filename) => {
    const filePath = path.join(localePath, filename)
    const fileContent = fs.readFileSync(filePath, "utf-8")
    const { data } = matter(fileContent)

    return {
      slug: filename.replace(".mdx", ""),
      ...(data as BlogFrontmatter),
    }
  })

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )
}

/**
 * 단일 포스트 조회 (상세용)
 */
export async function getPostBySlug(
  slug: string,
  locale: string = "ko"
): Promise<BlogPost | null> {
  const filePath = path.join(CONTENT_PATH, locale, `${slug}.mdx`)

  if (!fs.existsSync(filePath)) {
    return null
  }

  const source = fs.readFileSync(filePath, "utf-8")

  const { content, frontmatter } = await compileMDX<BlogFrontmatter>({
    source,
    options: { parseFrontmatter: true },
    components: mdxComponents,
  })

  return {
    slug,
    content,
    ...frontmatter,
  }
}

/**
 * SSG용 모든 slug 조회
 */
export function getAllSlugs(locale: string = "ko"): string[] {
  const localePath = path.join(CONTENT_PATH, locale)

  if (!fs.existsSync(localePath)) {
    return []
  }

  return fs
    .readdirSync(localePath)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(".mdx", ""))
}

/**
 * 모든 locale의 slug 조합 조회 (generateStaticParams용)
 */
export function getAllPostParams(): { slug: string; locale: string }[] {
  const locales = ["ko", "en"]
  const params: { slug: string; locale: string }[] = []

  for (const locale of locales) {
    const slugs = getAllSlugs(locale)
    slugs.forEach((slug) => params.push({ slug, locale }))
  }

  return params
}
