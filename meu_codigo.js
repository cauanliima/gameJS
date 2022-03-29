var x = 300, y = 150;			//jogador
var vj=3; tj=50;				//velocidade do jogador e tamanho do jogador
var dx=800,dy=600; 				//dimensao da aba
var posX=[],posY=[],n=0,pt=1;	//coordenadas do tiro, orientacao e permissao
var vt=30;						//velocidade do tiro (inversamente proporcional)
var qx=[],qy=[];				//Coordenadas de obstaculos
var qt=40;						//quantidade de tiro 	
var p=0;    					//pontuacao
var qo=3,aqo=3;					//quantidade de obstaculos
var to=40;						//tamanho do obs
var vel=[];						//velocidade dos obstaculos
var avel=0;						//acrescimo de velocidade
var clock=0;					//ciclos de maquina
var v=100; 						//vida
var lvl=0;
var nivel=0;
var tt=0;                       // acrescimo do tamanho do tiro
var xv,yv=900,fv=20,pv=0,sv;	//vida
var pwrTiro=100,pwrExp=5; 		// poder
var login=1,tutorial=0			//tela de login==1 ou jogo==0
var heroi, vilao, BG0, BG1, BG2, BG3, BG4;
var health, heart, space, gameover;
var telainical, telafinal, telafinal2,telalogin, telatutorial;



function setup() 
	{
	createCanvas(dx,dy);
	background(0);
	for(i=0;i<qo;i++)			//introduz a vel dos primeiros obs
		{
		vel[i]=parseInt(random(2+avel,5+avel))
		}						
	
	space.setVolume(0.5);
	space.play();
	//space.isLooping();
	}

function draw() {	

////////////// tela de iniciacao
if(login==1)
{
	if(tutorial==0)
	{
	
	background(telalogin);
	if(mouseIsPressed&&mouseX>40&&mouseX<180&&mouseY>370&&mouseY<430)
	login=0;
	
	if(mouseIsPressed&&mouseX>40&&mouseX<180&&mouseY>470&&mouseY<530)
	tutorial=1;
	}
	
	
	if(tutorial==1)
	{
	background(telatutorial);
	if(mouseIsPressed && !(mouseX>40&&mouseX<180&&mouseY>470&&mouseY<530))	
	login=0;
	}	
		
	//textSize(20);                                     isto serve para mostrar as posicoes do mouse
	//fill(255,255,255);
	//text("x= " + mouseX + "  y "+mouseY ,60,60);
	
	}
	
	
	
////tela de jogo 
if(v>0 && login==0){

/////////////////// fundo
	if(nivel==0)
	background(BG0);
	
	if(nivel==1)
	background(BG1);
	
	if(nivel==2)
	background(BG2);
	
	if(nivel>=3)
	background(BG3);
	
	
//////////////////obstaculo

	obs();

//////// colisao do tiro com o obs

	for(i=0;i<qt;i++)
	{ var d;
		for(j=0;j<qo;j++)
		{
			d=parseInt(dist(posX[i],posY[i],qx[j]+to/2,qy[j]+to/2));
				if(d<20+tt&&posY[i]>10)
				{pv=1;qy[j]=700,p++;if(p%15==0)lvlup();if(p%20==0)dif();if(p%3==0 && aqo<qo)aqo++;}
				
		}	

	}
  

////////////////////////////// obj com jogador

dano()

///////////////////////////// Tiro 
  
tiro()
		
///////////////////////////// Jogador	
  
jogador()

///////////////////////////// vida 
sv=random(0,100)
if((sv<fv||pwrExp==0) && (pv==1||pwrExp==0) && yv>=800 && v<100)
{pv=0, xv=random(10,dx);yv=0}
image(heart,xv,yv,30,30);
if(yv<800)
yv+=3;
pv=0;

if(dist(x,y,xv,yv)<40)
	{
		yv=900;
		v+=30;
		}

/////////////////////////////att
if(pwrExp<100)pwrExp+=0.07
if(pwrTiro<100)pwrTiro+=0.3

vida(v,80,20,1);


power(pwrTiro,240,50,2);
power(pwrExp,80,50,1);

fill(255,0,0);
textSize(30);
text(" Pt: "+p,540,40);
text(" Nvl: "+nivel,400,40)
text("lvl: "+ lvl ,680,40)
noStroke();

if(v>100)v=100;

////////////////////////// status
if (keyCode === 74) {alert("pt"+ pt+"vt"+vt+"clock"+clock);}





} //// fim de jogo 


//// tela te game over
if(v<=0&&login==0)
{ background(telafinal2)
	fill(255,0,0);
	textSize(35);
	text("De um click no mouse para reiniciar",90,550);
	if(mouseIsPressed)
	{v=100;login=1;p=0;lvl=0;nivel=0;qo=3;avel=0;vt=30;vj=3
		for(i=0;i<qo;i++)	
		{vel[i]=parseInt(random(2+avel,5+avel))}
		}
	}
//// Fim de game over

}
