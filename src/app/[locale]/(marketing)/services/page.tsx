import { setRequestLocale } from "next-intl/server"
import { getTranslations } from "next-intl/server"
import { MainLayout } from "@/components/layout"
import { Hero, CTA } from "@/components/sections"
import {
  Megaphone,
  Users,
  Palette,
  FileText,
  BarChart3,
  Mail,
  ArrowRight,
} from "lucide-react"
import { constructMetadata } from "@/lib/metadata"
import Link from "next/link"

export const metadata = constructMetadata({
  title: "서비스",
  description:
    "골든웨이브의 디지털 마케팅 서비스. 퍼포먼스 마케팅, SNS 마케팅, 브랜딩, 콘텐츠 마케팅, 데이터 분석, CRM 자동화까지 비즈니스 성장에 필요한 모든 서비스를 제공합니다.",
})

interface ServicesPageProps {
  params: Promise<{ locale: string }>
}

const services = [
  {
    icon: <Megaphone className="h-8 w-8" />,
    titleKey: "service1Title",
    descriptionKey: "service1Description",
    featuresKey: "service1Features",
    color: "bg-blue-500/10 text-blue-600",
  },
  {
    icon: <Users className="h-8 w-8" />,
    titleKey: "service2Title",
    descriptionKey: "service2Description",
    featuresKey: "service2Features",
    color: "bg-pink-500/10 text-pink-600",
  },
  {
    icon: <Palette className="h-8 w-8" />,
    titleKey: "service3Title",
    descriptionKey: "service3Description",
    featuresKey: "service3Features",
    color: "bg-purple-500/10 text-purple-600",
  },
  {
    icon: <FileText className="h-8 w-8" />,
    titleKey: "service4Title",
    descriptionKey: "service4Description",
    featuresKey: "service4Features",
    color: "bg-green-500/10 text-green-600",
  },
  {
    icon: <BarChart3 className="h-8 w-8" />,
    titleKey: "service5Title",
    descriptionKey: "service5Description",
    featuresKey: "service5Features",
    color: "bg-orange-500/10 text-orange-600",
  },
  {
    icon: <Mail className="h-8 w-8" />,
    titleKey: "service6Title",
    descriptionKey: "service6Description",
    featuresKey: "service6Features",
    color: "bg-cyan-500/10 text-cyan-600",
  },
]

export default async function ServicesPage({ params }: ServicesPageProps) {
  const { locale } = await params
  setRequestLocale(locale)

  const t = await getTranslations("Services")

  return (
    <MainLayout>
      <Hero title={t("title")} subtitle={t("subtitle")} />

      {/* Services Grid */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group p-8 rounded-2xl border bg-card hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${service.color} mb-6`}
                >
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">
                  {t(service.titleKey)}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {t(service.descriptionKey)}
                </p>
                <div className="pt-4 border-t">
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">포함 서비스: </span>
                    {t(service.featuresKey)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 lg:py-32 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              프로젝트 진행 프로세스
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              체계적인 프로세스로 확실한 성과를 만들어냅니다
            </p>
          </div>
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "상담 & 분석",
                  description: "비즈니스 현황 분석 및 목표 설정",
                },
                {
                  step: "02",
                  title: "전략 수립",
                  description: "데이터 기반 맞춤 마케팅 전략 설계",
                },
                {
                  step: "03",
                  title: "실행 & 최적화",
                  description: "캠페인 실행 및 실시간 A/B 테스트",
                },
                {
                  step: "04",
                  title: "리포팅 & 개선",
                  description: "성과 분석 및 지속적인 개선",
                },
              ].map((item, index) => (
                <div key={index} className="relative text-center">
                  <div className="text-6xl font-bold text-primary/10 mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                  {index < 3 && (
                    <ArrowRight className="hidden md:block absolute -right-4 top-8 w-8 h-8 text-muted-foreground/30" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing CTA */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              합리적인 비용으로 시작하세요
            </h2>
            <p className="text-muted-foreground mb-8">
              비즈니스 규모와 목표에 맞는 다양한 플랜을 제공합니다.
              무료 마케팅 진단으로 시작해 보세요.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
              >
                가격 플랜 보기
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 rounded-full border bg-background font-medium hover:bg-muted transition-colors"
              >
                무료 상담 신청
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTA
        title="지금 바로 시작하세요"
        description="무료 마케팅 진단으로 현재 상황을 분석하고, 맞춤형 성장 전략을 제안받으세요."
        buttonText="무료 상담 신청"
        buttonHref="/contact"
      />
    </MainLayout>
  )
}
