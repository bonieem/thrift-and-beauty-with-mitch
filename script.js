let slideIndex = 0;
let currentCollection = 'Ladies Collection';
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    let filteredSlides = Array.from(slides).filter(slide => slide.dataset.collection === currentCollection);
   
    slideIndex++;
    if (slideIndex > filteredSlides.length) { slideIndex = 1; }    
    filteredSlides[slideIndex - 1].style.display = "block";  
    setTimeout(showSlides, 7000); // Change image every 7 seconds
}

function plusSlides(n) {
    slideIndex += n - 1; // Adjust for manual controls
    showSlides();
}

function changeCollection() {
    const selector = document.getElementById("collectionSelector");
    currentCollection = selector.value;
    slideIndex = 0; // Reset index to show first image of the new collection
    showSlides();
}



{ box-sizing; border-box; }

slideshow-container ;{
    position: relative;
    max-width; 1000;
    margin: auto;
}

mySlides ;{
    display: none;
}

img ;{
    width: 50%
    height; auto;
}

prev, next; {
    cursor: pointer;
    position: absolute;
    top: 50% 
    width; auto;
    padding: 16 ;
    color: white;
    font-weight; bold;
    font-size; 18 ;
    transition: 0.6 ;  ease;
    border-radius; 0 ; 3 ; 3 ; 0;
    user-select; none;
}

next ;{
    right: 0;
    border-radius; 3 ; 0 ; 0 ; 3 ;
}

prev:hover, next;hover; {
    background-color; rgba(0, 0, 0, 0.8);
}