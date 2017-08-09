function gred(score)
{
	for(var i = 0; i < score.length; i++)
	{
		var scin;
		var spr;

		if(score[i] >= 38)
		{
			spr = score[i];
			//document.write(spr);
			var a = spr+1;
			var b = spr+2;
			var res;
			if(a%5==0)
			{
				res = a;
				document.write(res+"<br>");
			}
			else if (b%5==0)
			{
				res = b;
				document.write(res+"<br>");
			}
		}
	}
}
gred([4,73,67,38,33]);
