$(document).ready(function(){
	smoothScroll.init();

  // Validate contact form
  // http://docs.jquery.com/Plugins/Validation
  //$("#form1").validate();
  $("#contact-form").validate({
    submitHandler: function(form) {
      form.submit();
    }
  });

});
