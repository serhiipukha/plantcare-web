/* Menu */
const menu = document.querySelector(".nav");
const mobileMenuTrigger = document.querySelectorAll(".mobile__menu__trigger");

mobileMenuTrigger.forEach((button) => {
  button.addEventListener("click", () => {
    menu.classList.toggle("open");
  });
});

const sidebar = document.querySelector(".sidebar");
const mobileSidebarTrigger = document.querySelectorAll(
  ".sidebar__mobile__trigger"
);

mobileSidebarTrigger.forEach((button) => {
  button.addEventListener("click", () => {
    sidebar.classList.toggle("open");
  });
});

/* Tabs */
const sidebarItems = document.querySelectorAll(".sidebar-triger");
const contentSections = document.querySelectorAll(".main__inner .content");

sidebarItems.forEach((item) => {
  item.addEventListener("click", () => {
    sidebarItems.forEach((el) => el.classList.remove("active"));
    item.classList.add("active");

    const targetId = item.dataset.target;
    contentSections.forEach((section) => section.classList.remove("active"));

    document.getElementById(targetId).classList.add("active");
  });
});

/* Settings */
// Scoped avatar upload event
const avatar = document.querySelector(".settings-section #avatar-upload");
if (avatar) {
  avatar.addEventListener("change", function (event) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        document.querySelector(".settings-section #avatar-preview").src =
          e.target.result;
      };
      reader.readAsDataURL(file);
    }
  });
}

// Scoped plant image upload event
const flower = document.querySelector(".add-flower #plant-image");
if (flower) {
  flower.addEventListener("change", function (event) {
    const preview = document.querySelector(".add-flower #image-preview");
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        preview.style.display = "block";
        preview.style.backgroundImage = `url(${e.target.result})`;
      };
      reader.readAsDataURL(file);
    } else {
      preview.style.display = "none";
    }
  });
}

// Scoped plant name input suggestions
const plantNames = [
  "Monstera",
  "Sansevieria",
  "Fikus Benjamina",
  "Dracéna",
  "Chlorophytum",
  "Káva Arabica",
  "Avokádo",
  "Gerbera",
  "Aloe Vera",
  "Levandule",
  "Orchidej",
];

const plantNameInput = document.querySelector(".add-flower #plant-name");
const suggestionsList = document.querySelector(".add-flower #suggestions");

function filterPlantNames(query) {
  return plantNames.filter((plant) =>
    plant.toLowerCase().includes(query.toLowerCase())
  );
}

if (plantNameInput) {
  plantNameInput.addEventListener("input", (event) => {
    const query = event.target.value;
    const suggestions = filterPlantNames(query);

    if (suggestions.length > 0) {
      suggestionsList.innerHTML = suggestions
        .map((name) => `<li>${name}</li>`)
        .join("");
      suggestionsList.style.display = "block";
    } else {
      suggestionsList.style.display = "none";
    }
  });
}

if (suggestionsList) {
  suggestionsList.addEventListener("click", (event) => {
    if (event.target.tagName === "LI") {
      plantNameInput.value = event.target.textContent;
      suggestionsList.style.display = "none";
      updateRecommendations(event.target.textContent);
    }
  });
}

document.addEventListener("click", (event) => {
  if (!event.target.closest(".add-flower .form-group")) {
    suggestionsList.style.display = "none";
  }
});

// Scoped plant recommendations
const plantRecommendations = {
  Monstera: {
    watering: "Jednou týdně",
    light: "Jasné rozptýlené světlo",
    fertilizer: "Hnojit jednou měsíčně",
  },
};

const recommendationsDiv = document.querySelector(
  ".add-flower #plant-recommendations"
);
const wateringEl = document.querySelector(".add-flower #watering");
const lightEl = document.querySelector(".add-flower #light");
const fertilizerEl = document.querySelector(".add-flower #fertilizer");

function updateRecommendations(plant) {
  if (plantRecommendations[plant]) {
    const { watering, light, fertilizer } = plantRecommendations[plant];
    wateringEl.textContent = `Zalévání: ${watering}`;
    lightEl.textContent = `Osvětlení: ${light}`;
    fertilizerEl.textContent = `Hnojení: ${fertilizer}`;
    recommendationsDiv.style.display = "block";
  } else {
    recommendationsDiv.style.display = "none";
  }
}

// Scoped form submission
const submitFlower = document.querySelector(".add-flower .btn-submit");

if (submitFlower) {
  submitFlower.addEventListener("click", (event) => {
    event.preventDefault();

    const plantName = document
      .querySelector(".add-flower #plant-name")
      .value.trim();
    const plantType = document.querySelector(".add-flower #plant-type").value;
    const wateringFrequency = document
      .querySelector(".add-flower #watering-frequency")
      .value.trim();
    const needs = Array.from(
      document.querySelectorAll(".add-flower input[name='needs']:checked")
    ).map((checkbox) => checkbox.value);
    const image = document.querySelector(".add-flower #plant-image").files[0];

    if (!plantName || !plantType || !wateringFrequency) {
      alert("Vyplňte prosím všechny povinné údaje!");
      return;
    }

    const newPlant = {
      name: plantName,
      type: plantType,
      wateringFrequency: `${wateringFrequency} dny`,
      needs: needs.length > 0 ? needs.join(", ") : "Žádné specifické potřeby",
      image: image ? image.name : "Žádný obrázek nebyl přidán",
    };

    alert(`Rostlina "${newPlant.name}" byla úspěšně přidána!`);

    document.querySelector(".add-flower form").reset();
    document.querySelector(".add-flower #image-preview").style.display = "none";
  });
}
