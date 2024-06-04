let ShoesService = {
    loadShoes: function() {
        RestClient.get('shoes', function(response) {
            let data = response;
            const shoesContainer = document.getElementById('CshoesContainer');

             // Clear existing content
             shoesContainer.innerHTML = '';

            if (Array.isArray(data.data)) {
                data.data.forEach(cShoes => {
                    const shoesHtml = `
                        <div class="col-lg-4 col-6 mb-2">
                            <a href="#single-product" class="styleCardSelect" onclick="ShoesService.loadShoeDescription(${cShoes.shoeID})">
                                <div class="styleData d-flex flex-column align-items-center">
                                    <img src="${cShoes.shoeImage}" alt="${cShoes.shoeName}" class="styleImage" style="max-width: 200px; max-height: 200px;">
                                    <h3 class="styleName">${cShoes.shoeName}</h3>
                                    <p class="styleCategory ${cShoes.shoeCategory}">${cShoes.shoeCategory}</p>
                                    <p class="ShoePrice"><del>${cShoes.shoePrice}$</del> / ${cShoes.shoeSalePrice}$</p>
                                </div>
                            </a>
                        </div>`;
                    shoesContainer.innerHTML += shoesHtml;
                });
            }
            
        }, function(error) {
            console.error('Error loading shoes:', error);
        });
    },

    loadShoeDescription: function(shoeID) {
        RestClient.get('shoes', function(response) {
            let data = response;
            const selectedShoe = data.data.find(shoe => shoe.shoeID === shoeID);

            if (selectedShoe) {
                // Create HTML content for shoe description
                const shoeHtml = `
                <div class="styleData d-flex flex-column align-items-center" style="padding: 10px;">
                    <img src="${selectedShoe.shoeImage}" alt="${selectedShoe.shoeName}" class="styleImage" style="max-width: 400px; max-height: 400px;">

                    </div>
                    <div class="text-container ml-3">
                        <h2>${selectedShoe.shoeName}</h2>
                        <p>Brand: ${selectedShoe.brandName}</p>
                        <p>Price: ${selectedShoe.shoeSalePrice}$</p>
                        <p>Description: ${selectedShoe.shoeDescription}</p>
                        <p>Category: ${selectedShoe.shoeCategory}</p>
                    </div>
                `;

                // Update the shoe description body with shoeHtml
                document.getElementById('shoeDescriptionBody').innerHTML = shoeHtml;
            } else {
                console.log("Shoe not found");
            }
        }, function(error) {
            console.error('Error loading shoe description:', error);
        });
    }
};

