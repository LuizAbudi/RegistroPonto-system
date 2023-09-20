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

export const InjectPontos = () => {
  localStorage.setItem(
    "18/09/2023",
    JSON.stringify([
      { data: "18/09/2023", hora: "17:00:23" },
      { data: "18/09/2023", hora: "02:30:24" },
    ])
  );
  localStorage.setItem(
    "19/09/2023",
    JSON.stringify([
      { data: "19/09/2023", hora: "17:03:12" },
      { data: "19/09/2023", hora: "23:30:45" },
    ])
  );
  localStorage.setItem(
    "20/09/2023",
    JSON.stringify([
      { data: "20/09/2023", hora: "17:01:37" },
      { data: "20/09/2023", hora: "00:55:12" },
    ])
  );
  localStorage.setItem(
    "21/09/2023",
    JSON.stringify([
      { data: "21/09/2023", hora: "17:10:48" },
      { data: "21/09/2023", hora: "23:45:33" },
    ])
  );
  localStorage.setItem(
    "22/09/2023",
    JSON.stringify([
      { data: "22/09/2023", hora: "17:05:26" },
      { data: "22/09/2023", hora: "00:20:49" },
    ])
  );
  localStorage.setItem(
    "23/09/2023",
    JSON.stringify([
      { data: "23/09/2023", hora: "17:05:26" },
      { data: "23/09/2023", hora: "00:20:49" },
    ])
  );
};
