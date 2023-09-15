import './style.css';
import javascriptLogo from './javascript.svg';
import viteLogo from '/vite.svg';
import { setupCounter } from './counter.js';

var canvas = document.getElementById('canvas');
if (canvas.getContext) {
  var ctx = canvas.getContext('2d');

  ctx.fillStyle = 'rgb(200,0,0)';
  ctx.fillRect(10, 10, 55, 50);

  ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
  ctx.fillRect(30, 30, 55, 50);
}

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
