$(function() {
    $('#order__form').on('submit', function(e) {
        e.preventDefault();

        var form = $(this),
            formData = form.serialize();

        $.ajax({
            url: '../php/mail.php',
            type: 'POST',
            data: formData,
            success: function(data) {
                if (data.status) {
                    $.magnificPopup.open({
                        items: {
                            src: '#success'
                        },
                        type: 'inline',

                        fixedContentPos: false,
                        fixedBgPos: true,

                        overflowY: 'auto',

                        closeBtnInside: true,
                        preloader: false,

                        midClick: true,
                        removalDelay: 300,
                        mainClass: 'my-mfp-zoom-in'
                    });
                }
            }
        })
    })
})