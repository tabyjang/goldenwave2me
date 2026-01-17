import type { SiteConfig } from "@/types/theme"

// 골든웨이브 마케팅 기본 설정
export const defaultSiteConfig: SiteConfig = {
  name: "골든웨이브 마케팅",
  description: "고객의 마음을 움직여 구매로 이끄는 마케팅 전문 기업",
  url: "https://goldenwave.marketing",
  locale: "ko",

  logo: "/logo.svg",
  logoDark: "/logo-dark.svg",
  favicon: "/favicon.ico",
  ogImage: "/og-image.png",

  theme: "minimal",

  contact: {
    email: "hello@goldenwave.marketing",
    phone: "010-0000-0000",
    address: "서울특별시",
    kakao: "goldenwave",
  },

  social: {
    instagram: "https://instagram.com/goldenwave",
    blog: "https://blog.naver.com/goldenwave",
  },

  hero: {
    title: "파도처럼 퍼지는\n마케팅의 힘",
    subtitle:
      "고객의 마음을 움직여 구매로 이끄는 전략적 마케팅. 홈페이지 제작부터 브랜드 블로그, 업무 자동화까지 원스톱 솔루션을 제공합니다.",
    primaryCta: {
      text: "무료 상담 신청",
      href: "/contact",
    },
    secondaryCta: {
      text: "서비스 알아보기",
      href: "#services",
    },
  },

  services: [
    {
      id: "homepage",
      title: "홈페이지 제작",
      description:
        "비즈니스에 최적화된 반응형 웹사이트. SEO 최적화와 함께 검색 상위 노출을 도와드립니다.",
      icon: "Globe",
      features: [
        "반응형 디자인",
        "SEO 최적화",
        "관리자 패널",
        "SSL 보안",
        "빠른 로딩 속도",
      ],
      href: "/services/homepage",
    },
    {
      id: "blog",
      title: "브랜드 블로그",
      description:
        "검색 상위 노출을 위한 전략적 블로그 마케팅. 키워드 분석부터 콘텐츠 기획, 정기 포스팅까지.",
      icon: "FileText",
      features: [
        "키워드 분석",
        "콘텐츠 기획",
        "주 2~4회 포스팅",
        "이웃 관리",
        "성과 리포트",
      ],
      href: "/services/blog",
    },
    {
      id: "automation",
      title: "업무 자동화",
      description:
        "AI 기반 마케팅 자동화 솔루션. 반복 업무를 줄이고 핵심 업무에 집중하세요.",
      icon: "Zap",
      features: [
        "SNS 자동화",
        "자동 리포팅",
        "CRM 연동",
        "챗봇 구축",
        "이메일 자동화",
      ],
      href: "/services/automation",
    },
  ],

  portfolio: [
    {
      id: "portfolio-1",
      title: "법률사무소 A",
      category: "홈페이지",
      description: "신뢰감 있는 법률사무소 브랜딩 웹사이트",
      image: "/portfolio/legal-firm.jpg",
      tags: ["홈페이지", "SEO", "브랜딩"],
    },
    {
      id: "portfolio-2",
      title: "카페 B",
      category: "블로그",
      description: "월 방문자 10만 달성 카페 블로그 마케팅",
      image: "/portfolio/cafe-blog.jpg",
      tags: ["블로그", "로컬 마케팅"],
    },
    {
      id: "portfolio-3",
      title: "스타트업 C",
      category: "자동화",
      description: "영업 프로세스 80% 자동화 구축",
      image: "/portfolio/startup-automation.jpg",
      tags: ["자동화", "CRM"],
    },
    {
      id: "portfolio-4",
      title: "클리닉 D",
      category: "홈페이지",
      description: "예약 시스템 통합 의료 웹사이트",
      image: "/portfolio/clinic-website.jpg",
      tags: ["홈페이지", "예약 시스템"],
    },
  ],

  process: [
    {
      step: 1,
      title: "상담 & 진단",
      description: "현재 상황을 분석하고 맞춤 전략을 수립합니다",
      icon: "MessageSquare",
    },
    {
      step: 2,
      title: "기획 & 설계",
      description: "목표에 맞는 상세 기획안을 작성합니다",
      icon: "Lightbulb",
    },
    {
      step: 3,
      title: "제작 & 실행",
      description: "기획안을 바탕으로 실제 작업을 진행합니다",
      icon: "Hammer",
    },
    {
      step: 4,
      title: "분석 & 개선",
      description: "성과를 분석하고 지속적으로 개선합니다",
      icon: "TrendingUp",
    },
  ],

  testimonials: [
    {
      id: "testimonial-1",
      name: "김대표",
      company: "법률사무소 A",
      role: "대표 변호사",
      content:
        "홈페이지 리뉴얼 후 상담 문의가 3배 이상 늘었습니다. 전문적이면서도 따뜻한 느낌의 디자인이 마음에 듭니다.",
      rating: 5,
    },
    {
      id: "testimonial-2",
      name: "이사장",
      company: "카페 B",
      role: "오너",
      content:
        "블로그 마케팅 시작 후 3개월 만에 검색 1페이지에 노출되기 시작했어요. 매출도 확실히 늘었습니다.",
      rating: 5,
    },
    {
      id: "testimonial-3",
      name: "박대표",
      company: "스타트업 C",
      role: "CEO",
      content:
        "업무 자동화로 반복 작업에 들이던 시간을 80% 줄였습니다. 이제 핵심 업무에 집중할 수 있게 됐어요.",
      rating: 5,
    },
  ],

  pricing: [
    {
      id: "standard",
      name: "Standard",
      price: "132,000",
      period: "월",
      description: "블로그 마케팅 시작하기",
      features: [
        "주 2회 포스팅 (월 8건)",
        "키워드 선정",
        "썸네일 제작",
        "유료 이미지 제공",
        "1:1 브랜딩 컨설팅",
      ],
    },
    {
      id: "deluxe",
      name: "Deluxe",
      price: "208,000",
      period: "월",
      description: "성장하는 비즈니스를 위한",
      features: [
        "주 3회 포스팅 (월 12건)",
        "Standard 모든 기능",
        "이웃 관리",
        "월간 성과 리포트",
        "우선 응대",
      ],
      highlighted: true,
    },
    {
      id: "premium",
      name: "Premium",
      price: "294,000",
      period: "월",
      description: "최대 효과를 원하신다면",
      features: [
        "주 4회 포스팅 (월 16건)",
        "Deluxe 모든 기능",
        "포털 지도 등록/관리",
        "경쟁사 분석",
        "전담 매니저 배정",
      ],
    },
  ],

  seo: {
    keywords: [
      "마케팅 대행",
      "홈페이지 제작",
      "블로그 마케팅",
      "업무 자동화",
      "SEO",
    ],
    author: "골든웨이브 마케팅",
  },
}
