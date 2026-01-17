// 테마 설정 타입 정의

export type ThemeName = "minimal" | "bold" | "dark" | "wave" | "onepage"

export interface ThemeColors {
  // 주요 컬러
  primary: string
  primaryForeground: string
  secondary: string
  secondaryForeground: string
  accent: string
  accentForeground: string

  // 배경/전경
  background: string
  foreground: string
  muted: string
  mutedForeground: string

  // 카드/보더
  card: string
  cardForeground: string
  border: string

  // 상태
  destructive: string
  destructiveForeground: string
}

export interface ThemeTypography {
  fontFamily: string
  headingFontFamily?: string
  headingWeight: number
  bodyWeight: number
  baseSize: string
  scale: number // 타이포 스케일 비율
}

export interface ThemeLayout {
  maxWidth: string
  headerHeight: string
  headerStyle: "fixed" | "static" | "floating"
  footerStyle: "minimal" | "detailed" | "dark"
  borderRadius: string
  sectionPadding: string
}

export interface ThemeAnimation {
  type: "subtle" | "bold" | "wave" | "none"
  duration: number
  easing: string
  stagger: number
}

export interface ThemeConfig {
  // 메타 정보
  name: ThemeName
  displayName: string
  description: string

  // 스타일
  colors: {
    light: ThemeColors
    dark: ThemeColors
  }
  typography: ThemeTypography
  layout: ThemeLayout
  animation: ThemeAnimation

  // 특수 설정
  features?: {
    particles?: boolean
    waves?: boolean
    glassmorphism?: boolean
    gradients?: boolean
    scrollSnap?: boolean
  }
}

// 사이트 설정 타입
export interface ServiceItem {
  id: string
  title: string
  description: string
  icon: string
  features?: string[]
  href?: string
}

export interface PortfolioItem {
  id: string
  title: string
  category: string
  description: string
  image: string
  tags?: string[]
  href?: string
}

export interface ProcessStep {
  step: number
  title: string
  description: string
  icon?: string
}

export interface TestimonialItem {
  id: string
  name: string
  company: string
  role?: string
  content: string
  avatar?: string
  rating?: number
}

export interface PricingPlan {
  id: string
  name: string
  price: string
  period?: string
  description: string
  features: string[]
  highlighted?: boolean
  cta?: string
}

export interface SiteConfig {
  // 기본 정보
  name: string
  description: string
  url: string
  locale: string

  // 브랜딩
  logo: string
  logoDark?: string
  favicon: string
  ogImage: string

  // 테마
  theme: ThemeName

  // 연락처
  contact: {
    email: string
    phone?: string
    address?: string
    kakao?: string
  }

  // SNS
  social?: {
    instagram?: string
    facebook?: string
    youtube?: string
    blog?: string
    twitter?: string
    linkedin?: string
  }

  // 콘텐츠
  hero: {
    title: string
    subtitle: string
    primaryCta?: { text: string; href: string }
    secondaryCta?: { text: string; href: string }
    image?: string
    video?: string
  }

  services: ServiceItem[]
  portfolio: PortfolioItem[]
  process: ProcessStep[]
  testimonials: TestimonialItem[]
  pricing?: PricingPlan[]

  // SEO
  seo?: {
    keywords?: string[]
    author?: string
  }
}
