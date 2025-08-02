//working on API now

 
const state = {
  films:[],
  searchTerm: "",
};
//fetch get the url of the server where the data is hosted.
const films = fetch("http://localhost:9090/films")
console.log(films,"films") //films is a promise object
//we can use promises to access data when an event has been successful.

function createFilmCard(film){
    const filmCard = document
    .getElementById("film-card-template")
    .content.cloneNode(true);
filmCard.querySelector("h3").textContent = film.title;
filmCard.querySelector("p").textContent = film.director;
return filmCard
}

const container = document.createElement("div");
container.id = "film-container";

//render function 
function render(filmList){
container.textContent= ""
const filmCards = filmList.map(createFilmCard);
container.append(...filmCards);

}



const input = document.querySelector("input"); 

input.insertAdjacentElement("afterend", container);
input.addEventListener('keyup',function(){
  //update the search term
  state.searchTerm = input.value
  //filtering the films
  const filteredFilms = state.films.filter((function(film){
    //compare searchterm to filmtitle.
    return film.title.toLowerCase().includes(state.searchTerm.toLowerCase()) //flexible approach to filtering so that even if userinputs part of the title we get results.
  }))
  render(filteredFilms)
  console.log(filteredFilms)
})
render(state.films)
//We can see the films are getting filtered now on our console but our UserIterface is not getting updated.

//The .filter() method creates a new array by keeping only the items for which the callback returns true.