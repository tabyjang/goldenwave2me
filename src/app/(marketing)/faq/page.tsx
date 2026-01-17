"use client"

import { MainLayout } from "@/components/layout"
import { Hero } from "@/components/sections"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    category: "일반",
    questions: [
      {
        question: "골든웨이브는 어떤 회사인가요?",
        answer:
          "골든웨이브는 2015년에 설립된 데이터 기반 디지털 마케팅 에이전시입니다. 퍼포먼스 마케팅, SNS 마케팅, 브랜딩 등 종합적인 마케팅 솔루션을 제공하며, 500개 이상의 브랜드와 함께 성장해왔습니다.",
      },
      {
        question: "어떤 산업 분야를 주로 다루나요?",
        answer:
          "이커머스, SaaS, 교육, 뷰티, 패션, 식품, 금융 등 다양한 산업 분야의 마케팅 경험이 있습니다. 각 산업의 특성을 깊이 이해하고 맞춤형 전략을 제공합니다.",
      },
      {
        question: "소규모 스타트업도 진행 가능한가요?",
        answer:
          "네, 가능합니다. 스타터 플랜은 스타트업과 소규모 비즈니스를 위해 설계되었으며, 예산에 맞는 효율적인 마케팅 전략을 제공합니다.",
      },
    ],
  },
  {
    category: "서비스",
    questions: [
      {
        question: "어떤 마케팅 채널을 지원하나요?",
        answer:
          "Google Ads, Meta 광고 (Facebook, Instagram), 네이버 검색광고, 카카오 광고, 유튜브, 틱톡 등 주요 디지털 마케팅 채널을 모두 지원합니다. 비즈니스 목표에 가장 적합한 채널을 제안해드립니다.",
      },
      {
        question: "성과는 어떻게 측정하나요?",
        answer:
          "ROAS (광고 수익률), CPA (고객 획득 비용), 전환율, 트래픽 증가율 등 구체적인 KPI를 설정하고 추적합니다. 정기적인 리포트를 통해 투명하게 성과를 공유합니다.",
      },
      {
        question: "크리에이티브 제작도 가능한가요?",
        answer:
          "네, 프로페셔널 플랜 이상에서는 크리에이티브 제작이 포함됩니다. 광고 배너, 영상 콘텐츠, 랜딩 페이지 디자인 등을 제작해드립니다.",
      },
      {
        question: "SEO 서비스도 제공하나요?",
        answer:
          "네, 키워드 리서치, 온페이지/오프페이지 SEO, 기술적 SEO, 콘텐츠 최적화 등 종합적인 SEO 서비스를 제공합니다.",
      },
    ],
  },
  {
    category: "가격 & 계약",
    questions: [
      {
        question: "계약 기간은 얼마나 되나요?",
        answer:
          "최소 3개월 계약을 권장하지만, 월 단위 계약도 가능합니다. 마케팅은 단기간에 성과를 내기 어렵기 때문에, 3개월 이상의 기간을 두고 최적화하는 것이 효과적입니다.",
      },
      {
        question: "광고비는 별도로 지불하나요?",
        answer:
          "네, 대행 수수료와 광고비는 별도입니다. 광고비는 클라이언트가 직접 광고 플랫폼에 지불하거나, 저희가 대행하여 집행할 수 있습니다.",
      },
      {
        question: "환불 정책은 어떻게 되나요?",
        answer:
          "마케팅 서비스 특성상 환불은 어렵지만, 첫 달은 트라이얼 기간으로 운영되어 양측이 협업 가능성을 평가할 수 있습니다. 성과가 미흡할 경우 전략을 수정하여 개선합니다.",
      },
      {
        question: "중도 해지가 가능한가요?",
        answer:
          "월 단위 계약의 경우 30일 전 통보로 해지 가능합니다. 장기 계약의 경우 계약서에 명시된 조건에 따릅니다.",
      },
    ],
  },
  {
    category: "프로세스",
    questions: [
      {
        question: "프로젝트는 어떻게 시작하나요?",
        answer:
          "1) 무료 상담 신청 → 2) 현황 분석 및 전략 제안 → 3) 견적 및 계약 → 4) 킥오프 미팅 → 5) 캠페인 런칭 순서로 진행됩니다. 보통 계약 후 1-2주 내에 캠페인을 시작할 수 있습니다.",
      },
      {
        question: "리포트는 얼마나 자주 받나요?",
        answer:
          "스타터 플랜은 월 1회, 프로페셔널 플랜은 주 1회 리포트를 제공합니다. 엔터프라이즈 플랜은 실시간 대시보드를 통해 언제든 성과를 확인할 수 있습니다.",
      },
      {
        question: "전담 매니저가 배정되나요?",
        answer:
          "프로페셔널 플랜 이상에서는 전담 매니저가 배정됩니다. 엔터프라이즈 플랜에서는 전담 팀이 배정되어 더욱 집중적인 관리를 받을 수 있습니다.",
      },
      {
        question: "미팅은 얼마나 자주 하나요?",
        answer:
          "월 1-2회 정기 미팅을 진행하며, 필요 시 추가 미팅도 가능합니다. 온라인/오프라인 모두 가능하며, 클라이언트의 선호에 맞춰 진행합니다.",
      },
    ],
  },
  {
    category: "기술 & 도구",
    questions: [
      {
        question: "어떤 분석 도구를 사용하나요?",
        answer:
          "Google Analytics 4, Google Ads, Meta Business Suite, 네이버 애즈, BigQuery, Looker Studio 등 업계 표준 도구를 사용합니다. 필요시 맞춤형 대시보드도 구축합니다.",
      },
      {
        question: "데이터 보안은 어떻게 관리하나요?",
        answer:
          "모든 클라이언트 데이터는 엄격하게 관리되며, NDA 계약을 체결합니다. 접근 권한은 최소한으로 제한하고, 프로젝트 종료 후에는 모든 데이터를 안전하게 삭제합니다.",
      },
      {
        question: "GA4 설정이 안 되어 있는데 도와주시나요?",
        answer:
          "네, GA4 설정, 전환 추적 설정, GTM 설정 등 필요한 모든 기술적 셋업을 지원합니다. 기존에 GA3를 사용하시던 경우 GA4로 마이그레이션도 도와드립니다.",
      },
    ],
  },
]

export default function FAQPage() {
  return (
    <MainLayout>
      <Hero
        title="자주 묻는 질문"
        subtitle="골든웨이브에 대해 궁금한 점을 확인하세요. 더 궁금한 사항이 있다면 언제든 문의해주세요."
      />

      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-12">
            {faqs.map((section, sectionIndex) => (
              <div key={sectionIndex}>
                <h2 className="text-2xl font-bold mb-6">{section.category}</h2>
                <Accordion type="single" collapsible className="space-y-4">
                  {section.questions.map((faq, faqIndex) => (
                    <AccordionItem
                      key={faqIndex}
                      value={`${sectionIndex}-${faqIndex}`}
                      className="border rounded-lg px-6"
                    >
                      <AccordionTrigger className="text-left hover:no-underline">
                        <span className="font-semibold">{faq.question}</span>
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground pt-2 pb-6">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 lg:py-32 bg-muted/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            더 궁금한 점이 있으신가요?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            언제든 문의해 주세요. 24시간 이내에 답변드리겠습니다.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            문의하기
          </a>
        </div>
      </section>
    </MainLayout>
  )
}
