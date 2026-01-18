/**
 * Theme Demo Page - 색상 패키지 전환 데모
 *
 * Phase 4: Dynamic Theme Switcher 테스트 페이지
 */

import { ColorPackagePicker, IndustryMatcher, ThemePreview } from '@/components/theme-switcher'
import { Container } from '@/components/layout/container'

export const metadata = {
  title: '테마 전환 데모 - GoldenWave2Me',
  description: '6개 색상 패키지를 실시간으로 전환해보세요',
}

export default function ThemeDemoPage() {
  return (
    <div className="min-h-screen py-20">
      <Container>
        {/* 헤더 */}
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Dynamic Theme Switcher
          </h1>
          <p className="text-xl text-muted-foreground">
            6개 색상 패키지를 실시간으로 전환하여 브랜드에 맞는 색상을 찾아보세요
          </p>
        </div>

        {/* 섹션 1: 색상 패키지 선택 */}
        <section className="mb-16">
          <h2 className="mb-6 text-2xl font-semibold">색상 패키지 선택</h2>
          <p className="mb-6 text-muted-foreground">
            원하는 색상 패키지를 클릭하면 전체 웹사이트 색상이 즉시 변경됩니다
          </p>
          <ColorPackagePicker />
        </section>

        {/* 섹션 2: 업종별 추천 */}
        <section className="mb-16">
          <h2 className="mb-6 text-2xl font-semibold">업종별 추천</h2>
          <p className="mb-6 text-muted-foreground">
            귀사의 업종을 선택하시면 최적의 색상 패키지를 추천해드립니다
          </p>
          <IndustryMatcher autoApply />
        </section>

        {/* 섹션 3: 현재 테마 미리보기 */}
        <section className="mb-16">
          <h2 className="mb-6 text-2xl font-semibold">현재 테마 미리보기</h2>
          <ThemePreview />
        </section>

        {/* 기능 설명 */}
        <section className="rounded-lg border bg-card p-8">
          <h2 className="mb-4 text-2xl font-semibold">주요 기능</h2>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="mr-3 text-primary">✓</span>
              <div>
                <strong>실시간 색상 전환:</strong> 페이지 새로고침 없이 즉시 적용
              </div>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-primary">✓</span>
              <div>
                <strong>6개 프리미엄 색상 패키지:</strong> Warm Elegance, Royal Mauve, Modern
                Sage, Midnight Luxe, Nordic Frost, Classic Gold
              </div>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-primary">✓</span>
              <div>
                <strong>업종별 AI 추천:</strong> 카페, 법률, 의료, IT, 럭셔리, 금융, 크리에이티브
              </div>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-primary">✓</span>
              <div>
                <strong>LocalStorage 저장:</strong> 선택한 색상이 다음 방문 시에도 유지
              </div>
            </li>
          </ul>
        </section>
      </Container>
    </div>
  )
}
