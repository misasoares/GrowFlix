const growcastVideos = document.getElementById("growcastVideos")
const webinarVideos = document.getElementById("webinarVideos")
const jornadaVideos = document.getElementById("jornadaVideos")
const diversosVideos = document.getElementById("diversosVideos")

function renderGrowcast(){

    let html = ''

    growCastmovies.forEach(item => {
        html += `
        <div class="col-12 col-md-3 d-flex justify-content-center">
            <div class="card m-2" ">
                <img src="${item.img}" class="card-img-top "  alt="...">    
                    <p class="fs-6 bg-black text-light titleHiden">
                    <button onclick="abrirMovieModal('${item.link}')" class="mt-1 mb-1"> <i class="fa-regular fa-circle-play fs-2"></i> </button>${item.title}</p>
            </div>
        </div>
        `
    })
    
    growcastVideos.innerHTML = html
}

renderGrowcast();

function renderWebinar(){

    let html = ''

    webinarMovies.forEach(item => {
        html += `
        <div class="col-12 col-md-3 d-flex justify-content-center">
            <div class="card m-2" ">
                <img src="${item.img}" class="card-img-top "  alt="...">    
                    <p class="fs-6 bg-black text-light titleHiden">
                    <button onclick="abrirMovieModal('${item.link}')" class="mt-1 mb-1"> <i class="fa-regular fa-circle-play fs-2"></i> </button>${item.title}</p>
            </div>
        </div>
        `
    })

    webinarVideos.innerHTML = html
}

renderWebinar();

function renderJornada(){
    
    let html = ''

    jornadaMovies.forEach(item => {
        html += `
        <div class="col-12 col-md-3 d-flex justify-content-center">
            <div class="card m-2" ">
                <img src="${item.img}" class="card-img-top "  alt="...">    
                    <p class="fs-6 bg-black text-light titleHiden">
                    <button onclick="abrirMovieModal('${item.link}')" class="mt-1 mb-1"> <i class="fa-regular fa-circle-play fs-2"></i> </button>${item.title}</p>
            </div>
        </div>
        `
    })

    jornadaVideos.innerHTML = html
}

renderJornada()

function renderDiversos(){

    let html = ''

    diversosMovies.forEach(item => {
        html+= `
        <div class="col-12 col-md-3 d-flex justify-content-center">
            <div class="card m-2" ">
                <img src="${item.img}" class="card-img-top "  alt="...">    
                    <p class="fs-6 bg-black text-light titleHiden">
                    <button onclick="abrirMovieModal('${item.link}')" class="mt-1 mb-1"> <i class="fa-regular fa-circle-play fs-2"></i> </button>${item.title}</p>
            </div>
        </div>
        `
    })

    diversosVideos.innerHTML = html
}
renderDiversos()


let movie = document.getElementById("bodyModal")
let modalFrame = document.getElementById("movieSrc")

function abrirMovieModal(item){

    movieModal.show();
    console.log(item)
    modalFrame.setAttribute("src", `${item}`)
    
  }

