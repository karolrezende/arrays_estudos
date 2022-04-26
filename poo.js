/*
var clientecorno = {
    nome: "vocemesmo",
    idade: 100,
    cpf: "cornofdp"
}

console.log(clientecorno.nome);
console.log(`os três primeiros digitos do meu cpf são: ${clientecorno.cpf.substring(0,3)}`); 
*/

//substring mostra apenas a quantidade de digitos que voce quer de determinada variavel, acompanhada por (x,x) que é onde começa e onde termina.

/*
var array = ["nome", "idade", "cpf"];
var clientecorno = {
    nome: "vocemesmo",
    idade: 100,
    cpf: "cornofdp"
}

console.log(clientecorno[array[0]]);

array.forEach(coisa => console.log(clientecorno[coisa]));
*/ //usando array para exibir o poo.

/*
var clientecorno = {
    nome: "vocemesmo",
    idade: 100,
    cpf: "cornofdp"
}

//==>>> adicionando novos objetos

clientecorno.telefone = (123456789);

console.log(clientecorno);

//===> removendo objetos

delete clientecorno.cpf;

console.log(clientecorno);
*/
/*
var clientecorno = {
    nome: "vocemesmo",
    idade: 100,
    cpf: "cornofdp",
    telefone: ["11234556", "123123123"]
}

console.log(clientecorno.telefone); */

//aqui nesse passo demonstra que pode-se criar uma parte do poo com mais de uma informação
/*
var clientecorno = {
    nome: "vocemesmo",
    idade: 100,
    cpf: "cornofdp"
}

clientecorno.filha = {
    nome: "jumente",
    idade: 25,
    cpf: "cornatambem"
}

console.log(clientecorno); */

//nesse passo demonstra que se pode adicionar um poo dentro de outro.
/*
var clientecorno = {
    nome: "vocemesmo",
    idade: 100,
    cpf: "cornofdp",
    filha: [
    {
        nome: "jumente",
        idade: 25,
        cpf: "cornatambem"
    },
    {
        nome: "jumente2",
        idade: 20,
        cpf: "cornatambe2m"
    }
]
}

var filhanova = clientecorno.filha.filter (idad => idad.idade == "20");

console.log (filhanova);
*/
//aqui mostra como utilizar poo com uma variavel com mais de um objeto, ja que o cliente possui duas filhas, e como manipular as mesmas.
/*
var clientecorno = {
    nome: "vocemesmo",
    idade: 100,
    cpf: "cornofdp",
    filha: [
    {
        nome: "jumente",
        idade: 25,
        cpf: "cornatambem"
    },
    {
        nome: "jumente2",
        idade: 20,
        cpf: "cornatambe2m"
    }],
    saldo: 0,
    depositar:function(valor){
        this.saldo += valor;
    }

}

console.log(clientecorno.saldo);
clientecorno.depositar(1);
console.log(clientecorno.saldo); */ 

// aqui mostra uma função dentro do proprio objeto, que é chamado de método, tb faz utlizacao do this, que se referencia ao proprio lugar q ela esta

/*const objPersonagem = {
    nome: "Gandalf",
    classe: "mago",
    nivel: "20"
   }
   
   const objPersonagem2 = Object.create(objPersonagem)
   objPersonagem2.nome = "Gandalf, o Cinzento" */ 

   // aqui esta demonstrando como criar um novo objeto com os mesmos atributos de um outro objeto atraves do comando object.create(xxxx).

/*
   var clientecorno = {
    nome: "vocemesmo",
    idade: 100,
    cpf: "cornofdp",
    filha: [
    {
        nome: "jumente",
        idade: 25,
        cpf: "cornatambem"
    },
    {
        nome: "jumente2",
        idade: 20,
        cpf: "cornatambe2m"
    }],
    saldo: 0,
    depositar: function(valor){
        this.saldo += valor;
    }

}

var lista = "";

for (var dado in clientecorno){
    if ( clientecorno[dado] === "function" || typeof clientecorno[dado] == "object" ){
        continue;
    }else{
        lista += `
        ${dado}: ${clientecorno[dado]}
        `
    }
}
console.log (lista); */ 

// aqui demonstra como exibir a lista e seus dados pelo metodo for in, e tambem o continue para for.

/*
var clientecorno = {
    nome: "vocemesmo",
    idade: 100,
    cpf: "cornofdp",
    dependentes: [
    {
        nome: "jumente",
        idade: 25,
        cpf: "cornatambem"
    },
    {
        nome: "jumente2",
        idade: 20,
        cpf: "cornatambe2m"
    }],
    saldo: 0,
    depositar: function(valor){
        this.saldo += valor;
    }
}

function seguro(objeto){
    var dadosObjeto = Object.keys(objeto); //acessa as variaveis dentro do objeto
    if (dadosObjeto.includes("dependentes"))
    {
        console.log(`sim ${objeto.nome} você tem seguro!`);
    }

}
Object.entries // acessa todos os dados dentro do objeto ==> mostra tudo no console
Object.values // mostra todos dados dentro das variaveis do objeto
seguro(clientecorno); */ 

// nesse passo usamos o includes e o object.keys para ver se uma variavel existia dentro do objeto

/*
var clientecorno = [{
    nome: "vocemesmo",
    idade: 100,
    cpf: "cornofdp",
    dependentes: [
    {
        nome: "jumente",
        idade: 25,
        cpf: "cornatambem"
    },
    {
        nome: "jumente2",
        idade: 20,
        cpf: "cornatambe2m"
    }],
    saldo: 0,
    depositar: function(valor){
        this.saldo += valor;
    }
},
{
    nome: "bruaca",
    idade: 21,
    cpf: "123123123123",
    dependentes: [{
        nome: "sara iasmin",
        idade: 2,
        cpf: "12312313"
    }]
}]
 var listadependente = [...clientecorno[0].dependentes, ...clientecorno[1].dependentes];

 console.log(listadependente); */ 

 /*
 class Cliente{
     constructor(nome, email, cpf, saldo){
         this.nome = nome
         this.email = email
         this.cpf = cpf 
         this.saldo = saldo
     }

     depositar(valor){
         this.saldo += valor
     }

     exibirvalor(){
         console.log(this.saldo)
     }
 }

 class ClientePoupanca extends Cliente{
     constructor(nome, email, cpf, saldo, poup)
     {
         super(nome, email, cpf, saldo)
         this.poup = poup
     }
     depositarpoup(valor){
         this.poup += valor
     }
 }
 const karol = new ClientePoupanca("karol", "karol@emial.com", "1231231", 1000, 2000)
karol.depositar(1)
karol.depositarpoup(21323)
console.log(karol)

//utilização real de poo. */