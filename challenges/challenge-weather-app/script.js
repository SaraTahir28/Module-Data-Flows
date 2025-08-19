// Grab form and input elements
const form = document.getElementById("search");
const input = document.getElementById("search-tf");

// Main function to load weather + photos
async function loadWeather(city = "London") { // Default city = London
  try {
    // --- Fetch weather data ---
    const weatherResponse = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=2e5e2db9a9b8fc70be75b853fa6643d0`
    );

    if (!weatherResponse.ok) {
      throw new Error(`Weather fetch failed for ${city}`);
    }

    const weatherData = await weatherResponse.json();
    const description = weatherData.weather[0].description;
    console.log(`Weather in ${city}:`, description);

    // --- Fetch Unsplash images ---
    const unsplashUrl = `https://api.unsplash.com/search/photos?query=${description}&client_id=XCpKngsIAgBKYxOF37Ob9DLc7kIXMY66z2F2OuDj8nA`;
    const unsplashResponse = await fetch(unsplashUrl);

    if (!unsplashResponse.ok) {
      throw new Error("Unsplash fetch failed");
    }

    const unsplashData = await unsplashResponse.json();

    // --- Show main photo ---
    const mainPhoto = unsplashData.results[0]?.urls.regular;
    const photoContainer = document.getElementById("photo");

    if (mainPhoto) {
      photoContainer.innerHTML = `<img src="${mainPhoto}" alt="${description}">`;
    } else {
      photoContainer.innerHTML = `<p>No images found for "${description}"</p>`;
    }

    // --- Show thumbnails ---
    const thumbsContainer = document.getElementById("thumbs");
    thumbsContainer.innerHTML = ""; // clear previous thumbnails

    unsplashData.results.forEach((photo) => {
      const thumb = document.createElement("img");
      thumb.src = photo.urls.thumb;
      thumb.alt = description;
      thumb.classList.add("thumb");

      // Clicking a thumbnail updates the main photo
      thumb.addEventListener("click", () => {
        photoContainer.innerHTML = `<img src="${photo.urls.regular}" alt="${description}">`;
      });

      thumbsContainer.appendChild(thumb);
    });

  } catch (error) {
    console.error("Error fetching data:", error);

    // Show error in the UI
    document.getElementById("photo").innerHTML = `<p>Could not fetch weather for "${city}". Try another city.</p>`;
    document.getElementById("thumbs").innerHTML = "";
  }
}

// --- Form listener for city search ---
form.addEventListener("submit", (e) => {
  e.preventDefault(); // stop page reload
  const city = input.value.trim();
  if (city) {
    loadWeather(city);
  }
});

// --- Load default city on page load ---
loadWeather();
