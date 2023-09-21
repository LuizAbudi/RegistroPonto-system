const setPontos = (day, month, year) => {
  const dateKey = `${day}/${month}/${year}`;
  const dataValue = [
    { data: dateKey, hora: "17:05:26" },
    { data: dateKey, hora: "00:20:49" },
  ];

  localStorage.setItem(dateKey, JSON.stringify(dataValue));
};

let day = 23;
let month = 9;
let year = 2023;

for (let i = 0; i < 20; i++) {
  setPontos(day, month, year);

  day++;
  if (day > 30 && month === 9) {
    //considerando setembro com 30 dias
    day = 1;
    month++;
  }
  if (month > 12) {
    month = 1;
    year++;
  }
}
