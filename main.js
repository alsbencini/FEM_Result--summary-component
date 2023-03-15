import data from "./src/json/data.json";

const listContainer = document.querySelector("#summary-items-wrap");
const items = data;

listContainer.insertAdjacentHTML(
  "beforeend",
  items
    .map(
      (item) => `
      <div class="summary-item ${item.category}">
        <div class="flex-group">
            <img src="${item.icon}" alt="${item.category} icon" class="summary-icon">
            <h3 class="summary-item-title">${item.category}</h3>
        </div>

        <p class="summary-score">
            <span>${item.score}</span> / 100
        </p>
      </div> 
`
    )
    .join("")
);
