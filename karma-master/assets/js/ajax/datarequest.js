
    // Fetching the data for shoes and displaying on the home.html
    $(document).ready(function() {
    $.getJSON("assets/jsonData/shoes.json", (data) => {
        let itemCards = "";
        data.forEach((item) => {
            const maxWidth = 200;
            const maxHeight = 200;

            itemCards +=
                `<div class="col-lg-4 col-md-4 col-sm-6 mb-20">
                    <a href="#single-product" id="${item.itemID}" class="itemCardSelect">
                        <div class="itemData d-flex flex-column align-items-center">
                            <img src="${item.itemImage}" alt="item" class="itemImage" style="max-width: ${maxWidth}px; max-height: ${maxHeight}px;">
                            <h4 class="itemName">${item.itemName}</h4>
                            <p class="itemCategory ${item.itemCategory}">${item.itemCategory}</p>
                        </div>
                    </a>
                </div>`;
        });
        $("#shoeContainer").html(itemCards);
    });

    // Creating single-product.html for every shoe available
    $(document).on("click", ".itemCardSelect", function () {
        const itemId = $(this).attr("id");

        setTimeout(function(){
        $.getJSON("assets/jsonData/shoes.json", (clothes) => {
            const selectedItem = clothes.find(item => item.itemID === parseInt(itemId));
            if (selectedItem) {
                $("#shoeDescriptionBody").html(
                    `
                        <div class="col-xl-6 col-12 align-items-center p-4">
                            <img src="${selectedItem.itemImage}" alt="" height="600px" id="addThingImage" class="m-3 rounded">
                        </div>
                        <div class="col-xl-6 col-12 p-5">
                            <h1 class="h1 mb-2 text-gray-800 font-weight-bold">${selectedItem.itemName}</h1>
                            <p class="descriptionName">Name: <span>${selectedItem.itemName}</span></p>
                            <p class="descriptionName">Brand: <span>${selectedItem.itemBrand}</span></p>
                            <p class="descriptionName">Category: <span class="tshirt">${selectedItem.itemCategory}</span></p>
                            <p class="descriptionName">Description: <span>${selectedItem.itemDescription}</span></p>
                            <p class="descriptionName">Price: <span>${selectedItem.itemSalePrice}</span></p>
                            <p class="descriptionName">Shoe was made: <span>${selectedItem.itemDate}</span></p>
                        </div>
                    `
                );
            } else {
                console.log("Item not found.");
            }
        })
        }, 20);
    });

    });