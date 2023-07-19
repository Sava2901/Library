const library  = document.querySelector(".library");
const popUp = document.querySelector(".modal");
const newBook = document.querySelector(".newBookButton");
const submitButton = document.querySelector(".submitButton");
const closeButton = document.querySelector(".closePopUpButton");
const removeButton = document.querySelectorAll(".removeButton");
const title = document.querySelector("#title");
const author = document.querySelector("#author");
const pages = document.querySelector("#pages");

newBook.addEventListener("click", () => {
    popUp.style.display = "flex";
});

submitButton.addEventListener("click", () => {
    popUp.style.display = "none";
});

removeButton.forEach(button => {
    button.addEventListener("click", () => {
        button.parentNode.remove();
    });
});

submitButton.addEventListener("click", () => {
    const book = document.createElement("div");
    book.classList.add("book");
    
    const Title = document.createElement("p");
    Title.classList.add("bookTitle");
    Title.classList.add("text");
    Title.textContent = title.value;
    book.appendChild(Title);

    const Author = document.createElement("p");
    Author.classList.add("bookAuthor");
    Author.classList.add("text");
    Author.textContent = author.value;
    book.appendChild(Author);

    const Pages = document.createElement("p");
    Pages.classList.add("bookPages");
    Pages.classList.add("text");
    Pages.textContent = pages.value;
    book.appendChild(Pages);


    const label = document.createElement("label");
    label.classList.add("readButton");

    const input = document.createElement("input");
    input.type = "checkbox";
    label.appendChild(input);

    const span = document.createElement("span");
    span.classList.add("buttonText");
    span.classList.add("OnOff");
    span.textContent = "Read";
    label.appendChild(span);

    book.appendChild(label);


    const button = document.createElement("button");
    button.classList.add("buttonText");
    button.classList.add("removeButton");
    button.textContent = "Remove";
    book.appendChild(button);

    button.addEventListener("click", () => {
        button.parentNode.remove();
    });

    
    library.appendChild(book);

});