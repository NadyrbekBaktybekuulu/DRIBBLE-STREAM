function formatAMPM(date) {
    var date = new Date()
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
  }

document.getElementById('current-hours-minutes-block').innerHTML = formatAMPM();
document.getElementById('current-hours-minutes-block2').innerHTML = formatAMPM();

$(".user-photo").click(function(){
  $(".profile").toggle(0, function(){

  });
})

$(".play-pause-btn").click(function(){
  $(".pause-btn, .play-btn").toggle(0, function(){
  });
})

$(".volume-btn").click(function(){
  $(".volume-max, .volume-mute").toggle(0, function(){
  });
})