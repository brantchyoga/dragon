$(document).ready(function() {
  $(".clickable").click(function() {
    $("#dragshow").slideToggle();
    $("#dragshow2").slideToggle();
  });
  $("button#blue").click(function() {
    $("body").removeClass();
    $("body").addClass("blue");
  });
  $("button#red").click(function() {
    $("body").removeClass();
    $("body").addClass("red");
  });
  $("button#gold").click(function() {
    $("body").removeClass();
    $("body").addClass("gold");
  });
});
