const searchParams = decodeURIComponent(location.search).substring(1);

const getSingleProduct = () => {
  const id = searchParams.split("=")[1];
  fetch(`https://fakestoreapi.com/products/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      const heading = document.querySelector("#heading");
      const { category } = data;
      heading.textContent = category;

      renderProduct({ data: [data] });
    })
    .catch((err) => console.error(err));
};

document.addEventListener("DOMContentLoaded", getSingleProduct);

const handleConfirmProductPurchase = () => {
  const name = document.querySelector("#name").value;
  const address = document.querySelector("#address").value;
  const phone = document.querySelector("#phone").value;
  const count = document.querySelector("#count").value;

  if (name && address && phone && count)
    return window.confirm("Are you sure you want to purchase");
};
