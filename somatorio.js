function verificaSeENumero(numero) {
  if(typeof numero !== 'number') {
    throw new Error('Erro! É necessário que seja um número.');
  };
  return numero;
};

function vericaSeENumeroPositivo(numero) {
  if (numero < 0) {
    throw new Error('Erro! É necessário que seja um número positivo.');
  };
  return numero;
};

function somandoNumerosInteiros (numero) {
  let somatorioNumerosInteiros = 0;
  const numerosDivisiveis = [];

  try {
    vericaSeENumeroPositivo(numero);
    verificaSeENumero(numero);
    
      for(let indice = 1; indice < numero; indice += 1) {
        
        if (indice % 3 == 0 || indice % 5 == 0) {
          numerosDivisiveis.push(indice)
          somatorioNumerosInteiros += indice;
        };
      };
    // console.log(`Números que são divisiveis por 3 e 5, menores que ${numero}: ${numerosDivisiveis}`);
    return somatorioNumerosInteiros;
  } catch(error) {
    return error.message;
  };
  
};



console.log(somandoNumerosInteiros(10));