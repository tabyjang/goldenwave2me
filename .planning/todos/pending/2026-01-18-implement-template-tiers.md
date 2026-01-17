---
created: 2026-01-18T01:55:00
title: 템플릿 티어 구현 (Starter, Pro, Enterprise)
area: general
files:
  - docs/TEMPLATE_TIERS.md
---

## Problem

TEMPLATE_TIERS.md 문서에 정의된 세 가지 템플릿 티어의 모든 페이지와 기능을 구현해야 합니다.

**Starter 티어** (₩39,000):
- 5개 페이지: Home, About, Contact, Blog List, Blog Post
- 기본 기능: 반응형 디자인, 다크모드, MDX 블로그, SEO 최적화

**Pro 티어** (₩89,000):
- 12개 페이지: 마케팅 7개 + 인증 4개 + FAQ 1개
- 추가 기능: Supabase Auth, OAuth (GitHub, Google), PostgreSQL 연동

**Enterprise 티어** (₩189,000):
- 25개+ 페이지: 마케팅 10개 + 블로그 4개 + 인증 6개 + 대시보드 6개 + 유틸리티 5개
- 추가 기능: Stripe 결제, 2FA, RBAC, 완전한 다국어 지원, 대시보드 레이아웃

현재 프로젝트는 마케팅 사이트 구조만 있고, 티어별 기능이 구현되지 않은 상태입니다.

## Solution

1. **Starter 티어 먼저 완성**
   - 핵심 5개 페이지 구현
   - 기본 UI/UX 컴포넌트 구축
   - MDX 블로그 시스템 완성

2. **Pro 티어 구현**
   - Supabase Auth 설정
   - 인증 페이지 4개 추가
   - Services, Pricing, FAQ 페이지 추가

3. **Enterprise 티어 구현**
   - 대시보드 레이아웃 및 6개 페이지
   - Stripe 결제 연동
   - 2FA 및 고급 보안 기능
   - 완전한 i18n 시스템
   - 유틸리티 페이지 (에러, 약관 등)

각 티어는 독립적으로 작동하며, 상위 티어는 하위 티어의 모든 기능을 포함합니다.
