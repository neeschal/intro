const email = document.getElementById("email");
const error = document.getElementById("error");
const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (ValidEmail(email.value)) {
    error.classList.add("hide");
  } else {
    error.classList.remove("hide");
  }
});

function ValidEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
