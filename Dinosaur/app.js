
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

    
    // Use IIFE to get human data from form
    document.getElementById("btn").addEventListener("click", function() {
      var human = (function (){
        let name = document.getElementById('name').value;
        let feet = document.getElementById('feet').value;
        let inches = document.getElementById('inches').value;
        let weight = document.getElementById('weight').value;
        let diet = document.getElementById('diet').value;
        let height = (feet * 12) + inches;
        let human = new Human(name,height,weight,diet);
        return human;
    })()
    console.log(human);
    const data = getData().then(data => {
      data.splice(4, 0, human);
      console.log(data)
      document.getElementById('dino-compare').remove();
      const grid = document.getElementById('grid');
      const table = document.createElement("table");

      for(i=0;i<3; i++){
        const row = document.createElement("tr");
        for(j=0;j<3; j++){
          const cell = document.createElement("td");
          console.log(data[i*3+j])
          if(i*3+j != 4){
            cell.innerHTML = `
              <div class="grid-item">
              <h3>${data[i*3+j].species}</h3>
              <img src="images/${data[i*3+j].species.toLowerCase()}.png" alt="${data[i*3+j].species} image" />
              <p>${data[i*3+j].fact ? data[i*3+j].fact : ""} 
              ${data[i*3+j].weight ? data[i*3+j].compareWeight(human) : ""} 
              ${data[i*3+j].height ? data[i*3+j].compareHeight(human) : ""}
              </p>
              `
            }else{
              cell.innerHTML = `
              <div class="grid-item">
              <h3>human</h3>
              <img src="images/human.png" alt="human image" />
              <p>${data[i*3+j].fact ? data[i*3+j].fact : ""} 
              ${data[i*3+j].weight ? data[i*3+j].weight : ""} 
              ${data[i*3+j].height ? data[i*3+j].height: ""}
              </p>
              `
            }
          row.append(cell);
          }
        table.append(row);
      }
      grid.append(table);
    }).catch(error => {
      console.error(error);
    });
    });



    // Generate Tiles for each Dino in Array
  
        // Add tiles to DOM

    // Remove form from screen


// On button click, prepare and display infographic
