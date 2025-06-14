# Next.js 프로젝트 구조

<img src="https://img.shields.io/badge/Next.js_v15.3.3-000000?style=for-the-badge&logo=nextdotjs&logoColor=FFFFFF" alt="Next.js 15.3.3">
<img src="https://img.shields.io/badge/Cesium.js_v1.129.0-FFFFFF?style=for-the-badge&logo=cesium&logoColor=6CADDF" alt="Cesium.js 1.129.0">


> - App Routing
> - src 디렉토리 사용하지 않음.

## 기본 디렉토리 구조

```text
cesiumjs-component-bundle
├── .next               // Next.js 빌드 후 출력 폴더
├── app                 // App routing 최상위 폴더
├── assets              // 컴포넌트 내부에서 사용하는 이미지, 아이콘, 폰트 등 정적 자산을 관리
├── components          // 재사용 가능한 컴포넌트를 저장하는 폴더
├── config              // 환경 설정 관련 파일들을 저장. API 엔드포인트 설정 등이 포함
├── constants           // 공통적으로 사용되는 상수들을 정의한 파일들이 위치
├── contexts            // Context API를 사용하는 경우 전역 상태 관리 관련 파일들이 위치하며 Redux를 사용하는 경우 `store`로 이름을 변경하기도 함.
├── hooks               // 커스텀 React 훅을 관리하는 폴더
├── node_modules        // 프로젝트에 설치된 모든 라이브러리가 저장되는 폴더
├── public              // 컴파일이 필요없는 정적파일이 포함된 폴더
├── services            // API 호출이나 외부 서비스와의 상호작용을 담당하는 로직
├── styles              // css 또는 scss 파일을 모듈화하여 관리. 전역 스타일이나 테마 설정도 여기에 포함
├── utils               // 정규표현식 패턴이나 공통 함수 등 유틸리티 코드를 저장
├── .gitignore          // git ignore 파일
├── eslint.config.mjs   // ECMA Script 검사 설정 파일
├── jsconfig.json       // 컴파일러 옵션 등 설정 파일
├── next.config.mjs     // Next.js 설정 파일
├── NextjsREADME.md     // Next.js README.md 파일
├── package.json        // Node.js 패키지 관리 파일
└── README.md           // 현재 파일
```

# CesiumJS 연동

1. 라이브러리 설치
   ```shell
   npm install cesium
   ```

2. Cesium 리소스 파일 복사

   ```javascript
   // next.config.js 예시
   
   const CopyWebpackPlugin = require("copy-webpack-plugin");
   const path = require("path");
   
   module.exports = {
        webpack: (config, { isServer }) => {
	        if (!isServer) {
	            config.plugins.push(
	                new CopyWebpackPlugin({
	                    patterns: [{
						   from: path.join(__dirname, "node_modules/cesium/Build/Cesium/Workers"),
						   to: path.join(__dirname, "public/Cesium/Workers"),
	                    },  {
						   from: path.join(__dirname, "node_modules/cesium/Source/Assets"),
						   to: path.join(__dirname, "public/Cesium/Assets"),
	                    }, {
	                        from: path.join(__dirname, "node_modules/cesium/Source/Widgets"),
	                        to: path.join(__dirname, "public/Cesium/Widgets"),
	                    }, {
						   from: path.join(__dirname, "node_modules/cesium/Source/ThirdParty"),
						   to: path.join(__dirname, "public/Cesium/ThirdParty"),
	                    }],
	                })
	            );
	        }
	        return config;
	        },
        };
	```



