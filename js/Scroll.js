function toTop(speed) {
  if(!speed) {
    speed = (typeof speed !== 'undefined') ?  speed : 'slow';
  }
  
  $('html, body').animate({scrollTop: 0}, speed);
}
