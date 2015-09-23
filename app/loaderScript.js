'use strict';

var timeoutID = window.setTimeout(startApplication, 1000);

function startApplication () {
    $('.matureContent').css({'visibility': 'initial'});
    $('.btn').css({'visibility': 'initial'});
    firstPageSimpleAnimation('.matureContent', 0, 5, 1, 1500, 1000);
    firstPageSimpleAnimation('.btn', 0, 5, 1, 1250, 1000);
    firstPageSimpleAnimation('.agePageLogo', 0, 25, 1, 1000, 2000);
    firstPageSimpleAnimation('.agePageDescription', 0, 25, 1, 1000, 2000);
    animationFirstPage();
}

function firstPageSimpleAnimation (selector, xAxes, yAxes, alpha, wait, howLong){
    $( selector ).transition({
        x: xAxes,
        y: yAxes,
        opacity: alpha,
        delay: wait
    }, howLong, 'easeOutQuad');
}

function animationFirstPage(){
    var firstPage12 = $('#firstPage12'),
        firstPage10 = $('#firstPage10'),
        firstPage9 = $('#firstPage9'),
        firstPage8 = $('#firstPage8');

    startFirstAnimation();
    setInterval(startFirstAnimation, 18000);
    setInterval(sendAllBack, 15000);
    function startFirstAnimation(){
        firstPage12.transition({ x: 145, delay: 1000 }, 1500, 'easeOutQuad');
        firstPage10.transition({ x: -145, delay: 1000 }, 1500, 'easeOutQuad');
        firstPage12.transition({ y: 180, delay: 2000 }, 1500, 'easeOutQuad');
        firstPage8.transition({ y: -180, delay: 4500 }, 1500, 'easeOutQuad');
    }
    function sendAllBack(){
        firstPage12.transition({ x: 0, y: 0, delay: 1000 }, 1500, 'easeOutQuad');
        firstPage10.transition({ x: 0, delay: 1000 }, 1500, 'easeOutQuad');
        firstPage8.transition({ y: 0, delay: 1000 }, 1500, 'easeOutQuad');
    }
}