window.onload = function() {
    routeRender()
    toggleElement('route-container', 'show', 'fade')
}

const homeHTML = `         
            <div class='background-image image-1'>
                <div class='over-image lightblue-transparent title'>
                    <span>WELCOME TO CORNERSTONE MANOR</span>
                </div>
            </div>
            <div class='caption lightgreen'>
                Quiet, fireproof, energy efficient apartments located in the heart of Northwest Mesa.
            </div>
            <div class='background-image image-2'></div>
            <div class="caption blue">
                Large floor plans with included amenities and facilities - <span title='Go to gallery' class='gallery-link'  onclick="changeRoute('gallery')"> see the gallery for more!</span>
            </div>
            <div class="background-image image-3">
                <div class="over-image lightgreen-transparent"></div>
            </div>
`

const contactHTML = `
    <div class='page-container'>
        <div class='menu-bar title'></div>
        <div class='page-top    '>
            <span class='title'>CONTACT</span>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3328.928720036603!2d-111.81549668435885!3d33.45116355661152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872ba700e95b4dfb%3A0x4acd31e8a20266d6!2s1955+N+Horne%2C+Mesa%2C+AZ+85203!5e0!3m2!1sen!2sus!4v1553219208915" width="90%" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
        </div>
        <div class='page-bottom'>
            <span class='accent phone'>(480) 964-5151</span>
            <span>If you would like to take a tour of one of our apartments or have any questions, please call or visit us and knock on the manager's apartment door (Unit 110). They'd love to talk to you!</span>
            <div class='office-hours'>
                <div class='accent'>Office Hours</div>
                <div class='hours-table'>
                    <div><div>Monday</div><div>2 pm - 6 pm</div></div>
                    <div><div>Tuesday</div><div>2 pm - 6 pm</div></div>
                    <div><div>Wednesday</div><div>2 pm - 6 pm</div></div>
                    <div><div>Thursday</div><div>2 pm - 6 pm</div></div>
                    <div><div>Friday</div><div>2 pm - 6 pm</div></div>
                    <div><div>Saturday</div><div>11 am - 3 pm</div></div>
                    <div><div>Sunday</div><div>CLOSED</div></div>
                </div>
            </div>
        </div>
    </div>
`

const galleryHTML = `
    <div class='page-container'>
        <div class='menu-bar title'></div>
        <div class='page-top    '>
            <span class='title'>GALLERY</span>
        </div>
        <div class='page-bottom'>
            <!-- Slideshow container -->
            <div class="slideshow-container">

            <!-- Full-width images with number and caption text -->
            <div class="mySlides fade">
                <div class="numbertext">1 / 3</div>
                <img src="http://3.bp.blogspot.com/_OZCAYOVkpQQ/TS-GxTMT4DI/AAAAAAAAACs/hwnZEvIXAdQ/s320/DSC07364.JPG" style="width:100%">
                <div class="text">Caption Text</div>
            </div>

            <div class="mySlides fade">
                <div class="numbertext">2 / 3</div>
                <img src="http://1.bp.blogspot.com/_OZCAYOVkpQQ/TS-GySxXkMI/AAAAAAAAACw/2XiEGgLhu1I/s320/DSC07365.JPG" style="width:100%">
                <div class="text">Caption Two</div>
            </div>

            <div class="mySlides fade">
                <div class="numbertext">3 / 3</div>
                <img src="http://4.bp.blogspot.com/_OZCAYOVkpQQ/TS-Gzyb31CI/AAAAAAAAAC0/MTxq6NNChc0/s320/DSC07366.JPG" style="width:100%">
                <div class="text">Caption Three</div>
            </div>

            <!-- Next and previous buttons -->
            <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
            <a class="next" onclick="plusSlides(1)">&#10095;</a>
            </div>
            <br>

            <!-- The dots/circles -->
            <div style="text-align:center">
            <span class="dot" onclick="currentSlide(1)"></span> 
            <span class="dot" onclick="currentSlide(2)"></span> 
            <span class="dot" onclick="currentSlide(3)"></span> 
            </div>
        </div>
    </div>
`

// Handles all the routing rendering functionality
function routeRender() {
    const path = window.location.hash.toLowerCase()
    const routeContainter = document.getElementById('route-container')
    if(!window.location.hash || path === '#/') {
        document.getElementById('home-nav').style.textDecoration = 'underline'
        routeContainter.innerHTML = homeHTML
    } else if (path === '#/contact' || path === '#/contact/') {
        document.getElementById('contact-nav').style.textDecoration = 'underline'
        routeContainter.innerHTML = contactHTML
    } else if (path === '#/gallery' || path === '#/gallery/') {
        document.getElementById('gallery-nav').style.textDecoration = 'underline'
        routeContainter.innerHTML = galleryHTML
    } else {
        window.history.replaceState({location: ''}, '#/', `#/`)
        routeRender()
    }
}

// Switches routes. Uses hashes to circumvent the browser doing a fetch.
function changeRoute(route) {
    // The user is already on the page
    if(window.location.hash === `#/${route}`) {
        return toggleNav('hide')
    }
    document.getElementById('home-nav').style.textDecoration = 'none'
    document.getElementById('contact-nav').style.textDecoration = 'none'
    toggleElement('route-container', 'hide', 'fade')
    window.history.replaceState({location: route}, route, `#/${route}`)
    toggleNav('hide')
    routeRender()
    setTimeout(() => {
        toggleElement('route-container', 'show', 'fade')
    }, 500);
}

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

// Fired when the user clicks the nav button. Toggle will be 'show' or 'hide'
function toggleNav(toggle) {
    toggleElement("navigation-panel", toggle, "slide")
    toggleElement('panel-cover', toggle, 'fade')
}

// Slideshow functions
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1} 
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block"; 
    dots[slideIndex-1].className += " active";
}