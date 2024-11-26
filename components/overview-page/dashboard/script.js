document.addEventListener("DOMContentLoaded", () => {
  // Sidebar menu interaction
  const sidebarItems = document.querySelectorAll(".sidebar__item");

  sidebarItems.forEach((item) => {
    item.addEventListener("click", () => {
      // Remove 'active' class from all items
      sidebarItems.forEach((el) => el.classList.remove("active"));
      // Add 'active' class to the clicked item
      item.classList.add("active");
    });
  });

  // Dynamic Card Updates (Simulated)
  const cardsContainer = document.querySelector(".cards");
  const addFlowerButton = document.createElement("button");
  addFlowerButton.textContent = "Add Random Flower";
  addFlowerButton.style.margin = "20px 0";
  addFlowerButton.style.padding = "10px 15px";
  addFlowerButton.style.background = "#2b7a4b";
  addFlowerButton.style.color = "white";
  addFlowerButton.style.border = "none";
  addFlowerButton.style.borderRadius = "5px";
  addFlowerButton.style.cursor = "pointer";

  // Append button at the top of the main content
  cardsContainer.parentNode.insertBefore(addFlowerButton, cardsContainer);

  // Simulate adding a new card
  addFlowerButton.addEventListener("click", () => {
    const newCard = document.createElement("div");
    newCard.className = "card";
    newCard.innerHTML = `
        <img class="card__image" src="placeholder.jpg" alt="New Flower">
        <div class="card__content">
          <h3 class="card__title">Nová květina</h3>
          <p class="card__location">Nová lokace</p>
          <div class="card__tags">
            <span class="tag">Voda</span>
            <span class="tag">Slunce</span>
          </div>
        </div>
        <div class="card__tasks">1 úkol</div>
      `;
    const lastSection = cardsContainer.querySelector(
      ".cards__section:last-child"
    );
    lastSection.appendChild(newCard);
  });
});
