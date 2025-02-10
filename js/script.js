document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll(".cta-button");
    buttons.forEach(button => {
        button.addEventListener("mouseover", () => {
            button.style.boxShadow = "0px 5px 15px rgba(255, 0, 255, 0.7)";
        });
        button.addEventListener("mouseout", () => {
            button.style.boxShadow = "none";
        });
    });
});
