//Event Listener 1 (EL1)
//User clicks to retrieve a list of the first 10 songs by artist from iTunes
//Event Listener 2 (EL2)
//User clicks on like and song stays on list
//Event Listener 3 (EL3)
//User clicks on disklike and song deletes from list


//added js script src to end of index.html body
//document.addEventListener('DOMContentLoaded', init)

//Variable fetchURL prework via iTunes API website
//To test fetch = "https://itunes.apple.com/search?term=alexi+murdoch&entity=song&limit=4"
const fetchURLPrefix = "https://itunes.apple.com/search?term="
const fetchURLSuffix = "&entity=song&limit=4"

//Select html elements
const formArtistName = document.getElementById("form-artist-name")
const inputArtistName = document.getElementById("input-artist-name")
const list = document.getElementById("list")

//Add event listener to the form
formArtistName.addEventListener('submit', handleSubmit)

function handleSubmit(event){
    event.preventDefault()
    fetch(fetchURLPrefix + inputArtistName.value + fetchURLSuffix)
    .then(res => res.json())
    .then(retrieveSongs)

}

function retrieveSongs(data) {
    console.log(data)
    const songs = data['results']
    songs.forEach(song => {
        const newLi = document.createElement('li')
        newLi.innerHTML = `<h3>${song['trackName']}</h3>`
        document.getElementById("list").append(newLi)
        document.getElementById("form-artist-name").reset()
        const heart = document.createElement('i')
        heart.classList.add("fa", "fa-heart")
        heart.setAttribute("id", "heart")
        newLi.append(heart)
    })
}

function reset() {
    const resetList = document.getElementById("list")
    resetList.innerHTML = ''
}

/*
//Add heart to list
<i class="fa fa-heart" id="heart"></i>
function() {
    const heart = document.getElementById('heart');
    heart.addEventListener('click', function() {
        heart.classList.toggle('red');
    });
}
*/
