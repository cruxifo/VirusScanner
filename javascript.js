



function minutesUntilMidnight() {
    var midnight = new Date();
    midnight.setHours( 18 );
    midnight.setMinutes( 0 );
    midnight.setSeconds( 0 );
    midnight.setMilliseconds( 0 );
    return ( midnight.getTime() - new Date().getTime() ) / 1000 / 60;
}



function newQuote() {
  rand1 = Math.floor(Math.random()*(4));

  document.getElementById('scanStatus').innerHTML = "Scan Started. Viruses found in last searched folder:"+=rand1;
  document.getElementById('timeStatus').innerHTML = "Estimated finish time:" minutesUntilMidnight();
}
