function teste1(num) {
    if(num >= 7) 
    console.log(num)
    console.log('final')
}

// teste1(6)
// teste1(8)


function teste2(num) {
if(num > 7); // nao usar com blocos de controle
{
console.log(num)
}
}

//const teste2 = (num) => { let printNumber = (num>7) ? console.log(num) : false } --- Mesma função de cima, só que usando apenas uma linha e operador ternário!

teste2(6)
teste2(8)
