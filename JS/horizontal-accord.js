$(document).ready(function() {
  $('.menu__link_trigger').on('click', function(e) {
    e.preventDefault();
    var item = $(this).closest('.menu__list_item');
    var container = $(this).closest('.menu__list');
    var block = container.find('.menu__list_item');
    var activeItem = block.filter('.menu__item_active')
    // var blockHeaight = blcok.outerHeight();
    var containerBlock = item.find('.menu__accord')
    // var otherItems = item.siblings();
    var activeBlock = activeItem.find('.menu__accord')


    if (!item.hasClass('menu__item_active')) {

      block.removeClass('menu__item_active');
      item.addClass('menu__item_active');

      activeBlock.animate({
        'width' : '0px'
      });

      containerBlock.animate({
        'width' : '550px'
      })


    } else {
      item.removeClass('menu__item_active');
      containerBlock.animate({
        'width': '0px'
      })
    }
});

 $(document).on('click', function (e){
   var $this = $(e.target);

   if(!$this.closest('.menu__list').length){
     $('.menu__accord').animate({
       'width' : '0px'
     });

     $('.menu__list_item').removeClass('menu__item_active');
   }
 })
});