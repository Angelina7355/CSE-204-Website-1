const button = document.querySelector("button");
const formElements = document.querySelectorAll(".form-elements");
const toggleableElements = document.querySelectorAll(".toggleable-text");
const additionalNotes = document.querySelector("#additional-notes");
const charCount = document.querySelector("#char-count");

const maxLength = additionalNotes.maxLength;

// Displays character count
additionalNotes.addEventListener("input", () => {
    charCount.textContent = additionalNotes.value.length + "/" + maxLength;
});

// Prevents user from submitting another form
button.addEventListener("click", (e) => {
    // Prevents submission from bringing user to top of page
    e.preventDefault();

    // Shows hidden text upon submission
    toggleableElements.forEach((element) => {
        element.style.display = "block";
    });

    // Disables form elements
    formElements.forEach((element) => {
        element.disabled = true;
    });
});
