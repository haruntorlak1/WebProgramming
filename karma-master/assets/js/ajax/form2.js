$(document).ready(function() {
    // Define serializeForm function once, in a way that it can handle all form elements
    function serializeForm(form) {
        let jsonResult = {};
        $(form).find("input, textarea").each(function() {
            jsonResult[this.name] = this.value;
        });
        return jsonResult;
    }

    // Validation and handling for contactForm
    $("#contactForm").validate({
        rules: {
            username: {
                required: true,
                minlength: 5
            },
            password: {
                required: true,
                minlength: 5
            },
        },
        submitHandler: function(form, event) {
            event.preventDefault();
            console.log(serializeForm(form));
        }
    });

   
    
});
