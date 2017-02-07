$(document).ready(function(){
  $('img').click(function(){
    var altImages = $(this).attr('alt-img');
    var altReplace = altImages.replace('img/', 'image');
    $(this).attr('alt-img', $(this).attr('src'));
    $(this).attr('src', altImages);
    $(this).attr('alt', altReplace);
  })
});
