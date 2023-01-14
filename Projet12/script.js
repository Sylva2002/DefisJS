const faqToggle = document.querySelectorAll(".faq-toggle");


faqToggle.forEach(element => {
    element.addEventListener("click", () => {
        element.parentElement.classList.toggle("active");
    });
});
