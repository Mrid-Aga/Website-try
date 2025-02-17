const button = document.getElementById("button");
const number = document.getElementById("number");

button!.addEventListener("click", () => {
  number!.textContent = String(Number(number!.textContent) + 1);
});