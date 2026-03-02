const nome = 'Valcicleide'
const idade = 20
const cidade = 'Morro Alto de Cima/MG'

// Mesclando strings com variáveis usando concatenação
const msg1 = 'Meu nome é ' + nome + ', tenho ' + idade + ' anos e moro em ' + cidade + '.'
console.log(msg1)

/* Mesclando strings com variáveis usando template string 
   Template strings são OBRIGATORIAMENTE delimitadas por ``
   (backticks/ acentos graves/ "crases")
*/
const msg2 = `Meu nome é ${nome}, tenho ${idade} anos e moro em ${cidade}.`
console.log(msg2)

// Dentro de uma template string, não estamos limitados a usar 
// apenas variáveis dentro do símbolo ${}. Qualquer código JS
// válido pode ser emrpegado ali.
console.log(`Em ${2026 + 7}, ${nome.toUpperCase()} terá ${idade + 7} anos.`)

