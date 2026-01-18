---
created: 2026-01-19T02:17
title: Dynamic Theme Switcher 구축
area: design-system
files:
  - src/styles/color-schemes.ts
  - src/app/(marketing)/contact/page.tsx
  - docs/design-improvement-ideas.md
---

## Problem

6개 색상 패키지가 있지만 활용하지 못하고 있습니다.

**주요 문제점:**
1. 6개 색상 패키지(warmElegance, royalMauve 등) 미활용
2. 고객이 직접 자기 브랜드에 맞는 색상 선택 불가
3. 포트폴리오 다양성 부족
4. 고객 참여 유도 부족

**현재 상황:**
```typescript
// src/styles/color-schemes.ts - 6개 패키지 있지만 사용 안 함
export const warmElegance: ColorScheme = { ... }
export const royalMauve: ColorScheme = { ... }
// ... 4개 더
```

## Solution

**목표:** 실시간 색상 패키지 전환 시스템 + AI 업종별 추천

### 구현 내용:

**1. 실시간 색상 전환**
- ColorPackagePicker: 6개 색상 패키지 선택 UI
- CSS 변수 기반 즉시 전환 (페이지 새로고침 없음)
- 전체 웹사이트가 선택한 색상으로 즉시 변경

**2. AI 업종별 추천**
- IndustryMatcher: 업종별 최적 색상 추천
- 추천 로직:
  - 법률 → Royal Mauve (신뢰감, 권위)
  - 카페 → Warm Elegance (따뜻함, 친근함)
  - IT → Nordic Frost (현대적, 세련됨)
  - 의료 → Modern Sage (안정감, 자연)
  - 고급 브랜드 → Midnight Luxe (럭셔리, 고급)

**3. Contact 페이지에 통합**
```tsx
<section>
  <h2>홈페이지 제작 상담</h2>
  <ColorPackagePicker />
  <p>원하시는 색상으로 미리 체험해보세요!</p>
</section>
```

**폴더 구조:**
```
/components/theme-switcher
  ├── ColorPackagePicker.tsx     # 색상 패키지 선택기
  ├── ThemePreview.tsx           # 실시간 미리보기
  └── IndustryMatcher.tsx        # 업종별 추천 AI
```

**기대 효과:**
- 고객 참여도 극대화
- "디자인 진짜 잘하는구나" 신뢰 형성
- 포트폴리오 6가지 버전 활용
- 상담 신청 전환율 30% 증가

**참고 문서:**
- docs/design-improvement-ideas.md - 아이디어 4 섹션

**예상 소요 시간:** 4시간
**난이도:** ⭐⭐ 하
