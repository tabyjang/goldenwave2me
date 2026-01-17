import { MainLayout } from "@/components/layout"
import { Hero } from "@/components/sections"
import { constructMetadata } from "@/lib/metadata"
import {
  Megaphone,
  Users,
  TrendingUp,
  Target,
  Search,
  Mail,
  BarChart3,
  Palette,
} from "lucide-react"

export const metadata = constructMetadata({
  title: "서비스",
  description:
    "골든웨이브의 전문 디지털 마케팅 서비스를 만나보세요. 퍼포먼스 마케팅, SNS 마케팅, 그로스 해킹, 브랜딩까지 비즈니스 성장에 필요한 모든 솔루션을 제공합니다.",
})

const services = [
  {
    icon: <Megaphone className="h-8 w-8" />,
    title: "퍼포먼스 마케팅",
    description:
      "데이터 기반 광고 운영으로 확실한 성과를 만듭니다. Google Ads, Meta Ads, 네이버 검색광고를 최적화하여 ROAS를 극대화합니다.",
    features: [
      "Google Ads 캠페인 최적화",
      "Meta 광고 (Facebook, Instagram)",
      "네이버 검색광고 운영",
      "실시간 성과 분석 및 리포팅",
      "A/B 테스트 및 전환율 최적화",
    ],
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: "SNS 마케팅",
    description:
      "브랜드와 고객이 만나는 소셜미디어를 효과적으로 관리합니다. 인스타그램, 유튜브, 틱톡 등 각 플랫폼의 특성에 맞는 콘텐츠 전략을 제공합니다.",
    features: [
      "인스타그램 콘텐츠 기획 및 제작",
      "유튜브 채널 운영 및 최적화",
      "틱톡 숏폼 콘텐츠 제작",
      "인플루언서 협업 매칭",
      "커뮤니티 관리 및 운영",
    ],
  },
  {
    icon: <TrendingUp className="h-8 w-8" />,
    title: "그로스 해킹",
    description:
      "빠른 성장을 위한 데이터 중심 전략을 수립합니다. 사용자 행동 분석, 전환 퍼널 최적화, 리텐션 향상 전략으로 지속 가능한 성장을 돕습니다.",
    features: [
      "사용자 행동 데이터 분석",
      "전환 퍼널 최적화",
      "리텐션 및 재구매율 향상",
      "바이럴 마케팅 전략",
      "제품 주도 성장 (PLG) 전략",
    ],
  },
  {
    icon: <Target className="h-8 w-8" />,
    title: "브랜딩",
    description:
      "차별화된 브랜드 아이덴티티를 구축합니다. 브랜드 전략 수립부터 비주얼 아이덴티티, 메시지 개발까지 일관된 브랜드 경험을 만듭니다.",
    features: [
      "브랜드 전략 및 포지셔닝",
      "비주얼 아이덴티티 디자인",
      "브랜드 메시지 및 스토리텔링",
      "브랜드 가이드라인 제작",
      "브랜드 캠페인 기획",
    ],
  },
  {
    icon: <Search className="h-8 w-8" />,
    title: "SEO/검색 최적화",
    description:
      "검색 엔진에서 높은 순위를 차지하여 자연 유입을 늘립니다. 기술적 SEO부터 콘텐츠 최적화까지 종합적인 검색 마케팅을 제공합니다.",
    features: [
      "키워드 리서치 및 전략 수립",
      "온페이지 SEO 최적화",
      "기술적 SEO 개선",
      "백링크 전략 및 구축",
      "검색 순위 모니터링",
    ],
  },
  {
    icon: <Mail className="h-8 w-8" />,
    title: "이메일 마케팅",
    description:
      "효과적인 이메일 캠페인으로 고객과 소통합니다. 자동화된 이메일 시퀀스, 세분화된 타겟팅, A/B 테스트로 전환율을 높입니다.",
    features: [
      "이메일 캠페인 기획 및 제작",
      "마케팅 자동화 설정",
      "고객 세그먼트 분석",
      "이메일 템플릿 디자인",
      "성과 분석 및 최적화",
    ],
  },
  {
    icon: <BarChart3 className="h-8 w-8" />,
    title: "데이터 분석",
    description:
      "정확한 데이터로 올바른 의사결정을 돕습니다. GA4, BigQuery, Looker Studio를 활용한 종합 분석과 인사이트를 제공합니다.",
    features: [
      "Google Analytics 4 설정 및 분석",
      "커스텀 대시보드 구축",
      "전환 추적 및 어트리뷰션",
      "사용자 여정 분석",
      "월간 성과 리포트",
    ],
  },
  {
    icon: <Palette className="h-8 w-8" />,
    title: "크리에이티브",
    description:
      "눈길을 사로잡는 디자인과 콘텐츠를 제작합니다. 광고 소재, 랜딩 페이지, 영상 콘텐츠까지 브랜드 메시지를 효과적으로 전달합니다.",
    features: [
      "광고 크리에이티브 제작",
      "랜딩 페이지 디자인",
      "영상 콘텐츠 제작",
      "인포그래픽 디자인",
      "배너 및 소셜 미디어 디자인",
    ],
  },
]

export default function ServicesPage() {
  return (
    <MainLayout>
      <Hero
        title="서비스"
        subtitle="골든웨이브는 비즈니스 성장에 필요한 모든 디지털 마케팅 솔루션을 제공합니다. 데이터 기반 전략으로 확실한 성과를 만듭니다."
      />

      {/* Services Grid */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 md:gap-16">
            {services.map((service, index) => (
              <div
                key={index}
                className="grid md:grid-cols-[auto_1fr] gap-8 items-start"
              >
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary">
                    {service.icon}
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">
                    {service.title}
                  </h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-start gap-3 text-muted-foreground"
                      >
                        <span className="text-primary mt-1.5">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-muted/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            프로젝트를 시작할 준비가 되셨나요?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            무료 마케팅 진단으로 현재 상황을 분석하고, 맞춤형 성장 전략을
            제안받으세요.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            무료 상담 신청
          </a>
        </div>
      </section>
    </MainLayout>
  )
}
