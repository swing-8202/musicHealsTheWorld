//Event Listener 1 (EL1)
//User clicks to retrieve a list of the first 10 songs by artist from iTunes
//Event Listener 2 (EL2)
//User clicks on like and song stays on list
//Event Listener 3 (EL3)
//User clicks on disklike and song deletes from list


//Add comment about 'DOMContenetLoaded'
//document.addEventListener('DOMContentLoaded', init)

//Variable fetchURL prework via iTunes API website
const fetchURLPrefix = "https://itunes.apple.com/search?term="
const fetchURLSuffix = "&entity=song&limit=10"

//Select html elements
const formArtistName = document.getElementById("form-artist-name")
const inputArtistName = document.getElementById("input-artist-name")

//Add event listener to the form
formArtistName.addEventListener('submit', handleSubmit)

function handleSubmit(event){
    event.preventDefault()
    fetch(fetchURLPrefix + inputArtistName.value + fetchURLSuffix)
    .then(res => res.json())
    //.then(json => console.log(json))
    .then(retrieveSongs)
}

function retrieveSongs(data) {
    console.log(data)
}

