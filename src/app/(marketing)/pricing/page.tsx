import { MainLayout } from "@/components/layout"
import { Hero } from "@/components/sections"
import { constructMetadata } from "@/lib/metadata"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata = constructMetadata({
  title: "가격",
  description:
    "골든웨이브의 투명한 가격 정책을 확인하세요. 스타트업부터 대기업까지, 비즈니스 규모에 맞는 맞춤형 마케팅 플랜을 제공합니다.",
})

const pricingPlans = [
  {
    name: "스타터",
    price: "300만원",
    period: "/월",
    description: "스타트업과 소규모 비즈니스를 위한 기본 플랜",
    features: [
      "월 1개 채널 광고 운영",
      "월간 광고비 최대 500만원",
      "기본 성과 리포트 (월 1회)",
      "랜딩 페이지 1개 제작",
      "이메일 지원",
    ],
    notIncluded: [
      "크리에이티브 제작",
      "A/B 테스트",
      "전담 매니저",
    ],
    cta: "시작하기",
    popular: false,
  },
  {
    name: "프로페셔널",
    price: "600만원",
    period: "/월",
    description: "성장하는 비즈니스를 위한 전문가 플랜",
    features: [
      "월 3개 채널 광고 운영",
      "월간 광고비 최대 2,000만원",
      "주간 성과 리포트",
      "랜딩 페이지 3개 제작",
      "크리에이티브 제작 월 5개",
      "A/B 테스트 및 최적화",
      "전담 매니저 배정",
      "전화/채팅 지원",
    ],
    notIncluded: [],
    cta: "시작하기",
    popular: true,
  },
  {
    name: "엔터프라이즈",
    price: "맞춤 견적",
    period: "",
    description: "대규모 캠페인과 전략적 파트너십을 위한 플랜",
    features: [
      "무제한 채널 광고 운영",
      "광고비 무제한",
      "실시간 성과 대시보드",
      "랜딩 페이지 무제한",
      "크리에이티브 제작 무제한",
      "고급 A/B 테스트 및 분석",
      "전담 팀 배정",
      "24/7 우선 지원",
      "맞춤형 전략 컨설팅",
      "분기별 전략 리뷰",
    ],
    notIncluded: [],
    cta: "문의하기",
    popular: false,
  },
]

const faqs = [
  {
    question: "계약 기간은 어떻게 되나요?",
    answer:
      "최소 3개월 계약을 권장하지만, 월 단위 계약도 가능합니다. 장기 계약 시 할인 혜택이 제공됩니다.",
  },
  {
    question: "광고비는 별도인가요?",
    answer:
      "네, 위 금액은 순수 대행 수수료이며 광고비는 별도입니다. 광고비는 직접 집행하시거나 저희가 대행하여 집행할 수 있습니다.",
  },
  {
    question: "중도 해지가 가능한가요?",
    answer:
      "월 단위 계약의 경우 30일 전 통보로 해지 가능합니다. 장기 계약의 경우 계약서에 명시된 조건에 따릅니다.",
  },
  {
    question: "성과가 없으면 환불받을 수 있나요?",
    answer:
      "마케팅 대행 서비스 특성상 환불은 어렵지만, 성과 개선을 위해 최선을 다합니다. 첫 달은 트라이얼 기간으로 운영됩니다.",
  },
]

export default function PricingPage() {
  return (
    <MainLayout>
      <Hero
        title="투명한 가격"
        subtitle="비즈니스 규모에 맞는 플랜을 선택하세요. 숨겨진 비용 없이 명확한 가격으로 시작할 수 있습니다."
      />

      {/* Pricing Cards */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative rounded-2xl border p-8 ${
                  plan.popular
                    ? "border-primary shadow-lg scale-105"
                    : "border-border"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground text-sm font-semibold px-4 py-1 rounded-full">
                      인기
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {plan.description}
                  </p>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                  {plan.notIncluded.map((feature, featureIndex) => (
                    <li
                      key={`not-${featureIndex}`}
                      className="flex items-start gap-3 text-muted-foreground"
                    >
                      <span className="h-5 w-5 flex-shrink-0 mt-0.5">✕</span>
                      <span className="text-sm line-through">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a href="/contact" className="block">
                  <Button
                    className="w-full"
                    variant={plan.popular ? "default" : "outline"}
                  >
                    {plan.cta}
                  </Button>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 lg:py-32 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              자주 묻는 질문
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              가격과 계약 관련 자주 묻는 질문들입니다
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-background rounded-lg p-6 border">
                <h3 className="text-lg font-semibold mb-3">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              더 궁금한 사항이 있으신가요?
            </p>
            <a href="/contact">
              <Button>문의하기</Button>
            </a>
          </div>
        </div>
      </section>
    </MainLayout>
  )
}
