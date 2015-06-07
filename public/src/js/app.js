var Gamebook;

Gamebook = {
  init: function() {
    return $(".input-group").on('focus', ".form-control", function() {
      return $(this).closest('.input-group, .form-group').addClass('focus');
    }).on("blur", function() {
      return $(this).closest('.input-group, .form-group').removeClass('focus');
    });
  }
};
