import './style.css';
import javascriptLogo from './javascript.svg';
import viteLogo from '/vite.svg';
import { setupCounter } from './counter.js';

document.querySelector('#titulo').innerHTML = 'ADRIANO ABRANTES DE ANDRADE';
document.querySelector('#subtitulo').innerHTML =
  'Desenvolvedor de Software Pleno';
document.querySelector('#boas-vindas').innerHTML =
  'Desenvolver soluções de média e alta complexidade, com baixo nível de supervisão e pouco apoio, orientar e trabalhar com o time de desenvolvimento para encontrar soluções de negócio, manter a qualidade do software. Detalhar requisitos com o cliente para implementação de novas soluções.';

document.querySelector('#frase').innerHTML =
  'Métodologias ágeis de desenvolvimento de software.';

// URL direto da imagem no Google Fotos
var urlDaImagem = 'img/adriano.png';

// Criação de um elemento de imagem
var imagem = document.createElement('img');

// Define o atributo 'src' da imagem com o URL da imagem
imagem.src = urlDaImagem;

// Define um texto alternativo (opcional)
imagem.alt = 'Descrição da imagem';
imagem.width = 100;
// Adiciona a imagem ao elemento de contêiner no documento
document.getElementById('imagem-container').appendChild(imagem);

//Testes
const palavra = 'faroeste caboclo';
document.querySelector('#p1').innerHTML = palavra.slice(2, 9);

const palavra2 = 'desistir é para os fracos';
document.querySelector('#p2').innerHTML = palavra2.split(' ');

const palavra3 = 'temos todo o tempo do mundo!';
document.querySelector('#p3').innerHTML = palavra3[14];

const palavra4 = 'vem pra mim para gente se ver de novo.';
document.querySelector('#p4').innerHTML = palavra4.includes('pamonha');

function atualizarParagrafo() {
  // Pega o valor do campo de texto
  var valorCampo = document.getElementById('campoTexto').value;

  // Atualiza o texto do parágrafo
  document.getElementById('paragrafo').textContent =
    'Valor atualizado: ' + valorCampo;
}
