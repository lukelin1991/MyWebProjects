$(document).ready(function(){

    $('body').on('click','button',function(){
      var first = $('#first').val();
      var last = $('#last').val();
      var desc = $('#description').val();
      //console.log("Hello world!");
      var longline = "<div class='card'><h2 class='CardName'>" + first + ' ' + last + "</h2><p class='CardDescription'>" + desc + "</p><h3 class='CardClick'>Click for description!</h3></div>"
      $('#CreateContactCard').append(longline);
      $('p').hide();
      //$('.CardDescription').css('display','none')
      });

      $('body').on('click','h3.CardClick',function(){
          $(this).toggle();
          $(this).siblings('h2').toggle()
          $(this).siblings('p').toggle()
        });
      $('body').on('click','p.CardDescription',function(){
          $(this).toggle();
          $(this).siblings('h2').toggle()
          $(this).siblings('h3').toggle()
        });
    /*  //i want to click element w/ class of CardClick and HIDE the element of CardClick. and THEN SHOW the element w/ the class of CardDescription.
      $('.CardClick').on('click',function(){
        $('.CardClick').css('display','none');
        $('.CardDescription').css('display','block');
      });

      $('.CardDescription').on('click',function(){
        $('.CardDescription').css('display','none');
        $('.CardClick').css('display','block');
      }); */
});
