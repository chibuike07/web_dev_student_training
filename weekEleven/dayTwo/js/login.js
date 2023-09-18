const login = () => {
  const emailElement = document.querySelector("#email");
  const passwordElement = document.querySelector("#password");
  //   validate form fields
  if (emailElement.value === "" || passwordElement.value === "")
    return alert("Fields are empty");

  // get database
  const getDatabase = JSON.parse(localStorage.getItem("storeUsers"));

  const userExists = getDatabase.find(
    ({ email, password }) =>
      email === emailElement.value && password === passwordElement.value
  );

  //focus on email input
  emailElement.focus();

  //   display error message to the user
  if (!userExists) return alert("Email and password incorrect");

  //   saving currentuser to the database
  localStorage.setItem("currentUser", JSON.stringify(userExists));

  //   navigate to dashboard
  window.location.replace("../view/dashboard.html");
};
