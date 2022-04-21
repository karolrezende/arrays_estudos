/*const nota = [10,8,6, 5, 5.5];

const sala1 = nota.slice(0, nota.length/2);
const sala2 = nota.slice(nota.length/2);

console.log("notas sala 1: ${sala1}");*/ //slice (divide em dois);

/*var aluno = ['joão', 'ana', 'caio', 'lara', 'marjorie', 'leo'];

var alunonovo = aluno.splice(2, 2, 'antonie');

console.log(`lista: ${aluno}`);*/ // splice (seleciona onde vai cortar, a quantidade q vai cortar, e se quer incluir um novo parametro)

/*var sala1 = ['joana', 'maria', 'vanessa'];
var sala2 = ['rogeria', 'felipa', 'vanessa'];

var salas = sala1.concat(sala2);

console.log(`as salas ficaram: ${salas}`);*/ //concat (junta dois arrays)

/*
var aluno = ['marcelo', 'mauricio', 'julia', 'felipe'];
var nota = [10, 3, 0, 1];

let notaaluno = [aluno, nota];

console.log(`${notaaluno[0][2]} sua nota é ${notaaluno[1][2]}`); */ //arrays de duas dimensões 

/*var nome = ['marcelo', 'mauricio', 'julia', 'felipe'];
var nota = [10, 3, 0, 1];

var nomenota = [nome, nota];

var exibe = (nomeexiste) =>
{
    if (nomenota[0].includes(nomeexiste))
    {
        indice = nomenota[0].indexOf(nomeexiste);
        return nomenota[0][indice] + ' sua nota é ' + nomenota[1][indice]
    }
    else
    {
        return 'esse aluno não está matriculado.'
    }
}
console.log(exibe("corno")); */ // includes(retorna verdadeiro ou falso se está incluso) e indexof(verifica se existe e retorna o valor verdadeiro-palavras */

/* var lista = [100, 200, 300, 400, 500, 600];

for (var i = 0; i < lista.length; i++)
{
    console.log(i, lista[i]);
} */ //teste for com arrays

/*var lista = [100, 200, 300, 400, 500, 600];
var listamedia = 0;
for (var i = 0; i < lista.length; i++)
{
    var listamedia = lista[i];
}
var listamedia2 = listamedia/lista.length;
console.log(listamedia2); */ //medias em for

/*var lista = [10, 6.5, 8, 7.5];

var soma = 0 

lista.forEach(numero => 
{
    soma += numero;
});

var media = soma/lista.length;
console.log(media); */ //foreach (pega cada conteudo sem precisar do for)

/*var notas = [10, 9, 8 ,7 ,6];

var notasaluno = notas.map( nota => nota == 10 ? nota : ++nota);
console.log (notasaluno); */ //atraves do comando .map é possivel fazer uma funcao de forma mais rapida

/*var nomes = ["PEDRO arruda", "mathias Doido", "COrno loco"];

var nomesnovos = nomes.map(nome => nome.toUpperCase());

console.log(nomesnovos); */ 
/* var nomes = ["manu", "felipe", "vanessa"];
var notas = [9, 1, 2];

var reprovados = nomes.filter((nome, nota) => notas[nota] < 5) 

console.log(reprovados); */ //utilizando filter para retornar true ou false

/* var salajs = [7,8, 8, 7, 10, 6.5 , 4, 10,7];
var salajava = [6, 6, 8, 9, 5, 6];
var salapython = [7, 3.5, 8, 9.5];

function notasgerais (notas){
    var somatoria = notas.reduce((geral, atual) => 
    atual + geral, 0 // valor dado para que inicie o contador no zero); 
    return somatoria/notas.length;
}
console.log(`sala js ${notasgerais(salajs)} sala java ${notasgerais(salajava)} sala python ${notasgerais(salapython)}`) */ 
//utiliza o reduce, que precisa de dois paramentros, um que soma e guarda todos os dados, e o dado atual. é util pois facilita a somatoria de arrys
