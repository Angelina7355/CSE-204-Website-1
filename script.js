const button = document.querySelector("button");
const formElements = document.querySelectorAll(".form-elements");
const toggleabletext = document.querySelector("#toggleable-text");
const additionalNotes = document.querySelector("#additional-notes");
const charCount = document.querySelector("#char-count");

const maxLength = additionalNotes.maxLength;

// Displays character count
additionalNotes.addEventListener("input", () => {
    charCount.textContent = additionalNotes.value.length + "/" + maxLength;
});

// Prevents user from submitting another form
button.addEventListener("click", (e) => {
    e.preventDefault(); // Prevents submission from bringing user to top of page
    toggleabletext.style.display = "block";

    formElements.forEach((element) => {
        element.disabled = true;
    });
});
