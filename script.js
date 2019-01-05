function viewTutorial() {
	document.getElementById("tutorial-video").style.visibility = "visible";
	var sections = document.getElementsByClassName("opacity");
	for(let el = 0; el < sections.length; el++) {
		sections[el].style.opacity = 0.025;
	}

	document.body.style["overflow-y"] = "hidden";

	document.onkeydown = function(e) {
		if(e.key === "Escape") {
			exitTutorial();
		}
	}
}

function exitTutorial() {
	document.getElementById("tutorial-video").style.visibility = "hidden";
	var sections = document.getElementsByClassName("opacity");
	for(let el = 0; el < sections.length; el++) {
		sections[el].style.opacity = 1;
	}
	document.body.style["overflow-y"] = "visible";
}

function displayFaqAnswer(elem) {
	var answer = elem.parentNode.parentNode.childNodes[5];
	if(elem.className === "fas fa-chevron-circle-up") {
		elem.className = "fas fa-chevron-circle-down";
		answer.style.display = "none";
	} else {
		elem.className = "fas fa-chevron-circle-up";
		answer.style.display = "block";
	}
}