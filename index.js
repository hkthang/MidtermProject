// Hangkim
// hkthang@iastate.edu
// Feb 21, 24

fetch("./midtermproject.json")
    .then(response => response.json())
    .then(myMovies => loadMovies(myMovies));


fetch("./music.json")
    .then(response => response.json())
    .then(music => loadMusic(music));

function loadMusic(music) {
  
}

function loadMovies(myMovies) {
    // Find the element “col” in HTML
    var CardMovie = document.getElementById("col");

    // if the search bar form is submitted then call the function searchMovies
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


        // add below
        // <input type="checkbox" id=${checkbox} class="form-check-input" checked>
        // <label for=${checkbox} class="form-check-label">Show Image ${i}</label>
        AddCardMovie.innerHTML = `
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
