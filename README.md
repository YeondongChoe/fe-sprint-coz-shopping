# fe-sprint-coz-shopping

<h1>프로젝트 설명</h1>

<h2>목적</h2>
브라우저 db를 사용하여 북마크 상태를 관리하고, 이에 따라 외부 요청(fetch)에 따라 전달받은 상품 데이터를 상황에 맞게 필터링하여 보여줄 수 있는 쇼핑몰 애플리케이션을 구현합니다.

<h2>기술 스택</h2>
<li>HTML/CSS/JavaScript</li>
<li>React와 styled-components</li>

<h2>사용 라이브러리</h2>
<li>react</li>
<li>react-router-dom</li>
<li>react-toastify</li>
<li>styled-components</li>


<h1>프로젝트 구성</h1>

<h2>프로젝트 플래닝 자료</h2>
<li>figma file: https://www.figma.com/file/TfWAvMXegGEJiS3etqOSfs/FE-S4-project?type=design&node-id=0-1&t=vkoJMruupmBmxnvI-0</li>
<li>애자일 스크럼 방식을 활용한 프로젝트 플래닝(페어와 함께 진행) : https://github.com/users/YeondongChoe/projects/1/views/2</li>

<h2>페이지 구성</h2>
<li>페이지는 세 가지(메인 페이지, 상품 리스트 페이지, 북마크 페이지)로 구분됩니다. (북마크 페이지는 구현 전이며, Not Found 페이지는 구현되지 않았습니다.)</li>
<li>메인 페이지는 4개의 상품과 북마크된 상품 4개를 각각의 리스트로 표시합니다. </li>
<li>상품 리스트 페이지는 카테고리별 필터링 기능을 제공하며, 조건을 만족하는 상품을 표시합니다. (필터링 기능은 구현 전입니다.)</li>

<h2>컴포넌트 구성</h2>
<li><Card> 컴포넌트는 이미지 부분과 북마크 버튼, 좌측 상단, 우측 상단, 좌측 하단, 우측 하단의 텍스트 영역으로 구분됩니다. 데이터의 타입과 포함된 속성에 따라 컴포넌트에 표시되는 내용 및 스타일이 달라집니다.</li>
<li><Modal> 컴포넌트는 모달의 배경과 실제 모달 영역으로 구분됩니다. 모달 내부 영역은 배경 이미지, 닫기 버튼, 북마크 버튼, 상품명으로 구성됩니다.</li>
<li><Dropdown> 컴포넌트는 드롭다운의 배경과 실제 모달 영역으로 구분합니다. 드롭다운 내부 영역은 아이콘과 페이지명으로 구성됩니다.</li>
