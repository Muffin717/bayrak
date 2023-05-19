// flags.js
const countryFlags = {
  "Argentina": "argentina.png",
  "Brazil": "brazil.png",
  "France": "france.png",
  "Azerbaijan": "azerbaijan.png",
  "Belgium": "belgium.png",
  "Bulgaria": "bulgaria.png",
  "China": "china.png",
  "Egypt": "egypt.png",
  "Estonia": "estonia.png",
  "Finland": "finland.png",
  "Germany": "germany.png",
  "Greece": "greece.png",
  "Honduras": "honduras.png",
  "Haiti": "haiti.png",
  "Iceland": "iceland.png",
  "Israel": "israel.png",
  "Jamaica": "jamaica.png",
  "Japan": "japan.png",
  "Kuwait": "kuwait.png",
  "Kyrgyzstan": "kyrgyzstan.png",
  "Lebanon": "lebanon.png",
  "Lithuania": "lithuania.png",
  "CAR": "car.png",
  "Chile": "chile.png",
  "Hungary": "hungary.png",
  "Jordan": "jordan.png",
  "Madagascar": "madagascar.png",
  "New Zealand": "new_zealand.png",
  "Nigeria": "nigeria.png",
  "Norway": "norway.png",
  "Pakistan": "pakistan.png",
  "Portugal": "portugal.png",
  "Romania": "romania.png",
  "Russia": "russia.png",
  "Serbia": "serbia.png",
  "Slovakia": "slovakia.png",
  "Tunisia": "tunisia.png",
  "Turkey": "turkiye.png",
  "Uganda": "uganda.png",
  "Ukraine": "ukraine.png",
  "Uzbekistan": "uzbekistan.png",
  "Vatican City": "vatican.png",
  "Vietnam": "vietnam.png",
  "Zambia": "zambia.png",
  "Zimbabwe": "zimbabwe.png",
  "KKTC": "kktc.png"
  };
  

  // script.js

// Retrieve the flag container and flag image elements from the HTML
const flagContainer = document.getElementById("flag-container");
const flagImage = document.getElementById("flag-image");

// Randomly select a flag from the countryFlags mapping
const countries = Object.keys(countryFlags);
const randomCountry = countries[Math.floor(Math.random() * countries.length)];
const flagFileName = countryFlags[randomCountry];

// Update the flag image source
flagImage.src = flagFileName;
flagImage.alt = randomCountry;

// Output the country name for testing purposes
console.log("Country: ", randomCountry);


// script.js

// Initialize the Leaflet map
const map = L.map("map").setView([0, 0], 2); // Set the initial center and zoom level

// Add a tile layer to the map
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
  backgroundColor: '#0e1720'
}).addTo(map);


// script.js

// Sample dataset of country coordinates (latitude and longitude)
const countryCoordinates = {
    "Argentina": [-34.6037, -58.3816],
    "Brazil": [-15.7801, -47.9292],
    "France": [48.8566, 2.3522],
    "Azerbaijan": [40.4093, 49.8671],
    "Belgium": [50.8503, 4.3517],
    "Bulgaria": [42.6977, 23.3219],
    "China": [39.9042, 116.4074],
    "Egypt": [30.0444, 31.2357],
    "Estonia": [59.4370, 24.7536],
    "Finland": [60.1699, 24.9384],
    "Germany": [52.5200, 13.4050],
    "Greece": [37.9838, 23.7275],
    "Honduras": [14.0818, -87.2068],
    "Haiti": [18.5944, -72.3074],
    "Iceland": [64.1466, -21.9426],
    "Israel": [31.7683, 35.2137],
    "Jamaica": [18.1096, -77.2975],
    "Japan": [35.6895, 139.6917],
    "Kuwait": [29.3759, 47.9774],
    "Kyrgyzstan": [42.8746, 74.5698],
    "Lebanon": [33.8886, 35.4955],
    "Lithuania": [54.6872, 25.2797],
    "CAR": [4.3947, 18.5582],
    "Chile": [-33.4569, -70.6483],
    "Hungary": [47.4979, 19.0402],
    "Jordan": [31.9522, 35.2332],
    "Madagascar": [-18.8792, 47.5079],
    "New Zealand": [-41.2865, 174.7762],
    "Nigeria": [9.0765, 7.3986],
    "Norway": [59.9139, 10.7522],
    "Pakistan": [33.6844, 73.0479],
    "Portugal": [38.7223, -9.1393],
    "Romania": [44.4268, 26.1025],
    "Russia": [55.7512, 37.6184],
    "Serbia": [44.7866, 20.4489],
    "Slovakia": [48.1486, 17.1077],
    "Tunisia": [36.8065, 10.1815],
    "Turkey": [39.9334, 32.8597],
    "Uganda": [0.3476, 32.5825],
    "Ukraine": [50.4501, 30.5234],
    "Uzbekistan": [41.3775, 64.5853],
    "Vatican City": [41.9029, 12.4534],
    "Vietnam": [21.0285, 105.8542],
    "Zambia": [-15.4167, 28.2833],
    "Zimbabwe": [-17.8292, 31.0522],
    "KKTC": [35.1856, 33.3823]
  };
  
  // Function to mark the country on the map
  function markCountryOnMap(country, coordinates) {
    L.marker(coordinates).addTo(map).bindPopup(country).openPopup();
  }
  
  // Iterate over the countryCoordinates dataset and mark each country on the map
  for (let country in countryCoordinates) {
    markCountryOnMap(country, countryCoordinates[country]);
  }

  
  // script.js

// ...

function markCountryOnMap(country, coordinates) {
    const marker = L.marker(coordinates).addTo(map).bindPopup(country).openPopup();
  
    // Event listener for marker click
    marker.on("click", function () {
      validateSelection(country);
    });
  }
  
  // ...

  
  // script.js

// ...

function validateSelection(selectedCountry) {
    const correctCountry = flagImage.alt;
  
    if (selectedCountry === correctCountry) {
      console.log("Doğru!");
      // Handle correct answer logic
    } else {
      console.log("Yanlış bildin, tekrar dene!");
      // Handle incorrect answer logic
    }
  
    // Display feedback to the user and update score/progress as needed
  }
  
  // ...

  
  // script.js

// ...

function validateSelection(selectedCountry) {
    const correctCountry = flagImage.alt;
    const feedbackContainer = document.getElementById("feedback-container");
  
    if (selectedCountry === correctCountry) {
      feedbackContainer.textContent = "Doğru!";
      feedbackContainer.classList.remove("incorrect");
      feedbackContainer.classList.add("correct");
      // Handle correct answer logic
    } else {
      feedbackContainer.textContent = "Yanlış bildin, tekrar dene!";
      feedbackContainer.classList.remove("correct");
      feedbackContainer.classList.add("incorrect");
      // Handle incorrect answer logic
    }
  
    // Display feedback to the user and update score/progress as needed
  }
  
  // ...

  
  // script.js

// ...

function validateSelection(selectedCountry) {
    const correctCountry = flagImage.alt;
    const feedbackContainer = document.getElementById("feedback-container");
  
    if (selectedCountry === correctCountry) {
      feedbackContainer.textContent = "Doğru!";
      feedbackContainer.classList.remove("incorrect");
      feedbackContainer.classList.add("correct");
      // Handle correct answer logic
    } else {
      feedbackContainer.textContent = "Yanlış bildin, tekrar dene!";
      feedbackContainer.classList.remove("correct");
      feedbackContainer.classList.add("incorrect");
      // Handle incorrect answer logic
    }
  
    // Update flag and map for the next round
    const countries = Object.keys(countryFlags);
    const randomCountry = countries[Math.floor(Math.random() * countries.length)];
    const flagFileName = countryFlags[randomCountry];
    flagImage.src = flagFileName;
    flagImage.alt = randomCountry;
  
    // Output the country name for testing purposes
    console.log("Country: ", randomCountry);
  }
  
  // ...
  