// FUNÇÃO DE DISPLAY DOS LIVROS
function carregarLivro(nomeArquivo, nomeLivro) {
  let livroAtual = "";
  let url = "livros/" + nomeArquivo;

  //   Resetar interface do leitor
  document.getElementById("titulo-livro").innerHTML = nomeLivro;

  //   Criar servidor para carregar os livros
  var xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.send();

  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      livroAtual = xhr.responseText;

      document.querySelector(".texto-livro").innerHTML = livroAtual;
    }

    // Quebra de linhas
    livroAtual = livroAtual.replace(/(?:\r\n|\r|\n)/g, "<br>");

    document.querySelector(".texto-livro").innerHTML = livroAtual;

    var elmnt = document.querySelector(".texto-livro");
    elmnt.scrollTop = 0;
  };
}

// FUNÇÃO VOLTAR AO LEITOR
function voltarAoTopo() {
  window.scrollTo(0, 0);
}

// MODO NOTURNO | CLARO
const tema = document.querySelector("input");
const rootElement = document.documentElement;

const temaClaro = {
  "--card-tip": "#e3c770",
  "--background": "#daffba",
  "--card": "#a5cd81",
  "--card-titulo": "#608044",
};

const temaEscuro = {
  "--card-tip": "#755823",
  "--background": "#465b75",
  "--card": "#2f4f75",
  "--card-titulo": "#141d28",
};

tema.addEventListener("change", function () {
  const checado = tema.checked;
  checado ? mudarTema(temaEscuro) : mudarTema(temaClaro);
});

function mudarTema(tema) {
  for (let prop in tema) {
    mudarPropriedade(prop, tema[prop]);
  }
}

function mudarPropriedade(propriedade, value) {
  rootElement.style.setProperty(propriedade, value);
}
