let currentDate = new Date();

document.addEventListener('DOMContentLoaded', function () {

	let currentDate = new Date();
	document.getElementById('workStartDate').value = getLocalDateStr(currentDate);
	rendarCalendar(currentDate);
	
	//이번달,저번달, 오늘날짜 이동
	document.getElementById('prev-month').addEventListener('click', prevMonth);
	document.getElementById('next-month').addEventListener('click', nextMonth);
	document.getElementById('goToday').addEventListener('click', goToday);
	
	//근무유형 추가
	document.getElementById('addWorkTypeBtn').addEventListener('click', addWorkType);
	//근무유형 삭제
	document.getElementById('workTypePreviewBox').addEventListener('click', function (e) {
		if (e.target.classList.contains('delete-btn')) {
			const li = e.target.closest('li');
			if (li) {
				li.remove();
			}
		}
	});
	//근무유형 초기화
	document.getElementById('resetWorkTypeBtn').addEventListener('click', resetWorkType);
	
	//기준일입력
	document.getElementById('submitBaseDateBtn').addEventListener('click', setWorkType);
	
});

function getLocalDateStr(date) {
	const year = date.getFullYear();
	const month = String(date.getMonth() + 1).padStart(2, '0');
	const day = String(date.getDate()).padStart(2, '0');
	return `${year}-${month}-${day}`;
}


function rendarCalendar(date) {
	
    const currentYear = date.getFullYear();
    const currentMonth = date.getMonth();

    // 제목 업데이트
    document.getElementById('title-year').innerText = currentYear + '.';
    document.getElementById('title-month').innerText = (currentMonth + 1);

    const calendar = document.querySelector('.calendar-dates');
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
  /*  for (let i = 1; i <= thisDate; i++) {
        const dayOfWeek = new Date(currentYear, currentMonth, i).getDay();
        const dayClass = dayOfWeek === 0 ? 'sunday' : dayOfWeek === 6 ? 'saturday' : '';
        calendar.innerHTML += `<div class="day current ${dayClass}">${i}</div>`;
    }*/
    
    for (let i = 1; i <= thisDate; i++) {
        const currentDate = new Date(currentYear, currentMonth, i); // 날짜 객체 생성
        const dayOfWeek = currentDate.getDay(); // 요일 (0:일 ~ 6:토)

        // 요일에 따라 클래스 설정 (일요일: sunday, 토요일: saturday)
        const dayClass = dayOfWeek === 0 ? 'sunday' : dayOfWeek === 6 ? 'saturday' : '';

        let extraClass = ''; // 추가 클래스 저장용
        let label = '';      // 근무유형 텍스트 표시용

        // 오늘 날짜인지 확인
        const today = new Date();
        const isToday =
            currentDate.getFullYear() === today.getFullYear() &&
            currentDate.getMonth() === today.getMonth() &&
            currentDate.getDate() === today.getDate();

        // 오늘이면 'today' 클래스 추가
        if (isToday) {
            extraClass += ' today';
        }

        //기준일 있을 때
        if(baseDate){
           const baseDateNoTime = resetTime(baseDate);
           const currentDateNoTime = resetTime(currentDate);

            // 근무유형 표시 (baseDate 이후 + 현재 달인 경우에만)
            if (
                baseDate &&
                endDate &&
                workTypeCycle.length > 0 &&
                currentDate >= baseDateNoTime &&
                currentDate <= endDate &&
                currentDate.getFullYear() === date.getFullYear() &&
                currentDate.getMonth() === date.getMonth()
            ) {
                const diffDays = Math.floor((currentDateNoTime - baseDateNoTime) / (1000 * 60 * 60 * 24));

                if (diffDays >= 0) {
                    const workIndex = diffDays % workTypeCycle.length;
                    const work = workTypeCycle[workIndex];

                    extraClass += ` ${work.type}`;
                    label = `<div class="work-label">${work.label}</div>`;
                }
            }

            // 날짜 칸 HTML 추가
            calendar.innerHTML += `<div class="day current ${dayClass} ${extraClass}">${i}${label}</div>`;
        }else {
             // baseDate가 없을 때는 근무유형 없이 기본 날짜 칸만 그리기
             calendar.innerHTML += `<div class="day current ${dayClass}">${i}</div>`;
         }
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

//시간 00:00:00으로 초기화
function resetTime(date) {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate());
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

//근무유형 추가
function addWorkType() {
	
	const workTypeSelect = document.getElementById('workTypeSelect');
	const workType = workTypeSelect.value;
	const workTypeText = workTypeSelect.options[workTypeSelect.selectedIndex].text;

	if (!workType) {
		alert('근무 유형을 선택 후 추가해주세요.');
		return;
	}
	
	const workTypeItems = document.querySelectorAll('#workTypePreviewBox li');
	if (workTypeItems.length >= 20) {
		alert('근무 유형은 최대 20개까지 추가할 수 있습니다.');
		return;
	}
	
	const li = document.createElement('li');
	li.classList.add('work-item', workType);

	const labelSpan = document.createElement('span');
	labelSpan.className = 'work-label';
	labelSpan.textContent = workTypeText;

	const deleteBtn = document.createElement('span');
	deleteBtn.className = 'delete-btn';
	deleteBtn.textContent = 'x';

	li.appendChild(labelSpan);
	li.appendChild(deleteBtn);

	document.getElementById('workTypePreviewBox').appendChild(li);
}

//근무유형 초기화
function resetWorkType(){
	const workTypeItems = document.querySelectorAll('#workTypePreviewBox li');
	workTypeItems.forEach(item => item.remove());
}


let baseDate = null; //기준일
let endDate = null; // 종료일
let workTypeCycle = []; //근무유형

//입력한기준일로 근무유형 추가
function setWorkType(){

	const startDateValue = document.getElementById('workStartDate').value;
	const endDateValue = document.getElementById('workEndDate').value;
    if (!startDateValue || !endDateValue) {
        alert('근무기준 시작일과 종료일을 모두 선택해주세요.');
        return;
    }

    const startDate = new Date(startDateValue);
    const finishDate = new Date(endDateValue);
    if (startDate > finishDate) {
        alert('시작일은 종료일보다 빠르거나 같아야 합니다.');
        return;
    }

    baseDate = new Date(startDate);
    endDate = new Date(finishDate);

    const items = document.querySelectorAll('#workTypePreviewBox .work-item');
    if (items.length === 0) {
        alert('근무유형을 먼저 추가해주세요.');
        return;
    }

    workTypeCycle = Array.from(items).map(item => {
        return {
            type: item.classList[1], // 'day', 'night'
            label: item.querySelector('.work-label').innerText
        };
    });

    rendarCalendar(baseDate); 
	
}




