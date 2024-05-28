## <div align=left><strong>Game Schedule Tracker 프로젝트</strong></div>

###  게임대회 일정 관리 서비스 프로젝트
#### 개발 기간 : 2024.03 ~ 2024.04.05
#### 개발 인원 : 5명(김수종, 강민재, 강민재, 김현빈, 이균호)
#### 개발 환경 

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

#### PPT : https://url.kr/qjo4vw

<hr>

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
##### Trigger
총 10개의 팀 중 일부 팀을 구독할 수 있게 하고 싶었으나, 서버 측에서 if 로직으로 처리하기엔 경우의 수가 많았고 효율적으로
코드를 관리하기가 어려웠다. 또한, 구독하기 버튼을 누를 시 구독 정보가 중복으로 쌓여 캘린더에 중복된 경기 일정이 쌓여있었다.
이를 해결하기위해 트리거를 사용했고, DB에서 열줄 정도의 코드로 효과적으로 코드를 관리할 수 있었다.


### Project Review

#### 😂어려웠던 점
◽ Cors, proxy 등 리액트와 노드 통신 연결
◽ 리액트, 노드 버전 충돌 문제
◽ 상당히 많은 404, 500번 에러와의 만남

####  ✅배운점
◽ 개발 초기 단계에`서 적절한 개발 환경 구축의 중요성
◽ Node.js 와 React 간 데이터 교환 과정에서 발생한 다수의 오류를 처리하면서 오류 대응 능력 향상
◽ API 통합에 대한 이해도 향상
◽ 익숙하지 않은 언어로 프로젝트를 진행하면서 새로운 기술과 언어를 습득하는 능력 향상


#### 🔥프로젝트를 마치며
백엔드 개발 역량을 향상시키고 데이터베이스 설계와 연동, 서버 구축, API 전송 등의 경험을 쌓을 수 있었다.
리액트와 노드 버전 충돌 문제 및 세션 문제 등 많은 문제 들이 발생했지만, 팀원들과 지속적으로 상의를 통해 문제들을 해결할 수 있었다. 
계획대로 프로젝트를 진행하기위해선 팀원끼리 많은 소통과 협동이 중요함을 다시 한번 깨달았다.
또한, 기존에 배우지 않았던 기술과 언어를 사용하여 프로젝트를 진행해 본 경험을 통해서 새로운 기술을 배우는 것에 대한 흥미와 자신감을 갖게 되었다. 
앞으로 팀원들과 적극적으로 소통하며, 항상 배움과 성장을 추구하는 개발자가 되고싶다.
