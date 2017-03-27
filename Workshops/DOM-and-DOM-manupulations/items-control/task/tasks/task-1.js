/* globals module, document, HTMLElement, console */

function solve() {
    return function(selector, isCaseSensitive) {

        /* START creating structure */

        var element = document.querySelector(selector);
        element.className = 'items-control';


        var inputDiv = document.createElement('div'),
            searhcDiv = document.createElement('div'),
            resultDiv = document.createElement('div');

        inputDiv.className = 'add-controls';
        searhcDiv.className = 'search-controls';
        resultDiv.className = 'result-controls';

        element.appendChild(inputDiv).appendChild(document.createElement('div'));
        element.appendChild(searhcDiv);
        element.appendChild(resultDiv);


        var addingInputElement = document.createElement('input'),
            addingLabelElement = document.createElement('label'),
            addingButton = document.createElement('button');

        addingButton.textContent = 'Add';
        addingButton.className = 'button';
        addingButton.id = 'button-adding-id';
        addingButton.addEventListener("click", addItem);
        addingLabelElement.htmlFor = 'button-adding-id';
        addingLabelElement.innerHTML = 'Enter text';

        inputDiv.appendChild(addingLabelElement);
        inputDiv.appendChild(addingInputElement);
        inputDiv.appendChild(addingButton);


        var searchInput = document.createElement('input'),
            searchLabelElement = document.createElement('label');

        searchInput.addEventListener('input', searchItems);
        searchLabelElement.htmlFor = 'button-search-id';
        searchLabelElement.innerHTML = 'Search:';

        searhcDiv.appendChild(searchLabelElement);
        searhcDiv.appendChild(searchInput);

        var resultList = document.createElement('ul');

        resultList.className = 'items-list';

        resultDiv.appendChild(resultList);

        /* END creating structure */


        var i = 1;

        function addItem() {
            var newLi = document.createElement('li'),
                xButton = document.createElement('a'),
                textInput = addingInputElement.value.bold();

            newLi.className = 'list-item';
            newLi.innerHTML = textInput;
            newLi.id = i;
            i += 1;
            // console.log(i);
            xButton.textContent = 'X';
            xButton.className = 'button';
            xButton.addEventListener('click', removeItem);

            newLi.appendChild(xButton);
            resultList.appendChild(newLi);

            addingInputElement.value = '';
        };

        function removeItem() {
            var idToRemove = this.parentElement.id,
                itemToRemove = document.getElementById(idToRemove);

            this.parentElement.outerHTML = "";
            delete this.parentElement;
        };


        function searchItems() {

            var filter = searchInput.value;
            if (!isCaseSensitive) {
                filter = filter.toLowerCase();
            }


            var items = resultList.getElementsByTagName("li"),
                regexp = new RegExp(filter, 'g'),
                filteredList = [];

            for (item of items) {
                // console.log(item.childNodes[0].innerText);
                if (regexp.test(item.childNodes[0].innerText)) {
                    item.style.display = '';
                    console.log(item.style.display);

                } else {
                    item.style.display = 'none';
                    console.log(item.style.display);
                }
            }
        };
    };
}

module.exports = solve;