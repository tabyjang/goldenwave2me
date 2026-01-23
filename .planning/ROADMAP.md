# Roadmap: GoldenWave Design Overhaul

## Overview

현재 무채색(흑백) 기본 디자인에서 최신 트렌드인 Aurora UI + Bento Grid + Motion-Driven 스타일로 전면 리브랜딩. UI UX Pro Max 스킬의 추천 디자인 시스템을 기반으로 7개 Phase에 걸쳐 체계적으로 진행.

## Domain Expertise

- .claude/skills/ui-ux-pro-max/SKILL.md (UI/UX 디자인 인텔리전스)

## Design System Reference

UI UX Pro Max 추천 시스템:
- **Style:** Motion-Driven + Aurora UI + Bento Grid
- **Colors:** Primary #EC4899, Secondary #F472B6, CTA #06B6D4, BG #FDF2F8
- **Typography:** Plus Jakarta Sans
- **Effects:** Scroll animation, parallax, glassmorphism, micro-interactions

## Phases

**Phase Numbering:**
- Integer phases (1, 2, 3): Planned milestone work
- Decimal phases (2.1, 2.2): Urgent insertions (marked with INSERTED)

- [ ] **Phase 1: Design System Foundation** - 컬러, 타이포그래피, CSS 변수 재정의
- [ ] **Phase 2: Hero Section Redesign** - Aurora 그라데이션 + 강화된 애니메이션
- [ ] **Phase 3: Bento Grid Features** - Features 섹션 Bento Grid 레이아웃 전환
- [ ] **Phase 4: Glassmorphism Components** - 카드, 네비게이션 글래스모피즘 적용
- [ ] **Phase 5: Micro-interactions & Motion** - 호버, 스크롤, 트랜지션 강화
- [ ] **Phase 6: Template Propagation** - 5개 템플릿에 새 디자인 전파
- [ ] **Phase 7: Polish & Accessibility** - 접근성, 반응형, 최종 다듬기

## Phase Details

### Phase 1: Design System Foundation
**Goal**: globals.css에 새로운 브랜드 컬러, 타이포그래피 변수 정의. 기존 무채색 스킴을 컬러풀한 시스템으로 전환.
**Depends on**: Nothing (first phase)
**Research**: Unlikely (CSS 변수 작업, 기존 패턴)
**Plans**: TBD

Key deliverables:
- oklch 기반 새 컬러 팔레트 (Primary, Secondary, Accent, CTA)
- Plus Jakarta Sans 폰트 적용
- 그라데이션 유틸리티 클래스

### Phase 2: Hero Section Redesign
**Goal**: Hero 섹션에 Aurora 스타일 그라데이션 배경, 메시 그라데이션, 개선된 입장 애니메이션 적용
**Depends on**: Phase 1
**Research**: Likely (Aurora gradient techniques)
**Research topics**: CSS mesh gradients, animated gradient blobs, backdrop patterns
**Plans**: TBD

Key deliverables:
- Aurora 그라데이션 배경 컴포넌트
- 그라데이션 텍스트 헤드라인
- 강화된 CTA 버튼 스타일

### Phase 3: Bento Grid Features
**Goal**: 균일한 3컬럼 그리드를 Apple 스타일 Bento Grid로 전환. 다양한 크기 카드 (1x1, 2x1, 1x2)
**Depends on**: Phase 1
**Research**: Unlikely (CSS Grid 패턴)
**Plans**: TBD

Key deliverables:
- Bento Grid 레이아웃 시스템
- 다양한 크기의 Feature 카드
- 카드별 이미지/일러스트 슬롯

### Phase 4: Glassmorphism Components
**Goal**: 카드, 모달, 네비게이션에 Glassmorphism(프로스트 글래스) 효과 적용
**Depends on**: Phase 1
**Research**: Likely (backdrop-filter 호환성)
**Research topics**: backdrop-blur 브라우저 지원, 라이트/다크 모드 대비
**Plans**: TBD

Key deliverables:
- Glass Card 컴포넌트
- Floating Glass Navigation
- 라이트/다크 모드 최적화

### Phase 5: Micro-interactions & Motion
**Goal**: 호버 효과, 스크롤 트리거 애니메이션, 페이지 트랜지션 강화
**Depends on**: Phase 2, 3, 4
**Research**: Unlikely (Framer Motion 기존 사용)
**Plans**: TBD

Key deliverables:
- 카드 호버: scale + border 컬러 변화
- 버튼 호버: 아이콘 이동 애니메이션
- 스크롤 reveal 애니메이션 강화
- 네비 언더라인 애니메이션

### Phase 6: Template Propagation
**Goal**: Phase 1-5에서 minimal 템플릿에 적용한 디자인을 bold, dark, wave, onepage 템플릿에 전파
**Depends on**: Phase 5
**Research**: Unlikely (기존 템플릿 구조)
**Plans**: TBD

Key deliverables:
- bold 템플릿 업데이트
- dark 템플릿 업데이트
- wave 템플릿 업데이트
- onepage 템플릿 업데이트

### Phase 7: Polish & Accessibility
**Goal**: WCAG AA 접근성 검증, 반응형 테스트 (375px, 768px, 1024px, 1440px), 최종 다듬기
**Depends on**: Phase 6
**Research**: Unlikely (검증 작업)
**Plans**: TBD

Key deliverables:
- 컬러 대비 4.5:1 검증
- 키보드 네비게이션 테스트
- prefers-reduced-motion 지원
- Lighthouse 90+ 달성

## Progress

**Execution Order:**
Phases execute in numeric order: 1 → 2 → 3 → 4 → 5 → 6 → 7

| Phase | Plans Complete | Status | Completed |
|-------|----------------|--------|-----------|
| 1. Design System Foundation | 0/TBD | Not started | - |
| 2. Hero Section Redesign | 0/TBD | Not started | - |
| 3. Bento Grid Features | 0/TBD | Not started | - |
| 4. Glassmorphism Components | 0/TBD | Not started | - |
| 5. Micro-interactions & Motion | 0/TBD | Not started | - |
| 6. Template Propagation | 0/TBD | Not started | - |
| 7. Polish & Accessibility | 0/TBD | Not started | - |
