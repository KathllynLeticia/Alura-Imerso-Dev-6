var jogador1 = {
  avatar:
    "https://www.fightersgeneration.com/news2021/char/iori-yagami-kof-by-hiroaki-2021.jpg",
  nome: "Iori",
  vitoria: 0,
  perfect: 0,
  empate: 0,
  derrota: 0,
  pontos: 0
};
var jogador2 = {
  avatar:
    "https://i.pinimg.com/originals/5a/26/ea/5a26ea8e753c73e5a6d248ccf588e54b.png",
  nome: "Orochi",
  vitoria: 0,
  perfect: 0,
  empate: 0,
  derrota: 0,
  pontos: 0
};
var listaJogadores = [jogador1, jogador2];

var elementoTabela = document.getElementById("tabelaJogadores");
exibirNaTela();

function exibirNaTela() {
  var resultado = "";

  for (var i = 0; i < listaJogadores.length; i++) {
    resultado += `
  <tr>
          <td><img src="${listaJogadores[i].avatar}" class="avatar"></td>
          <td>${listaJogadores[i].nome}</td>
          <td>${listaJogadores[i].vitoria}</td>
          <td>${listaJogadores[i].perfect}</td>
          <td>${listaJogadores[i].empate}</td>
          <td>${listaJogadores[i].derrota}</td>
          <td>${listaJogadores[i].pontos}</td>
         
          <td><button onClick="adicionarVitoria(${i})">Vitória</button></td>
          <td><button
onClick="adicionarPerfect(${i})">Perfect</button></td>
          <td><button onClick="adicionarEmpate(${i})">Empate</button></td>
          <td><button onClick="adicionarDerrota(${i})">Derrota</button></td>
      </tr>
  `;
    // Pontos: Vitória 3, Perfect 2, Empate 1, Derrota 0
  }
  elementoTabela.innerHTML = resultado;
}

function adicionarVitoria(jogador) {
  listaJogadores[jogador].vitoria++;
  listaJogadores[jogador].pontos = listaJogadores[jogador].pontos + 3;
  exibirNaTela();
}

function adicionarPerfect(jogador) {
  listaJogadores[jogador].perfect++;
  listaJogadores[jogador].pontos = listaJogadores[jogador].pontos + 2;
  exibirNaTela();
}

function adicionarEmpate(jogador) {
  listaJogadores[jogador].empate++;
  listaJogadores[jogador].pontos++;
  exibirNaTela();
}

function adicionarDerrota(jogador) {
  listaJogadores[jogador].derrota++;
  exibirNaTela();
}

function adicionarJogador() {
  var nomeJogador = prompt("Insira o nome do jogador.");
  var avatarJogador = prompt("Insira a URL para o avatar do jogador.");

  if (
    avatarJogador.endsWith("png") ||
    avatarJogador.endsWith("jpe") ||
    avatarJogador.endsWith("jpeg") ||
    avatarJogador.endsWith("jpg")
  ) {
    var novoJogador = {
      nome: nomeJogador,
      avatar: avatarJogador,
      pontos: 0,
      vitoria: 0,
      perfect: 0,
      empate: 0,
      derrota: 0
    };

    listaJogadores.push(novoJogador);
    exibirNaTela();
  } else {
    alert("Formato de imagem incompatível.");
  }
  // URL Chun-li para testes
  // https://static.wikia.nocookie.net/streetfighter/images/d/dc/Chin-Li_USFII.png
}
function removerJogador(i) {
  var remover = prompt("Qual jogador será removido?");
  var posicao = -1;
  for (var i in listaJogadores) {
    if (remover == listaJogadores[i].nome) {
      posicao = i;
    }
  }
  if (posicao != -1) {
    listaJogadores.splice(posicao, 1);
    exibirNaTela();
  } else {
    alert("Jogador não encontrado.");
  }
}
