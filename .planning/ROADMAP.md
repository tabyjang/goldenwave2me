# 🎨 GoldenWave2Me Design System Roadmap

> **프로젝트**: GoldenWave2Me 디자인 완벽 개선
> **목표**: Figma 기반 Design Token 시스템 구축 + 브랜드 아이덴티티 강화
> **총 소요 시간**: 26-36시간 (약 4주)

---

## 🎯 전체 목표

5가지 디자인 개선 아이디어를 단계적으로 구현하여:
- ✅ **디자인 일관성**: Figma ↔ 코드 100% 일치
- ✅ **브랜드 차별화**: "골든웨이브" 파도 효과로 강력한 아이덴티티
- ✅ **사용자 경험**: 프리미엄 인터랙션으로 체류 시간 2배↑
- ✅ **고객 참여**: 실시간 색상 선택으로 전환율 30%↑
- ✅ **팀 효율성**: 자동화로 디자인 시스템 구축 시간 75%↓

**예상 ROI**: 전환율 30% 증가, 체류 시간 2배, 팀 효율 3배

---

## 📅 Phase Overview

| Phase | 이름 | 소요 시간 | 우선순위 | 난이도 |
|-------|------|-----------|----------|--------|
| **1** | Design Token System | 4-6시간 | 🥇 최고 | ⭐⭐⭐ 중 |
| **2** | Wave Interactive System | 8-12시간 | 🥈 높음 | ⭐⭐⭐⭐ 상 |
| **3** | Micro-Interaction Library | 6-8시간 | 🥉 높음 | ⭐⭐⭐ 중 |
| **4** | Theme Switcher | 4시간 | 중간 | ⭐⭐ 하 |
| **5** | Figma Code Connect | 4-6시간 | 중간 | ⭐⭐⭐ 중 |

---

## 🔷 Phase 1: Design Token System 2.0 (Week 1)

**📋 Todo**: `.planning/todos/pending/2026-01-19-figma-design-token-system.md`

### 목표
모든 디자인 개선의 **기반**이 되는 토큰 시스템 구축

### Why First?
- 다른 모든 Phase가 이 토큰 시스템에 의존
- 색상, 간격, 타이포그래피의 Single Source of Truth
- 이후 Phase들의 개발 속도 향상

### 주요 작업

#### 1.1 토큰 폴더 구조 생성 (1시간)
```
/tokens
  ├── colors.ts        # Figma 색상 변수 → CSS 변수
  ├── typography.ts    # 폰트 스케일, 웨이트, 라인 하이트
  ├── spacing.ts       # 8px 그리드 시스템
  ├── shadows.ts       # 그림자 토큰
  └── animations.ts    # 애니메이션 타이밍 토큰
```

#### 1.2 색상 토큰 시스템 (2-3시간)
- 6개 색상 패키지 토큰화
- CSS 변수 기반 구조
- Figma Variables API 연동 (향후)

#### 1.3 Tailwind Config 통합 (1시간)
- tokens → Tailwind theme 자동 주입
- `bg-brand-primary-500` 같은 클래스 사용 가능

#### 1.4 기존 코드 마이그레이션 (1-2시간)
- `src/styles/color-schemes.ts` 리팩토링
- 하드코딩된 값 제거

### 산출물
- [x] `/tokens` 폴더 및 파일 생성
- [x] 6개 색상 패키지 토큰 전환
- [x] Tailwind Config 업데이트
- [x] 문서 업데이트

### 성공 기준
- Figma 변경 시 토큰만 수정하면 전체 사이트 색상 변경
- 하드코딩된 색상값 0개
- TypeScript 타입 안전성 보장

---

## 🔷 Phase 2: Mystical Wave Interactive System (Week 2)

**📋 Todo**: `.planning/todos/pending/2026-01-19-mystical-wave-interactive-system.md`

### 목표
브랜드 아이덴티티("파도처럼 퍼지는 마케팅")를 3D + Motion으로 시각화

### Why Second?
- 가장 큰 임팩트 (첫 방문자 "Wow" 효과)
- Phase 1의 색상 토큰 활용
- 브랜드 차별화의 핵심

### 주요 작업

#### 2.1 3D 파도 배경 시스템 (4-6시간)
- Three.js + React Three Fiber 설정
- WaveGeometry 구현
- 색상 토큰과 연동된 그라데이션

#### 2.2 인터랙티브 효과 (2-4시간)
- WaveCursor: 마우스 파도 효과
- WaveScrollEffect: 스크롤 반응
- 성능 최적화 (GPU 가속)

#### 2.3 히어로 섹션 통합 (2시간)
- 기존 Hero 컴포넌트 교체
- 반응형 처리
- 폴백 UI (3D 미지원 환경)

### 산출물
- [x] `/components/brand` 폴더 생성
- [x] WaveHero, WaveCursor, WaveScrollEffect 구현
- [x] 히어로 섹션 적용

### 성공 기준
- 페이지 로딩 시 부드러운 파도 애니메이션
- 마우스 이동 시 파도가 퍼져나감
- 스크롤 시 파도 속도 변화
- 60fps 유지 (성능)

---

## 🔷 Phase 3: Premium Micro-Interaction Library (Week 3)

**📋 Todo**: `.planning/todos/pending/2026-01-19-premium-micro-interaction-library.md`

### 목표
모든 UI 인터랙션을 프리미엄급으로 업그레이드

### Why Third?
- Phase 1, 2의 시각적 기반 완성 후 인터랙션 강화
- 전체 사이트에 적용되는 라이브러리

### 주요 작업

#### 3.1 Hover Effects (3-4시간)
- MagneticButton: 자석 효과
- GlowCard: 빛나는 카드
- ParallaxCard: 3D 틸트
- RippleButton: 물결 효과

#### 3.2 Scroll Effects (2-3시간)
- RevealOnScroll: 순차 등장
- ParallaxSection: 배경 패럴랙스
- CountUp: 숫자 카운트업

#### 3.3 전체 적용 (1-2시간)
- 모든 CTA 버튼에 MagneticButton 적용
- 포트폴리오 카드에 GlowCard 적용
- 통계 섹션에 CountUp 적용

### 산출물
- [x] `/components/animation-v2` 폴더 생성
- [x] 9개 프리미엄 인터랙션 컴포넌트
- [x] 전체 페이지 적용

### 성공 기준
- 모든 버튼/카드에 프리미엄 애니메이션
- 평균 체류 시간 2배 증가
- 60fps 유지

---

## 🔷 Phase 4: Dynamic Theme Switcher (Week 4 - Part 1)

**📋 Todo**: `.planning/todos/pending/2026-01-19-dynamic-theme-switcher.md`

### 목표
6개 색상 패키지를 고객이 실시간으로 선택/체험

### Why Fourth?
- Phase 1의 토큰 시스템 기반으로 빠른 구현
- 즉시 보여줄 수 있는 기능 (Quick Win)

### 주요 작업

#### 4.1 색상 전환 시스템 (2시간)
- ColorPackagePicker 구현
- CSS 변수 기반 즉시 전환
- localStorage 저장

#### 4.2 AI 업종별 추천 (1시간)
- IndustryMatcher 구현
- 업종별 최적 색상 로직

#### 4.3 Contact 페이지 통합 (1시간)
- UI 디자인
- 사용성 테스트

### 산출물
- [x] `/components/theme-switcher` 폴더
- [x] ColorPackagePicker, IndustryMatcher 구현
- [x] Contact 페이지 통합

### 성공 기준
- 클릭 시 즉시 전체 사이트 색상 변경
- 6개 패키지 모두 정상 작동
- 업종별 추천 정확도 100%

---

## 🔷 Phase 5: Storybook + Figma Code Connect (Week 4 - Part 2)

**📋 Todo**: `.planning/todos/pending/2026-01-19-figma-code-connect-storybook.md`

### 목표
디자이너-개발자 협업을 위한 완벽한 문서화 시스템

### Why Last?
- 시스템 완성도 향상
- 이전 Phase들의 컴포넌트 문서화

### 주요 작업

#### 5.1 Figma Code Connect 설정 (2-3시간)
- @figma/code-connect 설치
- Button, Card 등 주요 컴포넌트 연결
- figma.connect() 설정

#### 5.2 Storybook 통합 (1-2시간)
- Figma 플러그인 추가
- Design 탭 설정
- 주요 컴포넌트 Stories 업데이트

#### 5.3 자동화 워크플로우 (1시간)
- GitHub Actions 설정
- 매일 Figma 변경 감지
- 자동 PR 생성

### 산출물
- [x] `/figma` 폴더 생성
- [x] Code Connect 설정 완료
- [x] Storybook Figma 통합
- [x] GitHub Actions 워크플로우

### 성공 기준
- Storybook에서 Figma 디자인 임베드
- Figma 변경 시 자동 PR 생성
- 신규 개발자 온보딩 2시간 이내

---

## 🚀 Quick Win 전략 (시간 부족 시)

최소한 이 순서로 구현:

1. **Phase 4 (4시간)** → 즉시 고객에게 보여줄 수 있는 기능
2. **Phase 1 (6시간)** → 장기적 유지보수 효율성
3. **Phase 3 (8시간)** → 프리미엄 느낌 향상

**총 18시간**으로 핵심 가치 달성

---

## 📊 예상 성과

### 디자인 품질
- Figma ↔ 코드 일치도: **100%**
- 하드코딩된 스타일: **0개**
- 디자인 토큰 체계화: **완료**

### 사용자 경험
- 평균 체류 시간: **2배 증가**
- CTA 클릭률: **30% 증가**
- 첫 방문자 임팩트: **"Wow" 효과**

### 팀 효율성
- 디자인 시스템 구축 시간: **75% 단축**
- 디자이너-개발자 소통 비용: **80% 감소**
- 신규 개발자 온보딩: **1일 → 2시간**

---

## 🎯 다음 단계

1. **Phase 1 시작**: `/gsd:plan-phase` 실행
2. **Todo 확인**: `/gsd:check-todos` 실행
3. **진행 상황**: `/gsd:progress` 실행

---

*로드맵 생성일: 2026-01-19*
*예상 완료일: 2026-02-16 (4주 후)*
