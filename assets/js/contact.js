(function () {
  emailjs.init("EKQjYo9huW7d4Cmbs");
})();

function emailJS () {
  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      var data = {
        from_name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
      };

      // these IDs from the previous steps
      emailjs.send("service_dfup84o", "template_dolgg6i", data).then(
        function (res) {
          console.log("SUCCESS!", res.status);
          document.getElementById("contact-form").reset();
          // detect language
          var lang = document.documentElement.lang;
          if (lang == "en") {
            $(".form_response").addClass("active");
            $(".form_response").html("Message sent!");
            $(".form_response").addClass("success");
            // destroy message after 5s
            setTimeout(function () {
              $(".form_response").removeClass("active");
              $(".form_response").removeClass("success");
            }, 5000);
          } else if (lang == "fr") {
            $(".form_response").addClass("active");
            $(".form_response").html("Message envoyé!");
            $(".form_response").addClass("success");
            // destroy message after 5s
            setTimeout(function () {
              $(".form_response").removeClass("active");
              $(".form_response").removeClass("success");
            }, 5000);
          }
        },
        function (error) {
          console.log("FAILED...", error);
          // detect language
          var lang = document.documentElement.lang;
          if (lang == "en") {
            $(".form_response").addClass("active");
            $(".form_response").html("Message not sent!");
            $(".form_response").addClass("error");
            // disapear message after 5s
            setTimeout(function () {
              $(".form_response").removeClass("active");
              $(".form_response").removeClass("error");
            }, 5000);
          } else if (lang == "fr") {
            $(".form_response").addClass("active");
            $(".form_response").html("Message non envoyé!");
            $(".form_response").addClass("error");
            // disapear message after 5s
            setTimeout(function () {
              $(".form_response").removeClass("active");
              $(".form_response").removeClass("error");
            }, 5000);
          }
        }
      );
    });
};
