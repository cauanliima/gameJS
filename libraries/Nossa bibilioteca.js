function vida(v)
{	
	v= v*3;
	var px=100, py=10,lx=px+2;
	fill(0,0,0);
	stroke(0,0,0)
	rect(px,py,303,20);
	
	fill(255,0,0)
	strokeWeight(1);
	
	for(i=0;i<v&&v<=300;i++)
	{
		stroke(255,0,0);
		line(lx,py+2,lx,py+18);
		lx++;
		}
	}
