const alunos = [
    { nome: "Lorena", notaFinal: 50 },
    { nome: "Ygor", notaFinal: 100 },
    { nome: "Lucas", notaFinal: 80 },
    {nome: "joão", notaFinal: 60 }
  ];
const notaMaior = alunos.filter(aluno => aluno.notaFinal >= 70);
console.log(notaMaior);
  