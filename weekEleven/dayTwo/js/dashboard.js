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
  const getCategories = [...currentUser.category, "women cloth"].map(
    (category) => {
      return `${category}+`;
    }
  );

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
      console.log("data", data);
    });
};

document.addEventListener("DOMContentLoaded", getUserProductsByCategories);
