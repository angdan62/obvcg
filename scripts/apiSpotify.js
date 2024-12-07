// const playlistID ="3QMV90TUzT1JXQEj0op0bK";
// const playlistID ="2Gb52B4hTIA8XEvgCKipJL";
const playlistID ="1pi6skwJ8FxLt2lLiEXdX5";



const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '6d43daf606msh5e519f4689a8d04p1863d1jsne033c52d5166',
      'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
    }
  };

export async function getSpotifyData() {
    try{
        let url =  `https://spotify23.p.rapidapi.com/playlist_tracks/?id=${playlistID}&offset=0&limit=100`;
        let res = await fetch(url, options);
        const data = await res.json();
        return data;
        // console.log(data)
        // let index = 0;
        // console.log(data.items[index].track.uri)
    }catch(error){  
        console.error(`Upss error ${error}`)
    }
}

// getSong();
