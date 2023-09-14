export const pegarDataHoraAtual = () => {
  const data = new Date().toLocaleDateString();
  const hora = new Date().toLocaleTimeString();

  return { data, hora };
};
