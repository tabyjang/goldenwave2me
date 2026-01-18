---
created: 2026-01-19T02:09
title: Figma Design Token System 2.0 구축
area: design-system
files:
  - src/styles/color-schemes.ts
  - docs/design-improvement-ideas.md
  - tailwind.config.ts
---

## Problem

현재 `src/styles/color-schemes.ts`에는 6개의 색상 패키지(warmElegance, royalMauve, modernSage, midnightLuxe, nordicFrost, classicGold)가 하드코딩되어 있습니다.

**주요 문제점:**
1. Figma 디자인 변경 시 개발자가 수동으로 색상값을 복사/붙여넣기 해야 함
2. 디자이너-개발자 간 이중 작업 발생 (Figma 수정 → 코드 수정)
3. 오타 및 색상 불일치 가능성
4. 디자인 토큰(색상, 타이포그래피, 간격, 그림자)이 체계적으로 관리되지 않음
5. Tailwind CSS와 완전히 통합되지 않음

**현재 코드 예시:**
```typescript
export const warmElegance: ColorScheme = {
  colors: {
    primary: "#C4A77D",        // ❌ 하드코딩
    primaryLight: "#D9C5A7",
  }
}
```

## Solution

**목표:** Figma Variables → TypeScript 토큰 → Tailwind CSS 자동 동기화 시스템 구축

### Phase 1: 토큰 폴더 구조 생성 (1시간)
```
/tokens
  ├── colors.ts        # Figma 색상 변수 → CSS 변수
  ├── typography.ts    # 폰트 스케일, 웨이트, 라인 하이트
  ├── spacing.ts       # 8px 그리드 시스템
  ├── shadows.ts       # 그림자 토큰
  └── animations.ts    # 애니메이션 타이밍 토큰
```

### Phase 2: 색상 토큰 시스템 구현 (2-3시간)
1. Figma Variables API 연동 (또는 수동 추출 → 향후 자동화)
2. CSS 변수 기반 토큰 생성
3. 6개 색상 패키지를 토큰 구조로 마이그레이션

**예시 토큰 구조:**
```typescript
export const tokens = {
  color: {
    brand: {
      primary: {
        50: "var(--color-brand-primary-50)",
        500: "var(--color-brand-primary-500)", // #C4A77D
      }
    }
  },
  spacing: {
    xs: "var(--spacing-xs)",    // 4px
    sm: "var(--spacing-sm)",    // 8px
  }
}
```

### Phase 3: Tailwind Config 통합 (1시간)
```typescript
// tailwind.config.ts
import { tokens } from './tokens/colors'

export default {
  theme: {
    extend: {
      colors: tokens.color,    // 자동 Tailwind 클래스 생성
      spacing: tokens.spacing,
    }
  }
}
```

### Phase 4: 기존 코드 마이그레이션 (1-2시간)
- `src/styles/color-schemes.ts` 리팩토링
- 컴포넌트에서 토큰 사용 검증
- 문서 업데이트

**성공 기준:**
- [ ] `/tokens` 폴더 생성 완료
- [ ] 6개 색상 패키지가 토큰 기반으로 전환
- [ ] Tailwind CSS에서 `bg-brand-primary-500` 같은 클래스 사용 가능
- [ ] Figma 변경 시 토큰만 수정하면 전체 사이트 색상 변경
- [ ] 하드코딩된 색상값 제거

**참고 문서:**
- docs/design-improvement-ideas.md - 아이디어 1 섹션
- docs/figma-design-system-checklist.md - PHASE 1 워크플로우

**예상 소요 시간:** 4-6시간
