export const Usuarios = [
  {
    username: "teste",
    senha: "1234",
    tipo: "admin",
    token: "0123456789abudi",
  },
  {
    username: "teste1",
    senha: "teste1",
    tipo: "user",
    token: "0123456789teste1",
  },
  {
    username: "teste2",
    senha: "teste2",
    tipo: "user",
    token: "0123456789teste2",
  },
];

export function authenticateUser(username, password) {
  const usuario = Usuarios.find(
    (user) => user.username === username && user.senha === password
  );

  if (usuario) {
    return {
      username: usuario.username,
      token: usuario.token,
      tipo: usuario.tipo,
    };
  } else {
    return null; 
  }
}
