# FE: KNUBus - 강원대학교 순환버스 정보 어플리케이션

## 프로젝트 개요

- 대상 사용자: 강원대학교 학생 및 교직원.
- 프로젝트 목적: 순환버스 운행 정보의 접근성과 가시성 향상.
- React Native: 웹/iOS/Android 어떤 기기에서든 정보를 접할 수 있게 함.
- 최종 배포 일정: 2024년 04월 01일. 이는 버스 운행 기간인 2024년 3월 4일부터 2024년 6월 24일에 맞춤.

### 주요 기능

- **날짜별 셔틀버스 운행 정보**: 사용자는 현재 날짜에 해당하는 순환버스 운행 정보를 확인할 수 있으며, 이전 및 다음 날짜를 변경하여 정보를 조회할 수 있습니다.
- **현재 시각 기반 운행 상태 표시**: 현재 시각을 기준으로 셔틀버스의 운행 상태(운영 예정, 운영 중, 운영 종료)를 사용자에게 보여줍니다.
- **휴일 및 회차별 운행 정보**: 휴일에는 안내 메시지를 표시하고, 휴일이 아닌 경우에는 현재 회차의 운행 시간표와 이전 및 다음 회차로의 이동 기능을 제공합니다.
- **운행 노선도 및 시간표**: 운행 노선도와 운행 시간표를 확인할 수 있습니다.

---

## 개발 환경 및 기술 스택

### 개발 환경

- **에디터(IDE):** Visual Studio Code
- **Node.js:** v20.11.1 LTS
- **npm:** v10.5.0
- **Expo**

색상 코드 : 참고 - https://encycolorpedia.kr/0047bb
메인 색상 (Main Color): #0047bb
밝은 색상 (Light Color): #175ed2
어두운 색상 (Dark Color): #0f3c87
강조 색상 (Accent Color): #ffb844

### 기술 스택

- **프론트엔드:**
  - **React Native:** 자바스크립트 및 JSX.
  - **React Hooks:** useState, useEffect, useCallback.
  - **React Navigation:** 네비게이션 관리.
  - **Redux:** 애플리케이션 상태 관리.

### 컴포넌트 내용

- `App.js`: `Navigation.js`을 임포트함.
- `Navigation.js`: react-navigation(tap screen)를 활용하여 애플리케이션 정의. (Header.js`, HomeScreen.js, MapScreen.js, TimeScreen.js)
- `Header.js` & `Footer.js`: 헤더 및 푸터.
- `HomeScreen.js`: 메인 페이지, 현재 시각 표시.
  - `DateComponent.js`: 현재 날짜에 따른 휴일 여부를 표시. 이전 및 다음 날짜로 이동 가능.
  - `Round.js`: 현재 회차와 해당 회차의 운행 시간표를 표시. 이전 및 다음 회차로 이동 가능.
- `MapScreen.js`: 전체 운행 노선도를 표시.
- `TimeScreen.js`: 전체 운행 시간표를 표시.

---

### 설치 및 프로젝트 생성

1. **Expo CLI 설치:**
   - 터미널에서 `npm install -g expo-cli` 명령어로 Expo CLI 설치.
2. **프로젝트 생성:**
   - VSCode 터미널에서 `npx expo init KNUBusApp` 명령어로 Expo 프로젝트 생성.

### 프로젝트 실행

1. **모듈 설치:**
   - 프로젝트 디렉토리에서 `npm install`을 실행하여 필요한 모듈 설치.
2. **앱 실행:**
   - `npm start` 혹은 `expo start` 명령어로 프로젝트 실행.

---

## 프론트엔드 팀원

- **구희원:** UI/UX 디자인. [GitHub](https://github.com/HeHelee)
- **최수영:** 컴포넌트 개발. [GitHub](https://github.com/scove03)
- **허윤수:** 상태 관리 로직 설계. [GitHub](https://github.com/sugoring)
