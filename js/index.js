
$("#navProject").on("click", function(){
    $('#dropDownProject').slideToggle();
  });

$("#navResume").on("click", function(){
    $("#dropDownResume").slideToggle();
  });

$("li").hover(function(){
  $(this).css("color","#A4905C");
});

