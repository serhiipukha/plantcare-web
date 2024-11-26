document.getElementById("plant-image").addEventListener("change", function (event) {
    const preview = document.getElementById("image-preview");
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
    "Orchidej"
  ];
  
  const plantNameInput = document.getElementById("plant-name");
  const suggestionsList = document.getElementById("suggestions");
  
  function filterPlantNames(query) {
    return plantNames.filter((plant) =>
      plant.toLowerCase().includes(query.toLowerCase())
    );
  }
  
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
  
  suggestionsList.addEventListener("click", (event) => {
    if (event.target.tagName === "LI") {
      plantNameInput.value = event.target.textContent; 
      suggestionsList.style.display = "none"; 
      updateRecommendations(event.target.textContent);
    }
  });
  

  document.addEventListener("click", (event) => {
    if (!event.target.closest(".form-group")) {
      suggestionsList.style.display = "none";
    }
  });
  

  const plantRecommendations = {
    "Monstera": {
      watering: "Jednou týdně",
      light: "Jasné rozptýlené světlo",
      fertilizer: "Hnojit jednou měsíčně"
    },
    "Sansevieria": {
      watering: "Jednou za dva týdny",
      light: "Mírné světlo",
      fertilizer: "Hnojit jednou za dva měsíce"
    },
    "Fikus Benjamina": {
      watering: "Jednou týdně",
      light: "Jasné světlo",
      fertilizer: "Hnojit každé tři týdny"
    },
    "Dracéna": {
      watering: "Jednou týdně",
      light: "Polostín",
      fertilizer: "Hnojit jednou měsíčně"
    },
    "Chlorophytum": {
      watering: "Jednou týdně",
      light: "Jasné rozptýlené světlo",
      fertilizer: "Hnojit jednou měsíčně"
    },
    "Káva Arabica": {
      watering: "Dvakrát týdně",
      light: "Jasné nepřímé světlo",
      fertilizer: "Hnojit každé dva týdny speciálním hnojivem"
    },
    "Avokádo": {
      watering: "Jednou za tři dny",
      light: "Jasné světlo",
      fertilizer: "Hnojit jednou za měsíc"
    },
    "Gerbera": {
      watering: "Každé dva dny",
      light: "Jasné slunečné místo",
      fertilizer: "Hnojit každé dva týdny"
    },
    "Aloe Vera": {
      watering: "Jednou za dva týdny",
      light: "Přímé slunce",
      fertilizer: "Hnojit jednou za měsíc"
    },
    "Levandule": {
      watering: "Jednou týdně",
      light: "Přímé slunce",
      fertilizer: "Hnojit jednou za měsíc"
    },
    "Orchidej": {
      watering: "Namáčet kořeny jednou týdně",
      light: "Jasné rozptýlené světlo",
      fertilizer: "Hnojit každé dva týdny speciálním hnojivem"
    }
  };
  

  const input = document.getElementById("plant-name");
  const suggestions = document.getElementById("suggestions");
  const recommendationsDiv = document.getElementById("plant-recommendations");
  const wateringEl = document.getElementById("watering");
  const lightEl = document.getElementById("light");
  const fertilizerEl = document.getElementById("fertilizer");
  
  
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

  document.querySelector(".btn-submit").addEventListener("click", (event) => {
    event.preventDefault(); 
  
  
    const plantName = document.getElementById("plant-name").value.trim();
    const plantType = document.getElementById("plant-type").value;
    const wateringFrequency = document.getElementById("watering-frequency").value.trim();
    const needs = Array.from(document.querySelectorAll("input[name='needs']:checked")).map(
      (checkbox) => checkbox.value
    );
    const image = document.getElementById("plant-image").files[0];
  
    
    if (!plantName || !plantType || !wateringFrequency) {
      alert("Vyplňte prosím všechny povinné údaje!"); 
      return;
    }
  
    
    const newPlant = {
      name: plantName,
      type: plantType,
      wateringFrequency: `${wateringFrequency} dny`,
      needs: needs.length > 0 ? needs.join(", ") : "Žádné specifické potřeby",
      image: image ? image.name : "Žádný obrázek nebyl přidán"
    };
  
    
    console.log("Nová rostlina byla přidána:", newPlant);
  
    
    alert(`Rostlina "${newPlant.name}" byla úspěšně přidána!`);
  
    
    document.querySelector("form").reset();
    document.getElementById("image-preview").style.display = "none";
  });
  