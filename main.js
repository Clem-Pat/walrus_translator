begin()
function begin(){
	var elements = document.querySelectorAll( 'body *' );
	for (var i = 0; i < elements.length; i++) {
		elements[i].style.fontFamily = "Impact,Charcoal,sans-serif";
	}
}

function updateValue(e) {
	var alphabet = {
		"0": ["-----"],
		" ": [""],
		"1": [".----"],
		"2": ["..---"],
		"3": ["...--"],
		"4": ["....-"],
		"5": ["....."],
		"6": ["-...."],
		"7": ["--..."],
		"8": ["---.."],
		"9": ["----."],
		"!": ["-.-.--"],
		",": ["--..--"],
		".": [".-.-.-"],
		"a": [".-"],
		"b": ["-..."],
		"c": ["-.-."],
		"d": ["-.."],
		"e": ["."],
		"f": ["..-."],
		"g": ["--."],
		"h": ["...."],
		"i": [".."],
		"j": [".---"],
		"k": ["-.-"],
		"l": [".-.."],
		"m": ["--"],
		"n": ["-."],
		"o": ["---"],
		"p": [".--."],
		"q": ["--.-"],
		"r": [".-."],
		"s": ["..."],
		"t": ["-"],
		"u": ["..-"],
		"v": ["...-"],
		"w": [".--"],
		"x": ["-..-"],
		"y": ["-.--"],
		"z": ["--.."]}
	var message = document.querySelector(".input").value
	var walrus_message = ""

	for(let i = 0; i < message.length; i++) {
  		walrus_message += alphabet[message[i]][0].toString()+"/"
	}
	document.querySelector(".answer").innerHTML = walrus_message

}
