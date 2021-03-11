$(document).ready(function(){
    $(".form").on('submit', function(e){
        e.preventDefault();
        var dat = document.getElementById('email').value;
        $.ajax({
            type: 'POST',
            url: '/',
            data: {email: dat}, 
            dataType: "json",
            success: function() {
                $('#reg').html("<div id='message'></div>");
                $('#message').html("<h2>Successfully added</h2>")
                .hide()
                .fadeIn(1500, function(){
                    $('#message');
                })
            }
        });
        return false;
      });
   });
