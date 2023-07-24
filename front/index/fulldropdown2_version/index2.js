$(document).ready(function() {
    var gnb = $('.gnb');

    // 마우스 over 시
    gnb.mouseenter(function() {
        $('.inner_menu').show();
        // menu bg
        var menuHeight = $('.header_inner').outerHeight();
        var inmeHegiht = $('.inner_menu').outerHeight();
        $('.hd_bg').css({
            'top': menuHeight + 'px',
            height: inmeHegiht + 'px'
        });
    });

    // 마우스  leave 시
    gnb.mouseleave(function() {
        $('.inner_menu').hide();
        $('.hd_bg').css('height', '0')

    });

  
});