$(function() {
    let sections = $('.section'),
        display = $('.maincontent'),
        inScroll = false;

    let scrollToSection = function(section) {
        let position = 0;

        if (!inScroll) {
            inScroll = true;
            position = (sections.eq(section).index() * -100) + '%';

            sections.eq(section).addClass('active').siblings().removeClass('active');


            display.css({
                'transform': 'translate3d(0, ' + position + ',0)'
            });

            setTimeout(function() {
                inScroll = false;
                $('.nav__dotted_item').eq(section).addClass('active').siblings().removeClass('active ')
            }, 1300)

        }


    }

    $('.wrapper').on('wheel', function(e) {
        let deltaY = e.originalEvent.deltaY,
            activeSection = sections.filter('.active'),
            nextSection = activeSection.next(),
            prevSection = activeSection.prev();

        if (deltaY > 0 && nextSection.length) {
            scrollToSection(nextSection.index());
        }

        if (deltaY < 0 && prevSection.length) {
            scrollToSection(prevSection.index());
        }


    });
    $('.arrow__link').on('click', function(e) {
        e.preventDefault();

        scrollToSection(1);
    })

    $('.nav__dotted_link, .nav__link, .order__button').on('click', function(e) {
        e.preventDefault();

        let href = parseInt($(this).attr('href'));
        scrollToSection(href);

    });

    $(document).on('keydown', function(e) {
        let activeSection = sections.filter('.active'),
            nextSection = activeSection.next(),
            prevSection = activeSection.prev();

        switch (e.keyCode) {
            case 40: //down
                if (nextSection.length) {
                    scrollToSection(nextSection.index());
                }
                break;

            case 38: //up
                if (prevSection.length) {
                    scrollToSection(prevSection.index());
                }
                break;

        }
    })


}());