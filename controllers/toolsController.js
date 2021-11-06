const diccionario = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '-', '_', '=']

async function start() {
    console.log(await StringGenerator('aa='))
}
/*
const StringGenerator = (num) => {
    return new Promise((resolve, reject) => {
        console.log('---StringGenerator---');
        console.log('numero incial: ' + num)
        res = ''
        resto = 0
        dic = diccionario.length - 1
        if (num > dic) dividir()
        else resto = num
        function dividir() {
            console.log('--dividir')
            num = num + resto
            resto = 0
            resto = resto + num % dic
            num = Math.trunc(num / dic)
            res += diccionario[resto - 1]
            console.log('num: ' + num)
            console.log('resto: ' + resto)
            if (num > dic) dividir()
        }
        res += diccionario[resto - 1]
        console.log('-----')
        console.log('final: ' + res)

        resolve('')
    })
}
*/
const StringGenerator = (num) => {
    return new Promise((resolve, reject) => {
        console.log('--- StringGenerator ---');
        console.log('incial: ' + num)
        num = num.toString()
        const long = num.length
        //console.log('ultimo: ' + num[long - 1])

        //console.log(diccionario.indexOf(num[long - 1]))

        var ret = num
        if (diccionario.indexOf(num[long - 1]) >= diccionario.length - 1) {
            console.log('finalaaa')
        } else {
            ret = num.substring(0, long - 1)
            ret += diccionario[diccionario.indexOf(num[long - 1]) + 1]
        }
        console.log('salida: ' + ret)
        console.log('--- //StringGenerator ---');
        resolve(ret)
    })
}

module.exports = {
    StringGenerator,
    start
}
