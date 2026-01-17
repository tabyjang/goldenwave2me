import { setRequestLocale } from "next-intl/server"
import { getTranslations } from "next-intl/server"
import { MainLayout } from "@/components/layout"
import { Hero, CTA } from "@/components/sections"
import { constructMetadata } from "@/lib/metadata"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export const metadata = constructMetadata({
  title: "자주 묻는 질문",
  description:
    "골든웨이브 마케팅 서비스에 대해 자주 묻는 질문과 답변입니다. 계약 기간, 광고비, 업종, 성과 보장, 리포트 등에 대해 확인하세요.",
})

interface FAQPageProps {
  params: Promise<{ locale: string }>
}

const faqKeys = ["q1", "q2", "q3", "q4", "q5", "q6"] as const

export default async function FAQPage({ params }: FAQPageProps) {
  const { locale } = await params
  setRequestLocale(locale)

  const t = await getTranslations("FAQ")

  return (
    <MainLayout>
      <Hero title={t("title")} subtitle={t("subtitle")} />

      {/* FAQ Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqKeys.map((key, index) => (
                <AccordionItem
                  key={key}
                  value={key}
                  className="border rounded-lg px-6 data-[state=open]:bg-muted/50"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-6">
                    <span className="flex items-start gap-4">
                      <span className="text-primary font-bold">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="font-semibold">{t(key)}</span>
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="pl-10 pb-6 text-muted-foreground">
                    {t(`a${index + 1}` as `a${1 | 2 | 3 | 4 | 5 | 6}`)}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Additional Help Section */}
      <section className="py-20 lg:py-32 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              더 궁금한 점이 있으신가요?
            </h2>
            <p className="text-muted-foreground mb-8">
              FAQ에서 답을 찾지 못하셨다면, 언제든지 문의해 주세요.
              담당자가 친절하게 답변드립니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
              >
                1:1 문의하기
              </a>
              <a
                href="tel:02-1234-5678"
                className="inline-flex items-center justify-center px-8 py-3 rounded-full border bg-background font-medium hover:bg-muted transition-colors"
              >
                전화 상담: 02-1234-5678
              </a>
            </div>
          </div>
        </div>
      </section>

      <CTA
        title="무료 마케팅 진단 받기"
        description="현재 마케팅 상황을 분석하고 맞춤형 전략을 제안받으세요. 무료입니다."
        buttonText="무료 진단 신청"
        buttonHref="/contact"
      />
    </MainLayout>
  )
}
