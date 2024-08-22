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
    });
    
    nextBtn.addEventListener('click', () => {
        scrollContainer.scrollLeft += 1150;
    });
    
    prevBtn.addEventListener('click', () => {
        scrollContainer.scrollLeft -= 1150;
    });
};
