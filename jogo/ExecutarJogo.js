function executarjogo(){
    
    //Puxa a imagem de fundo 
    background(ImagemFundo);
//faz o jogador se mover  
    jogador.mova();
//conta os pontos
    print(pontos);
  
 for(let i = 0; i < personagens.length; i++){
      personagens[i].mova();
    //o personagem bater na borda
  if (personagens[i].posicaox > 400){
        personagens[i] = new Personagens();
}
    
// fazer os objetos sumirem e contar pontos ao serem tocados pelo jogador
  if(
      jogador.yInicial< personagens[i].xFinal &&
      jogador.yFinal>personagens[i].xInicial &&
      jogador.xInicial< personagens[i].yFinal &&
      jogador.xFinal>personagens[i].yInicial 
  
){
        
    if (personagens[i].img == imgPersonagens[4]){
         personagens[i]= new Personagens(personagens[i].posicaoy);
         pontos = 0;   
        vidas ++;
        som.play();

  if(vidas==3){
    controleTela = "Gameover"
    vidas = 0;
    pontos = 0;
    jogador = new Jogador();
  }        
         
   
    }else{ 
        console.log(personagens[i].yFinal)
        personagens[i] = new Personagens(personagens[i].posicaoy);
        som2.play();
        pontos++;
        //* Aumenta a velocidade quando toca num objeto
        personagens[i].velocidade+=1;

      
}}}
  
  //O texto escrito pontuação escrito em cima do jogo 
      text("Pontuação:" + pontos,235,30) 
      textSize(20)
}