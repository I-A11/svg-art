const koko = document.querySelector("#koko");
const sheep = document.querySelector("#sheep");
const btn = document.querySelector("#btn");
const btn1 = document.querySelector("#btn1");

btn.addEventListener("click", () => {
  koko.classList.add("brown");
  sheep.classList.add("brown");
});

btn1.addEventListener("click", () => {
  koko.classList.remove("brown");
  sheep.classList.remove("brown");
  koko.src = "./koko.svg";
});

const changeImage = () => {
  koko.src = "./sheep.svg";
  koko.classList.remove("brown");
  sheep.classList.remove("brown");
};
