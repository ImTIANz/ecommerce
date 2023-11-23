//shopping button directing to ourshoes.html
let shopNowButton = document.getElementById('shop-now-button');

// Add a click event listener to the button
shopNowButton.addEventListener('click', function() {
    // Redirect the user to 'ourshoes.html'
    window.location.href = 'ourshoes.html';
});

let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

menu.onclick =() =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

let slides = document.querySelectorAll('.slide-container');
let index = 0;

function next(){
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}

function prev(){
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
}

document.querySelectorAll('.featured-image-1').forEach(image_1 =>{
    image_1.addEventListener('click', () =>{
        var src = image_1.getAttribute('src');
        document.querySelector('.big-image-1').src = src;
    });
});

document.querySelectorAll('.featured-image-2').forEach(image_2 =>{
    image_2.addEventListener('click', () =>{
        var src = image_2.getAttribute('src');
        document.querySelector('.big-image-2').src = src;
    });
});

document.querySelectorAll('.featured-image-3').forEach(image_3 =>{
    image_3.addEventListener('click', () =>{
        var src = image_3.getAttribute('src');
        document.querySelector('.big-image-3').src = src;
    });
});

const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});

var currentSlide = 0;

    // Example function for navigating to the next slide
    function nextSlide() {
        var boxContainer = document.querySelector('.box-container');
        currentSlide = (currentSlide + 1) % boxContainer.children.length;
        updateSlidePosition();
    }

    // Example function for navigating to the previous slide
    function prevSlide() {
        var boxContainer = document.querySelector('.box-container');
        currentSlide = (currentSlide - 1 + boxContainer.children.length) % boxContainer.children.length;
        updateSlidePosition();
    }

    function updateSlidePosition() {
        var boxContainer = document.querySelector('.box-container');
        var translateValue = -currentSlide * 100 + '%';
        boxContainer.style.transform = 'translateX(' + translateValue + ')';
    }
