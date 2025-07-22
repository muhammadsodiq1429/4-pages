const mainEl = document.querySelector(".main");
const wrapperEl = document.createElement("section");
wrapperEl.className = "wrapper container";


fetch("https://dummyjson.com/recipes")
  .then((res) => res.json())
  .then((data) => {
    data.recipes.forEach((recipe) => {
      const cardEl = document.createElement("div");
      cardEl.className = "card";
      const ulEl = document.createElement("ul");
      const h4El = document.createElement("h4");
      h4El.textContent = "Ingredients:";

      recipe.ingredients.forEach((i) => {
        const liEl = document.createElement("li");
        liEl.innerHTML = i;
        ulEl.appendChild(liEl);
      });
      cardEl.innerHTML = `
    <h3>${recipe.name}</h3>
    `;
      cardEl.appendChild(h4El);
      cardEl.appendChild(ulEl);
      wrapperEl.appendChild(cardEl);
    });
    mainEl.appendChild(wrapperEl);
  });
