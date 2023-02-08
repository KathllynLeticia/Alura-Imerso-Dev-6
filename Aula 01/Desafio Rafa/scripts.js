var valorDoTether = 10;
var cotacaoDoTether = 0.92;
var nome = "Visitante";

var valorEmEuro = valorDoTether * cotacaoDoTether;
var valorEmEuro = valorEmEuro.toFixed(2);
alert(`Olá ${nome}. O Tether em euro vale ${"€ " + valorEmEuro}`);