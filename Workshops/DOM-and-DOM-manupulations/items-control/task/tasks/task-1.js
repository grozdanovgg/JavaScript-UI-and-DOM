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
























//     var element = selector,
//         fragment,

//         addControls,
//         labelAdd,
//         tbAdd,
//         btnAdd,

//         searchControls,
//         labelSearch,
//         tbSearch,

//         resultControls,
//         listResults,
//         listItemTemplate,
//         btnDeleteListItem,
//         textListItem,
//         listItems;


//     isCaseSensitive = !!isCaseSensitive;
//     if (typeof element === "string") {
//         element = document.querySelector(element);
//     }
//     if (!element || !(element instanceof HTMLElement)) {
//         throw new Error("Invalid HTML element or selector");
//     }

//     fragment = document.createDocumentFragment();

//     /* Add Controls: START */

//     addControls = document.createElement("div");
//     addControls.className = "add-controls";

//     labelAdd = document.createElement("label");
//     labelAdd.innerHTML = "Enter text: ";

//     tbAdd = document.createElement("input");

//     labelAdd.appendChild(tbAdd);

//     btnAdd = document.createElement("a");
//     btnAdd.className = "button";
//     btnAdd.addEventListener("click", onAddButtonClick, false);
//     btnAdd.innerHTML = "Add";
//     btnAdd.style.display = "inline-block";

//     addControls.appendChild(labelAdd);
//     addControls.appendChild(btnAdd);

//     /* Add Controls: END */


//     /* Search Controls: START */

//     searchControls = document.createElement("div");
//     searchControls.className = "search-controls";

//     labelSearch = document.createElement("label");
//     labelSearch.innerHTML = "Search:";

//     tbSearch = document.createElement("input");

//     tbSearch.addEventListener("input", onSearchTextboxInput, false);

//     labelSearch.appendChild(tbSearch);

//     searchControls.appendChild(labelSearch);

//     /* Search Controls: END */

//     /* Result Controls: START */

//     resultControls = document.createElement("div");
//     resultControls.className = "result-controls";

//     listResults = document.createElement("ul");
//     listResults.className = "items-list";

//     listItemTemplate = document.createElement("li");
//     listItemTemplate.className = "list-item";

//     btnDeleteListItem = document.createElement("a");
//     btnDeleteListItem.className = "button button-delete";
//     btnDeleteListItem.innerHTML = "X";

//     textListItem = document.createElement("strong");
//     listItemTemplate.appendChild(btnDeleteListItem);
//     listItemTemplate.appendChild(textListItem);

//     listResults.addEventListener("click", onListResultClick, false);


//     resultControls.appendChild(listResults);

//     listItems = element.getElementsByClassName("list-item");

//     /* Result Controls: END */

//     fragment.appendChild(addControls);
//     fragment.appendChild(searchControls);
//     fragment.appendChild(resultControls);

//     element.appendChild(fragment);
//     element.className += "items-control";


//     function onAddButtonClick(ev) {
//         var value = tbAdd.value;
//         tbAdd.value = "";

//         textListItem.innerHTML = value;

//         listResults.appendChild(listItemTemplate.cloneNode(true));
//     }

//     function onSearchTextboxInput() {
//         var i = 0,
//             len,
//             text,
//             pattern = tbSearch.value;
//         if (!isCaseSensitive) {
//             pattern = pattern.toLowerCase();
//         }

//         for (i = 0, len = listItems.length; i < len; i += 1) {
//             text = listItems[i].getElementsByTagName("strong")[0].innerHTML;
//             if (!isCaseSensitive) {
//                 text = text.toLowerCase();
//             }

//             if (text.indexOf(pattern) < 0) {
//                 listItems[i].style.display = "none";
//             } else {
//                 listItems[i].style.display = "";
//             }
//         }
//     }

//     function onListResultClick(ev) {
//         var btn = ev.target,
//             parent;
//         if (btn.className.indexOf("button-delete") < 0) {
//             return;
//         }

//         parent = btn;
//         while (parent && parent.className.indexOf("list-item") < 0) {
//             console.log(parent.nodeName);
//             parent = parent.parentNode;
//         }

//         if (!parent) {
//             return;
//         }

//         listResults.removeChild(parent);
//     }