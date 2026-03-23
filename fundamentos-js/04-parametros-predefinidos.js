/*
  calcArea() é uma função que calcula a área de uma figura
  geométrica plana, dados a base, a altura e o tipo da forma 
*/
// O parâmetro tipo foi transformado em predefinido,
// com valor padrão 'R' 
function calcArea(base, altura, tipo = 'R') {
    switch(tipo) {
        case 'R':     // Retângulo
            return base * altura
        case 'T':     // Triângulo
            return (base * altura) / 2
        case 'E':     // Elipse/ Círculo
            return (base / 2) * (altura / 2) * Math.PI
        default:      // Formas inválidas/ desconhecidas        
            return undefined
        } 
    }

console.log(`Àrea triângulo 10 x 30: ${calcArea(10, 30, 'T')}`)
console.log(`Àrea elipse (círculo) 7, 5 X 7, 5: ${calcArea(7.5, 7.5, 'E')}`)
console.log(`Área retângulo 12, 8 X 15, 5: ${calcArea(12.8, 15.5, 'R')}`)
console.log(`Àrea forma inválida 8 x 17: ${calcArea(8, 17, 'H')}`)

// Chamando a função com apenas dois parâmetros 
console.log(`Àrea retângulo 20 x 40: ${calcArea(20, 40)}`)
/* REGRAS PARA O USO DE PARÂMETROS PREDEFINIDOS
    1. Parâmetros predefinidos deve vir sempre POR ÚLTIMO na lista de parâmetros da função
    2. Pode haver mais de um parâmetro predefinido, nesse caso, devem ser sempre OS ÚLTIMOS.
*/


    