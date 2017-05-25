// $(document).ready(function(){
//   $('a[href^="#"]').click(function(){
//     elementClick = $(this).attr("href");
//     destinstion = $(elementClick).offset().top;
    
//     $('body').animate({scrollTop: 'destination'}, 1000);

  
//     return false
    
//   });
// });

$(document).ready(function(){
    $('a[href^="#"]').on("click", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 700);
    });
});