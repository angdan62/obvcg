import { getSpotifyData } from './apiSpotify.js';

const videosList = document.querySelectorAll(".videoIcon");
const videoShow = document.querySelector(".videoShow");
const panelImages = document.querySelectorAll(".panel");
const musicLink = document.querySelectorAll(".song")
const imageTotal=802;
const videosTotal=17;

// PARAMETROS DE INICIALIZACIÓN DE HTML

// getSong();
chargeRandomVideo();
chargeRandomImage();
// chargeRandomSong();
useSpotifyData();


// GENERAR NUMERO ALEATORIO
// AÑADIR VALIDACION PARA QUE NO SE REPITA EL NUMERO

function randomNumber(max){
    return Math.floor(Math.random() * (max-1));
}



// CARGAR IMAGEN ALEATORIAMENTE AL HTML

function chargeRandomImage(){
    panelImages.forEach(panel => {
        let randomImage = randomNumber(imageTotal);
        panel.setAttribute('style', `background-image: url('../resources/home/galery/img_${randomImage}.jpg'`);
    })
}



// CARGAR VIDEO ALEATORIAMENTE AL HTML

function chargeRandomVideo(){
    videosList.forEach(video => {
        let randomVideo= randomNumber(videosTotal);
        video.addEventListener("click", () =>{
            playVideo(randomVideo)        
        })
    });
}


// https://drive.google.com/file/d/1LnzAOdVHDHRij-FZv9pEIsDw8c8e7b5d/view?usp=drive_link
function playVideo(video){
    videoShow.innerHTML=`<video class="videoPlay"  controls autoplay> 
            <source src="../resources/home/videos/video_${video}.mp4" type="video/mp4">   
        </video>`
//     videoShow.innerHTML = `
//     <video class="videoPlay" controls autoplay>
//         <source src="https://drive.google.com/uc?id=1LnzAOdVHDHRij-FZv9pEIsDw8c8e7b5d" type="video/mp4">
//         Tu navegador no soporta videos HTML5.
//     </video>
// `;
}

// CARGAR MUSICA ALEATORIAMENTE AL HTML

function chargeRandomSong(listSong){
    musicLink.forEach(song => {
        let randomSong = randomNumber(listSong.length)
        song.setAttribute("href", `${listSong[randomSong]}`);
    });
}

async function useSpotifyData() {
    const data = await getSpotifyData();
    let listSong = [];
    if (data) {
        for(let i=0; i< data.items.length; i++){
            // let songApi = data.items[i].track.uri;
            let songApi = data.items[i].track.uri.replace("spotify:track:", "https://open.spotify.com/intl-es/track/");
            listSong[i] = songApi;
        }
        chargeRandomSong(listSong);
    }
}


// CONTROLES PARA MANEJO DE PANELES EN LA SECCION DE GALERIA


const panels = document.querySelectorAll('.panel')


panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses(panels)
        panel.classList.add('active')
    })
})

function removeActiveClasses(panel) {
    panel.forEach(p => {
        if(p.classList.contains('active')){
            p.classList.remove('active');
        }
    })
}
