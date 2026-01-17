import { MainLayout } from "@/components/layout"
import { Hero, Mission, Team } from "@/components/sections"
import { Target, Heart, Sparkles, Building2 } from "lucide-react"
import { constructMetadata } from "@/lib/metadata"

export const metadata = constructMetadata({
  title: "회사소개",
  description:
    "2015년 설립 이후, 골든웨이브는 대한민국 최고의 퍼포먼스 마케팅 에이전시로 성장했습니다. 데이터 기반 마케팅으로 500개 이상의 브랜드와 함께 성장했습니다.",
})

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

export default function AboutPage() {
  const values = [
    {
      icon: <Target className="h-6 w-6" />,
      title: "성과 중심",
      text: "화려한 보고서가 아닌, 실제 매출과 성장으로 증명합니다. 모든 캠페인은 측정 가능한 KPI로 관리됩니다.",
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "파트너십",
      text: "단순 대행사가 아닌 비즈니스 파트너로서 함께합니다. 클라이언트의 사업을 깊이 이해하고 함께 성장합니다.",
    },
    {
      icon: <Sparkles className="h-6 w-6" />,
      title: "혁신",
      text: "빠르게 변화하는 디지털 환경에서 항상 한 발 앞서갑니다. 최신 트렌드와 기술을 적극 도입합니다.",
    },
  ]

  return (
    <MainLayout>
      <Hero
        title="회사소개"
        subtitle="2015년 설립 이후, 골든웨이브는 대한민국 최고의 퍼포먼스 마케팅 에이전시로 성장했습니다."
      />
      <Mission
        title="우리의 미션"
        description="모든 브랜드에는 성장의 잠재력이 있습니다. 골든웨이브는 데이터와 크리에이티브의 결합으로 그 잠재력을 현실로 만듭니다. 클라이언트의 성공이 곧 우리의 성공입니다."
        values={values}
      />
      <Team
        title="전문가 팀"
        subtitle="각 분야 최고의 전문가들이 여러분의 성장을 돕습니다"
        members={teamMembers}
      />

      {/* History Section */}
      <section className="py-20 lg:py-32 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
              <Building2 className="h-6 w-6" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">연혁</h2>
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
