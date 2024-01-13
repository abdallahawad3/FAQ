let showDetails = document.querySelectorAll("h2");
let P = document.querySelectorAll("p");

let arr = Array.from(showDetails);
let arr2 = Array.from(P);
arr.forEach((element) => {
  element.addEventListener("click", () => {
    element.nextElementSibling.classList.toggle("active");
    element.nextElementSibling.className == "active"
      ? (element.firstElementChild.src = "assets/images/icon-minus.svg")
      : (element.firstElementChild.src = "assets/images/icon-plus.svg");
  });
});
