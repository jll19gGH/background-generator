var color1 = document.getElementById("color1");
var color2 = document.getElementById("color2");
/*also need reference to h3 where we will print the current gradient code*/
var currGrad = document.querySelector("h3");
/*body is how we will change the gradient*/
var body = document.getElementById("gradient");


function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")"; 

	//now add the current background (the gradient) to h3
	//textContent automatically adds the text node to the element, which is h3
	//this allows us to skip creating a node ourselves like in Shopping List
	currGrad.textContent = body.style.background + ";";
}

/*anytime input changes, the input event ("input") will react*/

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

