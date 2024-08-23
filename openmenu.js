export function pictureGallery () {
    const scrollContainer = document.querySelector("#gallery")
    const nextBtn = document.querySelector('#nextBtn')
    const prevBtn = document.querySelector('#prevBtn')


    scrollContainer.addEventListener('wheel', (evt) => {
        evt.preventDefault();
        scrollContainer.scrollLeft += evt.deltaY;
        scrollContainer.style.scrollBehavior = "auto";
    });


    
    nextBtn.addEventListener('click', () => {
        scrollContainer.style.scrollBehavior = "smooth";
        scrollContainer.scrollLeft += 1350;
    });
    
    prevBtn.addEventListener('click', () => {
        scrollContainer.style.scrollBehavior = "smooth";
        scrollContainer.scrollLeft -= 1350;
    });

    const startSlide = () => {
        setTimeout(() => {
            index++;
            scrollContainer.scrollLeft += evt.deltaY;
        }, 3000);
    };
    startSlide();
};
