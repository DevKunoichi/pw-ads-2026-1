// Alguns dados de um usuário
const fullname = 'Jonicleisson Junqueira Junior'
const username = 'junin'
const group = 'alunos'

// Criando um objeto a partir das variáveis acima
const user1 = {
    fullname: fullname,
    username: username,
    group: group
}
console.log(user1)

/*
  Quando o nome da propriedade de um ojeto é idêntico 
  ao da variável que lhe dará o valor, é possível usar
  a sintaxe chamada PROPRIEDADE ABREVIADA. Ela permite 
  não repetir os nomes das variáveis à frente dos nomes 
  das propriedades
*/
const user2 = {
    fullname,
    username,
    group
}
console.log(user2)

// Um objeto pode mesclar propriedades abreviadas 
// e não abreviadas
const user3 = {
    fullname,
    username,
    password: 'SoberanoTricolor',
    group,
    lostLogin: '2026-03-02 11:33:22'
}
console.log(user3)

/* USANDO PROPRIEDADES ABREVIADAS PARA DEPURAÇÃO (DEBUG) */

const x = 10, y = 'batata'

/*
    Exibindo o valor das duas variáveis com console.log().
    Observe que os valores são mostrados, mas a saída não 
    informa quais as variáveis de onde provêm os valores.
*/
console.log(x, y)

/*
    Saída melhorada: passando um objeto formado pelas variáveis 
    como propriedades abreviadas para o console.log(), conseguimos
    identificar de onde vêm os valores.
*/
console.log({x, y})

