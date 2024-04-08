$(document).ready(function() {

$("#contactForm").validate({
rules: {
   username:{

    required:true,
    minlength: 5
   },
   password: {
    required:true,
    minlength: 5
   },
},
submitHandler:function(form,event){
    event.preventDefault();
    let data=serializeForm(form);
    console.log(data);
}
});
});
serializeForm=(form) =>{
  let jsonResult={};
  $.each($(form).serializeArray(),function(){
    jsonResult[this.name]=this.value;
  });
return jsonResult;

}

$(document).ready(function() {
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
            let data = serializeForm(form);
            console.log(data);

        }
    });

   
    function serializeForm(form) {
        let jsonResult = {};
        $(form).find("input, textarea").each(function() {
            jsonResult[this.name] = $(this).val();
        });
        return jsonResult;
    }
});

$(document).ready(function() {
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
            let data = serializeForm(form);
            console.log(data);
        }
    });

});

$(document).ready(function() {
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
            let data = serializeForm(form);
            console.log(data);
        }
    });

    function serializeForm(form) {
        let jsonResult = {};
        $(form).find("input").each(function() {
            jsonResult[this.name] = $(this).val();
        });
        return jsonResult;
    }
});
