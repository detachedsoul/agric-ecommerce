let documentContainer = document.querySelector('.container');
let preloader = document.querySelector('.preloader-container');
window.onload = () => {
    setTimeout(() => {
        preloader.classList.add('hide-preloader');
        documentContainer.classList.add('show-container');
    }, 3000);
}

let navToggle = document.querySelector('.nav-toggle');
let navLinks = document.querySelector('.nav-links-container');
navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show-nav-links');
    if (navLinks.classList.contains('show-nav-links')) {
        navToggle.innerHTML = "<i class='fi fi-rr-cross'></i>";
    } else {
        navToggle.innerHTML = "<i class='fi fi-rr-menu-burger'></i>";
    }
});

let searchBtn = document.querySelector('.search-btn');
let search = document.querySelector('.search-container');
toggleElement(searchBtn, search, 'show-search');

let dropdownToggle = document.querySelector('.dropdown-toggle');
let dropdown = document.querySelector('.dropdown');
toggleElement(dropdownToggle, dropdown, 'show-dropdown');

function toggleElement (element, toggleVariable, elementToToggle) { 
    element.addEventListener('click', () => {
        toggleVariable.classList.toggle(elementToToggle);
    });
}

let container = document.querySelector('.products-container-grid');

let scrollRightBtn = document.querySelector('.product-btn.right');
scrollRightBtn.addEventListener('click', () => {
    sideScroll(container, 'right', 200)
});

let scrollLeftBtn = document.querySelector('.product-btn.left');
scrollLeftBtn.addEventListener('click', () => {
    sideScroll(container,'left', 200)
});

function sideScroll (element, direction, speed) {
    let slideTimer = setInterval(function () {
        if (direction == 'left') {
            element.scrollLeft -= element.clientWidth;
        } else {
            element.scrollLeft += element.clientWidth;
        }
        window.clearInterval(slideTimer);

    }, speed);
}

function sideScrollAuto (element, speed) {
    let slideTimer = setInterval(function () {
        element.scrollLeft += element.clientWidth;
    }, speed);
}

sideScrollAuto(container, 8000);

let toTop = document.querySelector('.to-top');
toTop.addEventListener('click', () => {
    scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
});

window.onscroll = () => {
    if (document.documentElement.scrollTop > 200 || document.body.scrollTop > 200) {
        toTop.classList.add('show-to-top');
    } else {
        toTop.classList.remove('show-to-top');
    }
}