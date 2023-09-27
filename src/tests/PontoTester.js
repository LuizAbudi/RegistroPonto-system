export default function PontoTester() {
  const setPonto = (funcionario, day, month, year) => {
    const entrada = `${randomHour(8, 10)}:${randomMinute()}:${randomSecond()}`;
    const saida = `${randomHour(17, 19)}:${randomMinute()}:${randomSecond()}`;
    const funcionarios = `${funcionario}`;
    const data = `${day}/${month}/${year}`;

    const dataValue = {
      funcionario: funcionarios,
      data: data,
      entrada: entrada,
      saida: saida,
    };

    // Recupere os registros existentes do funcionário
    const existingData = JSON.parse(
      localStorage.getItem("Funcionário") || "[]"
    );
    existingData.push(dataValue); // Adicione o novo registro à lista

    localStorage.setItem("Funcionário", JSON.stringify(existingData));
  };

  const randomHour = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const randomMinute = () => {
    return String(Math.floor(Math.random() * 60)).padStart(2, "0");
  };

  const randomSecond = randomMinute;

  let day = 23;
  let month = 9;
  let year = 2023;
  const funcionarios = [
    "Funcionario1",
    "Funcionario2",
    "Funcionario3",
    "Funcionario4",
  ];

  for (let i = 0; i < 30; i++) {
    funcionarios.forEach((funcionario) => {
      setPonto(funcionario, day, month, year);
    });

    day++;
    if (day > 30 && month === 9) {
      day = 1;
      month++;
    }
    if (month > 12) {
      month = 1;
      year++;
    }
  }
}
