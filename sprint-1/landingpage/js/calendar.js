const date = new Date();
const hoje = new Date();

// Função que renderiza todo o calendário
const renderCalendar = () => {

  date.setDate(1);

  let year = date.getFullYear();
  let month = date.getMonth();

  const monthDays = document.querySelector(".days");

  // Último dia do mês anterior
  const prevLastDay = new Date(
    date.getFullYear(),
    date.getMonth(),
    0
  ).getDate();

  // Dia da semana do primeiro dia do mês atual
  const firstDayIndex = date.getDay();
  
  // Dia da semana do último dia do mês atual
  const lastDayIndex = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDay();
  
  // Próximos dias após o fim do mês atual
  let nextDays = 7 - lastDayIndex - 1;

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

  // Verificar se é ano bissexto:
  isLeapYear = (year) => {
    return (
      (year % 4 === 0 && year % 100 !== 0 && year % 400 !== 0) ||
      (year % 100 === 0 && year % 400 === 0)
    );
  };

  // Verificar a quantidade de dias de Fevereiro
  getFebDays = (year) => {
    return isLeapYear(year) ? 29 : 28;
  };

  // A quantidade de dias de cada mês do ano
  let daysOfMonth = [ 31, getFebDays(year), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  // Igualar a quantidade de dias exibida ao longo do calendário
  if (firstDayIndex < 5 || (firstDayIndex == 5 && daysOfMonth[month] == 30)) {
    nextDays += 7;
  }

  // Exibir mês e ano no título do calendário
  document.querySelector(".date h1").innerHTML = `${
    months[date.getMonth()]
  } ${date.getFullYear()}`;

  // Data atual em formato String
  document.querySelector("#today-desc").innerHTML =
    new Date().toLocaleDateString("pt-Br", { dateStyle: "full" });

  let days = "";

  // Renderizar os últimos dias do mês anterior
  for (let x = firstDayIndex; x > 0; x--) {
    days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
  }

  // Renderizar os dias do mês em questão
  for (let i = 1; i <= daysOfMonth[month]; i++) {
    if (
      // Destacar o dia atual
      i === new Date().getDate() &&
      date.getMonth() === new Date().getMonth() &&
      date.getFullYear() === new Date().getFullYear()
    ) {
      days += `<div class="today">${i}</div>`;
    } else {
      // Demais dias
      days += `<div>${i}</div>`;
    }
    monthDays.innerHTML = days;
  }

  // Renderizar os primeiros dias do próximo mês
  for (let j = 1; j <= nextDays; j++) {
    days += `<div class="next-date">${j}</div>`;
    monthDays.innerHTML = days;
  }

  // Add estilo ao #today-desc somente quando sair do mês atual
  if (
    date.getMonth() != hoje.getMonth() ||
    date.getFullYear() != hoje.getFullYear()
  ) {
    document.querySelector("#today-desc").style.textDecoration = "underline";
  } else {
    document.querySelector("#today-desc").style.textDecoration = "none";
  }
};

// Navegar para meses anteriores ao atual
document.querySelector(".prev").addEventListener("click", () => {
  if (date.getMonth() == 0) {
    date.setFullYear(date.getFullYear());
  }
  date.setMonth(date.getMonth() - 1);
  renderCalendar();
});

// Navegar para meses posteriores ao atual
document.querySelector(".next").addEventListener("click", () => {
  if (date.getMonth() == 11) {
    date.setFullYear(date.getFullYear());
  }
  date.setMonth(date.getMonth() + 1);
  renderCalendar();
});

// Retornar à data atual
document.querySelector("#today-desc").addEventListener("click", () => {
  date.setMonth(hoje.getMonth());
  date.setFullYear(hoje.getFullYear());
  renderCalendar();
});

renderCalendar();
