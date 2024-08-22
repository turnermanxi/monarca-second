export function pictureGallery () {
    const scrollContainer = document.querySelector("#gallery")
    const nextBtn = document.querySelector('#nextBtn')
    const prevBtn = document.querySelector('#prevBtn')
    
    setTimeout(scrollContainer.addEventListener('wheel', (evt) => {
        evt.preventDefault();
        scrollContainer.scrollLeft += evt.deltaY;
    }), 3000);

    scrollContainer.addEventListener('wheel', (evt) => {
        evt.preventDefault();
        scrollContainer.scrollLeft += evt.deltaY;
        scrollContainer.style.scrollBehavior = "auto";
    });
    
    nextBtn.addEventListener('click', () => {
        scrollContainer.style.scrollBehavior = "smooth";
        scrollContainer.scrollLeft += 1200;
    });
    
    prevBtn.addEventListener('click', () => {
        scrollContainer.style.scrollBehavior = "smooth";
        scrollContainer.scrollLeft -= 1200;
    });
};
