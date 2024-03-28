# FE: KNUBus - 강원대학교 순환버스 정보 어플리케이션

## 프로젝트 개요

- 대상 사용자: 강원대학교 학생 및 교직원.
- 프로젝트 목적: 순환버스 운행 정보의 접근성과 가시성 향상.
- React Native: 웹/iOS/Android 어떤 기기에서든 정보를 접할 수 있도록 함.
- 최종 배포 예정: 2024년 04월 01일. 이는 버스 운행 기간인 2024년 3월 4일부터 2024년 6월 24일에 따름.

## 기능

- 현재 날짜와 해당 날짜의 휴일 여부를 표시하고, 해당하는 회차 정보를 표시함.
- 순환버스의 전체 노선도를 지도 상에 표시함.
- 순환버스의 전체 운행 시간표를 표시함.

---

## 개발 환경

- **에디터(IDE):** Visual Studio Code
- **서버 및 패키지 관리:** Node.js(v20.11.1 LTS), npm(v10.5.0)
- **프로젝트 관리:** Expo
- **버전 관리:** Git, Github
- **문서 관리:** Notion

### 패키지

- `react:` useState 훅 (상태 관리)
- `react-native:` 기본 UI 구성 요소 (View, Text, Button, Image), StyleSheet (스타일 지정), SafeAreaView (안전한 뷰 영역 지정), StatusBar (상태 표시줄 조절), Dimensions (화면의 너비 및 높이 계산)
- `react-native-vector-icons:` Ionicons (백터 아이콘 세트)
- `react-navigation:` bottom-tabs (탭 네비게이션 생성), native (네비게이션 컨테이너 생성)
- `react-native-image-zoom-viewer:` ImageViewer(이미지 확대 및 축소)

### 색상 코드

- 메인 색상 (Main Color): #0047bb
- 밝은 색상 (Light Color): #175ed2
- 어두운 색상 (Dark Color): #0f3c87
- 강조 색상 (Accent Color): #ffb844

---

## 컴포넌트 내용

### App.js

- Header.js, Navigation.js 임포트.
- SafeAreaView: 기기의 화면 크기에 따라 표시 영역을 조절함.
- StatusBar: `barStyle` 속성을 사용하여 상태 표시줄의 텍스트 색상을 어두운 색으로 설정함.

### Navigation.js

- HomeScreen.js, MapScreen.js, TimeScreen.js 임포트.
- react-navigation을 사용하여 내비게이션을 정의함.
  - createBottomTabNavigator를 사용하여 하단 탭 네비게이터를 정의함.

### Header.js

- 로고를 표시함.
  - 로고를 클릭하면, https://wwwk.kangwon.ac.kr/www/contents.do?key=2414& 링크를 인터넷 앱에서 오픈함.

### HomeScreen.js

- `현재 날짜`를 표시함.
- 이전 및 다음 날짜로 이동 버튼, 또한, 오늘 날짜로 돌아오는 버튼 (오늘 날자가 아닌 경우 표시함.)
- 날짜에 따라 `휴일 여부 isHoliday`를 표시함.
- `Round.js`를 import하고, `휴일 여부 isHoliday` 상태를 전달함.

### Round.js

- `현재 시각`을 표시함.
- `휴일 여부` 확인: 부모 컴포넌트로부터 전달받은 `휴일 여부 isHoliday` 상태를 확인함.
  - 휴일인 경우: 아무것도 표시되지 않음.
  - 휴일이 아닌 경우:
    - `현재 시각`과 비교하여 `운행 회차`를 표시함.
    - 이전 및 다음 회차로 이동 버튼, 현재 회차로 돌아오기 버튼 (현재 날자가 아닌 경우 표시함.)

### MapScreen.js

- 전체 운행 노선도를 표시함.
- react-native-image-zoom-viewer 패키지의 ImageViewer를 사용하여 이미지를 확대 및 축소할 수 있는 기능을 구현함.

### TimeScreen.js

- 전체 운행 시간표를 표시함.

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
