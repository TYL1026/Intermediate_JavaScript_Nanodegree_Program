  const store =  Immutable.Map({
    user: Immutable.Map({
      name: "Human",
    }),
    apod: "",
    rovers: Immutable.List(["Curiosity", "Opportunity", "Spirit"]),
});

// add our markup to the page
const root = document.getElementById('root')

const updateStore = (store, newState) => {
    
    store = store.merge(store, newState)
    console.log(store.toJS())
    render(root, store)
}

const render = async (root, state) => {
    root.innerHTML = App(state)
}


// create content
const App = (state) => {
    state = state.toJS()
    let { rovers, apod } = state
    
    return `
        <header></header>
        <main>

            <section>
                <h3>Put things on the page!</h3>
                <p>Here is an example section.</p>
                <p>
                    One of the most popular websites at NASA is the Astronomy Picture of the Day. In fact, this website is one of
                    the most popular websites across all federal agencies. It has the popular appeal of a Justin Bieber video.
                    This endpoint structures the APOD imagery and associated metadata so that it can be repurposed for other
                    applications. In addition, if the concept_tags parameter is set to True, then keywords derived from the image
                    explanation are returned. These keywords could be used as auto-generated hashtags for twitter or instagram feeds;
                    but generally help with discoverability of relevant imagery.
                </p>
                <button type="button" id="button1" onclick="getRoverData('curiosity')">Curiosity</button>
                <button type="button" id="button2" onclick="getRoverData('opportunity')">Opportunity</button>
                <button type="button" id="button3" onclick="getRoverData('spirit')">Spirit</button>
                ${/*ImageOfTheDay(apod)*/RoverInfo(apod)}
                <script>
            
                </script>
            </section>
        </main>
        <footer></footer>
    `
}

// listening for load event because page should load before any JS is called
window.addEventListener('load', () => {
    getRoverData("")
    render(root, store)
})

// ------------------------------------------------------  COMPONENTS

// Pure function that renders conditional information -- THIS IS JUST AN EXAMPLE, you can delete it.
const Greeting = (name) => {
    if (name) {
        return `
            <h1>Welcome, ${name}!</h1>
        `
    }

    return `
        <h1>Hello!</h1>
    `
}




const RoverInfo = (rover)=>{
    if (rover){
    const photo = rover.latest_photos.reduce((id,currId) =>{
        if (id > currId){
            return currId;
        }
        else{
            return id;
        }
    })
    
    const img = photo.img_src
    const launch_date = photo.rover.launch_date
    const landing_date = photo.rover.landing_date
    const status = photo.rover.status
    const earth_date = photo.earth_date
    return(`
        <p>Launch_date = ${launch_date} </p>
        <p>Landing_date = ${landing_date} </p>
        <p>Status = ${status} </p>
        <p>Earth_date = ${earth_date} </p>
        <img src="${img}" height="100%" width="400px" />
    `)
    }else{
        return(`
    `)
    }
}

// ------------------------------------------------------  API CALLS

// Example API call
const getImageOfTheDay = (state) => {
    let { apod } = state

    fetch(`http://localhost:3000/apod`)
        .then(res => res.json())
        .then(apod => updateStore(store, { apod }))

}

const getRoverData = (name) =>{
    
    if(name){
    fetch(`http://localhost:3000/rovername/${name}`)
        .then(res => res.json())
        .then(apod => updateStore(store,{apod}))

    }else{
        const apod = ''
        updateStore(store,{apod})
    }
}
