
// Write all the names of images in slideshow
var images = ["img0.jpg", "img1.jpg", "img2.jfif", "img3.jpg", "img4.jfif", "img5.jpg", "img6.jpg", "img7.jfif", "img8.jpg"];

$(document).ready(function () {
    $("#prev").click(function () {
        prev();
    });
    $("#next").click(function () {
        next();
    });
});



function next() {
    var next, main, prev
    var current = Number(document.getElementById("img_no").value);
    prev = current;
    main = current + 1;
    next = main +1;
    if (main >= images.length) {
        main = 0;
        next = 1;
    }
    if (next >= images.length) {
        next = 0;
    }
    document.getElementById("img_no").value = main;
    console.log("Next");
    $('#main, #prev, #next').fadeOut(300, function () {
        $('#prev').attr('src', "images/" + images[prev]);
        $('#main').attr('src', "images/" + images[main]);
        $('#next').attr('src', "images/" + images[next]);
    });
    $('#main, #prev, #next').fadeIn(300);
}

function prev() {
    var next, main, prev
    var current = Number(document.getElementById("img_no").value);
    next = current;
    main = current -1;
    prev = main -1;
    if (main < 0) {
        main = images.length-1;
        prev = images.length-2;
    }
    if (prev < 0) {
        prev = images.length-1;
    }
    document.getElementById("img_no").value = main;
    console.log("Next");
    $('#main, #prev, #next').fadeOut(300, function () {
        $('#prev').attr('src', "images/" + images[prev]);
        $('#main').attr('src', "images/" + images[main]);
        $('#next').attr('src', "images/" + images[next]);
    });
    $('#main, #prev, #next').fadeIn(300);
}