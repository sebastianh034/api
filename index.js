const SONGS = "https://binaryjazz.us/wp-json/genrenator/v1/genre/"
const text = document.getElementById("genre")
const button = document.getElementById("button")

async function getSongGenre() {

    try{
        const response = await fetch(SONGS);
        text.innerHTML = "test"
        if (!response.ok){
            console.error("cant fetch songs");
            return;
        }
            const song = await response.json();
            console.log("genre", song)
            text.innerHTML = song

        }catch(error){
            console.log("error fetching song", error)
        }

}

button.addEventListener("click", getSongGenre);