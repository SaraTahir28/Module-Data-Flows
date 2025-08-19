async function loadWeather() {
  try {
    //Fetch weather data
    const weatherResponse = await fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=London&APPID=2e5e2db9a9b8fc70be75b853fa6643d0"
    );

    if (!weatherResponse.ok) {
      throw new Error("Network is not responding");
    }

    const weatherData = await weatherResponse.json();
    const description = weatherData.weather[0].description;
    console.log("Weather description:", description);

    //Fetch Unsplash images based on the weather description
    const unsplashUrl = `https://api.unsplash.com/search/photos?query=${description}&client_id=XCpKngsIAgBKYxOF37Ob9DLc7kIXMY66z2F2OuDj8nA`;

    const unsplashResponse = await fetch(unsplashUrl);
    if (!unsplashResponse.ok) {
      throw new Error("Unsplash fetch failed");
    }

    const unsplashData = await unsplashResponse.json();
    console.log("Unsplash images:", unsplashData.results); // array of image objects

  const mainPhoto = unsplashData.results[0].urls.regular;
  document.getElementById("photo").innerHTML = `<img src="${mainPhoto}" alt="${description}">`;
  const thumbsContainer = document.getElementById("thumbs");
  thumbsContainer.innerHTML = ""; // clear previous thumbnails

  unsplashData.results.forEach((photo) => {
  const thumb = document.createElement("img");
  thumb.src = photo.urls.thumb;
  thumb.alt = description;
  thumb.classList.add("thumb"); // optional, for styling

  // When thumbnail is clicked, update the main photo
  thumb.addEventListener("click", () => {
    document.getElementById("photo").innerHTML = `<img src="${photo.urls.regular}" alt="${description}">`;
  });

  thumbsContainer.appendChild(thumb);
});
} 
catch(error) {
    console.error("Error fetching data:", error);
  }
}

loadWeather();