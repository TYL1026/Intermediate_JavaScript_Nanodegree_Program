
// Create Dino Constructor
function Dino (species,weight,height,diet,where,when,fact){
    this.species = species;
    this.weight = weight;
    this.height = height;
    this.diet = diet;
    this.where = where;
    this.when = when;
    this.fact = fact   
}
// Create Dino Compare Method 1
Dino.prototype.compareHeight = function(human){
var result = ''
    if(this.height > human.height){
        result += this.species + "is heigher than you";
    }else if(this.height > human.height){
        result += this.species + "is lower than you";
    }else{
        result += this.species + "has same height with you ";
    }
    return result
}
// Create Dino Compare Method 2
Dino.prototype.compareWeight = function(human){
    var result = ''
    if(this.weight > human.weight){
    result += this.species + "is heigher than you";
    }else if(this.weight > human.weight){
        result += this.species + "is lower than you";
    }else{
        result += this.species + "has same weight with you ";
    }
    return result
}
// Create Dino Compare Method 3
Dino.prototype.compareDiet = function(human){
    var result = ''
    if(this.diet > human.diet){
        result += this.species + "is heigher than you";
    }else if(this.weight > human.weight){
    result += this.species + "is lower than you";
    }else{
        result += this.species + "has same weight with you ";
    }
    return result
}
function Human (name,height,weight,diet) {
//if you were using species it would have been this.specie='human'
    this.name = name
    this.height = height
    this.weight = weight
    this.diet = diet
}  

const getData = async () => {
    const fetchedData = await fetch("./dino.json");
    const data = await fetchedData.json();
    for(i=0 ;i<8 ;i++){
       const d = data.Dinos[i];
      data.Dinos[i] = new Dino(d.species,d.weight,d.height,d.diet,d.where,d.when,d.fact);
    }
    return data.Dinos;
};

// Create the grid elements
const createInnerHtml = function (item, i) {
    let factIndex = 0;
    if (i !== 8) {
      factIndex = Math.floor(6 * Math.random());
    } else {
      factIndex = 3;
    }
    // Conditionally return the appropriate element.
    let element = '';
    if (i === 4) {
      const humanElement =
        `<div class="grid-item">
        <img src="./images/human.png">
        <h3>${item.name}</h3>
      </div>`;
      element = humanElement;
    } else {
      const dinoElement =
        `<div class="grid-item">
        <img src="./images/${item.species}.png">
        <h3>${item.species}</h3>
        <p>${item.facts[factIndex]}</p>
      </div>`;
  
      element = dinoElement;
    }
    return element;
  }

// Use IIFE to get human data from form
document.getElementById("btn").addEventListener("click",  function() {
    const human = (function (){
    let name = document.getElementById('name').value;
    let feet = document.getElementById('feet').value;
    let inches = document.getElementById('inches').value;
    let weight = document.getElementById('weight').value;
    let diet = document.getElementById('diet').value;
    let height = (feet * 12) + inches;
    let human = new Human(name,height,weight,diet);
    return human;
    })()
    getData().then(res =>{
        res.splice(4, 0, human);
        res.forEach(addFact)
        function addFact(dino, index){
            const grid = document.getElementById("grid")
            const newDiv = document.createElement('div')
            newDiv.classList.add("grid-item")
            if (index != 4){
                if (index != 7){
                    const rando =  Math.floor(Math.random()*5)
                    switch(rando){
                        case 1:
                            dino.fact = dino.compareHeight(human);
                            break;
                        case 2:
                            dino.fact = dino.compareWeight(human);
                            break;
                        case 3:
                            dino.fact = dino.compareDiet(human);
                            break;
                        case 4: 
                            dino.fact = dino.fact;
                            break;
                        default:
                            dino.fact = dino.fact;
                            break;
                    }
                }
                newDiv.innerHTML = `
                    <h3>${dino.species}</h3>
                    <img src="images/${dino.species.toLowerCase()}.png" alt="image of ${dino.species}">
                    <p>${dino.fact}</p>
                    `
            }else{
                newDiv.innerHTML = `<h3>${dino.name}</h3>
                    <img src="images/human.png" alt="image of human">
                    <p>${dino.name}</p>`;

            }
            grid.appendChild(newDiv)
        }
        
    })


})


