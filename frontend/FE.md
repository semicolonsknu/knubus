# FE: KNUBus - 강원대학교 순환버스 정보 어플리케이션

## 프로젝트 개요

- 대상 사용자: 강원대학교 학생 및 교직원.
- 프로젝트 목적: 순환버스 운행 정보의 접근성과 가시성 향상.
- React Native: 웹/iOS/Android 어떤 기기에서든 정보를 접할 수 있도록 함.
- 최종 배포 예정: 2024년 04월. 이는 버스 운행 기간인 2024년 3월 4일부터 2024년 6월 24일에 따름.

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

### App.js @허윤수

- `Header.js` 및 `Navigation.js`를 import.
- SafeAreaView: 기기의 화면 크기에 따라 표시 영역을 조절함.
- StatusBar: `barStyle` 속성을 사용하여 상태 표시줄의 텍스트 색상을 어두운 색으로 설정함.

### Navigation.js @허윤수

- `HomeScreen.js`,`MapScreen.js`, `TimeScreen.js`를 import.
- react-navigation을 사용하여 내비게이션을 정의함.
  - createBottomTabNavigator를 사용하여 하단 탭 네비게이터를 정의함.

### Header.js @구희원

- 로고를 표시함.
  - 로고를 클릭하면, https://wwwk.kangwon.ac.kr/www/contents.do?key=2414& 링크를 인터넷 앱에서 오픈함.

### HomeScreen.js @허윤수

- **상태 관리:** useState 훅을 사용하여 `현재 날짜(currentDate)`와 `사용자가 선택한 날짜(selectedDate)`를 관리함. 두 상태 모두 초기 값으로 현재 날짜를 설정함.
- **날짜 이동 버튼:** `selectedDate` 상태를 업데이트하여, "이전 날짜" 및 "다음 날짜" 버튼을 제공함. `selectedDate`가 `currentDate`와 다른 경우에만 "오늘로 돌아가기" 버튼을 표시함. "오늘로 돌아가기" 버튼은 `selectedDate`를 현재 날짜로 재설정함.
- **운행 여부 확인:** src/data/operation.json 파일에서 날짜별 운행 여부 데이터를 로드함. `selectedDate`에 해당하는 날짜의 운행 여부를 확인하여 화면에 표시함.
- **Round.js 컴포넌트:** Round.js`를 import하고, `Round.js`에게 `운행 여부` 상태를 prop으로 전달함.

### Round.js @허윤수

- **현재 시각 표시:** 컴포넌트 상단에 현재 시각을 표시함.
- **운행 여부 확인**
  - **휴일인 경우:** isOperationDay prop이 false라면 (../../assets/public/Mascot.png) 이미지를 보여줌.
  - **운행하는 경우:** isOperationDay prop이 true라면, 다음의 정보를 표시함.
    - **운행 정보 표시**
      - **상태 관리:** useState 훅을 사용하여 `현재 시각 인덱스(currentIndex)`와 `사용자가 선택한 인덱스(selectedIndex)`를 관리함. `currentIndex`의 초기 값은 현재 시각과 비교하여 src/data/schedule.json 파일에서 데이터를 로드하여 해당하는 회차를 계산한 값으로 설정함. `selectedIndex`의 초기 값은 `currentIndex`로 설정함.
      - **회차 이동 버튼:** `selectedIndex` 상태를 업데이트하여, "이전 회차" 및 "다음 회차" 버튼을 제공함. `selectedIndex`가 `currentIndex`와 다른 경우에만 "현재로 돌아오기" 버튼을 표시함. "현재로 돌아오기" 버튼은 `selectedIndex`를 `currentIndex`로 재설정함. `selectedIndex`가 1보다 작은 경우 "이전 회차" 버튼을 표시하지 않고, `selectedIndex`가 10보다 큰 경우 "다음 회차" 버튼을 표시하지 않음.
      - src/data/schedule.json 파일에서 데이터를 로드함. 현재 시각과 비교하여 해당하는 round의 운행 정보("운행 예정", "운행 중", "운행 종료")를 표시함.
      - 현재 시각과 비교하여 "운행 예정"인 경우, 예정된 시간("운행 예정"의 start부터 end까지)을 보여줌
      - 현재 시각과 비교하여 "운행 중"인 경우, 운행 중인 시간("운행 중"의 start부터 end까지)과 함께, 각 정류장의 도착 예정 시간(times 내에 정의된 시간들)을 보여줌. 현재 시각과 비교하여 해당하는 정류장의 색상을 변경함.

### MapScreen.js @구희원

- 전체 운행 노선도를 표시함.
- react-native-image-zoom-viewer 패키지의 ImageViewer를 사용하여 이미지를 확대 및 축소할 수 있는 기능을 구현함.

### TimeScreen.js @최수영

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

- **구희원:** UI 디자인 및 `Header.js`, `MapScreen.js` 구현. [GitHub](https://github.com/HeHelee)
- **최수영:** `TimeScreen.js` 구현. [GitHub](https://github.com/scove03)
- **허윤수:** `App.js`, `Navigation.js`, `HomeScreen.js` 구현 [GitHub](https://github.com/sugoring)
