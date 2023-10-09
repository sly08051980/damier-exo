console.log("Scfript chargé");

let maTable = document.createElement("table");


document.body.appendChild(maTable);


for (let nbRows = 0; nbRows <= 7; nbRows++) {

    let uneRow = document.createElement("tr");
 
    maTable.appendChild(uneRow);

  
    for (let nbcells = 0; nbcells <= 7; nbcells++) {
       
        let uneCellule = document.createElement("td");
        uneCellule.style.backgroundColor="black";
        if (nbRows % 2 == 1 && nbcells %2 !=1){
           
            uneCellule.style.backgroundColor="white";
        }
         if (nbRows % 2 != 1 && nbcells %2 ==1){
           
             uneCellule.style.backgroundColor="white";
       }


        
      
        
        uneRow.appendChild(uneCellule);
     
     

    }
}