const fb = document.querySelector(".firstButton");
const sb = document.querySelector(".secondButton");
const alertEl = document.querySelector(".alert");

const fetchOptions = {
  method: "POST",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
};

fb.addEventListener("click", () => {
  fetch("http://localhost:3000/graphql", {
    ...fetchOptions,
    body: JSON.stringify({ query: "query1" }),
  })
    .then((res) => res.json())
    .then((data) => {
      alertEl.classList.remove("hide");
      alertEl.innerHTML = data.query;
    });
});

sb.addEventListener("click", () => {
  fetch("http://localhost:3000/graphql", {
    ...fetchOptions,
    body: JSON.stringify({ query: "query2" }),
  })
    .then((res) => res.json())
    .then((data) => {
      alertEl.classList.remove("hide");
      alertEl.innerHTML = data.query;
    });
});
