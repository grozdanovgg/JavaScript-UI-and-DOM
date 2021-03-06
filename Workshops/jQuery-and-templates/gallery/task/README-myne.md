#Task: Gallery
## Build a jQuery plugin for a simple gallery control

#### Gallery requirements:
  - **Tabular view**
    - Show all available images in a tabular view
    - with rows and columns
  - **Functionality**:
    - When the user clicks on an image, the clicked image as well as its previous and next images from the DOM are shown enlarged and fixed at the center of screen
    - When the gallery shows an enlarged image, the background should be blurred and not clickable or usable at all
    - When the user clicks on the already enlarged image, the gallery should return to the initial state and show all available images (allowing the user to click on them again)
    - When the user clicks on the image on the right of the enlarged image, the gallery should enlarge the next image in the DOM
    - If no next image is available, the gallery should show the first image as next
    - When the user clicks on the image on the left of the enlarged image, the gallery should enlarge the previous image in the DOM
    - If no previous image is available, the gallery should show the last image as previous
    - _HINT_
      - Take a closer look at the provided CSS styles.
- _To get a better understanding of the gallery, you are provided with visual examples in the result folder_

#### _Examples:_
- Initial:
  - Three columns:
    - <img src="result/1.1. initial-three-columns.png" width="450" />
  - Five columns:    
    - <img src="result/1.2. initial-five-columns.png" width="450" />
  - Four columns:
    - <img src="result/1.3. initial-four-columns.png" width="450" />


- Clicked image:  
  - <img src="result/2. clicked-picture.png" width="450" />
- Next Image:
  - <img src="result/3. next-picture.png" width="450" />
- Previous Image:
  - <img src="result/4. previous-picture.png" width="450" />
