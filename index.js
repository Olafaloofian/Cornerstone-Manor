// Alters the class of a chose element to do a fade-in and fade-out animation
function toggleElement(element, toggle, type) {
    const chosenElement = document.getElementById(element)
    if (chosenElement.classList) {
        if (toggle === 'show') {
            if(type === 'slide') {
                chosenElement.classList.add('slide')
            }
            if(type === 'fade') {
                chosenElement.classList.add('visible');
            }
        } else if (toggle === 'hide') {
            chosenElement.classList.remove('visible');
            chosenElement.classList.remove('slide')
        }
	}
	else {
		var regExp = new RegExp('(\\s|^)' + type === 'slide' ? 'slide' : 'visible' + '(\\s|$)');
		if (!chosenElement.className.match(regExp)) {
            if (toggle === 'show') {
                chosenElement.className += " " + type === 'slide' ? 'slide' : 'visible';
            } else if (toggle === 'hide') {
                chosenElement.className.replace(regExp, ' ');
            }
		}
	}
}

// Fired when the user clicks the nav button
function toggleNav(toggle) {
    toggleElement("navigation-panel", toggle, "slide")
    toggleElement('panel-cover', toggle, 'fade')
}