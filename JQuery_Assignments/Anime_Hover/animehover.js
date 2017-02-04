$(document).ready(function(){
  $('img').hover(imageSwitch, imageSwitch);
});

var imageSwitch = function(){
  var altPic = $(this).attr('alt-src');
  var alt = altPic.replace('images/', 'image')
  $(this).attr('alt-src', $(this).attr('src'));
  $(this).attr('src', altPic);
  $(this).attr('alt',alt);
}
