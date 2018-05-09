(function ($) {

    $('.owl-carousel').owlCarousel({
        stagePadding: 200,
        loop: true,
        margin: 10,
        nav: false,
        items: 1,
        lazyLoad: true,
        responsive: {
            0:{
                items:1,
                stagePadding: 60
            },
            600:{
                items:1,
                stagePadding: 100
            },
            1000:{
                items:1,
                stagePadding: 200
            },
            1200:{
                items:1,
                stagePadding: 250
            },
            1400:{
                items:1,
                stagePadding: 300
            },
            1600:{
                items:1,
                stagePadding: 350
            },
            1800:{
                items:1,
                stagePadding: 400
            }
        }
    })

})(jQuery);



(function (window) {
    var flag = true;
    var counter = 0;

    function smoothScrollDown(element) {
        element.scrollIntoView({behavior : "smooth", block : "start"});
    }

    function toggleClassName(elems, audio){
        for(var i = 0; i < elems.length; i++){
            if(flag){
                elems[i].style.animation = "spin 1s linear infinite " + i/elems.length + "s";
            }else{
                elems[i].style.animation = "";
            }
        }

        if(flag){
            audio.play();
        }else{
            audio.pause();
        }

        flag = !flag;
    }

    function borderColor(el1, el2, el3, color) {
        [el1, el2, el3].forEach(function (v) {
            v.style.borderColor = color;
        });
    }
    
    function changeBorders(blog1, blog2, changable, border) {
        var y = window.pageYOffset;
        var blog1Top = blog1.offsetTop;
        var blog2Top = blog2.offsetTop;
        var computedBorder = y + screen.availHeight - 120;
        if(computedBorder > blog1Top && computedBorder < blog2Top){
            borderColor(changable, border[1], border[3], "whitesmoke");
        }else{
            borderColor(changable, border[1], border[3], "");
        }
    }

    function scrollIntoArea(anchors, sections) {
        for(var i = 0, len = anchors.length; i < len; i++){
            anchors[i].onclick = function(){
                smoothScrollDown(sections[this.dataset.id]);
            };
        }
    }

    var button = document.querySelector(".btn-success");
    var scrolledDiv = document.querySelector(".jumbotron");

    var audioButton = document.querySelector(".audio");
    var lines = document.querySelectorAll(".line");

    var mySound = new Audio('dzyun.mp3');
    
    var stars = document.querySelector(".star-blog");
    var footer = document.querySelector(".footer");
    var audioContent = document.querySelector(".audio-container");

    var scrollButtons = document.querySelectorAll(".header-container__heading-nav a");
    var scrollElements = document.querySelectorAll(".scrolledArea");

    button.onclick = function () {
      smoothScrollDown(scrolledDiv);
    };

    audioButton.onclick = function(){
        toggleClassName(lines, mySound);
    };
    
    window.onscroll = function () {
        changeBorders(stars, footer, audioContent, lines);
    };

    mySound.onended = function () {
        audioButton.click();
    };

    scrollIntoArea(scrollButtons, scrollElements);

})(window);