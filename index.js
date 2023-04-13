const { program } = require('commander');

program
  .version('1.0.0')
  .description('Algoritmo de Euclides');


program
  .description('Calcula o MDC pelo algoritmo de Euclides')
  .arguments('<a> <b>')
  .option('-c, --calcular <c>', 'Calcula o MDC entre três números')
  .action(function (a, b) {
    let [c] = Object.values(program.opts());
   
    if (c) {
     calcularMDC(a, b, c);
    } else {
      calcularMDC(a, b);
    }
  })

program.parse(process.argv);

function calcularMDC(a, b, c) {
  if (!c) {
    if (a === 0 || b === 0) {
      console.log("O dividendo não pode ser zero.");
      return;
    }

    let dividendo = a;
    let divisor = b;

    while (divisor !== 0) {
      const quociente = Math.floor(dividendo / divisor);
      const resto = dividendo % divisor;

      console.log(`Dividendo: ${dividendo} | Divisor: ${divisor} | Quociente: ${quociente} | Resto: ${resto}`);

      dividendo = divisor;
      divisor = resto;
    }

    console.log(`O MDC de ${a} e ${b} é ${dividendo}`);
    return dividendo;
  } else {
    if (a === 0 || b === 0 || c === 0) {
      console.log("O dividendo não pode ser zero.");
      return;
    }

    let mdc = calcularMDC(a, b);
    mdc = calcularMDC(mdc, c);

    console.log(`O MDC de ${a}, ${b} e ${c} é ${mdc}`);
  }
}
