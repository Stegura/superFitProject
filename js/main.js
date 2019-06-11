// CountDowm timer

// Set the hours minutes and second HTML elements
let d = document.getElementById('d'),
    h = document.getElementById('h'),
    m = document.getElementById('m'),
    s = document.getElementById('s');

let countDownDate = new Date("jun 19, 2019 23:14:55").getTime();

// Update the count down every 1 second
let x = setInterval(function() {

    // Get today's date and time
    let now = new Date().getTime();
    
    // Find the distance between now and the count down date
    let distance = countDownDate - now;
    
    // Time calculations for days, hours, minutes and seconds
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Output the result in an element with id="demo"
    if (days < 10) {
        d.textContent = `0${days}`;
    } else {
        d.textContent = days;
    }

    if (hours < 10) {
        h.textContent = `0${hours}`;
    } else {
        h.textContent = hours;
    }

    
    if (minutes < 10) {
        m.textContent = `0${minutes}`;
    } else {
        m.textContent = minutes;
    }

    
    if (seconds < 10) {
        s.textContent = `0${seconds}`;
    } else {
        s.textContent = seconds;
    }
    
    // If the count down is over, write some text 
    if (distance < 0) {
    clearInterval(x);
    h.textContent = '00';
    m.textContent = '00';
    s.textContent = '00';
    }
}, 1000);

// swiper set

var mySwiper = new Swiper ('.swiper-container', {
    // Optional parameters
    // direction: 'vertical',
    loop: true,

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  })

// ----------- popup open/close ---------------

let firstOpenPopUpBtn = document.getElementById('open-first-form'),
    secondOpenPopUpBtn = document.getElementById('open-timer-form'),
    closePopUpBtn = document.getElementById('close-popup'),
    popUpElement = document.getElementById('popup');

closePopUpBtn.onclick = function () {
    popUpElement.style.display = "none";
};

firstOpenPopUpBtn.onclick = function () {
    popUpElement.style.display = "block";
};

secondOpenPopUpBtn.onclick = function () {
    popUpElement.style.display = "block";
};

// order LITE popup

let liteOpenPopUpBtn = document.getElementById('lite-order'),
    closeLitePopUpBtn = document.getElementById('close-lite-popup'),
    popUpLite = document.getElementById('lite-popup');

closeLitePopUpBtn.onclick = function () {
    popUpLite.style.display = "none";
};

liteOpenPopUpBtn.onclick = function () {
    popUpLite.style.display = "block";
};

// order pro popup

let proOpenPopUpBtn = document.getElementById('pro-order'),
    closeProPopUpBtn = document.getElementById('close-pro-popup'),
    popUpPro = document.getElementById('pro-popup');

closeProPopUpBtn.onclick = function () {
    popUpPro.style.display = "none";
};

proOpenPopUpBtn.onclick = function () {
    popUpPro.style.display = "block";
};
// order elite popup

let eliteOpenPopUpBtn = document.getElementById('elite-order'),
    closeElitePopUpBtn = document.getElementById('close-elite-popup'),
    popUpElite = document.getElementById('elite-popup');

closeElitePopUpBtn.onclick = function () {
    popUpElite.style.display = "none";
};

eliteOpenPopUpBtn.onclick = function () {
    popUpElite.style.display = "block";
};