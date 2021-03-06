//You can edit ALL of the code here
let allEpisodUrl = "https://api.tvmaze.com/shows/82/episodes";
let EpisodContainer = document.getElementById("all-episods");
let movieEpisode = document.getElementById("movie-episode");
let searchMovie = document.getElementById("search-movie");
let serchedEpisode = document.getElementById("serched-episode");
let allEpisodArray = [];
let searcedCounter = 0;
function setup() {
  const allEpisodes = getAllEpisodes();
  makePageForEpisodes(allEpisodes);
}

function makePageForEpisodes(episodeList) {
  const rootElem = document.getElementById("root");
  rootElem.textContent = `Got ${episodeList.length} episode(s)`;
}
getAllEpisode();
function getAllEpisode() {
  fetch(allEpisodUrl)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      createCard("EpisodContainer", data);
      data.forEach((element) => {
        allEpisodArray.push(element);
      });
    })
    .catch((error) => {
      alert(error);
    });
}
function createCard(container, array) {
  array.map((element) => {
    let card = document.createElement("div"); //container
    card.className = "card-container";
    let episodName = document.createElement("h2"); //name+season+episode
    let episodSummary = document.createElement("div"); //summary
    let episodImg = document.createElement("img"); //image
    episodImg.className = "img-style";
    let season, number;
    if (element.season < 10) {
      season = `0${element.season}`;
    } else {
      season = `${element.season}`;
    }
    if (element.number < 10) {
      number = `0${element.number}`;
    } else {
      number = `${element.number}`;
    }
    episodName.innerText = `${element.name} - S${season}E${number}`;
    episodSummary.innerHTML = element.summary;
    episodImg.src = element.image.medium;

    card.appendChild(episodName);
    card.appendChild(episodImg);
    card.appendChild(episodSummary);
    if (container == "EpisodContainer") {
      EpisodContainer.appendChild(card);
      //  EpisodContainer.style.display="block";
    } else if (container == "serchedEpisode") {
      if (searcedCounter == 0) {
        serchedEpisode.appendChild(card);
        EpisodContainer.style.display = "none";
        console.log("s");
      } else {
        searcedCounter = 0;
      }
    }
  });
}
searchMovie.addEventListener("keyup", (e) => {
  const searchString = e.target.value.toLowerCase();
  if (searchString.trim("") != "") {
    const searchArray = allEpisodArray.filter((character) => {
      return (
        character.name.toLowerCase().includes(searchString) ||
        character.summary.toLowerCase().includes(searchString)
      );
    });
    console.log(searchArray);
   
      createCard("serchedEpisode",searchArray);
  

    searcedCounter++;
  }
});
window.onload = setup;
