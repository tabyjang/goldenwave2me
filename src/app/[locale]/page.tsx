import { setRequestLocale } from "next-intl/server"
import { getTranslations } from "next-intl/server"
import { MainLayout } from "@/components/layout"
import { Hero, Features, CTA } from "@/components/sections"
import { Zap, Shield, Palette } from "lucide-react"

interface HomePageProps {
  params: Promise<{ locale: string }>
}

export default async function Home({ params }: HomePageProps) {
  const { locale } = await params
  setRequestLocale(locale)

  const t = await getTranslations("HomePage")

  const features = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: t("feature1Title"),
      description: t("feature1Description"),
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: t("feature2Title"),
      description: t("feature2Description"),
    },
    {
      icon: <Palette className="h-6 w-6" />,
      title: t("feature3Title"),
      description: t("feature3Description"),
    },
  ]

  return (
    <MainLayout>
      <Hero
        title={t("title")}
        subtitle={t("subtitle")}
        primaryCta={{
          text: t("cta"),
          href: "#features",
        }}
        secondaryCta={{
          text: "View Demo",
          href: "https://github.com",
        }}
        showDemo
      />
      <Features
        title={t("featuresTitle")}
        subtitle={t("featuresSubtitle")}
        features={features}
      />
      <CTA
        title={t("ctaTitle")}
        description={t("ctaDescription")}
        buttonText={t("cta")}
        buttonHref="https://github.com"
      />
    </MainLayout>
  )
}
