import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "골든웨이브 마케팅 - 템플릿 갤러리",
  description: "5가지 마케팅 웹사이트 템플릿을 둘러보세요",
}

export default function DemoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
