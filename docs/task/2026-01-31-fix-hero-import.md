# 작업 기록

- 날짜: 2026-01-31
- 요청: 실행하면 Module not found: Can't resolve './Hero' 에러 수정

## 수행 내용
- `src/components/sections/index.ts`에서 Hero import 경로 대소문자 불일치 수정
- 실제 파일명(`hero.tsx`)에 맞춰 `./hero`로 변경

## 결과
- Hero 모듈 경로 해소로 빌드 에러 원인 제거
