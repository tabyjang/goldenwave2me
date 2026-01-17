import { notFound } from "next/navigation"
import { ThemeProvider } from "next-themes"
import type { ThemeName } from "@/types/theme"
import { themes } from "@/themes"
import { TemplateThemeProvider } from "@/components/providers/template-theme-provider"

const validTemplates = Object.keys(themes) as ThemeName[]

interface TemplateLayoutProps {
  children: React.ReactNode
  params: Promise<{ template: string }>
}

export async function generateStaticParams() {
  return validTemplates.map((template) => ({ template }))
}

export default async function TemplateLayout({
  children,
  params,
}: TemplateLayoutProps) {
  const { template } = await params

  if (!validTemplates.includes(template as ThemeName)) {
    notFound()
  }

  const themeName = template as ThemeName

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <TemplateThemeProvider themeName={themeName}>
        {children}
      </TemplateThemeProvider>
    </ThemeProvider>
  )
}
