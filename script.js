//You can edit ALL of the code here
let cardsContainer = document.getElementById("cards-conatiner");
let serachInput = document.getElementById("search");
let searchLength = document.getElementById("searchLength");
let selectedMovieContainer= document.getElementById("selectedMovie");
let selectMovie =  document.createElement("select");
let selectedEpisodShow= document.getElementById("selected-Episod-show");
selectMovie.className="select-width";
let n = 0;

  
let allEpisodes=[];
console.log(allEpisodes);
let searchArray=[];
setup();
selectMoviefunction();
// selectMoviefunction();
function setup() {
   allEpisodes = getAllEpisodes();
    makePageForEpisodes(allEpisodes);
}

function makePageForEpisodes(episodeList) {
  const rootElem = document.getElementById("root");
  rootElem.textContent = `Got ${episodeList.length} episode(s)`;
}

showEpisod(allEpisodes);
function showEpisod(array){

  array.forEach(element =>{
   let counetr = 0;
    creatCard(element);
    counetr++;
  })
  console.log(array.length);
}


function creatCard(element){
  
  let card=document.createElement("div");
  card.className="card";
  let imgMovie=document.createElement("img");
  imgMovie.className="img-movie";
  let episodName = document.createElement("h2");
  let episodNumber = document.createElement("h2");
  let seasonNumber = document.createElement("h2");
  let episodSummery = document.createElement("h2");
  let watchButton = document.createElement("button");
  let anchorButton = document.createElement("a");
  watchButton.innerText="Watch";
 

  episodName.innerText = element.name;
  imgMovie.src=element.image.medium;
  episodSummery.innerHTML=element.summary;
  anchorButton.href=element.url;
  

  card.appendChild(episodName);
  card.appendChild(imgMovie);
  card.appendChild(episodSummery);
  card.appendChild(seasonNumber);
  card.appendChild(episodNumber);
  card.appendChild(episodSummery);
  watchButton.appendChild(anchorButton);
  card.appendChild(watchButton);
  cardsContainer.appendChild(card);

}
serachInput.addEventListener('keyup',(e)=>{
  const searchString = e.target.value.toLowerCase();
  console.log(searchString);
  if(searchString.split('')!=''){
    const searchArray =allEpisodes.filter(character =>{
    return(character.name.toLowerCase().includes(searchString)|| 
    character.summary.toLowerCase().includes(searchString));
   
   
  });
  searchLength.classList.remove("searchInput-block");
  searchLength.classList.add("searchInput-run");

  searchLength.textContent = `Got ${searchArray.length} / 73 episode(s)`;

  showEpisod(searchArray);

  }else{
    showEpisod(allEpisodes);
    searchLength.classList.remove("searchInput-run");
    searchLength.classList.add("searchInput-block");
   
  }
});

window.onload = setup;
function selectMoviefunction(){
  
  setup();

  allEpisodes.forEach(element => {
    creatOption(element);
  });
  selectedMovieContainer.appendChild(selectMovie);

} 

function creatOption(element){
  let movieOption = document.createElement("option"); 

  movieOption.value=element.name;
  movieOption.innerText=element.name;
  console.log(movieOption.value);
  movieOption.className="selected";
  
  selectMovie.appendChild(movieOption);
  
}
selectMovie.addEventListener('change', selected=>{
    console.log(selected.target.value);
    allEpisodes.forEach(element=>{
      if(selected.target.value == element.name){
        creatCardEpisod(element);
      }})
      cardsContainer.style.display="none";
      
  
  });
  function creatCardEpisod(element)
  {
    let card=document.createElement("div");
  card.className="card";
  let imgMovie=document.createElement("img");
  imgMovie.className="img-movie";
  let episodName = document.createElement("h2");
  let episodNumber = document.createElement("h2");
  let seasonNumber = document.createElement("h2");
  let episodSummery = document.createElement("h2");
  let watchButton = document.createElement("button");
  let anchorButton = document.createElement("a");
  watchButton.innerText="Watch";
 

  episodName.innerText = element.name;
  imgMovie.src=element.image.medium;
  episodSummery.innerHTML=element.summary;
  anchorButton.href=element.url;
  

  card.appendChild(episodName);
  card.appendChild(imgMovie);
  card.appendChild(episodSummery);
  card.appendChild(seasonNumber);
  card.appendChild(episodNumber);
  card.appendChild(episodSummery);
  watchButton.appendChild(anchorButton);
  card.appendChild(watchButton);
  selectedMovieContainer.appendChild(card);

  }