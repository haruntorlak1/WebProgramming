// Fetching the data for shoes and displaying on the home.html
$(document).ready(() => {
    $.getJSON("jsonData/shoes.json", (data) => {
        let itemCards = "";
        data.forEach((item) => {
            // Set the max width and height of the images in pixels
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
});

// Creating single-product.html for every shoe available
$(document).on("click", ".itemCardSelect", function () {
    const itemId = $(this).attr("id");

    setTimeout(function () {
        $.getJSON("jsonData/shoes.json", (clothes) => {
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
    }, 10)


});

// Fetching the data for CategoryShoes and displaying on the category.html
$(document).ready(() => {
    $.getJSON("jsonData/categoryShoes.json", (data) => {
        let cShoesCards = "";
        data.forEach((cShoes) => {
            const maxWidth = 200; // Set maximum width in pixels
            const maxHeight = 200; // Set maximum height in pixels

            cShoesCards +=
                `<div class="col-lg-4 col-6 mb-2">
                    <a href="#single-product" id="${cShoes.shoeID}" class="styleCardSelect">
                        <div class="styleData d-flex flex-column align-items-center">
                            <img src="${cShoes.shoeImage}" alt="${cShoes.shoeName}" class="styleImage" style="max-width: ${maxWidth}px; max-height: ${maxHeight}px;">
                            <h3 class="styleName">${cShoes.shoeName}</h3>
                            <p class="styleCategory ${cShoes.shoeCategory}">${cShoes.shoeCategory}</p>
                            <p class="ShoePrice"><del>${cShoes.shoePrice}</del> / ${cShoes.shoeSalePrice}</p>
                        </div>
                    </a>
                </div>`;
        });
        $("#CshoesContainer").html(cShoesCards);
    });
});
$(document).on("click", ".styleCardSelect", function () {
    const shoeId = $(this).attr("id");
    console.log("Style ID:", shoeId); 

    setTimeout(function () {
        $.getJSON("jsonData/categoryShoes.json", (cshoes) => {
            console.log(cshoes);

            const selectedShoe = cshoes.find(shoe => shoe.shoeID === parseInt(shoeId));
            if (selectedShoe) {
                console.log("Shoe has been found!");
                $("#shoeDescriptionBody").html(
                    `
                        <div class="col-xl-7 col-12 align-items-center p-4">
                            <img src="${selectedShoe.shoeImage}" alt="" height="600px" id="addThingImage" class="m-3">
                        </div>
                        <div class="col-xl-5 col-12 p-5">
                            <h1 class="h1 mb-2 text-gray-800 font-weight-bold">${selectedShoe.shoeName}</h1>
                            <p class="descriptionName">Name: <span>${selectedShoe.shoeName}</span></p>
                            <p class="descriptionName">Brand: <span>${selectedShoe.shoeBrand}</span></p>
                            <p class="descriptionName">Price: <span class="style-formal">${selectedShoe.shoeSalePrice}</span></p>
                            <p class="descriptionName">Description: <span class="styleRating">${selectedShoe.shoeDescription}</span></p>
                            <p class="descriptionName">Data Added: <span>${selectedShoe.shoeDate}</span></p>
                        </div>
                        `
                );
            } else {
                console.log("Shoe not found.");
            }
        });
    }, 10)
});