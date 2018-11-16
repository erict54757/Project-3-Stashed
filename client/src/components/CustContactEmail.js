

$(document).ready(function () {
    


    // contact form 
    $('#characterLeft').text('140 characters left');
    $('#message').keydown(function () {
        var max = 140;
        var len = $(this).val().length;
        if (len >= max) {
            $('#characterLeft').text('You have reached the limit');
            $('#characterLeft').addClass('red');
            $('.btnSubmit').addClass('disabled');
        }
        else {
            var ch = max - len;
            $('#characterLeft').text(ch + ' characters left');
            $('.btnSubmit').removeClass('disabled');
            $('#characterLeft').removeClass('red');
        }
    });
});


var submitButton = document.getElementById("submit_form");
var form = document.getElementById("email_form");
$(".formEmail").addEventListener("submit", function (e) {
    setTimeout(function () {
        submitButton.value = "Sending...";
        submitButton.disabled = true;
    }, 1);
});

