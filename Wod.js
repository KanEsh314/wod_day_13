function gred(score)
{
	var gr = [];
	for(var i = 0; i < score.length; i++)
	{
		var scin = score[i];

		if(scin >= 38)
		{
			var a = scin+1;
			var b = scin+2;
			var res;
			if(a%5==0)
			{
				res = a;
				//document.write(res+"<br>");
			}
			else if (b%5==0)
			{
				res = b;
				//document.write(res+"<br>");
			}
			else
			{
				res = scin;
				//document.write(scin+"<br>");
			}
		}
		else{
			res = scin;
		}
		gr.push(res);
	}
	return gr;
}
document.write(gred([73,67,38,33]));