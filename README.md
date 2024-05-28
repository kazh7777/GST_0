## <div align=left><strong>Game Schedule Tracker 프로젝트</strong></div>

###  게임대회 일정 관리 서비스 프로젝트
#### 개발 기간 : 2024.03 ~ 2024.04.05
#### 개발 인원 : 5명(김수종, 강민재, 강민재, 김현빈, 이균호)
#### 개발 환경 


ppt : https://url.kr/qjo4vw


<div align=left> 
<br>
  
<img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"> 
<img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white"> 
<img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"> 
<img src="https://img.shields.io/badge/mysql-4479A1?style=for-the-badge&logo=mysql&logoColor=white"> 

<br>

<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"> 
<img src="https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white">
<img src="https://img.shields.io/badge/express-000000?style=for-the-badge&logo=express&logoColor=white"> 
<img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white">


<div align=center><strong>Game Schedule Tracker 프로젝트</strong></div>

#### 프로젝트 내용 : REACT, EXPRESS.JS 를 활용한 게임 시청자를 위한 일정관리 서비스

#### 프로젝트 주제 및 기능
- 롤 시청자 수 급증에 따른, 시청자를 위한 롤 대회 일정관리 서비스
- 원하는 롤 리그 팀을 구독하여, 그 팀의 일정을 캘린더를 통해 확인할 수 있고, 문자 알림 받을 수 있음
- 클랜을 생성하여, 클랜일정을 등록하여, 공유할 수 있음
- 개인일정을 등록하여 사용할 수 있음

#### 담당역할 : 백엔드
- 게임대회 일정 관리 서비스를 주제로 리액트와 노드.js를 사용하여 프로젝트를 진행
- 데이터베이스 설계 및 총괄 
- 노드.js를 통한 서버 구축과 API 전송 등의 기능을 구현 
- 데이터베이스 트리거를 활용하여 게임대회 팀 구독 서비스를 구현 
- 일정 등록 기능과 캘린더에 일정 데이터(게임대회 일정, 개인 일정, 클랜일정)을 표시

#### 트러블 슈팅

##### 세션 문제
  
프로젝트 진행 과정에서는 리액트와 노드.js를 연결하는 과정에서 세션값을 주고 받는 문제가 발생했습니다.
세션을 요청하는 페이지의 설정이 잘못되어 있거나 다른 페이지에서 중복으로 세션을 요청하는 것을 발견했습니다.
이에 따라 세션을 요청하는 위치설정을 변경하고 코드를 수정하여 문제를 해결했습니다.

##### Trigger
총 10개의 팀 중 일부 팀을 구독할 수 있게 하고 싶었는데, 서버 측에서 if 로직으로 처리하기엔 경우의 수가 많았고 효율적으로
코드를 관리하기가 어려웠다. 또한, 구독하기 버튼을 누를 시 구독 정보가 중복으로 쌓여 캘린더에 중복된 경기 일정이 쌓여있었다.
이를 해결하기위해 트리거를 사용했고, DB에서 열줄 정도의 코드로 효과적으로 코드를 관리할 수 있었다.

#### 프로젝트를 마치며
백엔드 개발 역량을 향상시키고 데이터베이스 설계와 연동, 서버 구축, API 전송 등의 경험을 쌓을 수 있었습니다.
앞서 말한 세션 문제로 개발 계획에 차질이 생겼으나, 팀원들과 지속적으로 상의하고 문제를 해결하기 위해 계획을 변경하고 토의했습니다. 
이러한 노력 덕분에 예정된 일정에 맞춰 프로젝트 결과물을 도출할 수 있었습니다.
과정 상 배우지 않았던 기술과 언어를 사용하여 개발에 참여하였는데, 이를 통해 저는 항상 성장을 추구하며 새로운 기술과 도구에 대한 관심과 열정을 가지고 있음을 확인할 수 있었습니다. 
앞으로도 많은 프로젝트를 거치며 완성형 백엔드 개발자로서의 역량을 쌓고자 합니다.
