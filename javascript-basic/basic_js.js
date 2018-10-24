//function buttonClick() {
//	document.getElementById("header").innerHTML = "hello World";
//};

document.getElementById("header").innerHTML = "hello World";
var lang = "JavaScript";


function myFunction(lang) {
	this.lang = lang;
	console.log("Hello welcom to " + this.lang);
	
};

var Test = new myFunction(lang)