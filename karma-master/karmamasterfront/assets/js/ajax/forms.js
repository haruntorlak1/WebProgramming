$(document).ready(function() {
    // Define serializeForm function once, in a way that it can handle all form elements
    function serializeForm(form) {
        let jsonResult = {};
        $(form).find("input, textarea").each(function() {
            jsonResult[this.name] = this.value;
        });
        return jsonResult;
    }

    // Validation and handling for footer-email
    $("#footer-email").validate({
        rules: {
            EMAIL: {
                required: true,
                email: true
            }
        },
        messages: {
            EMAIL: {
                required: "Please enter your email address",
                email: "Please enter a valid email address"
            }
        },
        submitHandler: function(form, event) {
            event.preventDefault();
            console.log(serializeForm(form));
        }
    });

    // Validation and handling for tracking
    $("#tracking").validate({
        rules: {
            order: {
                required: true
            },
            email: {
                required: true,
                email: true
            }
        },
        messages: {
            order: {
                required: "Please enter your Order ID"
            },
            email: {
                required: "Please enter your email address",
                email: "Please enter a valid email address"
            }
        },
        submitHandler: function(form, event) {
            event.preventDefault();
            console.log(serializeForm(form));
        }
    });
});
