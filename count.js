function init()	{
	var n = 0;
	e = document.getElementById("a");
	setInterval(function(){e.innerHTML = ++n; },1000);
}
window.onload = init;