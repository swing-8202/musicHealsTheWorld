//Event Listener 1 (EL1)
//User clicks to retrieve a list of the first 10 songs by artist from iTunes
//Event Listener 2 (EL2)
//User clicks on like and song stays on list
//Event Listener 3 (EL3)
//User clicks on disklike and song deletes from list


//Add comment about 'DOMContenetLoaded'
//document.addEventListener('DOMContentLoaded', init)

//Select html elements
const formArtistName = document.getElementById("form-artist-name")
const inputArtistName = document.getElementById("input-artist-name")

//Add event listener to the form
formArtistName.addEventListener('submit', handleSubmit)

function handleSubmit(event){
    event.preventDefault()
    const fetchURL = createFetchURL()
    fetch(fetchURL)
    .then(result => result.json())
    .then(json => console.log(json))
}

//Interpolate inputArtistName into URL to create fetchURL
//To test fetchURL const fetchURL = "https://itunes.apple.com/search?term=alexi+murdoch&entity=song&limit=10"
function createFetchURL(inputArtistName) {
    const fetchURLPrefix = "https://itunes.apple.com/search?term="
    const fetchURLSuffix = "&entity=song&limit=10"
    //Replace spaces with '+' for fetchURLArtistName
    //const fetchURLArtistName = inputArtistName.replace(" ", "+")
    const fetchURL = `${fetchURLPrefix} + ${inputArtistName} + ${fetchURLSuffix}`
    return fetchURL
}
