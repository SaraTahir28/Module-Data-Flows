
console.log("hello world")
const film = {
  title: "Killing of Flower Moon",
  director: "Martin Scorsese",
  times: ["15:35"],
  certificate: "15",
  duration: 112,
};
console.log(film, "......<---film")


//Render a film card in userinterface.
//create a film card = section
//create a title element.
//append title to the filmcard
//append filmcard to the DOM.
const filmCard = document.createElement('section');
const title = document.createElement("h1");
const director = document.createElement("p");
title.textContent = film.title;
director.textContent = film.director;
filmCard.appendChild(title)
filmCard.appendChild(director)


console.log(filmCard)
console.log(document.body)
document.body.appendChild(filmCard);
