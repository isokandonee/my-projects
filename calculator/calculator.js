var scr = document.getElementById("screen");
var x, y, z;
// var a, b;
var clr = document.getElementById("ce");
var eq = document.getElementById("equal");
function n(v)
{
	scr.innerHTML += v;
}

function one(v)
{
	x = scr.innerHTML;
	y = v;
	scr.innerHTML = "";
}
eq.onclick = function()
// function q()
{
	z = scr.innerHTML;
	var a = Number(x), b = Number(z);
	console.log(x, y, z);
	if (y == "+") 
	{
		scr.innerHTML = a + b;
	}
	else if (y == "-") 
	{
		scr.innerHTML = a - b;
	}
	else if (y == "/") 
	{
		scr.innerHTML = a / b;
	}
	else if (y == "*") 
	{
		scr.innerHTML = a * b;
	}

}
clr.onclick = function()
{
	scr.innerHTML = "";
}