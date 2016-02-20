function addClass(selector, className) {
	if(!selector && typeof selector === "string") {
		return;
	}

	var elem = document.querySelector(selector);
	if(elem) {
		elem.className += " " + className;	
	}
	
}

function removeClass(selector, className) {

	if(!selector && typeof selector === "string") {
		return;
	}

	var elem = document.querySelector(selector);

	if(elem) {
		var cName = elem.className;

		cName = cName.split(" ");

		cName = cName.filter(function(elem){
			return elem !== className;
		});

		elem.className = cName.join(" ").trim();
	}

}