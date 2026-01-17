export interface PricingPlan {
  name: string
  price: string
  period: string
  description: string
  features: string[]
  highlighted?: boolean
  ctaText: string
}

export const pricingPlans: PricingPlan[] = [
  {
    name: "스타터",
    price: "150만원",
    period: "월",
    description: "마케팅을 처음 시작하는 스타트업과 소상공인을 위한 플랜",
    features: [
      "광고 채널 2개 운영",
      "월간 성과 리포트",
      "담당 매니저 배정",
      "기본 크리에이티브 2건/월",
      "이메일 & 메신저 지원",
      "광고 세팅 및 최적화",
    ],
    highlighted: false,
    ctaText: "상담 신청",
  },
  {
    name: "그로스",
    price: "350만원",
    period: "월",
    description: "빠른 성장을 원하는 중소기업을 위한 가장 인기 있는 플랜",
    features: [
      "광고 채널 4개 운영",
      "주간 성과 리포트",
      "담당 매니저 + 디자이너",
      "크리에이티브 5건/월",
      "A/B 테스트 진행",
      "실시간 성과 대시보드",
      "격주 화상 미팅",
      "SNS 콘텐츠 제작",
    ],
    highlighted: true,
    ctaText: "무료 진단 받기",
  },
  {
    name: "엔터프라이즈",
    price: "맞춤형",
    period: "",
    description: "대규모 캠페인과 전담팀이 필요한 기업을 위한 맞춤 플랜",
    features: [
      "무제한 광고 채널",
      "전담 팀 구성 (AE, 디자이너, 영상PD)",
      "일간 리포트 및 실시간 대시보드",
      "무제한 크리에이티브 제작",
      "주간 정기 미팅",
      "24시간 긴급 대응",
      "전환 추적 및 어트리뷰션 설계",
      "브랜딩 & 크리에이티브 컨설팅",
      "SLA 보장",
    ],
    highlighted: false,
    ctaText: "문의하기",
  },
]
