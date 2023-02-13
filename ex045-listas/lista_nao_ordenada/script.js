//Criação de uma lista não ordenada:

var nomes = ['Dénis','Edmilson','Vandinelson','Maribel','Emeline','Bruno']; //array/lista

var tagUl = document.createElement('ul'); //cria a tag ul
var body = document.getElementsByTagName('body'); //para acessar os elementos criados no corpo do documento
body[0].appendChild(tagUl);

var listaNoBody = document.getElementsByTagName('ul');


for(var i=0; i<nomes.length; i++)  {
    var tagLi = document.createElement('li'); //cria a tag li
    var nomesDentroTagLi = document.createTextNode(nomes[i]); //coloca cada nome dentro de uma tag li

    tagLi.appendChild(nomesDentroTagLi); //cada nome um debaixo do outro/elementos filho
    listaNoBody[0].appendChild(tagLi); // e FINALMENTE mostra a lista no corpo do documento HTML
}