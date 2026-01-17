import { setRequestLocale } from "next-intl/server"
import { getTranslations } from "next-intl/server"
import { MainLayout } from "@/components/layout"
import { Hero, PricingCard } from "@/components/sections"
import { pricingPlans } from "@/lib/pricing-data"
import { constructMetadata } from "@/lib/metadata"

export const metadata = constructMetadata({
  title: "Pricing",
  description:
    "Simple, transparent pricing for Next Starter Kit. Choose the plan that's right for you.",
})

interface PricingPageProps {
  params: Promise<{ locale: string }>
}

export default async function PricingPage({ params }: PricingPageProps) {
  const { locale } = await params
  setRequestLocale(locale)

  const t = await getTranslations("Pricing")

  return (
    <MainLayout>
      <Hero title={t("title")} subtitle={t("subtitle")} />
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3 lg:items-center max-w-5xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <PricingCard key={plan.name} plan={plan} index={index} />
            ))}
          </div>
        </div>
      </section>
    </MainLayout>
  )
}
