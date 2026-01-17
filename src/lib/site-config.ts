export const siteConfig = {
  name: "골든웨이브",
  description:
    "데이터 기반 디지털 마케팅으로 비즈니스 성장을 가속화합니다. 퍼포먼스 마케팅, 브랜딩, 콘텐츠 전략까지 원스톱 솔루션을 제공합니다.",
  url: process.env.NEXT_PUBLIC_APP_URL || "https://goldenwave.co.kr",
  ogImage: "/og-image.png",
  links: {
    instagram: "https://instagram.com/goldenwave",
    linkedin: "https://linkedin.com/company/goldenwave",
  },
  creator: "골든웨이브",
  keywords: [
    "디지털 마케팅",
    "퍼포먼스 마케팅",
    "브랜딩",
    "SNS 마케팅",
    "콘텐츠 마케팅",
    "광고 대행",
    "마케팅 에이전시",
    "그로스 해킹",
  ],
}

export type SiteConfig = typeof siteConfig
