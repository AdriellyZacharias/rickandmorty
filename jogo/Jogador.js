//*classe do jogador
class Jogador{
    //*construir o personagens com suas devidas configurações
      constructor(){
    //Puxa a imagem do jogador
        this.image= loadImage("jogo/imgJogo/Rick.png")
    //*configurações de tamanho, posição e velocidade
        this.posicaox= 250;
        this.posicaoy= 310;
        this.velocidade= 5;
        this.altura= 100;
        this.largura= 110; 
        
        this.yInicial= this.posicaoy;
        this.yFinal= this.posicaoy - this.altura;
        this.xInicial= this.posicaox;
        this.xFinal = this.posicaox + this.largura;
    }
     //fazer o jogador se mover
    
      mova(){
      
        image(this.image, this.posicaox, this.posicaoy, this.largura, this.altura);
      
      
      // mover para direita de acordo com a tecla
      
        if((keyIsDown(39)) && (this.xFinal<600)){ 
          this.posicaox +=  this.velocidade;
    }
      // mover para esquerda de acordo com a tecla
        if((keyIsDown(37)) &&  (this.xInicial>0)){
          this.posicaox -=  this.velocidade;
    }
          this.yInicial= this.posicaoy;
          this.yFinal= this.posicaoy + this.altura;
          this.xInicial= this.posicaox;
          this.xFinal = this.posicaox + this.largura;
      }
    }