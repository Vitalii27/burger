$(document).ready(function() {
  $('.team__triangle').on('click', function(e) {
    e.preventDefault();
    var item = $(this).closest('.team__item');
    var blcok = item.find('.team__acco_content');
    var blockHeaight = blcok.outerHeight();
    var containerBlock = item.find('.team__acco')
    console.log()


    if (item.hasClass('team__item_active')) {
      containerBlock.css('height', 0)
      item.removeClass('team__item_active')

    } else {
      item.addClass('team__item_active')
      containerBlock.css('height', blockHeaight)

    }

  })
});