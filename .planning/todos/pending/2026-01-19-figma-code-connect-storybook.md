---
created: 2026-01-19T02:18
title: Storybook + Figma Code Connect 통합
area: tooling
files:
  - .storybook/main.ts
  - src/stories/Button.stories.tsx
  - docs/design-improvement-ideas.md
---

## Problem

디자이너-개발자 간 수동 동기화 작업과 문서화 부재 문제가 있습니다.

**주요 문제점:**
1. Figma 디자인 변경 시 개발자에게 수동 알림
2. 구현된 컴포넌트가 Figma와 일치하는지 확인 어려움
3. 신규 개발자 온보딩 시간 오래 걸림 (1일)
4. 디자인 시스템 문서화 부재

**현재 워크플로우:**
```
디자이너: Figma에서 Button 패딩 16px → 20px 변경
개발자:
  1. Figma 확인 (수동)
  2. 코드 수정
  3. 배포
  4. 다시 Figma와 비교
❌ 문제: 수동 동기화, 불일치 가능성
```

## Solution

**목표:** Figma ↔ 코드 양방향 동기화 + 완벽한 문서화 시스템

### 구현 내용:

**1. Figma Code Connect 설정**
```tsx
// figma/components/Button.figma.tsx
import { figma } from '@figma/code-connect'
import { Button } from '@/components/ui/button'

figma.connect(
  Button,
  'https://figma.com/file/ABC123...',
  {
    props: {
      variant: figma.enum('Variant', {
        primary: 'default',
        secondary: 'secondary',
      }),
    },
  }
)
```

**2. Storybook 통합**
- Figma 디자인을 Storybook에 임베드
- 코드와 디자인을 나란히 비교
- 실시간 동기화

**3. 자동화 워크플로우**
```yaml
# .github/workflows/figma-sync.yml
- Figma 변경 감지 (매일 오전 9시)
- 변경사항 있으면 자동 PR 생성
- Storybook에서 변경 전후 비교
```

**폴더 구조:**
```
/figma
  ├── code-connect.config.ts
  └── components/
      ├── Button.figma.tsx
      ├── Card.figma.tsx
      └── Hero.figma.tsx
```

**기대 효과:**
- 디자인 시스템 구축 시간 75% 단축
- Figma ↔ 코드 100% 일치 보장
- 신규 개발자 온보딩 1일 → 2시간
- 디자이너-개발자 커뮤니케이션 비용 80% 감소

**참고 문서:**
- docs/design-improvement-ideas.md - 아이디어 5 섹션
- docs/figma-design-system-checklist.md

**예상 소요 시간:** 4-6시간
**난이도:** ⭐⭐⭐ 중
