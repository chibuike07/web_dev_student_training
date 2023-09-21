//  https://fakestoreapi.com/products
// 'https://fakestoreapi.com/products?sort=desc
// https://fakestoreapi.com/products/categories
// https://fakestoreapi.com/products/category/jewelery
// https://fakestoreapi.com/carts
// https://fakestoreapi.com/carts/5
// https://fakestoreapi.com/carts?startdate=2019-12-10&enddate=2020-10-10
// 'https://fakestoreapi.com/carts/user/2

const getUserProductsByCategories = () => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const categoryHeading = document.querySelector("#selectedCategory");
  const getCategories = [currentUser.category].map((category) => {
    return `${category}`;
  });

  categoryHeading.textContent = getCategories[0];
  const clickable = true;
  //   fetch products based on users category
  fetch(
    `https://fakestoreapi.com/products/category/${currentUser.category[0]}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  )
    .then((res) => res.json())
    .then((data) => {
      renderProduct({ data, clickable });
    })
    .catch((err) => console.error(err));
};

document.addEventListener("DOMContentLoaded", getUserProductsByCategories);
