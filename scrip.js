let slideIndex = 0;
let currentCollection = 'collection';
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