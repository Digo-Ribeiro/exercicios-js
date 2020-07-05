const imprimirResultado = function(nota) {
    if(nota >= 7) {
        console.log('Aprovado')
    } else; {
        console.log('Reprovado')
    }
}
imprimirResultado(10)
imprimirResultado(4)
imprimirResultado('Epa')

//Código optimizado abaixo :>

const printResult = (int) =>{
    
    let checkInt = isNaN(int)
    if(checkInt!=true) { return 0 }
    
    return (int>=7) ? console.log(`Aprovado`) : console.log(`Reprovado`)
    
}

let notes = [10, 4, `Epa`]
for(let i of notes){ printResult(notes[i]) }

/*

Quanto menos if's em um código melhor, infelizmente, tive que usar um para verificar se a variável que foi passada para a função é realmente um número,
se for string ela retorna o valor 0 como padrão.....

*/
