//When window is loaded

//init animations
$(window).on("load", function () {
    anime({
        targets: ".about, .skills, .projects, .contact, .header_picture, .header_content",
        opacity: 0,
        translateY: 50,
        duration: 0
    })

    anime({
        targets: ".about_left, .about_text, .about_map, .about_mail, .contact-btn",
        opacity: 0,
        translateY: 50,
        duration: 0
    })
})

var tl = anime.timeline({
    duration: 3000
})

function onDisplaySection (section) {
    anime({
        targets: "." + section,
        opacity: 1,
        translateY: "0px",
        duration: 1000,
    });
}

function onLoadDocument () {
    anime({
        targets: ".header_picture, .header_content",
        opacity: 1,
        translateY: "0px",
        duration: 1500,
    });
}