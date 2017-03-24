function solve() {
    return function(input) {
        var itemSelected;

        if (typeof input === 'string') {
            itemSelected = document.getElementById(input)

            if (!itemSelected) {
                throw Error;
            }
        } else if (input instanceof HTMLElement) {
            itemSelected = input;
        } else {
            throw Error;
        }
        var buttons = [].slice.apply(itemSelected.getElementsByClassName('button')),
            contents = [].slice.apply(itemSelected.getElementsByClassName('content'));


        for (but of buttons) {
            but.innerHTML = 'hide';
            but.addEventListener('click', changeButton)
        }

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