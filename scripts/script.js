$(document).ready(function () {
    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass("active")
        $('.menu-btn i').toggleClass("active")
    });

    //typing animation script
    var typed = new Typed(".typing", {
        strings: ["Full Stack Developer.", "Software Engineer."],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed2 = new Typed(".typing2", {
        strings: ["Full Stack Developer", "Software Engineer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    })
});
