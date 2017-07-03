var validition = (function() {
    var _memory = [];
    var validateForm = function(form) {

        // Навешиваем обработчики первый раз и запоминаем, что на форму с таким id  уже навешаны
        var id = form.attr('id');
        if (_memory[id] === void 0) {
            _memory[id] = true;
            _setUpListener(form);
        }
        var elements = form.find('input[data-content]').not('input[type="hidden"]');
        var valid = true;
        $.each(elements, function(index, element) {
            var $element = $(element);
            var value = $element.val();
            if (!value.length) {
                _addError($element);
                valid = false
            }
        });
        return valid;
    };

    // Навесить обработчики на валидируемую форму
    function _setUpListener(form) {
        // Прослушиваем все события 
        // удаляем обводку у элементов форм по нажатию клавиши 
        $(form).on('keydown', '.has-error', _removeError);
        // удаляем обводку по клику мышки 
        $(form).on('click', '.has-error', _removeError);
        // при сбросе формы удаляем тултипы и обводку
        $(form).on('reset', _clearForm);
    };
    // Убрать класс ошибки у элементов формы 
    function _removeError() {
        $(this).removeClass('has-error');
    };

    function _addError(element) {
        element.addClass('has-error');
        _createQtip(element, element.data('position'));

    };
    // Обработчик события Reset у формы 
    function _clearForm() {
        var $form = $(this);
        $form.find('.has-error').removeClass('has-error');
        $form.find('input[data-content]').trigger('hideTooltip'); //удаляем тултипы 


    };
    // Создание тултипа у инпута
    function _createQtip(element, direction) {
        direction = direction || 'left';
        position = {
            left: {
                my: 'center right',
                at: 'center left'
            },
            right: {
                my: 'center left',
                at: 'center right'
            },
            bottom: {
                my: 'top center',
                at: 'bottom center'
            },
            top: {
                my: 'bottom center',
                at: 'top center'
            }
        };
        element.qtip({
            content: {
                text: function() {
                    return $(this).data('content');
                }
            },
            show: {
                event: 'show'
            },
            hide: {
                event: 'keydown click hideTooltip'
            },
            position: position[direction],
            style: {
                classes: 'qtip-mystyle qtip-rounded',
                tip: {
                    height: 10,
                    width: 10
                }
            }
        }).trigger('show');
    }

    return {
        validateForm: validateForm
    };
})();