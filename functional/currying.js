// antes
const dividirSimples = (y, x) => x / y

// aqui vc sempre ta usando o 2
console.log(dividirSimples(2, 90)) // --> 45
console.log(dividirSimples(2, 50)) // --> 25

// depois com currying
// a função dividir é 'curried'
const dividir = (y) => (x) => x / y

// agr vc cria uma nova função q sempre divide por 2 utilizando a função dividir
const dividirPorDois = dividir(2)

// vc nao precisa informar sempre o numero 2 agora:
console.log(dividirPorDois(4)) // --> 2
console.log(dividirPorDois(8)) // --> 4