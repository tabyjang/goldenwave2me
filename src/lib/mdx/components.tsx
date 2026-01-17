import type { MDXComponents } from "mdx/types"
import Image from "next/image"
import Link from "next/link"

export const mdxComponents: MDXComponents = {
  h1: ({ children }) => (
    <h1 className="text-3xl font-bold mt-8 mb-4">{children}</h1>
  ),
  h2: ({ children }) => (
    <h2 className="text-2xl font-bold mt-12 mb-4">{children}</h2>
  ),
  h3: ({ children }) => (
    <h3 className="text-xl font-bold mt-8 mb-3">{children}</h3>
  ),
  p: ({ children }) => (
    <p className="text-muted-foreground leading-relaxed mb-4">{children}</p>
  ),
  ul: ({ children }) => (
    <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-2">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="list-decimal list-inside text-muted-foreground mb-4 space-y-2">
      {children}
    </ol>
  ),
  li: ({ children }) => <li className="ml-4">{children}</li>,
  a: ({ href, children }) => (
    <Link
      href={href || "#"}
      className="text-primary hover:underline"
    >
      {children}
    </Link>
  ),
  code: ({ children }) => (
    <code className="text-primary bg-muted px-1.5 py-0.5 rounded text-sm">
      {children}
    </code>
  ),
  pre: ({ children }) => (
    <pre className="bg-muted text-foreground p-4 rounded-lg overflow-x-auto mb-4 text-sm">
      {children}
    </pre>
  ),
  blockquote: ({ children }) => (
    <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground my-4">
      {children}
    </blockquote>
  ),
  img: (props) => (
    <Image
      {...(props as React.ComponentProps<typeof Image>)}
      alt={props.alt || ""}
      width={800}
      height={400}
      className="rounded-lg my-8"
    />
  ),
  hr: () => <hr className="my-8 border-border" />,
  table: ({ children }) => (
    <div className="overflow-x-auto my-4">
      <table className="w-full border-collapse border border-border">
        {children}
      </table>
    </div>
  ),
  th: ({ children }) => (
    <th className="border border-border bg-muted px-4 py-2 text-left font-bold">
      {children}
    </th>
  ),
  td: ({ children }) => (
    <td className="border border-border px-4 py-2">{children}</td>
  ),
}
