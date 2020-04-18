function loveTest() {
	var yourName = document.getElementById("yourName").value;
	var trueLoveName = document.getElementById("trueLoveName").value;
	
	var firstChar1 = yourName.slice(0,1);
	var firstChar2 = trueLoveName.slice(0,1);
	
	var upperCasefirstChar1 = firstChar1.toUpperCase();
	var upperCasefirstChar2 = firstChar2.toUpperCase();
	
	//var img = document.createElement("img");
//	img.src = "small-hart.png";
	
	
	var restOfName1 = yourName.slice(1,yourName.length);
	var restOfName2 = trueLoveName.slice(1,trueLoveName.length);
	
	var capYourName = upperCasefirstChar1 + restOfName1;
	var capTrueLoveName = upperCasefirstChar2 + restOfName2;
	
	
	if (capYourName === "Jason" && capTrueLoveName === "Elizabeth" || capYourName === "Elizabeth" && capTrueLoveName === "Jason") {
	var lovePercent = 100;	
	}

	else { var lovePercent = Math.random() * 100;
	lovePercent = Math.floor(lovePercent) + 1;
	}

	document.getElementById("you").innerHTML = capYourName;
	document.getElementById("trueLove").innerHTML = capTrueLoveName; 
	document.getElementById("lovePercent").innerHTML = lovePercent;
     
	 
	 	 	document.getElementById("and").innerHTML = "and";
	document.getElementById("are").innerHTML = "are"; 
	document.getElementById("in-love").innerHTML = "in love";
		document.getElementById("%").innerHTML = "%";
		document.getElementById("test-you-love").innerHTML = " ";
       		document.getElementById("small-hart").classList.add('show');
		document.getElementById("chang").classList.add('chang-2');



	if (lovePercent <= 20) {
//	document.querySelector("h1.result").innerHTML = "Your love could be stronger.";	
//	document.getElementById("congrat").innerHTML = "Maybe they're not the one, Sorry!";
	}
	
	else if (lovePercent <= 35) {
//	document.querySelector("h1.result").innerHTML = "Your love could be stronger.";	
//	document.getElementById("congrat").innerHTML = "Maybe they're not the one, Sorry!";
	
	}
	else if (lovePercent <= 45) {
//	document.querySelector("h1.result").innerHTML = "Your love could be stronger.";	
//	document.getElementById("congrat").innerHTML = "Maybe they're not the one, Sorry!";
	}
	
	else if (lovePercent <= 75 && lovePercent >= 36) {
//	document.querySelector("h1.result").innerHTML = "You have a solid foundation.";	
//	document.getElementById("congrat").innerHTML = "Keep working at it, the love will grow!";
	}
	
	else if (lovePercent <= 99 && lovePercent >= 76) {
//	document.querySelector("h1.result").innerHTML = "A deep and strong love connection.";
//	document.getElementById("congrat").innerHTML = "You're definitely doing something right!";
	}
	
	else if (lovePercent === 100) {
//	document.querySelector("h1.result").innerHTML = "Behold True Love!";
//	document.getElementById("congrat").innerHTML = "You were made for each other!";
	
	}

}


 alert("this love calcularor is to see how much you love your lover or how much your lover loves you. HAVE FUN!!! ");


var form = document.getElementById("myForm");
function handleForm(event) { event.preventDefault(); } 
form.addEventListener('submit', handleForm);