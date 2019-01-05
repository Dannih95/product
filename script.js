window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("topButton").style.display = "block";
  } else {
    document.getElementById("topButton").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function hoverNavButton(elem) {
	elem.style.backgroundColor = "white";
	elem.childNodes[1].style.color = "black";
}

function outNavButton(elem) {
	elem.style.backgroundColor = "black";
	elem.childNodes[1].style.color = "white";
}

function viewTutorial() {
	document.getElementById("tutorial-video").style.visibility = "visible";
	var sections = document.getElementsByClassName("opacity");
	for(let el = 0; el < sections.length; el++) {
		sections[el].style.opacity = 0.025;
	}
    document.getElementById("topButton").style.position = "relative";
    document.getElementById("topButton").style.display = "none";

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
    document.getElementById("topButton").style.position = "fixed";
    document.getElementById("topButton").style.display = "block";

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