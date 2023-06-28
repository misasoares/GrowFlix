const growcastVideos = document.getElementById("growcastVideos")
const webinarVideos = document.getElementById("webinarVideos")
const jornadaVideos = document.getElementById("jornadaVideos")
const diversosVideos = document.getElementById("diversosVideos")

function renderGrowcast(){

    let html = ''

    growCastmovies.forEach(item => {
        html += `
        <div class="col-12 col-md-3 d-flex justify-content-center">
            <div class="image m-2" style="width: 19rem;height:13rem">
                <img src="${item.img}" class="card-img-top "  alt="...">    
                    <p class="fs-6 bg-black text-light titleHiden"><a href="${item.link}" target="blank" class="mt-1 mb-1"> <i class="fa-regular fa-circle-play fs-2"></i> </a>${item.title}</p>
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
            <div class="image m-2" style="width: 19rem;height:13rem">
                <img src="${item.img}" class="card-img-top "  alt="...">    
                    <p class="fs-6 bg-black text-light titleHiden"><a href="${item.link}" target="blank" class="mt-1 mb-1"> <i class="fa-regular fa-circle-play fs-2"></i> </a>${item.title}</p>
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
            <div class="image m-2" style="width: 19rem;height:13rem">
                <img src="${item.img}" class="card-img-top "  alt="...">    
                    <p class="fs-6 bg-black text-light titleHiden"><a href="${item.link}" target="blank" class="mt-1 mb-1"> <i class="fa-regular fa-circle-play fs-2"></i> </a>${item.title}</p>
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
            <div class="image m-2" style="width: 19rem;height:13rem">
                <img src="${item.img}" class="card-img-top "  alt="...">    
                    <p class="fs-6 bg-black text-light titleHiden"><a href="${item.link}" target="blank" class="mt-1 mb-1"> <i class="fa-regular fa-circle-play fs-2"></i> </a>${item.title}</p>
            </div>
        </div>
        `
    })

    diversosVideos.innerHTML = html
}
renderDiversos()



// fazer função que ativa quando passa o mouse 
