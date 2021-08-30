const date = new Date();
const hoje = new Date();

const renderCalendar = () => {
  date.setDate(1);

  const monthDays = document.querySelector(".days");

  let lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

  const prevLastDay = new Date(
    date.getFullYear(),
    date.getMonth(),
    0
  ).getDate();

  const firstDayIndex = date.getDay();

  const lastDayIndex = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDay();

  const nextDays = 7 - lastDayIndex - 1;

  const months = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];

  isLeapYear = (year) => {
    return (
      (year % 4 === 0 && year % 100 !== 0 && year % 400 !== 0) ||
      (year % 100 === 0 && year % 400 === 0)
    );
  };

  getFebDays = (year) => {
    return isLeapYear(year) ? 29 : 28;
  };

  let year = date.getFullYear();
  let days_of_month = [31, getFebDays(year), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  document.querySelector(".date h1").innerHTML = `${
    months[date.getMonth()]
  } ${date.getFullYear()}`;

  document.querySelector("#today-desc").innerHTML =
    new Date().toLocaleDateString("pt-Br", { dateStyle: "full" });

  let days = "";

  for (let x = firstDayIndex; x > 0; x--) {
    days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
  }

  let month = date.getMonth();

  for (let i = 1; i <= days_of_month[month]; i++) {
    if (
      i === new Date().getDate() &&
      date.getMonth() === new Date().getMonth() &&
      date.getFullYear() === new Date().getFullYear()
    ) {
      days += `<div class="today">${i}</div>`;
    } else {
      days += `<div>${i}</div>`;
    }
    monthDays.innerHTML = days;
  }

  for (let j = 1; j <= nextDays; j++) {
    days += `<div class="next-date">${j}</div>`;
    monthDays.innerHTML = days;
  }

  if (date.getMonth() != hoje.getMonth() || 
    date.getFullYear() != hoje.getFullYear()) {
        document.querySelector('#today-desc').style.textDecoration = 'underline';
} else {
    document.querySelector('#today-desc').style.textDecoration = 'none';
}

};

document.querySelector(".prev").addEventListener("click", () => {
  if (date.getMonth() == 0) {
    date.setFullYear(date.getFullYear());
  }
  date.setMonth(date.getMonth() - 1);
  renderCalendar();
});

document.querySelector(".next").addEventListener("click", () => {
  if (date.getMonth() == 11) {
    date.setFullYear(date.getFullYear());
  }
  date.setMonth(date.getMonth() + 1);
  renderCalendar();
});

document.querySelector("#today-desc").addEventListener("click", () => {
  date.setMonth(hoje.getMonth());
  date.setFullYear(hoje.getFullYear());
  renderCalendar();
});

renderCalendar();
