<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<title>달력</title>
	<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/resources/css/style.css">
	<script type="text/javascript" src="${pageContext.request.contextPath}/resources/js/calendar.js"></script>
</head>
<body oncontextmenu="return false" onselectstart="return false" ondragstart="return false">
​
	<div class="container">

		<div class="title-container">
			<h1>CALENDAR</h1>
		</div>
	
		<div class="wrap-container">
		
			<div class="calendar-container">
				<div class="calendar-header">
					<button id="prev-month"> &lt </button>
					<div id="calendar-title">
						<h1 id="title-year" >2025.</h1>
						<h1 id="title-month">5</h1>
					</div>
					<button id="next-month" > &gt </button>
				</div>
				
				<div class="calendar-toolbar">
					<button id="goToday">오늘날짜로 이동</button>
				</div>
			
				<div class="calendar-days">
			        <div class="day-name sunday">SUN</div>
			        <div class="day-name">MON</div>
			        <div class="day-name">TUE</div>
			        <div class="day-name">WED</div>
			        <div class="day-name">THU</div>
			        <div class="day-name">FRI</div>
			        <div class="day-name saturday">SAT</div>
			    </div>
			
				<div class="calendar-dates"></div>
				
				<!-- 
				<div class="calendar-dates">
					<div class="day prev disable sunday" style="background-color:yellow;">27</div>
					<div class="day prev disable ">28</div>
					<div class="day prev disable ">29</div>
					<div class="day prev disable ">30</div><div class="day current ">1</div><div class="day current ">2</div><div class="day current saturday">3</div><div class="day current sunday">4</div><div class="day current ">5</div><div class="day current ">6</div><div class="day current ">7</div><div class="day current ">8</div><div class="day current ">9</div><div class="day current saturday">10</div><div class="day current sunday">11</div><div class="day current ">12</div><div class="day current ">13</div><div class="day current ">14</div><div class="day current ">15</div><div class="day current ">16</div><div class="day current saturday">17</div><div class="day current sunday">18</div><div class="day current ">19</div><div class="day current ">20</div><div class="day current ">21</div><div class="day current ">22</div><div class="day current ">23</div><div class="day current saturday">24</div><div class="day current sunday">25</div><div class="day current ">26</div><div class="day current ">27</div><div class="day current ">28</div><div class="day current ">29</div><div class="day current ">30</div><div class="day current saturday">31</div>
				</div> -->
			
			</div>
			
			<div class="control-container">
				<div style="height:150px;">
				</div>
				
				<div class="section baseBox">
					<h3>■ 기준일 선택</h3>
					<p class="desc"> 근무기준시작일~근무기준종료일을 선택해주세요.</p>
					<input type="date" id="workStartDate"/> ~
					<input type="date" id="workEndDate"/>
				</div>
			
				<div class="section selectBox">
					<h3>■ 근무유형 패턴 설정</h3>
					<p class="desc">순서대로 근무유형을 추가해 주세요. (예 : 주>야>비>휴)</p>
					
					<div class="workTypeControl">
						<select id="workTypeSelect"> 
							<option value="">근무유형선택</option>
							<option value="day">주간</option>
							<option value="night">야간</option>
							<option value="rest">비번</option>
							<option value="off">휴무</option>
							<option value="holiday">연차</option>
							<option value="other">기타</option>
						</select>
	
						<button id="addWorkTypeBtn">추가</button>
						<button id="resetWorkTypeBtn">초기화</button>
					</div>
					
					<ul class="priview-list" id="workTypePreviewBox">
					    <li class="work-item day">
					      <span class="work-label">주간</span>
					      <span class="delete-btn">x</span>
					    </li>
					    <li class="work-item night">
					      <span class="work-label">야간</span>
					      <span class="delete-btn">x</span>
					    </li>
					    <li class="work-item rest">
					      <span class="work-label">비번</span>
					      <span class="delete-btn">x</span>
					    </li>
					    <li class="work-item off">
					      <span class="work-label">휴무</span>
					      <span class="delete-btn">x</span>
					    </li>
					 </ul>
				</div>
			
			
				<div class="section">
					<button id="submitBaseDateBtn">달력에 적용</button>
				</div>
				
			</div>
			
		</div>
	</div>

	

	


</body>
</html>