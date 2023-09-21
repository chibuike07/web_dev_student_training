const userStore = [];

const setCategories = () => {
  const categoryElement = document.querySelector("#category");

  categories.forEach((value) => {
    const optionElement = document.createElement("option");
    optionElement.value = value;
    optionElement.textContent = value;
    categoryElement.appendChild(optionElement);
  });
};

document.addEventListener("DOMContentLoaded", setCategories);
const handleSignup = () => {
  // get elements
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;
  const category = document.querySelector("#category").value;

  //   restrict user from submitting empty fields
  if (!email || !password || !category) return alert("All fields are required");

  //   pass form into the an object
  const user = {
    email,
    password,
    category,
  };

  //get the database
  const storeUsers = localStorage.getItem("storeUsers");

  //   check if database exists
  if (storeUsers === undefined || storeUsers === null || storeUsers === null) {
    // adds to the user array
    userStore.push(user);
    console.log("got here");
    console.log("userStore", userStore);
    // store the user to the database localstorage
    localStorage.setItem("storeUsers", JSON.stringify(userStore));

    // navigate to login
    window.location.replace("../view/signin.html");
  }

  //   check if existing database
  else {
    // convert string to pure object
    let users = JSON.parse(storeUsers);
    // check if user already exists
    const findUser = users.find((user_) => user_.email === email);
    // restrict users
    if (findUser) return alert("User already exists");

    // add the user to existing user
    users = [...users, user];

    // save back the whole users  to the database
    localStorage.setItem("storeUsers", JSON.stringify(users));

    // navigate to login
    window.location.replace("../view/signin.html");
  }
};

const goToSignin = () => {
  window.location.replace("../view/signin.html");
};
