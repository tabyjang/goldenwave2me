# 작업 기록

- 날짜: 2026-01-31
- 요청: Module not found: Can't resolve '@/components/language-switcher' 오류 수정

## 수행 내용
- `src/components/language-switcher.tsx` 신규 생성
- 헤더에서 사용할 수 있도록 `LanguageSwitcher` 컴포넌트 구현
- 쿼리 파라미터 `lang` 기준으로 언어 표시/전환 처리

## 결과
- 누락된 모듈 경로 해소로 빌드 에러 원인 제거
