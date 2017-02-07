$(document).ready(function (){
  //.show, .hide, .click, .toggle.
  $(".click").click(function(){
    alert("OUCH! You Clicked me! THAT HURT!!");
  });
  $(".hide").click(function(){
    $("#naruto").hide("slow");
  });
  $(".show").click(function(){
    $("#naruto").show("slow");
  });
  $(".toggle").click(function(){
    $(".toggle1").toggle();
    $(".toggle2").toggle();
  });

  //.slideup, .slidedown, .slidetoggle.
  $(".slideUp").click(function(){
    $("#jackieChan").slideUp("slow");
  });
  $(".slideDown").click(function(){
    $("#jackieChan").slideDown("slow");
  });
  $(".slideToggle").click(function(){
    $("#jackieChan").slideToggle();
  });

  //.fadeOut, .fadeIn, .addClass.
  $(".fadeOut").click(function(){
    $("#saitama").fadeOut("slow");
  });
  $(".fadeIn").click(function(){
    $("#saitama").fadeIn("slow");
  });
  $(".addClass").click(function(){
    $("button.addClass").addClass("cookies");
  });

  // .before, .after, .append.
  $(".before").click(function(){
    $(".before-after-append").before("Before HERE!!! -> ");
  });
  $(".after").click(function(){
    $(".before-after-append").after(" <- after here!!!");
  });
  $(".append").click(function(){
    $(".before-after-append").append(" <span class=yellow> IS DELICIOUS!!!</span>");
  });

  //.html, .text, .attr, .val.
  $(".html").click(function(){
    $(".html-text").html("<span class=yellow>This is CRAZY</span>");
  });
  $(".text").click(function(){
    $(".html-text").text("I like trains.");
  });
  $(".attr").click(function(){
    $("#saitama2").attr("src", "images/saitama3.jpg");
  });
  $(".val").click(function(){
      $("input:text").val("MR ROBOT!!!");
  });

  //.data.
  $("div").data( "test", { first: "Chik-", last: "Fil-A!"});
  $("span:first").text( $( "div" ).data("test").first);
  $("span:last").text( $( "div" ).data("test").last);

});
