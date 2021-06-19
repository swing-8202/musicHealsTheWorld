//Event Listener 1 (EL1)
//User clicks to retrieve a 8 song genres in alphabetical order (8 is my lucky number)
//Event Listener 2 (EL2)
//User clicks on like and song stays on list
//Event Listener 3 (EL3)
//User clicks on disklike and song deletes from list


//Add comment about 'DOMContenetLoaded'
//document.addEventListener('DOMContentLoaded', init)

//Select html elements
const formArtistName = document.getElementById("form-artist-name")
const inputArtistName = document.getElementById("input-artist-name")

//Add event listener to the form - 2 parts


//Manipulate inputArtistName to obtain fetchURL
function fetchURLAddress(inputArtistName) {
        const fetchURLPrefix = "https://itunes.apple.com/search?term="
        const fetchURLSuffix = "&entity=song&limit=10"
        //Replace spaces with '+' for fetchURL
        const fetchURLArtist = inputArtistName.replaceAll(/ /g, "+")
        return `${fetchURLPrefix} + ${fetchURLArtist} + ${fetchURLSuffix}`
    }
//Add event listener to the form
formArtistName.addEventListener('submit', handleSubmit)

function handleSubmit(event){
    event.preventDefault()
    const fetchURL = fetchURLAddress()
    fetch(fetchURL)
    .then(res => res.json())
    .then(json => console.log(json))
}
