const usuarios = [
  { nome: "Ana", idade: 22 },
  { nome: "Carlos", idade: 19 },
  { nome: "Beatriz", idade: 25 }
];


const encontrado = usuarios.find(usuario => usuario.nome === "Carlos");
console.log(encontrado); // { nome: "Carlos", idade: 19 }

const maioresDeIdade = usuarios.filter(usuario => usuario.idade >= 21);
console.log(maioresDeIdade); // [{ nome: "Ana", idade: 22 }, { nome: "Beatriz", idade: 25 }]