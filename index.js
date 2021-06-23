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

//Select html elements - changed or moved to code below
//const inputArtistName = document.getElementById("input-artist-name")
//const formArtistName = document.getElementById("form-artist-name")
//const list = document.getElementById("list")

//Add event listener to the form
const formArtistName = document.getElementById("form-artist-name")
formArtistName.addEventListener('submit', handleSubmit)

function handleSubmit(event){
    event.preventDefault()
    const inputArtistName = document.getElementById("input-artist-name")
    fetch(fetchURLPrefix + inputArtistName.value + fetchURLSuffix)
    .then(res => res.json())
    .then(retrieveSongs)
}

function retrieveSongs(data) {
    console.log(data)
    const songs = data['results']
    songs.forEach(song => {
        
        const newDiv = document.createElement('div')
        newDiv.innerHTML = `
                            <p>${song['trackName']}</p>
                            <p id="heart-like" onclick="heartLike()">&#x1F394</p>
                        `
        
        document.getElementById("song-list").appendChild(newDiv)

        document.getElementById("form-artist-name").reset()
        
    })
}

function reset() {
    const resetNewDiv = document.getElementById("song-list")
    resetNewDiv.innerHTML = ''
}

function heartLike() {
    document.getElementById("heart-like").style.color = "red"
}

