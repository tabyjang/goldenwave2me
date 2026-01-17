import { MainLayout } from "@/components/layout"
import { Hero, Features, CTA } from "@/components/sections"
import { BarChart3, Target, FileText, Users, TrendingUp, Megaphone } from "lucide-react"

const features = [
  {
    icon: <BarChart3 className="h-6 w-6" />,
    title: "데이터 드리븐 전략",
    description:
      "직감이 아닌 데이터로 의사결정합니다. 실시간 분석과 A/B 테스트로 최적의 마케팅 전략을 도출합니다.",
  },
  {
    icon: <Target className="h-6 w-6" />,
    title: "통합 마케팅 솔루션",
    description:
      "광고, 콘텐츠, SNS, 브랜딩을 하나의 전략으로 통합합니다. 채널 간 시너지로 효율을 극대화합니다.",
  },
  {
    icon: <FileText className="h-6 w-6" />,
    title: "투명한 성과 리포팅",
    description:
      "주간/월간 상세 리포트를 제공합니다. ROAS, CPA, 전환율 등 핵심 지표를 명확하게 공유합니다.",
  },
]

const stats = [
  { value: "500+", label: "프로젝트 완료" },
  { value: "150%", label: "평균 ROAS 상승" },
  { value: "98%", label: "고객 만족도" },
]

const clients = [
  "삼성전자", "현대자동차", "LG전자", "SK텔레콤", "카카오", "네이버"
]

const services = [
  {
    icon: <Megaphone className="h-8 w-8" />,
    title: "퍼포먼스 마케팅",
    description: "Google, Meta, 네이버 광고 최적화",
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: "SNS 마케팅",
    description: "인스타그램, 유튜브, 틱톡 운영",
  },
  {
    icon: <TrendingUp className="h-8 w-8" />,
    title: "그로스 해킹",
    description: "데이터 기반 성장 전략 수립",
  },
]

export default function MarketingPage() {
  return (
    <MainLayout>
      <Hero
        title="데이터로 만드는 성장의 파도"
        subtitle="골든웨이브는 데이터 기반 디지털 마케팅으로 브랜드의 잠재력을 극대화합니다. 퍼포먼스 마케팅부터 브랜딩까지, 비즈니스 성장의 모든 여정을 함께합니다."
        primaryCta={{
          text: "무료 상담 신청",
          href: "/contact",
        }}
        secondaryCta={{
          text: "서비스 알아보기",
          href: "/services",
        }}
      />

      {/* Stats Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Features
        title="왜 골든웨이브인가?"
        subtitle="10년간 500개 이상의 브랜드와 함께한 노하우로 확실한 성과를 만들어냅니다."
        features={features}
      />

      {/* Services Preview */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">핵심 서비스</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              비즈니스 목표에 맞는 최적의 마케팅 솔루션을 제공합니다
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl border bg-card hover:shadow-lg transition-shadow text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <a
              href="/services"
              className="inline-flex items-center text-primary hover:underline font-medium"
            >
              전체 서비스 보기 →
            </a>
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <p className="text-center text-muted-foreground mb-8">
            500개 이상의 브랜드가 골든웨이브와 함께 성장했습니다
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60">
            {clients.map((client, index) => (
              <span key={index} className="text-lg font-semibold text-muted-foreground">
                {client}
              </span>
            ))}
          </div>
        </div>
      </section>

      <CTA
        title="지금 성장을 시작하세요"
        description="무료 마케팅 진단으로 현재 상황을 분석하고, 맞춤형 성장 전략을 제안받으세요."
        buttonText="무료 상담 신청"
        buttonHref="/contact"
      />
    </MainLayout>
  )
}
