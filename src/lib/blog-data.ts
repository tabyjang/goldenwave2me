export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  content: string
  date: string
  author: {
    name: string
    avatar?: string
  }
  coverImage: string
  tags: string[]
}

const posts: BlogPost[] = [
  {
    slug: "getting-started-with-nextjs",
    title: "Getting Started with Next.js 14",
    excerpt:
      "Learn how to build modern web applications with Next.js 14 and the App Router. This comprehensive guide covers everything you need to know.",
    content: `
      <p>Next.js 14 introduces powerful new features that make building web applications easier than ever. In this guide, we'll explore the key concepts and best practices.</p>

      <h2>What's New in Next.js 14</h2>
      <p>The latest version of Next.js brings significant improvements to the developer experience, including:</p>
      <ul>
        <li>Improved App Router with better performance</li>
        <li>Server Actions for seamless form handling</li>
        <li>Partial Prerendering for faster page loads</li>
      </ul>

      <h2>Getting Started</h2>
      <p>To create a new Next.js project, run the following command:</p>
      <pre><code>npx create-next-app@latest my-app</code></pre>

      <p>This will set up a new project with all the latest features and best practices built in.</p>

      <h2>Conclusion</h2>
      <p>Next.js 14 is a powerful framework for building modern web applications. With its improved performance and developer experience, it's the perfect choice for your next project.</p>
    `,
    date: "2026-01-10",
    author: {
      name: "Alex Chen",
    },
    coverImage: "/images/blog/nextjs.jpg",
    tags: ["Next.js", "React", "Tutorial"],
  },
  {
    slug: "tailwind-css-best-practices",
    title: "Tailwind CSS Best Practices for 2026",
    excerpt:
      "Discover the best practices for using Tailwind CSS in your projects. From organization to optimization, we cover it all.",
    content: `
      <p>Tailwind CSS has become the go-to styling solution for modern web development. Let's explore how to use it effectively.</p>

      <h2>Organizing Your Styles</h2>
      <p>One of the keys to success with Tailwind is keeping your styles organized. Here are some tips:</p>
      <ul>
        <li>Use component-based architecture</li>
        <li>Extract common patterns into custom classes</li>
        <li>Leverage the @apply directive wisely</li>
      </ul>

      <h2>Performance Optimization</h2>
      <p>Tailwind's JIT compiler ensures you only ship the CSS you need. But there are still ways to optimize:</p>
      <ul>
        <li>Purge unused styles in production</li>
        <li>Use CSS layers for better specificity control</li>
        <li>Consider code splitting for large applications</li>
      </ul>

      <h2>Conclusion</h2>
      <p>With these best practices, you'll be able to build beautiful, performant applications with Tailwind CSS.</p>
    `,
    date: "2026-01-08",
    author: {
      name: "Sarah Kim",
    },
    coverImage: "/images/blog/tailwind.jpg",
    tags: ["Tailwind CSS", "CSS", "Design"],
  },
  {
    slug: "react-server-components",
    title: "Understanding React Server Components",
    excerpt:
      "A deep dive into React Server Components and how they change the way we build React applications.",
    content: `
      <p>React Server Components represent a paradigm shift in how we think about React applications. Let's explore what they are and how to use them.</p>

      <h2>What Are Server Components?</h2>
      <p>Server Components are React components that render on the server and send HTML to the client. This has several benefits:</p>
      <ul>
        <li>Reduced JavaScript bundle size</li>
        <li>Direct access to backend resources</li>
        <li>Improved initial page load performance</li>
      </ul>

      <h2>When to Use Server Components</h2>
      <p>Server Components are ideal for:</p>
      <ul>
        <li>Data fetching components</li>
        <li>Static content rendering</li>
        <li>Components that don't need interactivity</li>
      </ul>

      <h2>Client vs Server Components</h2>
      <p>Understanding when to use each type is crucial for building efficient applications. Use client components when you need interactivity, and server components for everything else.</p>
    `,
    date: "2026-01-05",
    author: {
      name: "Mike Johnson",
    },
    coverImage: "/images/blog/react.jpg",
    tags: ["React", "Server Components", "Performance"],
  },
  {
    slug: "building-accessible-websites",
    title: "Building Accessible Websites: A Complete Guide",
    excerpt:
      "Learn how to create websites that are accessible to everyone. This guide covers WCAG guidelines, testing tools, and best practices.",
    content: `
      <p>Web accessibility ensures that websites can be used by everyone, including people with disabilities. It's not just a nice-to-have—it's essential.</p>

      <h2>Why Accessibility Matters</h2>
      <p>Accessibility benefits everyone:</p>
      <ul>
        <li>People with permanent disabilities</li>
        <li>Users with temporary impairments</li>
        <li>Users in challenging environments</li>
        <li>Search engine optimization</li>
      </ul>

      <h2>WCAG Guidelines</h2>
      <p>The Web Content Accessibility Guidelines (WCAG) provide a framework for making web content accessible. Key principles include:</p>
      <ul>
        <li>Perceivable: Information must be presentable</li>
        <li>Operable: Interface must be navigable</li>
        <li>Understandable: Content must be clear</li>
        <li>Robust: Content must be compatible</li>
      </ul>

      <h2>Testing Your Site</h2>
      <p>Use tools like Lighthouse, axe, and screen readers to test your site's accessibility.</p>
    `,
    date: "2026-01-02",
    author: {
      name: "Emily Davis",
    },
    coverImage: "/images/blog/accessibility.jpg",
    tags: ["Accessibility", "Web Development", "UX"],
  },
]

export function getAllPosts(): BlogPost[] {
  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((post) => post.slug === slug)
}

export function getAllSlugs(): string[] {
  return posts.map((post) => post.slug)
}
