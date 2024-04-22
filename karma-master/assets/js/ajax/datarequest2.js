 // Fetching the data for CategoryShoes and displaying on the category.html
 $(document).ready(function() {
 $.getJSON("assets/jsonData/categoryShoes.json", (data) => {
    let cShoesCards = "";
    data.forEach((cShoes) => {
        const maxWidth = 200;
        const maxHeight = 200;

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

$(document).on("click", ".styleCardSelect", function () {
    
    const shoeId = $(this).attr("id");
    console.log("Style ID:", shoeId); 
    setTimeout(function(){
    $.getJSON("assets/jsonData/categoryShoes.json", (cshoes) => {
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
}, 20);
});

});
