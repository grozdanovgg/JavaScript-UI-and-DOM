function solve() {
    return function(selector) {
        var $mainDiv = $('<div/>')
            .addClass('dropdown-list');
        var $divValue = $('<div/>')
            .addClass('current')
            .attr('data-value', "")
            .text('Select a value')
            .appendTo($mainDiv)
            .click(function() {
                $divClass.show();
            });
        var $divClass = $('<div/>')
            .addClass('options-container')
            .css('position', 'absolute')
            .hide()
            .on('click', '.dropdown-item', buttonClicked)
            .appendTo($mainDiv);
        var $selector = $(selector)
            .appendTo($mainDiv)
            .hide()
            .find('option')
            .each(function(index) {
                $('<div/>')
                    .addClass('dropdown-item')
                    .attr('data-value', 'value-' + (index + 1))
                    .attr('data-index', index)
                    .text('Option ' + (index + 1))
                    .appendTo($divClass);
            });

        function buttonClicked() {
            $divValue.text($(this).text());
            $selector.val($(this).attr('data-value'));
            $divClass.hide();
        }
        $('body').append($mainDiv);
    };
}

module.exports = solve;