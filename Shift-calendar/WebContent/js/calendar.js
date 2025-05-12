//참고사이트 https://songsong.dev/entry/Javascript로-달력-만들기 [송송은 오늘도 열심히 코딩 하네:티스토리]

document.addEventListener('DOMContentLoaded', function () {
	rendarCalendar(currentDate);
	
	//이번달,저번달 이동
	document.getElementById('prev-month').addEventListener('click', prevMonth);
	document.getElementById('next-month').addEventListener('click', nextMonth);
	
	//추가
	document.getElementById('addWorkTypeBtn').addEventListener('click', addWorkType);
});


let currentDate = new Date();

function rendarCalendar(date) {
    const currentYear = date.getFullYear();
    const currentMonth = date.getMonth();

    // 제목 업데이트
    document.getElementById('title-year').innerText = currentYear + '.';
    document.getElementById('title-month').innerText = (currentMonth + 1);

    const calendar = document.querySelector('.dates');
    calendar.innerHTML = '';

    // 이번 달 1일 요일 (0: 일요일 ~ 6: 토요일)
    const firstDay = new Date(currentYear, currentMonth, 1).getDay();

    // 전달 마지막 날짜
    const prevLast = new Date(currentYear, currentMonth, 0);
    const prevDate = prevLast.getDate();

    // 이번 달 마지막 날짜
    const thisLast = new Date(currentYear, currentMonth + 1, 0);
    const thisDate = thisLast.getDate();

    // 달력에 날짜 채우기 ---------
    // 지난달 날짜
    for (let i = firstDay - 1; i >= 0; i--) {
        const dayNum = prevDate - i;
        const dayOfWeek = new Date(currentYear, currentMonth - 1, dayNum).getDay();
        const dayClass = dayOfWeek === 0 ? 'sunday' : dayOfWeek === 6 ? 'saturday' : '';
        calendar.innerHTML += `<div class="day prev disable ${dayClass}">${dayNum}</div>`;
    }

    // 이번달 날짜
    for (let i = 1; i <= thisDate; i++) {
        const dayOfWeek = new Date(currentYear, currentMonth, i).getDay();
        const dayClass = dayOfWeek === 0 ? 'sunday' : dayOfWeek === 6 ? 'saturday' : '';
        calendar.innerHTML += `<div class="day current ${dayClass}">${i}</div>`;
    }

    // 다음달 날짜
    const totalCells = firstDay + thisDate;
    const nextDays = (7 - (totalCells % 7)) % 7;
    for (let i = 1; i <= nextDays; i++) {
        const dayOfWeek = new Date(currentYear, currentMonth + 1, i).getDay();
        const dayClass = dayOfWeek === 0 ? 'sunday' : dayOfWeek === 6 ? 'saturday' : '';
        calendar.innerHTML += `<div class="day next disable ${dayClass}">${i}</div>`;
    }
}

//다음달 이동
function nextMonth(){
	currentDate.setMonth(currentDate.getMonth() + 1);
	rendarCalendar(currentDate);
}

//저번달 이동
function prevMonth(){
	currentDate.setMonth(currentDate.getMonth() - 1);
	rendarCalendar(currentDate);
}

//오늘날짜로 이동
function goToday() {
    currentDate = new Date();
    rendarCalendar(currentDate);
}


function addWorkType(){
	
	const workType = document.getElementById('workTypeSelect').value;
	const color = document.getElementById('colorSelect').value;
	
	if(!workType || !color){
		alert('근무 유형과 색상을 모두 선택해주세요.');
		return;
	}
	
	
	
}



