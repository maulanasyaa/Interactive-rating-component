// rate
const ratingItems = document.querySelectorAll(".rating-item");

// card
const cardRating = document.getElementById("card-rating");
const cardResult = document.getElementById("card-result");

// button
const cardButton = document.querySelector(".rating-button");

// element
const rateResult = document.querySelector(".rating-result");

// event
let rate = 0;
ratingItems.forEach(ratingItem => {
  ratingItem.addEventListener("click", function () {
    rate = this.innerText;
    ratingItems.forEach(i => {
      i.classList.add("rating-item");
      i.classList.remove("rating-clicked");
    });
    ratingItem.classList.add("rating-clicked");
    ratingItem.classList.remove("rating-item");
  });
});

cardButton.addEventListener("click", () => {
  if (rate === 0) {
    cardRating.classList.add("shake");
    setTimeout(() => {
      cardRating.classList.remove("shake");
    }, 500);
  } else {
    rateResult.innerText = `You selected ${rate} out of 5`;
    cardRating.classList.add("card-hidden");
    cardResult.classList.remove("card-hidden");
    console.log("ok1");
  }
});
