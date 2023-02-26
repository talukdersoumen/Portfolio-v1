// Section- Chevron-up-button
// Get the button
var upButton = document.querySelector(".chevron-up-button");

// Hide the button initially
upButton.style.display = "none";

// Listen for scroll events
window.addEventListener("scroll", function () {
    // Check if the user has scrolled down
    if (window.pageYOffset > 0) {
        // Show the button
        upButton.style.display = "flex";
    } else {
        // Hide the button
        upButton.style.display = "none";
    }
});



// Section- AboutMe-Slider
const slides = document.querySelectorAll('.slide');
let currentIndex = 0;

function updateSlider() {
    slides.forEach((slide, index) => {
        if (index === currentIndex) {
            slide.classList.add('current');
        } else {
            slide.classList.remove('current');
        }
    });
}

function rotateSlider() {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlider();
}

updateSlider();
setInterval(rotateSlider, 3000);


// Section-Education-Slider

// Get all the slides
let edu_slides = document.querySelectorAll(".edu-slide");

// Get the sideBar buttons container
let sideBarContainer = document.querySelector(".edu-sideBar-button");

// Get the current slide
let currentSlide = 0;

let slideDescriptions = ["B.TECH", "H.S.C", "S.S.C"];

// Create the sideBar buttons
for (let i = 0; i < edu_slides.length; i++) {
    let sideBar = document.createElement("div");
    sideBar.classList.add("sideBar");
    sideBar.innerHTML = slideDescriptions[i];
    sideBarContainer.appendChild(sideBar);
}
// Get the bullet buttons
let sideBars = document.querySelectorAll(".sideBar");

// Set the first sideBar as active
sideBars[currentSlide].classList.add("active");
sideBars[currentSlide].style.border = "3px solid white";

// Set the interval for the automatic sliding
let slideInterval = setInterval(nextSlide, 5000);

// Add click event to the sideBar buttons
sideBarContainer.addEventListener("click", function (event) {
    let target = event.target;
    if (target.classList.contains("sideBar")) {
        clearInterval(slideInterval);
        goToSlide(target);
    }
});

// Next slide function
function nextSlide() {
    // Hide the current slide
    edu_slides[currentSlide].classList.remove("current");
    sideBars[currentSlide].classList.remove("active");
    sideBars[currentSlide].style.transform = "scale(1)";
    sideBars[currentSlide].style.border = "";
    // Increment the current slide
    currentSlide = (currentSlide + 1) % edu_slides.length;
    // Show the next slide
    edu_slides[currentSlide].classList.add("current");
    sideBars[currentSlide].classList.add("active");
    sideBars[currentSlide].style.transform = "scale(1.1)";
    sideBars[currentSlide].style.border = "3px solid white";
}

// Go to slide function
function goToSlide(sideBar) {
    let selected = Array.prototype.indexOf.call(sideBars, sideBar);
    if (selected !== currentSlide) {
        edu_slides[currentSlide].classList.remove("current");
        sideBars[currentSlide].classList.remove("active");
        sideBars[currentSlide].style.transform = "scale(1)";
        sideBars[currentSlide].style.border = "";
        currentSlide = selected;
        edu_slides[currentSlide].classList.add("current");
        sideBars[currentSlide].classList.add("active");
        sideBars[currentSlide].style.transform = "scale(1.1)";
        sideBars[currentSlide].style.border = "3px solid white";
    }
}
