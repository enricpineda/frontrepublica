$(document).foundation();

$('input#botoEnvia').click(function (event) {
  event.preventDefault();
  $.post('https://canpineda.club/mailer_fr.php', $('form#mailvoluntaris').serialize(), function (data) {
  }, "json");
  $("#mailvoluntaris").hide();
  $("#missatgeMerci").show();
});

$("#privat").click(function () {
  if ($(this).is(":checked")) {
    $("#botoEnvia").show();

  } else {
    $("#botoEnvia").hide();
  }
});
