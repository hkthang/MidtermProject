document.addEventListener('DOMContentLoaded', function () {
    fetch('./data.json') // Fetch the JSON file
      .then(response => response.json()) // Parse the JSON response
      .then(data => {
        const container = document.querySelector('#about .container'); // Select the container where about section will be inserted
        
        // Create HTML elements for the about section
        const aboutSection = document.createElement('div');
        aboutSection.classList.add('row', 'featurette');
        aboutSection.innerHTML = `
            <div class="col-md-7">
                <h2 class="featurette-heading fw-normal lh-1">${data.title}</h2>
                <p class="lead">${data.description}</p>
                <p class="lead">Authors: ${data.authors}</p>
                <p class="lead">Emails: ${data.emails}</p>
            </div>
        `;
        container.appendChild(aboutSection); // Append the about section to the container
      })
      .catch(error => console.error('Error fetching about section:', error)); // Log any errors that occur during fetching

    fetch('./additional_featurettes.json') // Fetch the JSON file for additional featurettes
      .then(response => response.json()) // Parse the JSON response
      .then(data => {
        const container = document.querySelector('#additional-featurettes .container'); // Select the container where additional featurettes will be inserted
        
        // Loop through the data and create HTML elements for each featurette
        data.forEach(featurette => {
          const featuretteHTML = `
            <hr class="featurette-divider">
            <div class="row featurette">
                <div class="col-md-7">
                    <h2 class="featurette-heading fw-normal lh-1">${featurette.title}</h2>
                    <p class="lead">${featurette.description}</p>
                </div>
            </div>
          `;
          container.innerHTML += featuretteHTML; // Append the featurette HTML to the container
        });
      })
      .catch(error => console.error('Error fetching additional featurettes:', error)); // Log any errors that occur during fetching
});
