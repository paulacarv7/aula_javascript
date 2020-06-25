

function clicou(){
     document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
    //console.log(document.getElementById("agradecimento"));
    //alert("Obrigado por clicar");
}

function redirecionar(){
    window.open("https://web.digitalinnovation.one/");
    //window.location.href = "https://web.digitalinnovation.one/";
}

function trocar(elemento){
    elemento.innerHTML = "Obrigado por passar o mouse"
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    //alert("trocar texto");
}

function voltar(elemento){
    elemento.innerHTML = "Pase o mouse aqui"
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";


}

function load(){
    alert("página carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value)
}

/*
function soma(n1, n2){
    return n1 + n2;
}
*/

/*
var validar = 0;
function validaIdade(idade){
    validar;
    if (idade >= 18){
        validar = true
    }else{
        validar = false
    }
    return validar;
}

var idade = prompt("Qual a sua idade");
validaIdade(idade)
console.log(validar);  
*/

/*
var d = new Date();
alert(d.getMonth()+1);
alert(d.getDay());
alert(d.getHours());
alert(d.getMinutes());
*/


/*
var count = 0;
for(count=0; count <= 5; count++){
    alert(count);
};
*/



/*
var count = 0;
while (count <= 5){
    console.log(count);
    alert(count);
    count++;
};
*/


/*
var idade = prompt("Qual sua idade");
if (idade >= 18) {
    alert("maior de idade");
}else{
    alert("menor de idade");
};
*/


/*
var frutas = [{nome:"maça", cor:"vermelha"}, {nome: "uva", cor:"roxa"}]
console.log(frutas.nome);
alert(frutas[1].nome);
*/


/*
var fruta = {nome:"maça", cor:"vermelha"}
console.log(fruta.nome);
alert(fruta.cor);
*/

//var lista = ["maça", "pera", "laranja"];
//lista.push("uva");
//lista.pop();

//cosole.log(lista);
//console.log(lista.toString());
//console.log(lista.join(" - "))

//var nome = "Paula Carvalho";
//var n1 = 5;
//var n2 = 3;
//var frase = "Japão é o melhor time do mundo";
//alert(nome + " tem " + idade " anos ");
//alert(idade + idade2);
//console.log(nome);
//console.log(n1 * n2);
//console.log(frase.toLowerCase());
//alert(frase.replace("Japão", "Brasil"));

