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

//Connecting our search term to film title
//-- query Selector for input element
//link the input in the box and update search term state.
//--relate userinput value to film title.== filter results based on userinput ? :O





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

const input = document.querySelector("input")
input.addEventListener('keyup',function(){
  //update the search term
  state.searchTerm = input.value
  //filtering the films
  const filteredFilms = state.films.filter((function(film){
    //compare searchterm to filmtitle.
    return film.title.includes(state.searchTerm) //flexible approach to filtering so that even if userinputs part of the title we get results.
  }))
  console.log(filteredFilms)
})
//We can see the films are getting filtered now on our console but our UserIterface is not getting updated.

//The .filter() method creates a new array by keeping only the items for which the callback returns true.