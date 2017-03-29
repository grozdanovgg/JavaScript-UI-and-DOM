function solve() {
    return function(fileContentsByName) {

        var $existingItems = $('.file-item').each(function(i, val) {
            var item = $(val).on('click', printContent);
        });

        var $existingDirItems = $('.dir-item').each(function(i, val) {
            var item = $(val).on('click', folderAction);
        });

        var $deleteButtons = $('.del-btn').each(function(i, val) {
            var item = $(val).on('click', deleteItem);
        });

        var $addButton = $('.add-btn').on('click', startSearch);


        function printContent() {
            var $inputData = $(fileContentsByName)[0],
                $clicketElement = $(event.target).html(),
                $targetToPutText = $('.file-content');

            for (var i in $inputData) {
                if (i === $clicketElement) {
                    $targetToPutText.html($inputData[i]);
                }
            }
        }

        function folderAction() {
            var $this = $(this);
            // console.log($this);
            if ($this.hasClass('collapsed')) {
                $this.removeClass('collapsed');
            } else {
                $this.addClass('collapsed');
            }
        }

        function deleteItem() {
            var $itemToDelete = $(event.target).parent().remove();
            // console.log($itemToDelete);
        }

        function startSearch() {
            var $this = $(event.target);
            $this.removeClass('visible');

            $this.parent().children('input').addClass('visible');
        }
    }
}

if (typeof module !== 'undefined') {
    module.exports = solve;
}