//Variaveis
let ImagemFundo;
let personagens = [];
let imgPersonagens = [];
let jogador;
let pontos = 0;
let som;
let som2;
let imgabertura = [];
let controleTela = "INICIO";
let imgFinal;
let vidas = 0;


function preload(){
//*puxa todas as imagens para que elas apareçam no jogo
   ImagemFundo = loadImage('jogo/imgJogo/Fundo.jpg');
      imgPersonagens[0]= loadImage('jogo/imgJogo/Irma.png');
      imgPersonagens[1]= loadImage('jogo/imgJogo/Portal.png');
      imgPersonagens[2]= loadImage('jogo/imgJogo/Morty.png');
      imgPersonagens[3]= loadImage('jogo/imgJogo/Arma.png');
      imgPersonagens[4]= loadImage('jogo/imgJogo/Bomba.png');
      som = loadSound ('som/SomBomba.mp3');
      som2 = loadSound ('som/SomObjetos.mp3');
      imgabertura[0] = loadImage ("/jogo/imgJogo/Inicio.gif");
      imgFinal = loadImage ("/jogo/imgJogo/Fim.gif");


  //aparecer os objetos
    personagens[0] = new Personagens();
    personagens[1] = new Personagens();
    personagens[2] = new Personagens();
    personagens[3] = new Personagens();
    personagens[4] = new Personagens();
  
  
  //cria o jogador
  jogador= new Jogador();
}


function setup() {
//*tamanho do seu jogo//fundo
    createCanvas(600, 400).parent("jogo");
}

function keyPressed(){
    if (keyCode ==32){
      controleTela = "jogo";
  }
}


function draw() {
  if(controleTela == "INICIO"){
    mostraabertura();
  }
  if(controleTela == "jogo"){
    executarjogo();}
  
  if(controleTela == "Gameover"){
    Gameover();
  }
}
