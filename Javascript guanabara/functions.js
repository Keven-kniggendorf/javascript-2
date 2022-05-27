// criar um aplicattivo de frases motivacionais
//declararion - declaração da função
function createPhhrases() {
console.log('Estudar é muito bom')
console.log('Paciência é persistencia')
console.log('Revisão é mãe do aprendizado')
}
// Esta função é salva na memória e colocada um atalho para poder acha-lo depois(neste caso a palavra que foi usada foi: createPhrases)
//executar a função
//rodar, chamar, invocar
//execute, run, call, invoke
createPhhrases()

console.log('fim do programa')

//function expression
// function anonymous

//parâmetros (parameters), pode fazer desta maneira a função tambem, dentro de uma variável.


//const sum = function(number1, number2){
//    console.log(number1 + number2)
//}

//sum(2, 4) //arguments - argumentos da função
// e este bloco poder reutilizado para fazer diversas contas é só colocando a função em exposição(sum(2, 4))


//Aqui foi executado uma função dentro de uma variante, ou seja, a situação é a mesma porem dentro de um variante.

const sum = function(number1, number2){ //parametro da função
   let total = number1 + number2 //retorno da função
    return total //retorno da função
}

let number1 = 30 //argumentos
let number2 = 45 //argumentos

console.log(`o numero 1 é ${number1}`)
console.log(`o numero 2 é ${number2}`)
console.log(`a soma é ${(number1 + number2)}`)

// Criando um function hoisting

//sayMyName();

//function sayMyName() {
//    console.log('keven')
//} 


// aqui funciona a elevação da função que o js arruma automático para facilitar, se acaso colocar ele dentro de uma variação nao irá funcionar pois a função esta sem valor(undefined)

// arrow function, ou seja: uma abreviação da função(função expression)

//const sayMyName = () => {
// console.log('Keven')

//}

//sayMyName()




// callback function, chamando de volta. Chama uma função e outra de volta.

function sayMyName(name) {
    console.log('antes de executar a função callback')
    name()
    console.log('depois de executar a callback')
}

sayMyName(
    () => {
        console.log('estou em uma callback')
    }
 )



 /* Function() constructor
    * expressão new
    *criar um novo objetivo
    * this keyword
    * A palavra "THIS" é muito importante para dar nome e função ao objeto
 */
function Person(name) {
    this.name = name
    this.walk = function() {
        return this.name + " está andando"
    }
}
const Keven = new Person("Keven")
const joão = new Person("joão")
console.log(Keven.walk())
console.log(joão.walk())
// isto acima serve como molde para criar objetos.