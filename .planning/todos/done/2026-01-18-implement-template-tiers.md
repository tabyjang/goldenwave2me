---
created: 2026-01-18T01:55:00
title: 템플릿 티어 구현 (Starter, Pro)
area: general
files:
  - docs/TEMPLATE_TIERS.md
---

## Problem

TEMPLATE_TIERS.md 문서에 정의된 Starter와 Pro 티어의 페이지와 기능을 구현해야 합니다.
Enterprise 티어는 제외하고 Starter → Pro 순서로 진행합니다.

**Starter 티어** (₩39,000):
- 5개 페이지: Home, About, Contact, Blog List, Blog Post
- 기본 기능: 반응형 디자인, 다크모드, MDX 블로그, SEO 최적화
- 대상: 랜딩 페이지, 포트폴리오, 소규모 비즈니스

**Pro 티어** (₩89,000):
- 12개 페이지: 마케팅 7개 + 인증 4개 + FAQ 1개
- 추가 기능: Supabase Auth, OAuth (GitHub, Google), PostgreSQL 연동
- 대상: 비즈니스 웹사이트, 회원 가입 기능이 필요한 서비스

현재 프로젝트는 마케팅 사이트 구조만 있고, 티어별 기능이 구현되지 않은 상태입니다.

## Solution

### 1단계: Starter 티어 완성
- 핵심 5개 페이지 구현 (Home, About, Contact, Blog List, Blog Post)
- 기본 UI/UX 컴포넌트 구축
- MDX 블로그 시스템 완성
- 반응형 디자인 및 다크모드
- SEO 최적화 (메타태그, sitemap, robots.txt)

### 2단계: Pro 티어 구현
- Supabase 프로젝트 설정 및 Auth 연동
- 인증 페이지 4개 추가 (Sign In, Sign Up, Forgot Password, Auth Error)
- 마케팅 페이지 추가 (Services, Pricing, FAQ)
- OAuth 로그인 (GitHub, Google)
- PostgreSQL 데이터베이스 연동
- RLS 정책 설정

각 티어는 독립적으로 작동하며, Pro 티어는 Starter 티어의 모든 기능을 포함합니다.
