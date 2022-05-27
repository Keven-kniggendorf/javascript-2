console.log('Hello Word')
//=serve para colocar comentários

//Object. Exemplo:
console.log({
    name: "Keven",
    idade: 22,
    andar: function () {
        console.log('andar')
    }
})
//Array exemplo:
console.log(["Keven", 22])

//Variável do tipo var
var clima = "Quente"
clima = "Frio"

console.log(clima)

//variável do tipo let é igual a do var

// variável do tipo const nao se pode variar no valor se nao da erro por nao conter um resultado unico

//Block statement é feito desta maneira:
{
    //aqui dentro é um bloco e posso colocar qualquer código
}//aqui fechamos o bloco

//O bloco também criará um novo escopo. Chamamos de 'block-scoped'


//O var é global... ou seja ele funciona fora do bloco, e quando se coloca um bloco dentro de um var o bloco se torna local. exemplo:
console.log('> existe x depois do bloco? ', x)

{
    var x = 0
}

console.log('> existe x depois do bloco? ', x)
// Ele ira dizer undefined no caso que o x existe só não tem um valor especificado na primeira linha, mas logo que a pargunta se repete ele mostra o valor de x pois no "local" mostra que o valor de x é 0.

// Tanto o let quanto o const só funcionam se estiverem dentro do "local", o valor deve ser estabelecido antes também. No caso do x como exemplo acima.

// declaração or declaration
var name

//assignment or atribuição de valores 
name = "mike"

//que tipo de dado foi colocado na variável
//console.log(typeof name)
//= string

let age = 20
let isHuman = true
// ou seja, identificar valores como non primeiro é: idade é 20 então a declaração é number e no segundo caso esta perguntando se é humano e foi descrito como verdadeiro esta declaração é boleana.

// tentando atribuir as tres:
console.log(name, age, isHuman)
name = "Keven"
age = 20
isHuman = true

//para que dentro de seu texto que escolha colocar e no momento em que aparecer voce quiser mudar a informação sem ter que mexer no texto usa-se desta maneira:

// console.log('O ' + name + ' tem ' + age + 'anos'), esta maneira se chama concatenando valores. Exite a outra maneira chamada Interpolar valores com template or template strings. Desta maneira:
//console.log(`o ${name} tem ${age} anos.`)

//Exemplo:
const person = {
    name: "keven",
    age: 22,
    height: 1.73,
    isAdmin: true
  };
  console.log(`${person.name} tem ${person.age} anos`);
  

