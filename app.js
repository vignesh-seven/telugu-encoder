function convertText() {
	let text = document.querySelector("#unicode-text")

	console.log(text.value.charCodeAt(0))
}



// Misc. functions
function randomBetween(min, max){
return (Math.random() * (max - min) + min);
}