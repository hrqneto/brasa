(function() {
  var materialForm;

  materialForm = function() {
    return $('.material-field').focus(function() {
      return $(this).closest('.form-group-material').addClass('focused has-value');
    }).focusout(function() {
      return $(this).closest('.form-group-material').removeClass('focused');
    }).blur(function() {
      if (!this.value) {
        $(this).closest('.form-group-material').removeClass('has-value');
      }
      return $(this).closest('.form-group-material').removeClass('focused');
    });
  };

  $(function() {
    return materialForm();
  });

}).call(this);
