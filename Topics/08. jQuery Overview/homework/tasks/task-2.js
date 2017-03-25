function solve() {
    return function(input) {
        if (!input) {
            throw Error
        }
        var $itemSelected = $(input),
            $buttons = $itemSelected.find('.button');
        if ($itemSelected.length < 1) {
            throw Error;
        }

        $buttons.each(function(index, value) {
            value.innerHTML = 'hide';
            value.addEventListener('click', changeButton);
        });

        function changeButton(event) {
            var element = event.target,
                nextElement = element.nextElementSibling;

            while (nextElement.className !== 'button' &&
                nextElement.className !== 'content') {
                nextElement = nextElement.nextElementSibling;
            }
            if (nextElement.className === 'content') {
                if (element.innerHTML === 'hide') {
                    nextElement.style.display = 'none';
                    element.innerHTML = 'show';
                } else {
                    nextElement.style.display = '';
                    element.innerHTML = 'hide';
                }
            }
            nextElement = element.nextElementSibling;
        }
    };
};

module.exports = solve;