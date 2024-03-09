// Wait for the DOM content to be fully loaded
document.addEventListener('DOMContentLoaded', function () {
    fetch('./data.json') // Fetch the JSON file
      .then(response => response.json()) // Parse the JSON response
      .then(data => {
        const container = document.querySelector('.row-cols-1'); // Select the container where products will be inserted
        
        // Loop through the data and create HTML elements for each product
        data.forEach(product => {
          const card = document.createElement('div'); // Create a div element for the product card
          card.classList.add('col'); // Add the 'col' class to the card
          card.innerHTML = `
            <div class="card shadow-sm">
              <img src="${product.image}" class="bd-placeholder-img card-img-top" width="100%" height="225" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false">
              <div class="card-body">
                <h5 class="card-title">${product.name}</h5>
                <p class="card-text">${product.description}</p>
                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group">
                    <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                    <button type="button" class="btn btn-sm btn-outline-secondary">Add to Cart</button>
              </div>
            </div>
          `;
          container.appendChild(card); // Append the card to the container
        });
      })
      .catch(error => console.error('Error fetching products:', error)); // Log any errors that occur during fetching
  });