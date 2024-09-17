let cardsArr = [
  { name: "css", img: "cssimage.png" },
  { name: "HTML", img: "HTML.png" },
  { name: "JQuery", img: "JQuery.png" },
  { name: "Nodejs", img: "NodeJs.png" },
  { name: "react", img: "reactJs.png" },
  { name: "JS", img: "javaScript.png" },
];

const parentDiv = document.querySelector("#card-section");

const gameCard = cardsArr.concat(cardsArr);

let shuffledChild = Array.from(gameCard).sort(() => 0.5 - Math.random());

let clickCount = 0;
let firstCard = "";
let secondCard = "";

const cardMatched = () => {
  let card_selected = document.querySelectorAll(".card-selected");
  card_selected.forEach((element) => {
    element.classList.add("card-match");
  });
};

const cardReset = () => {
  firstCard = "";
  secondCard = "";
  clickCount = 0;

  let card_selected = document.querySelectorAll(".card-selected");
  card_selected.forEach((element) => {
    element.classList.remove("card-selected");
  });
};

parentDiv.addEventListener("click", (event) => {
  const currCard = event.target;

  if (currCard.id === "card-section") return false;

  clickCount++;

  if (clickCount < 3) {
    if (clickCount === 1) {
      firstCard = currCard.parentNode.dataset.name;
      currCard.parentNode.classList.add("card-selected");
    } else {
      secondCard = currCard.parentNode.dataset.name;
      currCard.parentNode.classList.add("card-selected");
    }

    if (firstCard != "" && secondCard != "") {
      if (firstCard === secondCard) {
        // currCard.classList.add('card-match');
        setTimeout(() => {
          cardMatched();
          cardReset();
        }, 1000);
      } else {
        setTimeout(() => {
          cardReset();
        }, 1000);
      }
    }
  }

  // currCard.classList.add('card-selected');
});

for (let i = 0; i < shuffledChild.length; i++) {
  const childDiv = document.createElement("div");

  childDiv.classList.add("card");
  childDiv.dataset.name = shuffledChild[i].name;
  // childDiv.style.backgroundImage = `url(${shuffledChild[i].img})`;

  const frontDiv = document.createElement("div");
  frontDiv.classList.add("front-card");

  const backDiv = document.createElement("div");
  backDiv.classList.add("back-card");
  backDiv.style.backgroundImage = `url(${shuffledChild[i].img})`;

  backDiv.style.backgroundSize = `contain`;
  backDiv.style.backgroundRepeat = `no-repeat`;
  backDiv.style.backgroundPosition = `center`;
  parentDiv.appendChild(childDiv);
  childDiv.appendChild(frontDiv);
  childDiv.appendChild(backDiv);
}
