var lo=2;

function changeBackgroundColor(color){
	if (lo%2==0){
		document.body.style.background = color;
		lo++;
	}
	else {
		document.body.style.background = "green";
		lo++;
	}
}