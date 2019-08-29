



function minutesUntilMidnight() {
    var midnight = new Date();
    midnight.setHours( 18 );
    midnight.setMinutes( 0 );
    midnight.setSeconds( 0 );
    midnight.setMilliseconds( 0 );
    return ( midnight.getTime() - new Date().getTime() ) / 1000 / 60;
}

function newQuote1() {
  newQuote()
}
function newQuote2() {
  newQuote()
}

function newQuote() {
  rand1 = Math.floor(Math.random()*(4));

  document.getElementById('scanStatus').innerHTML = "Scan Started. \n Viruses removed from last searched folder: "+rand1;
  document.getElementById('timeStatus').innerHTML = "\nEstimated finish time: " + Math.floor(minutesUntilMidnight()) +" minutes. Please do not use change any files in this time";
}
