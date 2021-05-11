class Starfield
{
	// define as variaveis
	
	fps ;
    canvas ;
    width ;
	height ;
    minVelocity ;
    maxVelocity ;
    stars ;
    intervalId ;
	ctx;
	
	
	 
  
  
	//define o construtor e o contexto
	  constructor(ctx) {
		  this.fps = 30;
	
	this.width = 0;
	this.height = 0;
	this.minVelocity = 15;
	this.maxVelocity = 30;
	this.stars = 100;
	this.intervalId = 0;

    this.ctx = ctx;
	console.table(this.ctx);
	//define o tamanho da janela
	this.width = window.innerWidth;
	this.height = window.innerHeight;
	this.ctx.width = this.width;
    this.ctx.height = this.height;
	    
  }
  
 
inicializa()
{
	
	var self = this;
	 
addEventListener('resize', function resize(event){
		//redefine as medidas quando a janela é alterada
    self.width = window.innerWidth;
    self.height = window.innerHeight;
	self.ctx.width = self.width;
	self.ctx.height = self.height;
    self.desenha()
}); 

}
start()
{
	var stars = [];
	for(var i=0; i<this.stars; i++) {
		stars[i] = new Star(Math.random()*this.width, Math.random()*this.height, Math.random()*3+1,
		 (Math.random()*(this.maxVelocity - this.minVelocity))+this.minVelocity);
	}
	this.stars = stars;
console.table(stars);
	var timeUpdate = 1000 / this.fps;
	var self = this;
	this.intervalId = setInterval(function() {
        self.update();
        self.desenha();	
    }, timeUpdate);
}

	desenha()
	{
		//console.table("teste");
		//desenha o plano de fundo
		this.ctx.fillStyle = '#000000';
		this.ctx.fillRect(0, 0, this.width, this.height);
		
		//desenha as estrelas no plano de fundo
		this.ctx.fillStyle = '#ffffff';
		for(var i=0; i<this.stars.length;i++) {
			var star = this.stars[i];
			this.ctx.fillRect(star.x, star.y, star.size, star.size);
			console.table(star);
		}
		
	}


  update(){
	var dt = 1 / this.fps;

	for(var i=0; i<this.stars.length; i++) {
		var star = this.stars[i];
		star.y += dt * star.velocity;
		//	If the star has moved from the bottom of the screen, spawn it at the top.
		if(star.y > this.height) {
			this.stars[i] = new Star(Math.random()*this.width, 0, Math.random()*3+1, 
		 	(Math.random()*(this.maxVelocity - this.minVelocity))+this.minVelocity);
		}
		
	}
	console.table(this.stars);
}

stop()
{
	clearInterval(this.intervalId);
}
	
}