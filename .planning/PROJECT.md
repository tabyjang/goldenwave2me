# GoldenWave Marketing

## Vision

**골든웨이브 마케팅 (GoldenWave Marketing)** - 5가지 템플릿을 갖춘 마케팅 에이전시 웹사이트 시스템. 포트폴리오 데모 사이트와 고객사별 커스터마이징이 가능한 실제 작동 시스템.

**One-liner:** 다양한 스타일의 마케팅 에이전시 템플릿으로 빠른 고객 납품과 포트폴리오 쇼케이스를 동시에 제공

## Requirements

### Validated

- ✓ Next.js 16 + React 19 프레임워크 — existing
- ✓ 5가지 테마 시스템 (minimal, bold, dark, wave, onepage) — existing
- ✓ Tailwind CSS 4 스타일링 — existing
- ✓ 한국어 단일 언어 지원 — existing
- ✓ Supabase 인증 (Google/GitHub OAuth) — existing
- ✓ 데모 모드 (Supabase 없이 작동) — existing
- ✓ 템플릿별 Hero 섹션 구현 — existing
- ✓ 템플릿별 Services 섹션 구현 — existing
- ✓ 공통 UI 컴포넌트 (Button, Card, Input 등) — existing
- ✓ MDX 블로그 시스템 — existing
- ✓ E2E 테스트 (Playwright) — existing
- ✓ Storybook 컴포넌트 문서화 — existing
- ✓ 3D 컴포넌트 (Three.js) — existing
- ✓ 애니메이션 시스템 (Framer Motion) — existing

### Active

- [ ] 템플릿별 완성도 향상 (Portfolio, Process, Testimonials, CTA 섹션)
- [ ] 콘텐츠 관리 시스템 (SiteConfig 기반)
- [ ] 고객사 커스터마이징 시스템 (환경 변수 기반 설정 전환)
- [ ] Contact Form 백엔드 연동
- [ ] 성능 최적화 (Lighthouse 90+ 달성)
- [ ] 프로덕션 배포 및 문서화

### Out of Scope

- 결제 시스템 (Stripe) — 초기 버전에서 제외, 추후 추가
- 블로그 댓글 시스템 — 초기 버전에서 제외
- CMS 연동 (Contentful, Sanity) — 현재 MDX 사용
- 관리자 대시보드 — 추후 버전에서 고려

## Constraints

### Technical
- Vercel 배포 최적화
- 모바일 퍼스트 반응형
- SEO 최적화 (메타태그, JSON-LD, sitemap)
- 크로스 브라우저 지원 (Chrome, Firefox, Safari)

### Business
- 포트폴리오와 실제 납품 둘 다 가능한 구조
- 고객사별 빠른 커스터마이징 (설정 파일만 변경)
- 유지보수 용이성 (단일 코드베이스)

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| 단일 프로젝트 + 테마 시스템 | 코드 중복 최소화, 유지보수 용이 | ✓ 구현됨 |
| Supabase Auth 사용 | 무료 티어, OAuth 지원, PostgreSQL | ✓ 구현됨 |
| 데모 모드 지원 | Supabase 없이도 사이트 확인 가능 | ✓ 구현됨 |
| MDX 블로그 | 마크다운 기반, 정적 생성 | ✓ 구현됨 |
| 템플릿별 섹션 분리 | 각 템플릿 독립적 스타일링 가능 | ✓ 구현됨 |

## Success Metrics

- Lighthouse 성능/접근성/SEO 각 90점 이상
- 5개 템플릿 모두 완성 (모든 섹션 구현)
- E2E 테스트 통과율 100%
- 고객사 설정 전환 5분 이내 가능

## Architecture Overview

```
goldenwave-marketing/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── (demo)/            # 템플릿 쇼케이스
│   │   ├── (marketing)/       # 마케팅 페이지
│   │   └── auth/              # 인증 페이지
│   ├── components/
│   │   ├── ui/                # 공통 UI 컴포넌트
│   │   ├── sections/          # 재사용 섹션
│   │   └── templates/         # 5개 템플릿별 컴포넌트
│   │       ├── minimal/
│   │       ├── bold/
│   │       ├── dark/
│   │       ├── wave/
│   │       └── onepage/
│   ├── themes/                # 테마 설정
│   └── lib/                   # 유틸리티
│       └── supabase/          # Supabase 클라이언트
├── content/blog/              # MDX 블로그 콘텐츠
├── e2e/                       # Playwright 테스트
└── .storybook/                # Storybook 설정
```

## Stakeholders

- **개발자**: 코드베이스 관리 및 기능 구현
- **골든웨이브 마케팅**: 포트폴리오 및 고객 납품용 사이트
- **고객사**: 커스터마이징된 마케팅 웹사이트 수령

---

*Last updated: 2026-01-17 after codebase mapping and project initialization*
