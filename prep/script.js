
const films = [
    {
  title: "Killing of Flower Moon",
  director: "Martin Scorsese",
  times: ["15:35"],
  certificate: "15",
  duration: 112,
},
  {
    title: "Typist Artist Pirate King",
    director: "Carol Morley",
    times: ["15:00", "20:00"],
    certificate: "12A",
    duration: 108,
  }];



//How we go through each object in the array and create a card for each object/film.

function createFilmCard(film){
    const filmCard = document
    .getElementById("film-card-template")
    .content.cloneNode(true);
filmCard.querySelector("h3").textContent = film.title;
filmCard.querySelector("p").textContent = film.director;


//not interested in appending the filmCard to DOM here
return filmCard
}

const filmCards = films.map(createFilmCard);
document.body.append(...filmCards);

//document.body.append(createFilmCard(),createFilmCard())

//document.body.append(createFilmCard(films),createFilmCard(film))
 