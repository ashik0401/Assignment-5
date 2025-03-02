
const colors = [
    "#F4F7FF",
    "#FFDEDE",
    "#D5F4F0",
    "#FFF0D6",
    "#D6DFFF",
    "#A0937D",
    "#B5C18E",
    "#DCBFFF",

];

let currentColor = 0;

function changeBackgroundColor() {
    document.body.style.backgroundColor = colors[currentColor];
    currentColor = (currentColor + 1) % colors.length;
}

const colorButton = document.querySelector('.color-button');
colorButton.addEventListener('click', changeBackgroundColor);

const buttons = document.querySelectorAll('.complete-btn');
let clickedCount = 0;
for (let i = 0; i < buttons.length; i++) {
    const button = buttons[i];
    button.addEventListener('click', function () {
        button.disabled = true;
        alert('Board updated Successfully');
        clickedCount++;

        if (clickedCount === buttons.length) {
            alert('Congrats!!! You have completed all the current task');
        }

        const container = button.closest('.container-box');
        const titleElement = container.querySelector('h3');
        const title = titleElement.textContent;



        const newHistoryItem = document.createElement('div');

        newHistoryItem.classList.add(
            'bg-[#F4F7FF]',
            'm-5',
            'p-3',
            'rounded-2xl'
        );

        const historyElement = document.getElementById('history');
        const currentTime = new Date();
        let hours = currentTime.getHours();
        const minutes = currentTime.getMinutes().toString().padStart(2, '0');
        const seconds = currentTime.getSeconds().toString().padStart(2, '0');
        const ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12;

        const time = `${hours}:${minutes}:${seconds} ${ampm}`;

        newHistoryItem.innerHTML = `You have completed the task <h3 >${title}</h3> at ${time}`;
        historyElement.appendChild(newHistoryItem);

        const CountElement = document.getElementById('num-in');
        const currentCount = parseInt(CountElement.textContent);
        if (currentCount > 0) {
            CountElement.textContent = currentCount - 1;
        }

        const Element = document.getElementById('num');
        const Count = parseInt(Element.textContent);
        if (Count > 0) {
            Element.textContent = Count + 1;
        }
    });
}

const clearHistory = document.getElementById('clear-history');
clearHistory.addEventListener('click', function () {
    const historyElement = document.getElementById('history');
    historyElement.innerHTML = '';
});

function formatCurrentDate() {
    const now = new Date();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const day = days[now.getDay()];
    const month = months[now.getMonth()];
    const date = now.getDate();
    const year = now.getFullYear();

    const dayFormatted = `${day}`;
    const dateFormatted = `${month} ${date}, ${year}`;

    return { dayFormatted, dateFormatted };
}

const dayDisplay = document.getElementById('day');
const dateDisplay = document.getElementById('date');

if (dayDisplay && dateDisplay) {
    const { dayFormatted, dateFormatted } = formatCurrentDate();
    dayDisplay.textContent = dayFormatted;
    dateDisplay.textContent = dateFormatted;
}
