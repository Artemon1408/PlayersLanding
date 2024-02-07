const calcRating = () => {
  const headRating = document.querySelector(".banner__nav-pagination"),
    numberRatings = document.querySelectorAll(".banner__nav-pag"),
    ratingBar = document.querySelector(".banner__rating-descr");

  function showRating(value = 0) {
    let span = document.createElement("span");
    span.style.cssText = `color: rgb(249, 185, 54); 
    font-family: "Red Hat Display"; 
    font-size: 20px; 
    font-weight: 700; 
    line-height: 26px; 
    letter-spacing: 0px; 
    text-align: left;`;

    span.innerText = value;

    ratingBar.innerHTML = `Your rating: <span>${value}</span>`;
    document.body.appendChild(span);
  }

  headRating.addEventListener("click", (e) => {
    const target = e.target;

    if (target && target.classList.contains("banner__nav-pag")) {
      numberRatings.forEach((item, i) => {
        if (target == item) {
          showRating(i);
        }
      });
    }
  });
};

export default calcRating;
