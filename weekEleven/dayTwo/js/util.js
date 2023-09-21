const categories = [
  "electronics",
  "jewelery",
  "men's clothing",
  "women's clothing",
];

const renderProduct = ({ data, clickable }) => {
  const displayProduct = document.querySelector("#product");

  // loop through the product ans render it to the broswer
  data.length > 0
    ? data.forEach(
        ({ id, category, description, image, price, rating, title }) => {
          console.log("category", category);
          // create element;
          const card = document.createElement("div");
          const cardHeading = document.createElement("div");
          const cardDesc = document.createElement("div");
          const cardTitle = document.createElement("h2");
          const cardCategory = document.createElement("small");
          const cardImage = document.createElement("img");
          const cardPrice = document.createElement("span");
          const cardDescription = document.createElement("p");
          const cardRating = document.createElement("small");
          const cardRateCount = document.createElement("small");

          // asigning values to elements
          cardTitle.textContent = title;
          cardCategory.textContent = category;
          cardDescription.textContent = description;
          cardPrice.textContent = `$${price}`;
          cardRating.textContent = rating.rate;
          cardRateCount.textContent = rating.count;
          cardImage.src = image;
          cardImage.alt = "product look";
          cardImage.style.cursor = clickable && "pointer";

          // defining the classes
          card.className = "pt_card";
          cardHeading.className = "pt_cd_tt_header";
          cardDesc.className = "pt_cd_desc_";
          // cardHeading.setAttribute("class", "cd_tt_heading");

          // adding element into their parents;
          cardHeading.appendChild(cardTitle);
          cardHeading.appendChild(cardCategory);
          cardDesc.appendChild(cardDescription);
          card.appendChild(cardImage);
          card.appendChild(cardHeading);
          card.appendChild(cardDesc);
          card.appendChild(cardPrice);

          // add structured element into the display element;
          displayProduct.appendChild(card);

          // click the image to display the selected image;
          clickable &&
            cardImage.addEventListener("click", () => {
              window.location.href = `../view/displayProduct.html?id=${id}`;
            });
        }
      )
    : console.log("No product found!");
};
