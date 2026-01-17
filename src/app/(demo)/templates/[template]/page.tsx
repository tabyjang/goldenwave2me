import { notFound } from "next/navigation"
import type { Metadata } from "next"
import type { ThemeName } from "@/types/theme"
import { themes } from "@/themes"
import { defaultSiteConfig } from "@/config/site.config"

// 템플릿별 컴포넌트
import { MinimalTemplate } from "@/components/templates/minimal"
import { BoldTemplate } from "@/components/templates/bold"
import { DarkTemplate } from "@/components/templates/dark"
import { WaveTemplate } from "@/components/templates/wave"
import { OnepageTemplate } from "@/components/templates/onepage"

const validTemplates = Object.keys(themes) as ThemeName[]

interface TemplatePageProps {
  params: Promise<{ template: string }>
}

export async function generateMetadata({
  params,
}: TemplatePageProps): Promise<Metadata> {
  const { template } = await params
  const theme = themes[template as ThemeName]

  if (!theme) {
    return { title: "템플릿을 찾을 수 없습니다" }
  }

  return {
    title: `${theme.displayName} - 골든웨이브 마케팅 템플릿`,
    description: theme.description,
  }
}

export default async function TemplatePage({ params }: TemplatePageProps) {
  const { template } = await params

  if (!validTemplates.includes(template as ThemeName)) {
    notFound()
  }

  const siteConfig = {
    ...defaultSiteConfig,
    theme: template as ThemeName,
  }

  // 템플릿별 컴포넌트 렌더링
  switch (template) {
    case "minimal":
      return <MinimalTemplate config={siteConfig} />
    case "bold":
      return <BoldTemplate config={siteConfig} />
    case "dark":
      return <DarkTemplate config={siteConfig} />
    case "wave":
      return <WaveTemplate config={siteConfig} />
    case "onepage":
      return <OnepageTemplate config={siteConfig} />
    default:
      return <MinimalTemplate config={siteConfig} />
  }
}
