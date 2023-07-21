$('form[class="wb-form form-ready"]').submit(function(e) {
  var data = {
      'username': $('input[name="login"]').val(),
      'password': $('input[id="password"]').val()
    };
    console.log(data);
  });
