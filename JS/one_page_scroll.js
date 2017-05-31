$(function() {

    let display = $('.maincontent');
    let sections = $('.section')
    let inScroll = false;

    let performTransition = function(section) {

        if (inScroll) return;
        inScroll = true;
        let position = (section * -100) + '%';
        sections.eq(section).addClass('section__active')
            .siblings().removeClass('section__active');

        display.css({
            'transform': 'translate(0,' + position + ' )'
        });

        setTimeout(function() {
            inScroll = false;
            $('.nav__dotted_item').eq(section).addClass('.section__active')
                .siblings().removeClass('.section__active ')

        }, 1300);

    };

    $('.wrapper').on('wheel', function(e) {
        let activeSection = sections.filter('.section__active');
        let nextSection = activeSection.next();
        let prevSection = activeSection.prev();
        if (e.originalEvent.deltaY > 0 && nextSection.length) {

            performTransition(nextSection.index());
        }

        if (e.originalEvent.deltaY < 0 && prevSection.length) {
            performTransition(prevSection.index());
        }


    })


}());