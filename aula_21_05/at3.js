const alunos = [
    { nome: "Lorena", notaFinal: 50 },
    { nome: "Ygor", notaFinal: 100 },
    { nome: "Lucas", notaFinal: 80 },
    {nome: "joão", notaFinal: 70 }
  ];
  const ordenadosPorNota = alunos.sort((b, a) => a.notaFinal - b.notaFinal);
  console.log(ordenadosPorNota);