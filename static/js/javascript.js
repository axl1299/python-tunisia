let daynight = document.querySelector('.daynight')
let togglemenu = document.querySelector('.togglemenu')
let body = document.querySelector('body')
let navigation =document.querySelector('.navigation')

const currentTheme = localStorage.getItem("theme");
 
if (currentTheme === "dark") {
    body.classList.toggle('dark')
    daynight.classList.toggle('active')
  }
daynight.onclick = function(){
	body.classList.toggle('dark')
	daynight.classList.toggle('active')
	localStorage.setItem("theme", "dark");
}

togglemenu.onclick= function(){
	togglemenu.classList.toggle('active')
	navigation.classList.toggle('active')
}
// Set the date we're counting down to
var countDownDate = new Date("dec 25, 2021 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24)).toLocaleString('en-US', {
    minimumIntegerDigits: 2,
    useGrouping: false
  });
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toLocaleString('en-US', {
    minimumIntegerDigits: 2,
    useGrouping: false
  });
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)).toLocaleString('en-US', {
    minimumIntegerDigits: 2,
    useGrouping: false
  });
  var seconds = Math.floor((distance % (1000 * 60)) / 1000).toLocaleString('en-US', {
    minimumIntegerDigits: 2,
    useGrouping: false
  });
  

  // Display the result in the element with id="demo"
  document.getElementById("timer").innerHTML = days+':'+hours+':'+minutes+':'+seconds ;

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = '00:00:00:00';
  }
}, 1000);
