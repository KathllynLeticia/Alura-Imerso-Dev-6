var filmes = [];
var nomeFilmes =[];
var link =[];
i=0;
function adicionarFilme(){
  filmes.push(document.getElementById('filme').value);
 link.push(document.getElementById('urlFilme').value);  nomeFilmes.push(document.getElementById('nome').value);
 var elementoListaFilmes = document.getElementById('listaFilmes');
  document.getElementById('nome').value='';
  document.getElementById('filme').value='';
  document.getElementById('urlFilme').value=''; 
if(filmes[i].match(/.jpg/)||filmes[i].match(/.jpeg/)||filmes[i].match(/.png/)){
     elementoListaFilmes.innerHTML =elementoListaFilmes.innerHTML+'<a href='+link[i]+'><img src='+filmes[i]+'></a>';
    i++;
 }
   
}

var indice=999999;
function excluirFilme(){
  var elemento = prompt("Qual o nome do filme que deseja excluir? ")
  for(i=0;i<=filmes.length;i++){
    if(elemento ==nomeFilmes[i]){
      indice=i;
    }
  }
if(indice<999999){
  var novoFilmes=[];
  var novoLink=[];
  var novoNomes=[];
  var j =0;
  for(i=0;i<=filmes.length;i++){
    if(i!=indice){
      elementoListaFilmes.innerHTML =elementoListaFilmes.innerHTML+'<a href='+link[i]+'><img src='+filmes[i]+'></a>';
      j++;
    }
  }
  
}else{
  alert('Não encontrei esse filme!')
}
}