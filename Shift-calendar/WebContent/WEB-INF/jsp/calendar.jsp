<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<title>달력</title>
	<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/css/style.css">
	<script type="text/javascript" src="${pageContext.request.contextPath}/js/calendar.js"></script>
</head>
<body oncontextmenu="return false" onselectstart="return false" ondragstart="return false">
​
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
		</div>
		
		<div class="control-container">
			<div style="height:150px;">
			</div>
		
			<div class="selectBox">
				<select id="workTypeSelect"> 
					<option value="">근무유형선택</option>
					<option value="day">주</option>
					<option value="night">야</option>
					<option value="rest">비</option>
					<option value="off">휴</option>
					<option value="holiday">연차</option>
					<option value="other">기타</option>
				</select>

				
				<button id="addWorkTypeBtn">추가</button>
				<button id="resetWorkTypeBtn">초기화</button>
				
				<div>
					<ul id="workTypePreviewBox">
					    <li class="work-item day">
					      <span class="work-label">주</span>
					      <span class="delete-btn">x</span>
					    </li>
					    <li class="work-item night">
					      <span class="work-label">야</span>
					      <span class="delete-btn">x</span>
					    </li>
					    <li class="work-item rest">
					      <span class="work-label">비</span>
					      <span class="delete-btn">x</span>
					    </li>
					    <li class="work-item off">
					      <span class="work-label">휴</span>
					      <span class="delete-btn">x</span>
					    </li>
					  </ul>
				</div>
				
			</div>
		
			<div class="baseBox">
				<input type="date" id="baseDateInput">
				<select id="baseWorkTypeSelect"> 
					<option value="">선택</option>
					<option>주</option>
					<option>야</option>
					<option>비</option>
					<option>휴</option>
				</select>
			</div>
			<button id="submitBaseDateBtn">기준일 입력</button>
		</div>
		
	</div>

	

	


</body>
</html>