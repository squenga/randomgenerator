let heading = document.getElementById("title");
let executeButton = document.getElementById("executeButton");
let outputParagraph = document.getElementById("outputText");
let inputElement = document.getElementById("myInput");
let imageElem = document.getElementById("outputImage");

let breeds = ["Frenchie", "Poodle", "Chihuahua", "Corgi", "Dachshund", "Golden Retriever", "Chow Chow", "Pug"];
let matchingImage = ["frenchie.jpeg","poodle.jpeg","chihuahua.jpeg","corgi.jpeg","dachshund.jpeg","goldie.webp","chowchow.jpeg","pug.jpeg"];

executeButton.addEventListener("click", function() {

	restyle();
	generate(inputElement.value);

	});

// FUNCTIONS //

function restyle() {

	let randomRed = Math.floor(Math.random() * 255);
	let randomGreen = Math.floor(Math.random() * 255);
	let randomBlue = Math.floor(Math.random() * 255);

	var outputColorString = "rgb(" + randomRed + "," + randomGreen + "," + randomBlue + ")";
	document.body.style.backgroundColor = outputColorString;

	heading.style.color = outputColorString;
	heading.style.textShadow = "0px 0px 30px black";

	let fontFamilies = ["Helvetica", "Verdana", "Georgia", "Times New Roman", "Courier New"];
    let randomFontFamily = fontFamilies[Math.floor(Math.random() * fontFamilies.length)];
    heading.style.fontFamily = randomFontFamily;
};

 function generate(incUserInput) {
 
 	let randomIndex = Math.floor(Math.random() * breeds.length);
 	let selectedRandomTimeText = breeds[randomIndex];
 	outputParagraph.innerText = incUserInput + ", you are a " + selectedRandomTimeText;
 	imageElem.src = matchingImage[randomIndex];
 
 };

