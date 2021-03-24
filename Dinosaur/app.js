
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
      return data.Dinos;
    };
    getData().then(data => {
      console.log(data); // will print the array
    }).catch(error => {
      console.error(error);
    });
    // Create Human Object
    
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
    let compare1 = compareHeight(human,dino);
    console.log(compare1);
    });
    // Create Dino Compare Method 1
    // NOTE: Weight in JSON file is in lbs, height in inches. 
    function compareHeight(human,dino){
      human.height
    }
    
    // Create Dino Compare Method 2
    // NOTE: Weight in JSON file is in lbs, height in inches.

    
    // Create Dino Compare Method 3
    // NOTE: Weight in JSON file is in lbs, height in inches.


    // Generate Tiles for each Dino in Array
  
        // Add tiles to DOM

    // Remove form from screen


// On button click, prepare and display infographic
