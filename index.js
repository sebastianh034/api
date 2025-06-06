const SONGS = "https://binaryjazz.us/wp-json/genrenator/v1/genre/"

async function getSongGenre() {
    try{
        const response = await fetch(SONGS);
        if (!response.ok){
            console.error("cant fetch songs");
            return;
        }
            const song = await response.json();
            console.log("genre", song)
        }catch(error){
            console.log("error fetching song", error)
        }

}

getSongGenre();