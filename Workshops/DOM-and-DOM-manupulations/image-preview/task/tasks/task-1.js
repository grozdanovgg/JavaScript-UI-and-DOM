/* globals module */
function solve() {
    return function(selector, items) {
        var root = document.querySelector(selector),
            imgList = document.createElement('div'),
            searchBox = document.createElement('input'),
            imgPreview = document.createElement('div');

        imgPreview.className = 'image-preview';
        searchBox.addEventListener('input', filterImgs);
        /* START setting up list images in the div*/
        for (var obj of items) {
            var imgToAdd = document.createElement('img'),
                imgContainer = document.createElement('div'),
                imgTitteToAdd = document.createElement('strong');

            imgToAdd.title = obj.title;
            imgToAdd.src = obj.url;
            imgTitteToAdd.innerHTML = imgToAdd.title;
            imgContainer.className = 'image-container';
            imgContainer.addEventListener('mouseover', hoverImg);
            imgContainer.addEventListener('mouseout', hoverImg);
            imgContainer.addEventListener('click', changeTopImg);


            imgContainer.appendChild(imgTitteToAdd);
            imgContainer.appendChild(imgToAdd);
            imgList.appendChild(imgContainer);
        }
        /* END setting up list images in the div*/
        // console.log(imgList.children[1]);

        var firstImg = document.createElement('img'),
            imgTitleCopy = imgList.children[0].children[1].getAttribute('title'),
            imgSrceCopy = imgList.children[0].children[1].getAttribute('src'),
            imgTitteForPreview = document.createElement('strong');

        imgTitteForPreview.innerText = imgTitleCopy;

        firstImg.setAttribute('title', imgTitleCopy);
        firstImg.setAttribute('src', imgSrceCopy);

        imgList.appendChild(searchBox);
        imgPreview.appendChild(imgTitteForPreview);
        imgPreview.appendChild(firstImg);
        root.appendChild(imgPreview);
        root.appendChild(imgList);

        function hoverImg() {
            if (this.style.backgroundColor === "gray") {
                this.style.backgroundColor = "";
            } else {
                this.style.backgroundColor = "gray";
            }
        };

        function filterImgs() {
            var filter = searchBox.value;

            var items = imgList.getElementsByTagName("img"),
                regexp = new RegExp(filter, 'i', 'g');

            for (item of items) {
                if (regexp.test(item.getAttribute('title'))) {
                    item.style.display = '';
                    // console.log(item.style.display);
                } else {
                    item.style.display = 'none';
                    // console.log(item.style.display);
                }
            }
        };

        function changeTopImg() {
            var newTopImgSrc = this.children[1].getAttribute('src'),
                newTopImgTitle = this.children[1].getAttribute('title');
            console.log(newTopImgSrc);
            firstImg.setAttribute('src', newTopImgSrc);
            firstImg.setAttribute('title', newTopImgTitle);
            imgTitteForPreview.innerText = firstImg.getAttribute('title');
            // console.log(firstImg);

        };
    };
}

module.exports = solve;