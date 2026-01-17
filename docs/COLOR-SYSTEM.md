# 골든웨이브 마케팅 - 색상 시스템 가이드

## 📋 색상 패키지 구성 체크리스트

### Phase 1: 색상 구조 정의
- [ ] Primary Color (주요 브랜드 색상)
- [ ] Secondary Color (보조 강조 색상)
- [ ] Accent Color (CTA, 버튼 등 액션 유도)
- [ ] Background Colors (배경 - Dark/Light 변형)
- [ ] Text Colors (텍스트 계층 - Primary/Secondary/Muted)
- [ ] Border Colors (테두리 - Subtle/Default/Strong)
- [ ] State Colors (Success/Warning/Error)

### Phase 2: 색상 스케일 시스템 (Vercel Geist 참조)
- [ ] 10단계 색상 스케일 (100-1000)
- [ ] Alpha 변형 (투명도 버전)
- [ ] Semantic 토큰 매핑 (용도별 이름 지정)

### Phase 3: 접근성 검증
- [ ] WCAG 2.0 AA 기준 충족 (4.5:1 명암비)
- [ ] 다크모드/라이트모드 대응
- [ ] 색맹 사용자 고려

### Phase 4: 구현 체크
- [ ] CSS 변수로 정의
- [ ] Tailwind config 설정
- [ ] 컴포넌트별 적용
- [ ] 반응형 테스트

---

## 🎨 참조한 디자인 시스템 및 웹사이트

### 1. **Stripe** (결제 플랫폼)
- **참조**: [Stripe Accessible Color Systems](https://stripe.com/blog/accessible-color-systems)
- **특징**: CIELAB 색상 모델 기반, 접근성 우선, 500 단위 간격으로 4.5:1 명암비 보장
- **핵심 색상**: Downriver (#0A2540), Cornflower Blue (#635BFF), Black Squeeze (#F6F9FC)

### 2. **Vercel / Geist** (개발 플랫폼)
- **참조**: [Vercel Geist Colors](https://vercel.com/geist/colors)
- **특징**: 기능별 색상 분류 (배경/테두리/텍스트), P3 색공간 지원, 10단계 스케일
- **시스템**: Colors 1-3 (배경), 4-6 (테두리), 7-8 (고대비), 9-10 (텍스트)

### 3. **Linear** (프로젝트 관리)
- **참조**: [UIColours - Linear](https://uicolours.com/)
- **특징**: 보라-파랑 그라데이션, 다크모드 중심, 네온 액센트

### 4. **Notion** (생산성 도구)
- **참조**: [Notion Color Guide](https://www.notion.com/templates/ultimate-color-guide-free)
- **특징**: 중립적 배경, 다양한 액센트 색상, 유연한 테마 시스템

### 5. **2025-2026 트렌드**
- **참조**: [Hook Agency Color Schemes](https://hookagency.com/blog/website-color-schemes/), [Elegant Themes](https://www.elegantthemes.com/blog/design/color-palettes-for-balanced-web-design)
- **주요 트렌드**:
  - Mocha Mousse (Pantone 2025)
  - Cloud Dancer (Pantone 2026)
  - 보라-파랑 그라데이션 (테크 업계 표준)
  - 다크모드 + 네온 액센트
  - 부드러운 중립색 + 포인트 컬러

---

## 🌈 5가지 색상 패키지 구성안

### 패키지 1: "Midnight Violet" (미드나잇 바이올렛)
**영감**: Linear, Stripe의 현대적 테크 감성
**분위기**: 고급스럽고 혁신적인, 테크 스타트업 느낌

| 용도 | 이름 | Hex | 설명 |
|------|------|-----|------|
| Primary | Deep Violet | `#7C3AED` | Violet-600 |
| Secondary | Electric Indigo | `#4F46E5` | Indigo-600 |
| Accent | Cyan | `#06B6D4` | Cyan-500 |
| Background Dark | Space Black | `#0F0F23` | 깊은 우주 블랙 |
| Background Light | Slate | `#1E1B4B` | Indigo-950 |
| Text Primary | White | `#FFFFFF` | 순백색 |
| Text Secondary | Lavender | `#C4B5FD` | Violet-300 |
| Text Muted | Gray | `#6B7280` | Gray-500 |
| Border | Violet Border | `#7C3AED20` | 투명 바이올렛 |
| Gradient | | `linear-gradient(135deg, #7C3AED, #4F46E5)` | |

---

### 패키지 2: "Ocean Breeze" (오션 브리즈)
**영감**: Vercel, Tailwind의 청량한 블루 계열
**분위기**: 신뢰감 있고 깔끔한, 전문 에이전시 느낌

| 용도 | 이름 | Hex | 설명 |
|------|------|-----|------|
| Primary | Ocean Blue | `#0EA5E9` | Sky-500 |
| Secondary | Deep Teal | `#0891B2` | Cyan-600 |
| Accent | Emerald | `#10B981` | Emerald-500 |
| Background Dark | Navy | `#0C1222` | 깊은 네이비 |
| Background Light | Dark Slate | `#1E293B` | Slate-800 |
| Text Primary | White | `#FFFFFF` | |
| Text Secondary | Sky Light | `#7DD3FC` | Sky-300 |
| Text Muted | Slate | `#94A3B8` | Slate-400 |
| Border | Blue Border | `#0EA5E920` | 투명 블루 |
| Gradient | | `linear-gradient(135deg, #0EA5E9, #06B6D4)` | |

---

### 패키지 3: "Sunset Coral" (선셋 코랄)
**영감**: 2025 트렌드, 따뜻하고 활기찬 에너지
**분위기**: 친근하고 활발한, 크리에이티브 에이전시 느낌

| 용도 | 이름 | Hex | 설명 |
|------|------|-----|------|
| Primary | Coral | `#F97316` | Orange-500 |
| Secondary | Rose | `#F43F5E` | Rose-500 |
| Accent | Amber | `#F59E0B` | Amber-500 |
| Background Dark | Warm Black | `#18120B` | 따뜻한 블랙 |
| Background Light | Dark Brown | `#292118` | 다크 브라운 |
| Text Primary | Cream | `#FEF3C7` | Amber-100 |
| Text Secondary | Peach | `#FDBA74` | Orange-300 |
| Text Muted | Tan | `#A8A29E` | Stone-400 |
| Border | Coral Border | `#F9731620` | 투명 코랄 |
| Gradient | | `linear-gradient(135deg, #F97316, #F43F5E)` | |

---

### 패키지 4: "Forest Sage" (포레스트 세이지)
**영감**: 2025 지속가능성 트렌드, 자연 친화적
**분위기**: 안정적이고 신뢰할 수 있는, 컨설팅 느낌

| 용도 | 이름 | Hex | 설명 |
|------|------|-----|------|
| Primary | Emerald | `#059669` | Emerald-600 |
| Secondary | Teal | `#0D9488` | Teal-600 |
| Accent | Lime | `#84CC16` | Lime-500 |
| Background Dark | Forest Black | `#0A1410` | 포레스트 블랙 |
| Background Light | Dark Green | `#14281D` | 다크 그린 |
| Text Primary | Mint | `#ECFDF5` | Emerald-50 |
| Text Secondary | Light Green | `#6EE7B7` | Emerald-300 |
| Text Muted | Sage | `#9CA3AF` | Gray-400 |
| Border | Green Border | `#05966920` | 투명 그린 |
| Gradient | | `linear-gradient(135deg, #059669, #0D9488)` | |

---

### 패키지 5: "Neon Fuchsia" (네온 푸시아)
**영감**: Y2K 리바이벌, 대담한 크리에이티브
**분위기**: 트렌디하고 대담한, 젊은 브랜드 느낌

| 용도 | 이름 | Hex | 설명 |
|------|------|-----|------|
| Primary | Fuchsia | `#D946EF` | Fuchsia-500 |
| Secondary | Pink | `#EC4899` | Pink-500 |
| Accent | Electric Blue | `#3B82F6` | Blue-500 |
| Background Dark | Deep Purple | `#1A0A1E` | 딥 퍼플 |
| Background Light | Dark Magenta | `#2D1B33` | 다크 마젠타 |
| Text Primary | White | `#FFFFFF` | |
| Text Secondary | Light Pink | `#F5D0FE` | Fuchsia-200 |
| Text Muted | Mauve | `#A78BFA` | Violet-400 |
| Border | Pink Border | `#EC489920` | 투명 핑크 |
| Gradient | | `linear-gradient(135deg, #D946EF, #EC4899)` | |

---

## ✅ 구현 체크리스트

### 1단계: 색상 시스템 파일 생성
- [ ] `src/styles/colors.ts` - 색상 상수 정의
- [ ] `src/types/theme.ts` - ColorScheme 타입 추가
- [ ] `tailwind.config.ts` - CSS 변수 연동

### 2단계: 테마 설정 업데이트
- [ ] `src/config/themes/` 폴더에 각 패키지별 설정 파일
- [ ] SiteConfig에 colorScheme 필드 추가
- [ ] 동적 CSS 변수 주입 로직

### 3단계: 컴포넌트 마이그레이션
- [ ] 하드코딩된 색상 → CSS 변수로 교체
- [ ] Hero 섹션 적용
- [ ] Services 섹션 적용
- [ ] Portfolio 섹션 적용
- [ ] Process 섹션 적용
- [ ] Testimonials 섹션 적용
- [ ] CTA 섹션 적용
- [ ] Header/Footer 적용

### 4단계: 테스트 및 검증
- [ ] 각 템플릿(Bold, Dark, Wave, Onepage)에서 5개 색상 패키지 테스트
- [ ] 다크/라이트 모드 전환 테스트
- [ ] 모바일 반응형 테스트
- [ ] 접근성 검증 (contrast checker)

### 5단계: 문서화
- [ ] Storybook에 색상 팔레트 문서화
- [ ] 사용 가이드라인 작성
- [ ] 예시 스크린샷 추가

---

## 📚 참고 자료

- [Stripe - Designing Accessible Color Systems](https://stripe.com/blog/accessible-color-systems)
- [Vercel Geist Colors](https://vercel.com/geist/colors)
- [Hook Agency - 101+ Website Color Schemes](https://hookagency.com/blog/website-color-schemes/)
- [Elegant Themes - Color Palettes 2026](https://www.elegantthemes.com/blog/design/color-palettes-for-balanced-web-design)
- [Figma - 53 Unique Website Color Schemes](https://www.figma.com/resource-library/website-color-schemes/)
- [Octet Design - SaaS UI Color Palettes](https://octet.design/colors/user-interfaces/saas-ui-design/)
