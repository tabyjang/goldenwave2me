# 🎨 Figma → Code 디자인 시스템 구축 체크리스트

> **목표**: Figma 디자인을 AI(Claude, Cursor)를 활용하여 실제 코드 기반 디자인 시스템으로 구축
> **예상 소요 시간**: 4시간
> **핵심 원칙**: "상세한 워크플로우 프롬프트"로 AI가 단계를 건너뛰지 않도록 강제

---

## 📋 사전 준비 체크리스트

### 환경 설정
- [ ] **Figma MCP 서버 연결 확인**
  - Claude Desktop 또는 Cursor에서 Figma MCP 플러그인 설치
  - Figma API 토큰 발급 및 연결 테스트
  - 연결 확인 명령: "Figma 파일에 접근할 수 있어?"

- [ ] **프로젝트 폴더 구조 생성**
  ```
  /design-system
  ├── /tokens          # 디자인 토큰 파일
  ├── /components      # 컴포넌트 라이브러리
  ├── /features        # 화면/페이지 구현
  ├── /docs            # 컴포넌트 문서
  └── /context         # 프로젝트 컨텍스트 저장
  ```

- [ ] **필수 도구 준비**
  - Node.js / TypeScript 환경
  - 코드 에디터 (VS Code, Cursor 등)
  - Figma 디자인 파일 URL 확보

---

## 🔷 PHASE 1: 디자인 파운데이션 (토큰 추출)

### 목적
모든 컴포넌트의 **단일 진실 공급원(Single Source of Truth)** 역할을 하는 디자인 토큰 파일 생성

### 태스크

#### 1.1 새 채팅 세션 시작
- [ ] 새로운 Claude/Cursor 채팅창 열기
- [ ] Figma 파일 URL 준비

#### 1.2 토큰 추출 프롬프트 실행
- [ ] 아래 프롬프트 입력:

```
[Figma 파일 URL]을 분석해서 스타일 가이드를 만들어줘.

다음 작업을 순서대로 수행해:

1. **색상 토큰 추출**
   - Primary, Secondary, Accent 색상
   - 배경색, 텍스트 색상
   - 상태별 색상 (hover, active, disabled)
   - 시맨틱 색상 (success, warning, error, info)

2. **타이포그래피 토큰 추출**
   - 폰트 패밀리
   - 폰트 사이즈 스케일
   - 폰트 웨이트
   - 라인 하이트
   - 레터 스페이싱

3. **간격(Spacing) 토큰 추출**
   - 패딩/마진 스케일
   - 갭(gap) 값

4. **기타 토큰 추출**
   - 테두리(Border) 반경
   - 그림자(Shadow) 값
   - 브레이크포인트

결과물: `tokens/style-tokens.ts` 파일로 생성
```

#### 1.3 토큰 파일 검증
- [ ] 생성된 `style-tokens.ts` 파일 확인
- [ ] Figma 원본과 색상값 대조 (최소 5개)
- [ ] 타이포그래피 값 대조 (최소 3개)
- [ ] 누락된 토큰 있으면 추가 요청

#### 1.4 토큰 구조 예시 확인
```typescript
// 기대하는 출력 구조
export const colors = {
  primary: { 50: '#...', 100: '#...', ... },
  secondary: { ... },
  text: { primary: '#...', secondary: '#...' },
  background: { ... },
  semantic: { success: '#...', error: '#...' }
};

export const typography = {
  fontFamily: { primary: '...', secondary: '...' },
  fontSize: { xs: '...', sm: '...', ... },
  fontWeight: { ... },
  lineHeight: { ... }
};

export const spacing = { ... };
export const borderRadius = { ... };
export const shadows = { ... };
```

### 완료 확인
- [ ] `tokens/style-tokens.ts` 파일 생성됨
- [ ] 모든 색상, 폰트, 간격 값이 Figma와 일치
- [ ] TypeScript 타입 에러 없음

---

## 🔷 PHASE 2: 컴포넌트 라이브러리 구축

### 목적
재사용 가능한 UI 컴포넌트를 **워크플로우 프롬프트**로 정확하게 구현

### 태스크

#### 2.1 컴포넌트 목록 작성
- [ ] Figma에서 구현할 컴포넌트 목록 정리:
  ```
  우선순위 높음:
  - [ ] Button (Primary, Secondary, Ghost, Disabled)
  - [ ] Input (Text, Password, Error 상태)
  - [ ] Card
  - [ ] Modal/Dialog
  
  우선순위 중간:
  - [ ] Dropdown/Select
  - [ ] Checkbox / Radio
  - [ ] Tabs
  - [ ] Badge/Tag
  
  우선순위 낮음:
  - [ ] Table
  - [ ] Pagination
  - [ ] Toast/Alert
  ```

#### 2.2 워크플로우 프롬프트 템플릿 (★ 핵심)
- [ ] 각 컴포넌트마다 아래 프롬프트 사용:

```
[Figma 파일 URL]에서 [컴포넌트명] 컴포넌트를 구현해줘.

⚠️ 반드시 아래 순서대로 진행하고, 각 단계 완료 시 체크 표시해줘:

## 단계 1: 초기화 및 분석 □
- Figma 파일에서 [컴포넌트명] 찾기
- 모든 Variant(변형) 식별
- 컴포넌트 구조 파악

## 단계 2: 스펙 확인 □
- 시각적 스펙: 크기, 색상, 폰트, 패딩, 마진
- 상태별 스펙: Default, Hover, Active, Focus, Disabled
- 반응형 동작 확인

## 단계 3: 구현 □
- TypeScript로 컴포넌트 작성
- 모든 Variant를 Props로 구현
- tokens/style-tokens.ts에서 값 import 필수!

## 단계 4: 프리뷰 & 토큰 적용 확인 □
- 하드코딩된 색상/크기 값 없는지 확인
- 모든 스타일이 토큰에서 가져오는지 확인

## 단계 5: 문서화 □
- docs/[컴포넌트명].md 파일 생성
- Props 설명, 사용 예시, 주의사항 포함

결과물:
1. components/[컴포넌트명].tsx
2. docs/[컴포넌트명].md
```

#### 2.3 컴포넌트별 구현 체크
각 컴포넌트마다:
- [ ] 5단계 워크플로우 완료 확인
- [ ] Figma 디자인과 시각적 비교
- [ ] 토큰 파일에서 스타일 import 확인
- [ ] 문서 파일 생성 확인

#### 2.4 품질 체크 포인트
- [ ] 하드코딩된 색상값 없음 (예: `#FF0000` 직접 사용 금지)
- [ ] 하드코딩된 폰트 사이즈 없음
- [ ] 모든 Variant가 Props로 제어 가능
- [ ] TypeScript 타입 정의 완료

### 완료 확인
- [ ] 모든 우선순위 높음 컴포넌트 구현됨
- [ ] 각 컴포넌트마다 .tsx + .md 파일 존재
- [ ] Storybook 또는 프리뷰로 시각적 확인 완료

---

## 🔷 PHASE 3: 화면(Feature) 구현

### 목적
완성된 컴포넌트들을 조합하여 **실제 화면/페이지** 구현

### 태스크

#### 3.1 새 채팅 세션 시작 (★ 중요)
- [ ] **반드시 새로운 채팅창 열기** (문맥 혼동 방지)
- [ ] 이전 컨텍스트 파일 참조 지시

#### 3.2 화면 구현 프롬프트
- [ ] 아래 프롬프트 사용:

```
[Figma 파일 URL]에서 [화면명] 화면을 구현해줘.

사전 컨텍스트:
- context/project-context.md 파일 참조
- components/ 폴더의 기존 컴포넌트 활용

⚠️ 반드시 아래 순서대로 진행:

## 단계 1: 레이아웃 분석 □
- Figma에서 전체 레이아웃 구조 파악
- 그리드/플렉스 구조 식별
- 반응형 브레이크포인트 확인

## 단계 2: 컴포넌트 매핑 □
- 사용할 기존 컴포넌트 목록 작성
- 새로 필요한 컴포넌트 식별

## 단계 3: 구현 □
- 기존 컴포넌트 import
- 레이아웃 구성
- 간격은 반드시 토큰 사용

## 단계 4: 디테일 검증 □
- Figma와 픽셀 단위 비교
- 간격, 정렬 확인
- 반응형 동작 확인

결과물: features/[화면명].tsx
```

#### 3.3 디테일 수정 프로세스
- [ ] Figma와 비교하여 불일치 항목 목록 작성
- [ ] 각 불일치 항목 수정 요청:
  ```
  [화면명]에서 다음 부분이 Figma와 다릅니다:
  - 헤더와 본문 사이 간격: 현재 16px → Figma 24px
  - 카드 그림자: 현재 없음 → Figma에서 shadow-md 적용
  
  Figma 디자인과 100% 일치하도록 수정해줘.
  ```

#### 3.4 화면별 완료 체크
각 화면마다:
- [ ] 레이아웃 구조 Figma와 일치
- [ ] 모든 컴포넌트 올바르게 배치
- [ ] 간격/정렬 Figma와 일치
- [ ] 반응형 동작 확인

### 완료 확인
- [ ] 모든 주요 화면 구현됨
- [ ] Figma 디자인과 시각적으로 90% 이상 일치
- [ ] 반응형 동작 정상

---

## 🔷 PHASE 4: 프로젝트 컨텍스트 관리

### 목적
AI가 이전 작업 맥락을 유지하도록 **컨텍스트 저장 및 관리**

### 태스크

#### 4.1 작업 완료 시 컨텍스트 저장 (★ 매번 필수)
- [ ] 각 작업 세션 종료 시 아래 프롬프트 실행:

```
이 채팅의 주요 내용을 context/project-context.md 파일에 저장해줘.

포함할 내용:
1. 오늘 작업한 컴포넌트/화면 목록
2. 사용한 디자인 토큰 정보
3. 특이사항 및 결정 사항
4. 다음에 이어서 할 작업
5. 해결되지 않은 이슈
```

#### 4.2 새 세션 시작 시 컨텍스트 로드
- [ ] 새 채팅 시작할 때마다:
  ```
  context/project-context.md 파일을 읽고 이전 작업 맥락을 파악해줘.
  그 다음 [오늘 작업할 내용]을 진행하자.
  ```

#### 4.3 컨텍스트 파일 구조 예시
```markdown
# Project Context

## 프로젝트 개요
- 프로젝트명: [이름]
- Figma 파일: [URL]
- 기술 스택: React + TypeScript

## 완료된 작업
### 2024-XX-XX
- Button 컴포넌트 완성
- Card 컴포넌트 완성

## 진행 중인 작업
- Modal 컴포넌트 (80% 완료)

## 디자인 결정 사항
- Primary 색상은 #3B82F6 사용
- 기본 폰트는 Inter

## 다음 작업
- Input 컴포넌트 구현
- 로그인 화면 구현

## 미해결 이슈
- Dropdown 애니메이션 스펙 확인 필요
```

### 완료 확인
- [ ] `context/project-context.md` 파일 최신 상태로 유지
- [ ] 새 세션에서 이전 맥락 정상 로드 확인

---

## ✅ 최종 점검 체크리스트

### 파일 구조 확인
- [ ] `tokens/style-tokens.ts` 존재
- [ ] `components/` 폴더에 모든 컴포넌트 존재
- [ ] `docs/` 폴더에 컴포넌트별 문서 존재
- [ ] `features/` 폴더에 화면 파일 존재
- [ ] `context/project-context.md` 존재

### 코드 품질 확인
- [ ] 하드코딩된 스타일 값 없음
- [ ] 모든 스타일이 토큰에서 import
- [ ] TypeScript 에러 없음
- [ ] 린트 에러 없음

### 디자인 일치도 확인
- [ ] 색상 Figma와 일치
- [ ] 타이포그래피 Figma와 일치
- [ ] 간격/레이아웃 Figma와 일치
- [ ] 상태(hover, active 등) Figma와 일치

---

## 📝 트러블슈팅 가이드

### AI가 단계를 건너뛰는 경우
```
잠깐, 아직 [단계 N]을 완료하지 않았어.
다시 [단계 N]부터 진행해줘. 각 단계 완료 시 체크 표시 보여줘.
```

### 토큰을 사용하지 않는 경우
```
이 코드에서 하드코딩된 값을 발견했어:
- `color: '#3B82F6'` → `color: colors.primary[500]`으로 변경
- `fontSize: '14px'` → `fontSize: typography.fontSize.sm`으로 변경

tokens/style-tokens.ts에서 import해서 사용하도록 수정해줘.
```

### Figma와 불일치하는 경우
```
[요소명]이 Figma와 다릅니다:
- 현재: [현재 값]
- Figma: [Figma 값]

Figma 원본을 다시 확인하고 정확히 일치하도록 수정해줘.
```

### 컨텍스트를 잃어버린 경우
```
context/project-context.md를 다시 읽어줘.
[컴포넌트명/화면명]에 대한 이전 작업 내용을 확인하고 이어서 진행하자.
```

---

## 🎯 성공 기준

1. **디자인 토큰 완성도**: Figma의 모든 스타일 값이 토큰으로 추출됨
2. **컴포넌트 재사용성**: 모든 컴포넌트가 Props로 변형 가능
3. **디자인 일치도**: Figma와 90% 이상 시각적 일치
4. **코드 품질**: 하드코딩 없이 토큰만 사용
5. **문서화**: 모든 컴포넌트에 사용법 문서 존재

---

*마지막 업데이트: 2025-01-15*
