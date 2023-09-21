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

export default function Tester() {
  for (let i = 0; i < 20; i++) {
    setPontos(day, month, year);

    day++;
    if (day > 30) {
      day = 1;
      month += 1;
    }
    if (month > 12) {
      month = 1;
      year++;
    }
  }
}

function Cleaner() {
  localStorage.clear();
  localStorage.setItem("token", "0123456789teste");
  localStorage.setItem("type", "admin");
}
export { Cleaner };
