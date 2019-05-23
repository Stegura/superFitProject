// CountDowm timer

// Set the hours minutes and second HTML elements
let d = document.getElementById('d'),
    h = document.getElementById('h'),
    m = document.getElementById('m'),
    s = document.getElementById('s');

let countDownDate = new Date("may 30, 2019 23:14:55").getTime();

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
