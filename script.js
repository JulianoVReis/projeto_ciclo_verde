const home = document.querySelector(".home");
const sustentabilidade = document.querySelector(".sustentabilidade");
const reciclagem = document.querySelector(".reciclagem");
const comunidade = document.querySelector(".comunidade");
const educacao = document.querySelector(".educacao");
const inovacoes = document.querySelector(".inovacoes");
const contato = document.querySelector(".contato");

const textoInicial = document.querySelector(".texto-inicial");
const sustentabilidadeTxt = document.querySelector(".sustentabilidade-txt");
const reciclagemTxt = document.querySelector(".reciclagem-txt");
const comunidadeTxt = document.querySelector(".comunidade-txt");
const educacaoTxt = document.querySelector(".educacao-txt");
const inovacoesTxt = document.querySelector(".inovacoes-txt");
const contatoTxt = document.querySelector(".contato-txt");
const links = document.querySelectorAll(".efeito-link");

home.addEventListener("click", () => {
	textoInicial.style.display = "flex";
	sustentabilidadeTxt.style.display = "none";
	reciclagemTxt.style.display = "none";
	comunidadeTxt.style.display = "none";
	educacaoTxt.style.display = "none";
	inovacoesTxt.style.display = "none";
	contatoTxt.style.display = "none";
});

sustentabilidade.addEventListener("click", () => {
	sustentabilidadeTxt.style.display = "flex";
	textoInicial.style.display = "none";
	reciclagemTxt.style.display = "none";
	comunidadeTxt.style.display = "none";
	educacaoTxt.style.display = "none";
	inovacoesTxt.style.display = "none";
	contatoTxt.style.display = "none";
});

reciclagem.addEventListener("click", () => {
	reciclagemTxt.style.display = "flex";
	textoInicial.style.display = "none";
	sustentabilidadeTxt.style.display = "none";
	comunidadeTxt.style.display = "none";
	educacaoTxt.style.display = "none";
	inovacoesTxt.style.display = "none";
	contatoTxt.style.display = "none";
});

comunidade.addEventListener("click", () => {
	comunidadeTxt.style.display = "flex";
	reciclagemTxt.style.display = "none";
	textoInicial.style.display = "none";
	sustentabilidadeTxt.style.display = "none";
	educacaoTxt.style.display = "none";
	inovacoesTxt.style.display = "none";
	contatoTxt.style.display = "none";
});

educacao.addEventListener("click", () => {
	educacaoTxt.style.display = "flex";
	comunidadeTxt.style.display = "none";
	reciclagemTxt.style.display = "none";
	textoInicial.style.display = "none";
	sustentabilidadeTxt.style.display = "none";
	inovacoesTxt.style.display = "none";
	contatoTxt.style.display = "none";
});

inovacoes.addEventListener("click", () => {
	inovacoesTxt.style.display = "flex";
	educacaoTxt.style.display = "none";
	comunidadeTxt.style.display = "none";
	reciclagemTxt.style.display = "none";
	textoInicial.style.display = "none";
	sustentabilidadeTxt.style.display = "none";
	contatoTxt.style.display = "none";
});

contato.addEventListener("click", () => {
	contatoTxt.style.display = "flex";
	inovacoesTxt.style.display = "none";
	educacaoTxt.style.display = "none";
	comunidadeTxt.style.display = "none";
	reciclagemTxt.style.display = "none";
	textoInicial.style.display = "none";
	sustentabilidadeTxt.style.display = "none";
});

links.forEach((link) => {
	link.addEventListener("click", () => {
		links.forEach((l) => l.classList.remove("ativo"));
		link.classList.add("ativo");
	});
});
