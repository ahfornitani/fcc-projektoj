        let arr = [2, 4, 6, 8]

        let arr_doubled = arr.map(el => `${el} times 2 is ${el * 2}`)
        console.log(arr_doubled)

        let str = 'augusto';
        let rev = [].map.call(str, x => x).reverse().join('')
        console.log(str, `reversed is:`, rev)

        let nomes = ["Augusto", "Priscila", "Loki"]
        let primeiraLetra = nomes.map(el => el[0])
        console.log(primeiraLetra)
