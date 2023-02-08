var numeroSecreto = parseInt(Math.random()*1001)+1;
tentativa = 0;

while(chute != numeroSecreto){
tentativa++ 
var chute = prompt('Digite um número entre 0 e 1000');

 if (chute == ''){
  alert('Nenhum número foi digitado.')
}
else if (chute == null){
 break;
}
 else if (chute < numeroSecreto){
  alert('Você errou. O número é maior do que ' + chute + '.')
	}
else if(chute > numeroSecreto){
    alert('Você errou. O número é menor do que ' + chute + '.')
  }
else if(chute == numeroSecreto){
  alert('Parabéns! Você acertou e levou ' + tentativa + ' tentativas.')
}
else
  alert('Valor inválido');
}
