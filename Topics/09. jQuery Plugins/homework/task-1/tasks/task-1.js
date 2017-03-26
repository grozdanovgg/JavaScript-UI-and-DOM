function solve() {
    return function(select) {

        var $mainDiv = $('<div/>')
            .addClass('dropdown-list');


        var $currentDiv = $('<div/>')
            .addClass('current')
            .attr('data-value', '')
            .text('Option 1')
            .appendTo($mainDiv)
            .on('click', onButtonClick);

        var $optionsDiv = $('<div/>')
            .addClass('options-container')
            .css('position', 'absolute')
            .css('display', 'none')
            .appendTo($mainDiv);

        var $select = $(select)
            .appendTo($mainDiv)
            .css('display', 'none')
            .find('option')
            .each(function(index, valueOfItem) {
                $('<div/>')
                    .addClass('dropdown-item')
                    .attr('data-value', 'value-' + (index + 1))
                    .attr('data-index', index)
                    .text('Option ' + (index + 1))
                    .appendTo($optionsDiv);
            });

        function onButtonClick() {
            $(this)
                .text('Select a value');
            $()

        };

        // $($mainDiv).insertAfter('h1');
        $('body').append($mainDiv);




























        // var $mainDiv = $('<div/>')
        //     .addClass('dropdown-list');
        // var $divValue = $('<div/>')
        //     .addClass('current')
        //     .attr('data-value', "")
        //     .text('Select a value')
        //     .appendTo($mainDiv)
        //     .click(function() {
        //         $divClass.show();
        //     });
        // var $divClass = $('<div/>')
        //     .addClass('options-container')
        //     .css('position', 'absolute')
        //     .hide()
        //     .on('click', '.dropdown-item', buttonClicked)
        //     .appendTo($mainDiv);
        // var $selector = $(selector)
        //     .appendTo($mainDiv)
        //     .hide()
        //     .find('option')
        //     .each(function(index) {
        //         $('<div/>')
        //             .addClass('dropdown-item')
        //             .attr('data-value', 'value-' + (index + 1))
        //             .attr('data-index', index)
        //             .text('Option ' + (index + 1))
        //             .appendTo($divClass);
        //     });

        // function buttonClicked() {
        //     $divValue.text($(this).text());
        //     $selector.val($(this).attr('data-value'));
        //     $divClass.hide();
        // }
        // $($mainDiv).insertAfter('h1');
    };
}

module.exports = solve;