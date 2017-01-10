$(document).ready(function(){
  $("button#day-mode").click(function(){
    $("body").addClass("day-mode-styling");
  });
  $("button#night-mode").click(function() {
    $("body").addClass("night-mode-styling");
  });
});
