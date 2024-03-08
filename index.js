// Hangkim
// hkthang@iastate.edu
// Feb 21, 24

fetch("./midtermproject.json")
    .then(response => response.json())
    .then(myMovies => loadMovies(myMovies));

function loadMovies(myMovies) {
    // Find the element “col” in HTML
    var CardMovie = document.getElementById("col");

    var checkboxes = [];
    var cards = [];

    // Read every movie from the array
    for (var i = 0; i < myMovies.movies.length; i++) {

        let title = myMovies.movies[i].title;
        let year = myMovies.movies[i].year;
        let url = myMovies.movies[i].url;

        var checkbox = "checkbox" + i.toString();
        var card = "card" + i.toString();

        // create a new HTML div division
        let AddCardMovie = document.createElement("div");
        // add class = “col” to new division for Bootstrap
        AddCardMovie.classList.add("col");
        // create Bootstrap card
        AddCardMovie.innerHTML = `
            <input type="checkbox" id=${checkbox} class="form-check-input" checked>
            <label for=${checkbox} class="form-check-label">Show Image ${i}</label>

            <div id=${card} class="card shadow-sm">
                <img src=${url} class="card-img-top" alt="..."></img>
                    <div class="card-body">
                    <p class="card-text"> <strong>${title}</strong>, ${year}</p>
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                            <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                            <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                    </div>
                    <small class="text-body-secondary">9 mins</small>
                    </div>
                </div>
            </div>
        `;
        // append new division
        CardMovie.appendChild(AddCardMovie);

        let cbox = document.getElementById(checkbox);
        checkboxes.push(cbox);

        let ccard = document.getElementById(card);

        console.log("created card .......", card, ".......", ccard);
        cards.push(ccard);

        console.log(checkbox);
        console.log(card);
    } // end of for

    console.log("heere are checboxes", checkboxes);
    console.log("here are cards", cards);

    checkboxes.forEach((checkboxParam, index) => {
        console.log(index);
        checkboxParam.addEventListener('change', () => {
            if (checkboxParam.checked) {
                cards[index].style.display = 'block'; // Show the card
            } else {
                cards[index].style.display = 'none'; // Hide the card
            }
        });
    });

    card = [""];

}

function seachMovie() { 
    var input, filter, card, title, i, txtValue;
    input = document.getElementById('search');
    filter = input.value.toUpperCase();
    card = document.getElementsByClassName('card');
    for (i = 0; i < card.length; i++) {
        title = card[i].querySelector('.card-text');
        txtValue = title.textContent || title.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            card[i].style.display = "";
        } else {
            card[i].style.display = "none";
            console.log("No movie found");
        }
    }
}


document.addEventListener('DOMContentLoaded', function () {
    let slideIndex = 0;
    showSlides();

    function showSlides() {
        let i;
        const slides = document.getElementsByClassName('mySlides');

        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = 'none';
        }

        slideIndex++;

        if (slideIndex > slides.length) {
            slideIndex = 1;
        }
        setTimeout(showSlides, 3000); // Change slide every 3 seconds
    }
});


    