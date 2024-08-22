 export const contactForm = () => {
    let inputArray = [];
    
    const dialogBtn = document.querySelector("#contact");
    const inputForm = document.querySelector("#inputForm");
    const confirmBtn = document.querySelector("#confirmBtn");
    const cancelBtn = document.querySelector("#cancelBtn");
    const dialogBox = document.querySelector("#dialogBox");
    dialogBox.returnValue = "initialValue";
    confirmBtn.value = "userInputted";

    // get dialog to show

    dialogBtn.addEventListener(("click"), () => {
        inputForm.reset();
        dialogBox.showModal();
    });

    cancelBtn.addEventListener("click", () => {
        dialogBox.close();
    });
};