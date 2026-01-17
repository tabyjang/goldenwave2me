# 디자인 개선 아이디어

> 작성일: 2026-01-17
> 상태: 검토 대기

## 현재 디자인 분석

- **컬러**: 완전 무채색 (oklch 0 채도) - 흑백 톤
- **레이아웃**: 기본 그리드 레이아웃
- **애니메이션**: FadeIn, SlideIn 기본 애니메이션
- **3D**: Three.js 기반 DemoScene
- **헤더**: 심플한 sticky 헤더, backdrop-blur
- **카드**: 기본 border + shadow-sm

---

## 개선 아이디어

### 1. 브랜드 컬러 도입

현재 완전 무채색(흑백) 스킴. 브랜드 아이덴티티를 위한 액센트 컬러 추가 필요.

**구현 방법:**
```css
/* globals.css 수정 */
--primary: oklch(0.55 0.22 270);  /* 인디고/퍼플 계열 */
--accent: oklch(0.75 0.15 180);   /* 보조 컬러 */
```

**적용 위치:**
- CTA 버튼
- 아이콘 배경
- 링크 호버 상태
- 프라이머리 액션 요소

---

### 2. 그라데이션 배경 Hero 섹션

현재 Hero 섹션이 단조로움.

**옵션:**
- 메시 그라데이션 배경
- 노이즈 텍스처 오버레이
- Glassmorphism 카드
- Animated gradient blob (뒤에 움직이는 원형 그라데이션)

**참고 파일:** `src/components/sections/hero.tsx`

---

### 3. 마이크로 인터랙션 강화

현재 `hover:shadow-lg`만 존재.

**추가할 인터랙션:**
- 카드 hover: `scale-[1.02]` + border 컬러 변화
- 버튼 hover: 아이콘 이동 애니메이션 (→ 오른쪽으로)
- 네비게이션: underline 애니메이션
- 헤더: 스크롤 시 배경 변화 (투명 → 불투명)

**수정 필요 파일:**
- `src/components/ui/card.tsx`
- `src/components/ui/button.tsx`
- `src/components/layout/header.tsx`

---

### 4. 타이포그래피 계층 강화

현재 기본 Geist 폰트만 사용.

**개선 방안:**
- 헤드라인에 그라데이션 텍스트 효과
- Hero 제목에 `text-balance` 적용
- 부제목: 더 가벼운 font-weight (300)
- 섹션 간 시각적 구분 (divider, 배경색 변화)

**CSS 예시:**
```css
.gradient-text {
  background: linear-gradient(135deg, var(--primary), var(--accent));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
```

---

### 5. Bento Grid 레이아웃

현재 Features가 균일한 3컬럼 그리드.

**트렌디한 Bento Box 스타일:**
- 다양한 크기의 카드 (1x1, 2x1, 1x2)
- 주요 기능: 크게 (span-2)
- 부가 기능: 작게 (span-1)
- 일부 카드에 이미지/일러스트/3D 요소 삽입

**그리드 예시:**
```
┌──────────┬─────┐
│  2x1     │ 1x1 │
├─────┬────┴─────┤
│ 1x1 │   2x1    │
├─────┴──────────┤
│      3x1       │
└────────────────┘
```

**수정 필요 파일:** `src/components/sections/features.tsx`

---

## 우선순위 (제안)

| 순위 | 아이디어 | 난이도 | 임팩트 |
|------|----------|--------|--------|
| 1 | 브랜드 컬러 도입 | 낮음 | 높음 |
| 2 | 마이크로 인터랙션 | 중간 | 높음 |
| 3 | 타이포그래피 계층 | 낮음 | 중간 |
| 4 | Hero 그라데이션 | 중간 | 중간 |
| 5 | Bento Grid | 높음 | 높음 |

---

## 참고 자료

- [Tailwind CSS 공식 문서](https://tailwindcss.com)
- [shadcn/ui 컴포넌트](https://ui.shadcn.com)
- [OKLCH 컬러 피커](https://oklch.com)
