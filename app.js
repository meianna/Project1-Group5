// Function for date/time header
$(document).ready(function () {
  $("#date").text(moment().format("LL"));
  $("#time").text(moment().format("LT"));
});
