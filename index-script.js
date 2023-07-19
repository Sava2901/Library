const library = document.querySelector(".library");
const popUp = document.querySelector(".modal");
const newBook = document.querySelector(".newBookButton");
const submitButton = document.querySelector(".submitButton");
const closeButton = document.querySelector(".closePopUpButton");
const removeButton = document.querySelectorAll(".removeButton");
const allBooks = document.querySelector(".allBooks");
const readBooks = document.querySelector(".readBooks");
const totalPages = document.querySelector(".totalPages");
const read = document.querySelector(".read");
let bool = false;
let title = document.querySelector("#title");
let author = document.querySelector("#author");
let pages = document.querySelector("#pages");


newBook.addEventListener("click", (e) => {
    popUp.style.display = "flex";
    e.preventDefault();
});

closeButton.addEventListener("click", () => {
    popUp.style.display = "none";
});

read.addEventListener("click", () => {
    bool = !bool;
});

submitButton.addEventListener("click", (e) => {

    if (title.value != "" && author.value != "" && pages.value != "") {
        e.preventDefault();
        const book = document.createElement("div");
        book.classList.add("book");

        const Title = document.createElement("p");
        Title.classList.add("bookTitle");
        Title.classList.add("text");
        Title.textContent = title.value;
        title.value = "";
        book.appendChild(Title);

        const Author = document.createElement("p");
        Author.classList.add("bookAuthor");
        Author.classList.add("text");
        Author.textContent = author.value;
        author.value = "";
        book.appendChild(Author);

        const Pages = document.createElement("p");
        Pages.classList.add("bookPages");
        Pages.classList.add("text");
        Pages.textContent = pages.value;
        if (pages != "") {
            totalPages.textContent = totalPages.textContent.slice(0, 13) + (Number(totalPages.textContent.slice(13)) + Number(pages.value));
        }
        pages.value = "";
        book.appendChild(Pages);


        const label = document.createElement("label");
        label.classList.add("readButton");


        const input = document.createElement("input");
        input.type = "checkbox";
        input.addEventListener("click", () => {
            if (input.checked == "1") {
                readBooks.textContent = readBooks.textContent.slice(0, -1) + (Number(readBooks.textContent.slice(-1)) + 1);
            }
            else {
                readBooks.textContent = readBooks.textContent.slice(0, -1) + (Number(readBooks.textContent.slice(-1)) - 1);
            }
        });
        if (bool) {
            input.checked = true;
            readBooks.textContent = readBooks.textContent.slice(0, -1) + (Number(readBooks.textContent.slice(-1)) + 1);
        }
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
            allBooks.textContent = allBooks.textContent.slice(0, -1) + library.children.length;
            totalPages.textContent = totalPages.textContent.slice(0, 13) + (Number(totalPages.textContent.slice(13)) - Number(button.previousElementSibling.previousElementSibling.textContent));
            if (button.previousElementSibling.firstElementChild.checked) {
                readBooks.textContent = readBooks.textContent.slice(0, -1) + (Number(readBooks.textContent.slice(-1)) - 1);
            }
        });


        library.appendChild(book);

        allBooks.textContent = allBooks.textContent.slice(0, -1) + library.children.length;

        popUp.style.display = "none";
    }

});