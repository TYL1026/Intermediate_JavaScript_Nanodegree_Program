
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
    function humanInfo(){
        const name = document.getElementById('name').value;
        const feet = document.getElementById('feet').value;
        const inches = document.getElementById('inches').value;
        const weight = document.getElementById('weight').value;
        const diet = document.getElementById('diet').value;
        const height = (feet * 12) + inches;
        var human = new Human(name,height,weight,diet);
        return human;
    }
    document.getElementById("btn").addEventListener("click", function() {
      var input = humanInfo;
      console.log(input.inches)
    });
    
    
    // Use IIFE to get human data from form


    // Create Dino Compare Method 1
    // NOTE: Weight in JSON file is in lbs, height in inches. 

    
    // Create Dino Compare Method 2
    // NOTE: Weight in JSON file is in lbs, height in inches.

    
    // Create Dino Compare Method 3
    // NOTE: Weight in JSON file is in lbs, height in inches.


    // Generate Tiles for each Dino in Array
  
        // Add tiles to DOM

    // Remove form from screen


// On button click, prepare and display infographic
