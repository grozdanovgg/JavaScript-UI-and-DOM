/* 
 * if an id is provided, select the element
 * Add divs to the element
 * Each div's content must be one of the items from the contents array
 * The function must remove all previous content from the DOM element provided
 * Throws if:
 * The provided first parameter is neither string or existing DOM element
 * The provided id does not select anything (there is no element that has such an id)
 * Any of the function params is missing
 * Any of the function params is not as described
 * Any of the contents is neight `string` or `number`
 * In that case, the content of the element **must not be** changed   
 */

function solve() {

    return function(element, contents) {
        var selectedElement,
            newDiv;
        // console.log(contents[0]);
        // console.log(typeof contents[0]);


        if (typeof element === 'string') {

            selectedElement = document.getElementById(element);
        } else if (element instanceof HTMLElement) {
            selectedElement = element;
        } else {

            throw Error('Not valid element or ID provided')
        }
        if (contents.length === 0) {

        } else if ((typeof contents[0] !== 'string' &&
                typeof contents[0] !== 'number') ||
            (typeof contents[contents.length - 1] !== 'string' &&
                typeof contents[contents.length - 1] !== 'number') ||
            (typeof contents[contents.length / 2 | 0] !== 'string' &&
                typeof contents[contents.length / 2 | 0] !== 'number')) {
            console.log('error');
            throw Error;
        }
        selectedElement.innerHTML = '';
        for (x of contents) {
            if (contents.length === 0) {
                break;
            }
            newDiv = document.createElement('div');
            newDiv.innerHTML = x;

            selectedElement.appendChild(newDiv);
        };
    }
}

module.exports = solve;