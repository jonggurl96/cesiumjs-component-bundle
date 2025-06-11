# React 프로젝트 구조

## 기본 디렉토리 구조

```text
cesiumjs_component
├── node_modules
├── public
├── src
├── .gitignore
├── package.json
├── README.md
└── React_README.md
```

- node_modules: 프로젝트에 설치된 모든 라이브러리가 저장되는 폴더
- public: 컴파일이 필요없는 정적파일이 포함된 폴더
- src: 실제 어플리케이션 코드가 작성되는 폴더.

## `src` 폴더 내부 구조

```text
src
├── components
├── assets
├── hooks
├── pages
├── constants
├── config
├── styles
├── services
├── utils
├── contexts
├── App.js
└── index.js

```

- components: 재사용 가능한 컴포넌트를 저장하는 폴더
- assets: 컴포넌트 내부에서 사용하는 이미지, 아이콘, 폰트 등 정적 자산을 관리
- hooks: 커스텀 React 훅을 관리하는 폴더
- pages: 페이지 단위 컴포넌트를 저장하며, React Router와 연계하여 사용
- constants: 공통적으로 사용되는 상수들을 정의한 파일들이 위치
- config: 환경 설정 관련 파일들을 저장. API 엔드포인트 설정 등이 포함
- styles: css 또는 scss 파일을 모듈화하여 관리. 전역 스타일이나 테마 설정도 여기에 포함
- services: API 호출이나 외부 서비스와의 상호작용을 담당하는 로직
- utils: 정규표현식 패턴이나 공통 함수 등 유틸리티 코드를 저장
- contexts: Context API를 사용하는 경우 전역 상태 관리 관련 파일들이 위치하며 Redux를 사용하는 경우 `store`로 이름을 변경하기도 함.



