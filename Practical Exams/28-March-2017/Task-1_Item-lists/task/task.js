function solve() {

    return function(selector, defaultLeft, defaultRight) {
        var leftColumnData = defaultLeft || [],
            rightColumnData = defaultRight || [],
            root = document.querySelector(selector);


        var olElementLeft = document.createElement('ol');
        for (var index = 0; index < leftColumnData.length; index += 1) {
            var deleteImgLeft = document.createElement('img');
            deleteImgLeft.className = 'delete';
            deleteImgLeft.setAttribute('src', 'imgs/Remove-icon.png');
            deleteImgLeft.addEventListener('click', deleteItem);

            var textNodeLeft = document.createTextNode(leftColumnData[index]);

            var liLeft = document.createElement('li');
            liLeft.className = 'entry';

            liLeft.appendChild(deleteImgLeft);
            liLeft.appendChild(textNodeLeft);
            olElementLeft.appendChild(liLeft);
        }

        var olElementRight = document.createElement('ol');
        for (var jindex = 0; jindex < rightColumnData.length; jindex += 1) {
            var deleteImgRight = document.createElement('img');
            deleteImgRight.className = 'delete';
            deleteImgRight.setAttribute('src', 'imgs/Remove-icon.png');
            deleteImgRight.addEventListener('click', deleteItem);

            var textNodeRight = document.createTextNode(rightColumnData[jindex]);

            var liRight = document.createElement('li');
            liRight.className = 'entry';

            liRight.appendChild(deleteImgRight);
            liRight.appendChild(textNodeRight);
            olElementRight.appendChild(liRight);
        }

        var labelForRadioButtonLeft = document.createElement('label');
        labelForRadioButtonLeft.setAttribute('for', 'select-left-column');
        labelForRadioButtonLeft.innerText = 'Add here';
        var labelForRadioButtonRight = document.createElement('label');
        labelForRadioButtonRight.setAttribute('for', 'select-right-column');
        labelForRadioButtonRight.innerText = 'Add here';

        var radioButtonLeft = document.createElement('input');
        var radioButtonRight = document.createElement('input');
        radioButtonLeft.setAttribute('type', 'radio');
        radioButtonLeft.setAttribute('name', 'column-select');
        radioButtonLeft.setAttribute('checked', 'checked')
        radioButtonLeft.id = 'select-left-column';

        radioButtonRight.setAttribute('type', 'radio');
        radioButtonRight.setAttribute('name', 'column-select');
        radioButtonRight.id = 'select-right-column';


        var selectElementLeft = document.createElement('div');
        var selectElementRight = document.createElement('div');
        selectElementLeft.className = 'select';
        selectElementRight.className = 'select';
        selectElementLeft.appendChild(radioButtonLeft);
        selectElementRight.appendChild(radioButtonRight);
        selectElementLeft.appendChild(labelForRadioButtonLeft);
        selectElementRight.appendChild(labelForRadioButtonRight);

        var leftColumn = document.createElement('div');
        leftColumn.className = 'column';
        leftColumn.appendChild(selectElementLeft);
        leftColumn.appendChild(olElementLeft);

        var rightColumn = document.createElement('div');
        rightColumn.className = 'column';
        rightColumn.appendChild(selectElementRight);
        rightColumn.appendChild(olElementRight);

        var buttonElement = document.createElement('button');
        buttonElement.innerText = 'Add';
        buttonElement.addEventListener('click', addItem);

        var inputField = document.createElement('input');
        inputField.setAttribute('size', '40');
        inputField.className = 'mainsearch';
        inputField.autofocus = true;

        var columnContainer = document.createElement('div');
        columnContainer.className = 'column-container';
        columnContainer.appendChild(leftColumn);
        columnContainer.appendChild(rightColumn);

        root.appendChild(columnContainer);
        root.appendChild(inputField);
        root.appendChild(buttonElement);

        function addItem() {
            var collumnToAdd,
                textNodeToAdd;
            if (radioButtonLeft.checked) {
                collumnToAdd = olElementLeft;
            } else {
                collumnToAdd = olElementRight;
            }

            textNodeToAdd = root.children[1].value.trim();
            var deleteImgNew = document.createElement('img');
            deleteImgNew.className = 'delete';
            deleteImgNew.setAttribute('src', 'imgs/Remove-icon.png');
            deleteImgNew.addEventListener('click', deleteItem);
            var newLi = document.createElement('li');
            newLi.className = 'entry';
            var textNodeNew = document.createTextNode(textNodeToAdd);
            newLi.appendChild(deleteImgNew);
            newLi.appendChild(textNodeNew);
            if (textNodeToAdd) {
                collumnToAdd.appendChild(newLi);
                root.children[1].value = '';
            }
        }


        function deleteItem(event) {

            var selectedTarged = event.target.parentElement,
                inputElementDefault = root.children[1];
            inputElementDefault.value = this.parentElement.childNodes[1].nodeValue;
            this.parentElement.parentElement.removeChild(selectedTarged);

            // var selectedTarger = event.target.parentElement,
            //     inputElementDefault = root.children[1];
            // inputElementDefault.value = this.parentElement.innerText;
            // this.parentElement.parentElement.removeChild(selectedTarger);
        }
    };
}

// SUBMIT THE CODE ABOVE THIS LINE

if (typeof module !== 'undefined') {
    module.exports = solve;
}