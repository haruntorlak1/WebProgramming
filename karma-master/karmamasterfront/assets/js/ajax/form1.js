$(document).ready(function() {
    // Define serializeForm function once, in a way that it can handle all form elements
    function serializeForm(form) {
        let jsonResult = {};
        $(form).find("input, textarea").each(function() {
            jsonResult[this.name] = this.value;
        });
        return jsonResult;
    }

    // Validation and handling for contactForm2
    $("#contactForm2").validate({
        rules: {
            name: {
                required: true,
                minlength: 3
            },
            email: {
                required: true,
                email: true
            },
            subject: {
                required: true
            },
            message: {
                required: true
            }
        },
        messages: {
            name: {
                required: "Please enter your name",
                minlength: "Name must be at least 3 characters long"
            },
            email: {
                required: "Please enter your email address",
                email: "Please enter a valid email address"
            },
            subject: {
                required: "Please enter a subject"
            },
            message: {
                required: "Please enter your message"
            }
        },
        submitHandler: function(form, event) {
            event.preventDefault();
            console.log(serializeForm(form));
        }
    });
});
