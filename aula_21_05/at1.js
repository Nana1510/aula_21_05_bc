const alunos = [
    { nome: "Lorena", notaFinal: 50 },
    { nome: "Ygor", notaFinal: 100 },
    { nome: "Lucas", notaFinal: 80 },
    {nome: "joão", notaFinal: 70 }
  ];

const encontrado = alunos.find(aluno => aluno.nome === "joão");
console.log(encontrado); 


