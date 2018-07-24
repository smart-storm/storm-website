$(function () {
   console.log("test");
   $(".menu-toggler").click(function() {
       $("#menu").slideToggle({
           duration: 400,
           start: function () {
               $(".menu-toggler .arrow").toggleClass("arrow-up");
           }
       });
   });
});