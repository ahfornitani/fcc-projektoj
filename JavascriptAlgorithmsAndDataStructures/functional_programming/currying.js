// Currying é transformar uma função de modo que receba apenas um único argumento

// antes
const dividirSimples = (y, x) => x / y

// dividindo por 2
console.log(dividirSimples(2, 90)) // --> 45
console.log(dividirSimples(2, 50)) // --> 25

// depois com currying
// a função dividir é 'curried'
// duas funções, cada uma com 1 parâmetro
const dividir = (y) => (x) => x / y

// agora, cria-se uma nova função que sempre divide por 2 utilizando, a função dividir
// neste caso, 2 é o "y" de "dividir"
const dividirPorDois = dividir(2)

// assim, não é necessário sempre informar 2 (y)
// abaixo, 4 e 8 são o "x" de "dividir"
// assim, mantém-se a forma "x / y" de dividir, ao rodar "dividirPorDois"
console.log(dividirPorDois(4)) // --> 2
console.log(dividirPorDois(8)) // --> 4
