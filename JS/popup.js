// // fancybox
// $(function() {
//   $('.opinion__hover_block_more ').fancybox({
//     type: 'inline',
//     maxWidth: 460,
//     fitToView: false,
//     padding: 0

//   });
// });
$(document).ready(function() {
    $('.opinion__hover_block_more').magnificPopup({
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

    // $('.opinion__hover_block_more').magnificPopup({
    //     type: 'inline',

    //     fixedContentPos: false,
    //     fixedBgPos: true,

    //     overflowY: 'auto',

    //     closeBtnInside: true,
    //     preloader: false,

    //     midClick: true,
    //     removalDelay: 300,
    //     mainClass: 'my-mfp-slide-bottom'
    // });
});