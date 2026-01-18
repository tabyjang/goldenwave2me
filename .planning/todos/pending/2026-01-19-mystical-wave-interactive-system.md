---
created: 2026-01-19T02:15
title: Mystical Wave Interactive System 구축
area: design-system
files:
  - src/components/sections/hero.tsx
  - src/components/3d/demo-scene.tsx
  - docs/design-improvement-ideas.md
---

## Problem

현재 "골든웨이브 - 파도처럼 퍼지는 마케팅"이라는 브랜드 철학을 시각적으로 표현하지 못하고 있습니다.

**주요 문제점:**
1. 히어로 섹션이 정적인 텍스트만 있음 (브랜드 아이덴티티 미반영)
2. "파도" 콘셉트가 단어로만 존재하고 시각화되지 않음
3. 일반 마케팅 사이트와 차별화 요소 부족
4. 사용자 참여 유도 부족 (정적인 페이지)

**현재 코드:**
```tsx
<section className="relative py-20 lg:py-32">
  <Container>
    <h1>파도처럼 퍼지는 마케팅의 힘</h1>  {/* 단순 텍스트만 */}
  </Container>
</section>
```

## Solution

**목표:** 브랜드 아이덴티티를 3D + Framer Motion으로 살아있게 구현

### 구현 내용:

**1. 3D 파도 배경 시스템**
- Three.js 기반 파도 시뮬레이션
- 색상 패키지(warmElegance 등)와 연동된 그라데이션
- 스크롤에 반응하는 파도 속도 변화

**2. 인터랙티브 효과**
- WaveCursor: 마우스 따라다니는 파도 효과
- WaveScrollEffect: 스크롤에 반응하는 파도
- WaveTransition: 페이지 전환 파도 애니메이션

**3. 구현 위치:**
```
/components/brand
  ├── WaveHero.tsx           # 히어로 섹션 3D 파도 배경
  ├── WaveCursor.tsx         # 마우스 파도 효과
  ├── WaveTransition.tsx     # 페이지 전환 애니메이션
  └── WaveScrollEffect.tsx   # 스크롤 반응 파도
```

**기대 효과:**
- 첫 방문자에게 "Wow" 임팩트
- "파도처럼 퍼지는 마케팅" 메시지 시각적 각인
- 평균 체류 시간 2배 증가
- SNS 공유 시 화제성 극대화

**참고 문서:**
- docs/design-improvement-ideas.md - 아이디어 2 섹션

**예상 소요 시간:** 8-12시간
**난이도:** ⭐⭐⭐⭐ 상
