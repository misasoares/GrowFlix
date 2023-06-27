const growcastVideos = document.getElementById("growcastVideos")
const webinarVideos = document.getElementById("webinarVideos")
const jornadaVideos = document.getElementById("jornadaVideos")
const diversosVideos = document.getElementById("diversosVideos")

function renderGrowcast(){

    let html = ''

    growCastmovies.forEach(item => {
        html += `
        <div class="col-3">
            <div class="card" style="width: 18rem;">
            <img src="${item.img}" class="card-img-top" alt="...">
            
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
        <div class="col-3">
            <div class="card" style="width: 18rem;">
            <img src="${item.img}" class="card-img-top" alt="...">
            
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
        <div class="col-3">
        <div class="card" style="width: 18rem;">
        <img src="${item.img}" class="card-img-top" alt="...">
        
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
        <div class="col-3">
        <div class="card" style="width: 18rem;">
        <img src="${item.img}" class="card-img-top" alt="...">
       
        </div>
    </div>
        `
    })

    diversosVideos.innerHTML = html
}
renderDiversos()