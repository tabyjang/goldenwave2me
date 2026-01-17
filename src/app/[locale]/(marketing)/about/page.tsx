import { setRequestLocale } from "next-intl/server"
import { getTranslations } from "next-intl/server"
import { MainLayout } from "@/components/layout"
import { Hero, Mission, Team } from "@/components/sections"
import { Target, Heart, Sparkles, Building2 } from "lucide-react"
import { constructMetadata } from "@/lib/metadata"

export const metadata = constructMetadata({
  title: "회사소개",
  description:
    "2015년 설립 이후, 골든웨이브는 대한민국 최고의 퍼포먼스 마케팅 에이전시로 성장했습니다. 데이터 기반 마케팅으로 500개 이상의 브랜드와 함께 성장했습니다.",
})

interface AboutPageProps {
  params: Promise<{ locale: string }>
}

const teamMembers = [
  {
    name: "김민수",
    role: "대표이사 / CEO",
    bio: "10년 이상의 디지털 마케팅 경험. 삼성전자, 현대자동차 등 대기업 캠페인 총괄 경험.",
  },
  {
    name: "이서연",
    role: "크리에이티브 디렉터",
    bio: "광고대행사 출신, 칸 라이언즈 수상 경력. 브랜드 스토리텔링 전문가.",
  },
  {
    name: "박준혁",
    role: "퍼포먼스 마케팅 총괄",
    bio: "Google, Meta 공인 파트너. 연간 100억 이상 광고비 운용 경험.",
  },
  {
    name: "정하은",
    role: "데이터 분석 리드",
    bio: "빅데이터 분석 석사. GA4, BigQuery 전문가. 데이터 기반 인사이트 도출.",
  },
]

const historyData = [
  { year: "2015", event: "골든웨이브 설립" },
  { year: "2017", event: "퍼포먼스 마케팅 부문 1위 달성" },
  { year: "2019", event: "브랜딩 사업부 신설" },
  { year: "2021", event: "연매출 100억 돌파" },
  { year: "2023", event: "아시아 시장 진출" },
  { year: "2024", event: "AI 마케팅 솔루션 런칭" },
]

export default async function AboutPage({ params }: AboutPageProps) {
  const { locale } = await params
  setRequestLocale(locale)

  const t = await getTranslations("About")

  const values = [
    {
      icon: <Target className="h-6 w-6" />,
      title: t("valueTitle1"),
      text: t("valueText1"),
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: t("valueTitle2"),
      text: t("valueText2"),
    },
    {
      icon: <Sparkles className="h-6 w-6" />,
      title: t("valueTitle3"),
      text: t("valueText3"),
    },
  ]

  return (
    <MainLayout>
      <Hero title={t("title")} subtitle={t("subtitle")} />
      <Mission
        title={t("missionTitle")}
        description={t("missionDescription")}
        values={values}
      />
      <Team
        title={t("teamTitle")}
        subtitle={t("teamSubtitle")}
        members={teamMembers}
      />

      {/* History Section */}
      <section className="py-20 lg:py-32 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
              <Building2 className="h-6 w-6" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t("historyTitle")}
            </h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-px bg-border" />

              {/* Timeline items */}
              <div className="space-y-8">
                {historyData.map((item, index) => (
                  <div key={index} className="relative flex items-start gap-6 pl-16">
                    {/* Timeline dot */}
                    <div className="absolute left-6 w-4 h-4 rounded-full bg-primary border-4 border-background" />

                    <div className="flex-1 bg-card rounded-lg p-6 border shadow-sm">
                      <div className="text-sm font-semibold text-primary mb-1">
                        {item.year}
                      </div>
                      <div className="text-foreground font-medium">
                        {item.event}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  )
}
