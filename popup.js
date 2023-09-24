const message = document.querySelector("h1");
const btn = document.querySelector("#change-message");
btn.addEventListener("click", (evt) => {
  message.textContent = "Nuevo mensaje";
  alert("Hola mundo")
})