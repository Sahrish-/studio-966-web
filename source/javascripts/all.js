//= require jquery
//= require modernizr
//= require foundation.min
//= require wufoo
//= require typography
//= require iefix


$(document).foundation({
    orbit: {
        animation: 'slide',
        timer_speed: 0,
        pause_on_hover: true,
        resume_on_mouseout: true,
        animation_speed: 500,
        navigation_arrows: false,
        bullets: false,
        next_on_click: true,
        timer: false,
        navigation_arrows: true,
        slide_number: false,
        navigation_arrows: false,
                }
    });

jQuery(document).ready(function($) {$(".article_title").lettering().fitText(0.645);});
