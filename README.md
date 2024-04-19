# KNUBus - 강원대학교 순환버스 정보 어플리케이션

- FE project
- **version** : `1.0.0`
- **배포일** : `2024-04-20`
  - `Android` 우선 배포.
  - 순환버스 운행 기간인 `2024-033-04`부터 `2024-06-24`에 따름.

## 프로젝트 개요

- **대상 사용자** : 강원대학교 학생 및 교직원.
- **프로젝트 목적** : 순환버스 운행 정보의 접근성과 가시성 향상.
- **React Native** : `Android`/`iOS`/`웹` 모든 기기에서든 정보를 접할 수 있음.

## 주요 기능

- 현재 날짜와 해당 날짜의 휴일 여부를 표시하고, 해당하는 회차 정보를 표시함.
- 순환버스의 전체 노선도를 지도 상에 표시함.
- 순환버스의 전체 운행 시간표를 표시함.

## 팀원

- **구희원:** UI 디자인 및 `Header.js`, `MapScreen.js` 모달 구현. [HeHelee GitHub](https://github.com/HeHelee)
- **최수영:** `TimeScreen.js` 구현. [scove03 GitHub](https://github.com/scove03)
- **허윤수:** `App.js`, `Navigation.js`, `HomeScreen.js` 구현 및 `MapScreen.js` 지도 구현, 애플리케이션 전체 리팩토링 [sugoring GitHub](https://github.com/sugoring)

---

## 개발 환경

- **에디터(IDE)** : VS Code
- **서버 및 패키지 관리** : Node.js(v20.11.1 LTS), npm(v10.5.0)
- **프로젝트 관리** : Expo
- **버전 관리** : Git, Github
- **문서 관리** : Notion

### 색상 코드

- **메인 색상** : `#38B6FF`
- **반전 색상** : `#FF5757`
- **버튼 색상 #1** : `#4A90E2`
- **버튼 색상 #2** : `#50E3C2`
- **글자 색상** : `#4A4A4A`
- **배경 색상** : `#F5F5F5`

---

## 컴포넌트

```
📦src
 ┣ 📂components
 ┃ ┣ 📜Header.js
 ┃ ┣ 📜Round.js
 ┃ ┗ 📜Timeline.js
 ┣ 📂data
 ┃ ┣ 📜apiKey.js
 ┃ ┣ 📜operation.json
 ┃ ┗ 📜schedule.json
 ┣ 📂pages
 ┃ ┣ 📜HomeScreen.js
 ┃ ┣ 📜MapScreen.js
 ┃ ┗ 📜TimeScreen.js
 ┗ 📜Navigation.js
```

---

## App.js

1. **View (container)** : 앱의 전체 컨테이너입니다.
2. **StatusBar** : 앱의 상태 표시줄을 설정하며, 텍스트 스타일을 'dark-content'로 지정해 어두운 색상의 텍스트를 표시합니다.
3. **SafeAreaView** : iOS 기기에서 노치나 홈 버튼으로 인해 내용이 가려지지 않도록 안전 영역을 설정합니다.
4. **Header** : 앱의 상단에 위치하며, `Header` 컴포넌트를 표시합니다.
5. **Navigation** : 화면 간 이동을 가능하게 하는 하단 탭 `Navigation` 컴포넌트를 표시합니다.

### Navigation.js

1. **NavigationContainer** : 네비게이션의 전체 컨테이너입니다.
2. **Tab.Navigator** : 하단 탭 기반의 네비게이션 구조를 제공하고, 각 탭의 설정을 정의합니다.
3. **Tab.Screen (Home)** : "Home" 화면으로의 탭을 설정하고, 해당 컴포넌트(`HomeScreen`)를 연결합니다.
4. **Tab.Screen (운행노선도)** : "운행노선도" 화면으로의 탭을 설정하고, 해당 컴포넌트(`MapScreen`)를 연결합니다.
5. **Tab.Screen (운행시간표)** : "운행시간표" 화면으로의 탭을 설정하고, 해당 컴포넌트(`TimeScreen`)를 연결합니다.
6. **Icon** : 각 탭에서 사용될 아이콘을 생성하고, 탭이 활성화되었는지에 따라 아이콘 스타일을 변경합니다.

### Header.js

1. **View (container)** : 헤더의 전체 컨테이너로, 로고가 중앙에 위치합니다.
2. **Pressable** : 로고 이미지를 포함하며, 클릭 시 지정된 웹 페이지로 연결합니다.
3. **Image** : KNUBus 앱의 로고를 표시합니다.
4. **Linking** : 사용자가 로고를 클릭할 때 외부 링크로 연결합니다.

---

## HomeScreen.js

1. **View (container)** : 전체 컨테이너로, 모든 하위 컴포넌트를 중앙에 배치합니다.
2. **Text (dateText)** : 선택한 날짜를 사용자에게 표시합니다.
3. **Text (dateNameText)** : 공휴일 또는 기념일의 이름을 표시합니다.
4. **Pressable** : 날짜 변경 버튼(이전 날짜, 다음 날짜, 오늘 날짜로)을 제공합니다.
5. **Animated.View (buttonTo)** : 버튼(오늘 날짜로)을 깜빡이는 애니메이션과 함께 제공합니다.
6. **View (buttonContainer)** : 날짜 변경 버튼들을 수평으로 배열하여 제공합니다.
7. **View (roundContainer)** : 버스 운행 상태를 표시하는 `Round` 컴포넌트를 표시합니다.
8. **useState** : 상태(선택한 날짜, 휴일 정보 등)를 관리합니다.
9. **useEffect** : 사이드 이펙트(날짜 변경, 휴일 정보 요청, 애니메이션 실행 등)를 처리합니다.
10. **Vibration** : 버튼을 누를 때 진동을 제공합니다.

### Round.js

1. **View (container)** : 전체 컨테이너로, 모든 하위 컴포넌트를 중앙에 배치합니다.
2. **Text (timeText)** : 현재 시간을 표시합니다.
3. **Text (roundText)** : 선택한 회차의 정보를 표시합니다.
4. **Pressable** : 회차 변경 버튼(이전 회차, 다음 회차, 현재 회차로)을 제공합니다.
5. **Animated.View (buttonTo)** : 버튼(현재 회차로)을 깜빡이는 애니메이션과 함께 제공합니다.
6. **Image** : 비운행 날짜에는 Mascot 이미지를 표시합니다.
7. **View (stateListContainer)** : 상태(운행 종료, 현재 운행, 운행 예정)를 표시합니다.
8. **View (infoContainer)** : 운행과 관련된 추가 정보나 주의사항을 표시합니다.
9. **Timeline** : `Timeline` 컴포넌트를 표시합니다.
10. **useState, useEffect** : 상태(현재 시간, 인덱스 등)를 관리하고, 업데이트합니다.
11. **Vibration** : 버튼을 누를 때 진동을 제공합니다.

### Timeline.js

1. **ScrollView** : 상하 스크롤을 제공합니다.
2. **View (container)** : 전체 컨테이너로, 모든 하위 컴포넌트를 수직 배치합니다.
3. **View (timelineContainer)** : 전체 정보를 표시합니다.
4. **View (timeline)** : 개별 정보를 표시합니다.
5. **Animated.View (circle)** : 상태(현재, 과거, 미래)을 애니메이션과 함께 제공합니다.
6. **View (stopInfo)** : 개별 정류장 정보(시간, 이름)을 표시합니다.
7. **parseTime 함수** : 문자열로 된 시간을 시간과 분으로 분리하여 객체로 반환합니다.
8. **isPast 함수** : 주어진 시간이 현재 시간보다 과거인지 확인합니다.
9. **isCurrent 함수** : 주어진 시간이 현재 시간인지 확인합니다.
10. **useState, useEffect** : 상태(애니메이션 등)를 관리하고, 업데이트합니다.

---

## MapScreen.js

1. **View (container)** : 운행 노선도의 전체 컨테이너입니다.
2. **MapView** : 지도를 표시하고, 초기 지역 설정을 포함합니다.
3. **Marker** : 각 위치에 대한 Marker를 표시합니다.
4. **Polyline** : 지정된 경로를 지도 위에 표시합니다.
5. **ScrollView** : 좌우 스크롤을 제공합니다.
6. **Modal** : 선택된 위치에 대한 정보를 보여주는 팝업 창을 표시합니다.
7. **View (bottomContainer)** : 화면 하단에 설명 텍스트를 표시합니다.

---

## TimeScreen.js

### TimeScreen.js 설명

1. **View (container)** : 운행 시간표의 전체 컨테이너입니다.
2. **ScrollView** : 좌우 스크롤을 제공합니다.
3. **Table** : 'react-native-table-component'에서 제공하는 `Table` 컴포넌트를 사용합니다.
4. **Row (RenderHead)** : 테이블의 Head를 구성하는 컴포넌트로, 각 열의 제목을 표시합니다.
5. **Row (RenderRows)** : 테이블의 Rows를 구성하는 컴포넌트로, 각 행을 동적으로 생성하여 표시합니다.

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

## version `1.0.0` 회고 🌟

### @허윤수

- **속도 vs 품질** : 필요한 서비스라고 판단해 바로 구현에 착수하였습니다. 🏃‍♂️ 시간이 촉박해 효율적인 구조를 갖춘 애플리케이션인지는 잘 모르겠습니다... 🤔 다음 업데이트에서는 컴포넌트 분리를 활용하여 재사용성을 향상하고 싶습니다. 빠르게 구현하면서 전체적인 개발 프로세스를 빠르게 파악할 수 있었던 점은 큰 성과였습니다!
- **백엔드 구현의 부재** : 다음 업데이트에서는 백엔드를 구현해 API로 데이터를 관리하고 싶습니다. 🌐 아쉬움에, 이번에 공공데이터 API를 활용한 것은 스스로 칭찬하는 점입니다! 👏
- **라이브러리 탐색** : React Native를 처음 사용하면서, 많은 유용한 라이브러리에 놀랐습니다. 지도 구현이 복잡할 것이라 생각하였는데, 라이브러리를 활용해 쉽게 구현할 수 있었습니다. 🎉 다음 업데이트에서는 사용자의 위치도 표시할 수 있도록 개선하고 싶습니다. 경로를 그리는 작업은 수작업이었지만 재미있었습니다. (shout out to Google Earth 💕)
- **팀워크** : 프론트엔드 팀원과 함께 프로젝트를 진행하는 것은 처음이었습니다. 팀원들이 적극적으로 아이디어를 내주고 잘 따라와 준 덕분에 모두 만족할 수 있는 결과를 얻었습니다. 고맙습니다! 🙌 각 페이지와 컴포넌트를 분리하여 작업한 방식이 우리 팀에 잘 맞았고, 기능 구현 후 코드 리뷰 시간을 통해 서로 성장할 수 있는 소중한 시간이었습니다. 📈
