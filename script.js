
$( document ).ready(function() {
  $(".btn-search").click(function(){
    $("form").slideToggle("500", "easeInOutCirc");
  });
  
  $('form').hover(
         function () {
           $(this).css({"background-color":"deepskyblue"});
         }, 
         function () {
           $(this).css({"background-color":"#1995cc"});
         }
     );
});

