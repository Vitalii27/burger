$(function() {
    $('#order__form').on('submit', function(e) {
        e.preventDefault();

        var form = $(this),
            formData = form.serialize();

        $.ajax({
            url: '/mail.php',
            type: 'POST',
            data: formData,
            success: function(data) {
                var popup = data.status ? '#success' : '#mistake';

                $.magnificPopup.open({
                    items: {
                        src: popup
                    },
                    type: 'inline',
                    fitToView: false,
                    fixedContentPos: false,
                    fixedBgPos: true,

                    overflowY: 'auto',

                    closeBtnInside: false,
                    preloader: false,

                    midClick: true,
                    removalDelay: 300,
                    mainClass: 'my-mfp-zoom-in',
                    callbacks: {
                        close: function() {
                            form.trigger('reset');
                        }
                    }
                });

            }
        })
    })

    $('.modal__form_close').on('click', function(e) {
        e.preventDefault();
        $.magnificPopup.close();
    })

})