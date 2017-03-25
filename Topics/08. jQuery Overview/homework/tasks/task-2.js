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

// function solve() {
//     return function(selector) {

//         var $buttons = $(selector).find('.button'),
//             $contents = $(selector).find('.conten');

//         for ($but of $buttons) {
//             $($but).html('hide');
//             $($but).on('click', changeButton);
//         }

// function changeButton() {
//     var $element = $(this)[0],
//         nextElement = $element.nextElementSibling;
//     console.log($element.className);
//     console.log(nextElement.className);
//     console.log($element);

//     console.log($element.attr('class'));

//     while (nextElement.className !== 'button' &&
//         nextElement.className !== 'content') {
//         nextElement = nextElement.nextElementSibling;
//     }
//     if (nextElement.className === 'content') {
//         if ($element.innerHTML === 'hide') {
//             nextElement.style.display = 'none';
//             $element.innerHTML = 'show';
//         } else {
//             nextElement.style.display = '';
//             $element.innerHTML = 'hide';
//         }
//     }
//     nextElement = $element.nextElementSibling;
// }
//         function changeButton(event) {
//             var element = event.target,
//                 nextElement = element.nextElementSibling;

//             while (nextElement.className !== 'button' &&
//                 nextElement.className !== 'content') {
//                 nextElement = nextElement.nextElementSibling;
//             }
//             if (nextElement.className === 'content') {
//                 if (element.innerHTML === 'hide') {
//                     nextElement.style.display = 'none';
//                     element.innerHTML = 'show';
//                 } else {
//                     nextElement.style.display = '';
//                     element.innerHTML = 'hide';
//                 }
//             }
//             nextElement = element.nextElementSibling;
//         }
//     };
// };

// module.exports = solve;