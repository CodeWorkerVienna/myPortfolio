const booksContainer = document.getElementById("booksContainer");
const sortBtn = document.getElementById("sortBtn");

// Step 1: Display the books

function renderBooks() {
  booksContainer.innerHTML = "";

  for (let i = 0; i < books.length; i++) {
    let book = books[i];
    let ratingClass = getRatingClass(book.rating);
    booksContainer.innerHTML += `
    <div class="col-lg-4 col-md-6 col-12 mx-6 my-2">
        <div class="card book-card p-3 d-flex flex-column">
            <img src="${book.image}" class="card-img-top card-img" alt="${book.title}">
            <h5 class="card-title">${book.title}</h5>
            <p class="card-text">${book.description}</p>
            <div class="book-footer d-flex justify-content-between align-items-center mt-1">
                <span class="rating-badge ${ratingClass}">${book.rating}/10</span>
                <button class="btn btn-info rate-btn" data-id="${book.id}">Rate +1</button>
             </div>
        </div>
    </div>
        `;
  }
  addRateListeners();
}
renderBooks();

// Step 2 Rate Buttons

function addRateListeners() {
  const rateButtons = document.querySelectorAll(".rate-btn");

  for (let i = 0; i < rateButtons.length; i++) {
    rateButtons[i].addEventListener("click", function () {
      rateBook(i);
    });
  }
}

function rateBook(index) {
  if (books[index].rating < 10) {
    books[index].rating++;
  } else {
    alert(`${books[index].title} has reached the maximum rating of 10!`);
  }
  renderBooks();
}

// Step 3 Colorcodes based on Rating

function getRatingClass(rating) {
  if (rating <= 3) {
    return "bg-danger";
  } else if (rating >= 4 && rating <= 7) {
    return "bg-warning";
  } else {
    return "bg-success";
  }
}

// Sorting the Books by Rating

function sortBooks() {
  books.sort(function (a, b) {
    return a.rating - b.rating;
  });
  renderBooks();
}

sortBtn.addEventListener("click", sortBooks);
