//*Classe para os personagens que irão cair
class Personagens{
    //*construir o personagens com suas devidas configurações
      constructor(){
    //*configurações de tamanho, posição e velocidade
        this.img = imgPersonagens[int(random(0,4.9))];
        this.posicaox = -40;
        this.posicaoy = random(30,570);
        this.velocidade = random(1,5);
        this.largura = 55;
        this.altura = 70;
        this.yInicial= this.posicaoy;
        this.yFinal= this.posicaoy + this.altura;
        this.xInicial= this.posicaox;
        this.xFinal = this.posicaox + this.largura;
    }
      mova(){
    //Faz os personagens se moverem com as configurações acima
        this.posicaox += this.velocidade;
        
        image(this.img, this.posicaoy, this.posicaox, this.largura, this.altura);
        this.yInicial= this.posicaoy;
        this.yFinal= this.posicaoy + this.largura;
        this.xInicial= this.posicaox;
        this.xFinal = this.posicaox + this.altura;
        
    }}