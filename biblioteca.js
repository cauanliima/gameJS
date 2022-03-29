
function vida(q,x,y,cor)
{	
	var q;
	
	q=q*3;
	if(q>300)q=300;
	
	var lx=x+2;
	fill(0,0,0);
	stroke(255,255,255)
	image(health,x,y,303,20);
	
	if(cor==1)
	stroke(255,0,0);
	if(cor==2)
	stroke(0,0,255);
	strokeWeight(1);
	
	for(i=0;i<q&&i<=300;i++)
	{
		
		line(lx,y+2,lx,y+18);
		lx++;
	}
	
}

function power(q,x,y,cor)
{	
	var q;
	
	q=q*1.4;
	if(q>140)q=140;
	
	var lx=x+2;
	fill(0,0,0);
	stroke(255,255,255)
	image(health,x,y,144,20);
	
	if(cor==1)
	stroke(0,0,255);
	if(cor==2)
	stroke(0,255,0);
	strokeWeight(1);
	
	for(i=0;i<q&&i<=140;i++)
	{
		
		line(lx,y+2,lx,y+18);
		lx++;
	}
	
}
	
	
	
	function obs()
	{
	
	fill(255, 255, 0);
	for(i=0;i<aqo;i++)
	{		
		if(pwrExp>=100 && keyIsDown(50))
		qy[i]=700;
		
		if(qy[i]<650) {qy[i]+=vel[i]}
		else { qy[i] = 0 ; qx[i]=random (5,dx-5);}
		image(vilao, qx[i], qy[i], 40 , 40);
	}
	
	if(pwrExp>=100 && keyIsDown(50))
	{pwrExp=0;aqo=3}
	
	}	
	
	
	


	
	function dif()
	{
		
		if(qo<20)qo+=0.5;
		
		nivel++;
		
		avel+=0.5;
		
		for(i=0;i<qo;i++)	
		{vel[i]=parseInt(random(2+avel,5+avel))}
			
	}
	




	
	function lvlup()
	{
		if(vt>15)vt-=3;		
		if(vj<8)vj++;	
		if(lvl<5)
		lvl++;
		else lvl='Full';
	
		}
	
	
	
	
		
	function tiro()
{
	fill(255, 0, 0);
	if(keyIsDown(49)&&pt==1&&pwrTiro>10)
	{pwrTiro-=10;posX[n]=x+25; posY[n]=y; n++ ;pt=0; if(n==(qt-1))n=0; }
  
	for(i=0;i<qt;i++) 
		{
		
			if (posY[i] > 0)
				{
					posY[i] = posY[i] - 10;
					ellipse(posX[i],posY[i], 10+tt, 10+tt);
				}
		}

	clock++;
	if(clock>=vt&&pt==0)
	{clock=0;pt=1;}
	
}






function jogador()
{
		if(lvl==0)fill(30,144,255);
		if(lvl>=1)fill(255,0,0);
			
  if (keyIsDown(LEFT_ARROW)&&x>0)
    x-=vj;

  if (keyIsDown(RIGHT_ARROW)&&x<dx)
    x+=vj;

  if (keyIsDown(UP_ARROW)&&y>0)
    y-=vj;

  if (keyIsDown(DOWN_ARROW)&&y<dy)
    y+=vj;
    
  image(heroi, x, y, tj, tj);
  
	
	}


////////////////////////////////////// obj com jogador
function dano()
{
for(i=0;i<qo;i++)
	{
	if(dist(x+30,y+30,qx[i]+30,qy[i]+30)<45)
		{
			qy[i]=800;
			if(v>0)v-=10;
			if(v<0)v=0;
			
			}
	}
	
}

function preload(){
	heroi = loadImage('images/player.png')
	vilao = loadImage('images/vilao.png')
	BG0 = loadImage('images/BG0.png')
	BG1 = loadImage('images/BG1.png')
	BG2 = loadImage('images/BG2.png')
	BG3 = loadImage('images/BG3.png')
	health = loadImage('images/bar.png')
	heart = loadImage('images/heart.png')
	telainicial = loadImage('images/telainicial.png')
	telafinal2 = loadImage('images/gameover2.png')
	telafinal = loadImage('images/gameover.gif')
	space = loadSound('sounds/space.mp3')
	telalogin = loadImage("images/login.png")
	telatutorial=loadImage("images/telatutorial.png")
	// gameover = loadSound('sounds/gameover.mp3')
	
}

	
/*
 * function preLoad(){
 * img =  loagImage("img/hero.png")
 * vilao = ...
 * }
 * image(img,x,y,tam,tam);
 * 
 * 
 * 
 * textSize(tamanho da letra)
 * text(escrita,x,y);
 * */
