$("document").ready(function(){
  $(".navbar").fadeTo(0.5, function(){
    //Completion of Animation
  });
  $(".navbar").mouseover(function(){
    $("navabar").fadeIn("2000",1, function(){
      //Completion Of Animation
    });
  });
});