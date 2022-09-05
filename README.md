# Google-Calendar

### ⭐️ Introduction

```React, Typescript, Redux-toolkit, Tailwind 을 활용한 구글 주별 캘린더 클론 코딩입니다.```

<img width="1440" alt="Screen Shot 2022-09-05 at 9 57 28 PM" src="https://user-images.githubusercontent.com/61952198/188455035-bf3f3610-13b5-4f4b-bc37-ce2e744333be.png">


| 이벤트등록              | 등록된 이벤트           | 반응형                   |
|----------------------|----------------------|------------------------|
| <img width="1440" alt="Screen Shot 2022-09-05 at 9 57 57 PM" src="https://user-images.githubusercontent.com/61952198/188455063-a9d2283b-61ca-477d-a94d-1ac9d69ac038.png"> | <img width="1440" alt="Screen Shot 2022-09-05 at 9 58 10 PM" src="https://user-images.githubusercontent.com/61952198/188455113-0aa086de-6d3a-4094-9732-3b2fb601522e.png"> | <img width="500" alt="Screen Shot 2022-09-05 at 9 58 23 PM" src="https://user-images.githubusercontent.com/61952198/188455169-ed2310e8-810a-4a53-ba95-e07934e3780c.png"> |


## 1. 프로젝트 실행 방법

```text
1. git clone https://github.com/dbwjd5864/google-calender.git
2. npm install
3. npm run start
```

## 2. 사용한 기술과 이유

1. **Typescript**
    - Typescript 는 동적 타입을 지원하는 Javascript 와는 다르게 정적 타입을 지원하므로 컴파일 단계에서 오류를 포착할 수 있습니다.
    - 이는 곧 개발 도중 발생할 수 있는 실수를 줄여줄뿐만 아니라, 제가 아닌 제 3자가 코드를 처음봤을 때도 해당 코드가 무슨 동작을 하고 어떤 이유에서 사용했는지를 알 수 있을 것이라는 판단이 들어 Typescript 를 선택하게 됐습니다.

2. **Redux-toolkit**
    - Redux가 가진 전역 상태를 통해 props drilling을 피할 수 있고 여러 장점이 존재하지만, 기존에 Redux를 사용하면 저장소를 구성하는 복잡도가 크고 보일러플레이트 코드량이 너무 많다라는 단점이 있습니다.
    - Redux-toolkit은 createSlice 를 통해 Action 과 Reducer를 한번에 정의할 수 있을 뿐만 아니라, 내부적으로 immer 라이브러리를 사용하기 때문에 불변성 보존이 쉬어지기에 redux-toolkit을 사용했습니다.

3. **Tailwind**
    - 처음 사용해본 기술로 Tailwind가 가진 utility-first 특성과 장단점이 존재한다는 것을 알 수 있었습니다.
    - 스타일 시트를 오가는 컨텍스트 스위칭과 컴포넌트별로 생성해야하는 스타일 시트들, 스타일에 맞게 생각 해내야하는 클래스네임을 고민하지 않아도 되어 시간을 많이 절약할 수 있었습니다.

4. **ESLint**
    - 프로젝트 전반에 걸쳐 일관된 코드 스타일을 유지하고 잠재적인 오류와 버그를 제거하고자 ESlint를 적용하였습니다. 

## 3. 프로젝트 구조
```markdown
Google-Calendar
├─ public
│  └─ index.html
│  └─ ...
├─ src
│  ├─ assets                   - 구글 달력 로고 이미지, 버튼 이미
│  │  └─ images
│  ├─ components               
│  │  ├─ Calendar              - 달력 페이지를 구성하는 컴포넌트들
│  │  │  ├─ EventModal              - 이벤트 추가 모달 
│  │  │  ├─ Header                  - 캘린더 페이지 헤더
│  │  │  ├─ Sidebar                 - 캘린더 페이지 좌측 사이드바 (이벤트 추가 버튼, datepicker 등)
│  │  │  └─ WeeklyCalendar          - 캘린더 페이지 우측 위클리 캘린더
│  │  ├─ Common                - 공통 컴포넌트     
│  │  └─ constants             - 상수값
│  ├─ hooks                    - 커스텀 hook
│  │  └─ useStore.ts
│  ├─ pages                    - 페이지 단위 컴포넌트
│  │  └─ Calendar
│  ├─ store                    - redux 스토어
│  │  ├─ modules
│  │  │  ├─ dates.ts                - 디스플레이 되는 달력, 선택된 날짜등 날짜오 관련됭 정보 
│  │  │  ├─ events.ts               - 캘린더 상에 보여지는 이벤트 관련된 정보 (이벤트 추가, 삭제등)
│  │  │  └─ modal.ts                - 이벤트 추가 모달 관련 관련된 정보
│  │  └─ configureStore.ts  
│  ├─ types                    - 공통 타입
│  │  └─ react-app-env.d.ts
│  ├─ utils                    - 유틸 함수
│  │  │  ├─ createTimeOptions.ts    - minutes props를 활용하여 select에 넣고자 하는 options값 생성
│  │  │  ├─ getHours.ts             - 오전 12시부터 오후 12시까지 24시간 리스트 생성
│  │  │  ├─ getMonthly.ts           - 선택된 달에 날 생성 
│  │  │  ├─ getStringDateFormat.ts  - formatter props를 활용하여 date를 원하는 string 포맷으로 변경
│  │  │  └─ getThisWeek.ts          - 선택된 날짜가 속한 주(일 ~ 토) 생성
│  ├─ App.tsx
│  ├─ index.css
│  └─ index.tsx
├─ .eslintrc.js
├─ .gitignore
├─ .prettierrc
├─ package.json
├─ package-lock.json
├─ postcss.config.js
├─ README.md
├─ tailwind.config.js
└─ tsconfig.json
```

