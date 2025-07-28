/*Given a view of film cards and search box
When a user types in the search box
Then the view should update to show only matching films.
*/


//we need access to user input
//Event listener for user input

//State- Data that can change over time. 
//---Our Films Array---
//__ Our Search term/bar---

 
const state = {
  films:[

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
  },

    {
    title: "Friends",
    director: "Shauna",
    times: ["15:00", "20:00"],
    certificate: "12A",
    duration: 108,
  },
    {
    title: "The Rookie",
    director: "Madisson",
    times: ["15:00", "20:00"],
    certificate: "12A",
    duration: 108,
  }
],
  searchTerm:"",
};


//State- Data that can change over time. 
//---Our Films Array---
//__ Our Search term/bar---




function createFilmCard(film){
    const filmCard = document
    .getElementById("film-card-template")
    .content.cloneNode(true);
filmCard.querySelector("h3").textContent = film.title;
filmCard.querySelector("p").textContent = film.director;



return filmCard
}
//render function 
function render(){
const filmCards = state.films.map(createFilmCard);
document.body.append(...filmCards);

}
render();

