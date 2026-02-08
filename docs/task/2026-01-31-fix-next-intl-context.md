# 작업 기록

- 날짜: 2026-01-31
- 요청: NextIntlClientProvider 컨텍스트 누락 런타임 오류 수정

## 수행 내용
- `src/components/layout/header.tsx`에서 `useTranslations` 제거
- 네비게이션/버튼 텍스트를 직접 라벨로 대체
- 사이트명은 `defaultSiteConfig.name`을 사용하도록 변경

## 결과
- `NextIntlClientProvider` 미설정으로 인한 런타임 오류 제거
