$(document).ready(function () {
  $("#next-step-2").click(function () {
    $("#quote-step02").addClass("active-step");
    $("#quote-step01").addClass("hidden");
    $("#quote-step02").removeClass("hidden");
    $("#quote-step01").removeClass("active-step");

    $("#step-quote-forms-tabs #tabs-step-list-header01")
      .removeClass("active")
      .addClass("done");
    $("#step-quote-forms-tabs #tabs-step-list-header02").addClass("active");
  });

  $("#next-step-3").click(function () {
    $("#quote-step03").addClass("active-step");
    $("#quote-step01").addClass("hidden");
    $("#quote-step02").addClass("hidden");
    $("#quote-step03").removeClass("hidden");
    $("#quote-step02").removeClass("active-step");

    $("#step-quote-forms-tabs #tabs-step-list-header01")
      .removeClass("active")
      .addClass("done");
    $("#step-quote-forms-tabs #tabs-step-list-header02")
      .removeClass("active")
      .addClass("done");
    $("#step-quote-forms-tabs #tabs-step-list-header03").addClass("active");
  });

  $("#previous-step-1").click(function () {
    $("#quote-step01").addClass("active-step");
    $("#quote-step02").addClass("hidden");
    $("#quote-step03").addClass("hidden");
    $("#quote-step01").removeClass("hidden");
    $("#quote-step02").removeClass("active-step");

    $("#step-quote-forms-tabs #tabs-step-list-header01")
      .addClass("active")
      .removeClass("done");
    $("#step-quote-forms-tabs #tabs-step-list-header02").removeClass("active");
  });

  $("#previous-step-2").click(function () {
    $("#quote-step02").addClass("active-step");
    $("#quote-step01").addClass("hidden");
    $("#quote-step03").addClass("hidden");
    $("#quote-step02").removeClass("hidden");
    $("#quote-step03").removeClass("active-step");

    $("#step-quote-forms-tabs #tabs-step-list-header02")
      .addClass("active")
      .removeClass("done");
    $("#step-quote-forms-tabs #tabs-step-list-header03").removeClass("active");
  });
});
