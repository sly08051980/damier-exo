console.log("Scfript chargé");
let letters = ["","A", "B","C","D","E","F","G",'H'];
let maTable = document.createElement("table");
let uneCellule = "";

document.body.appendChild(maTable);

let imagepion=document.createElement("img");
imagepion.src="./assets/images/pion.png";


for (let nbRows = 0; nbRows <= 8; nbRows++) {

    let uneRow = document.createElement("tr");
  
 
    maTable.appendChild(uneRow);
 
 document.querySelector('tr').style.borderBottom="solid black 1px";
  
    for (let nbcells = 0; nbcells <= 8; nbcells++) {
       
         uneCellule = document.createElement("td");
        uneCellule.style.backgroundColor="red";

        
        if ((nbRows % 2 == 1 && nbcells %2 !=1) || (nbRows % 2 != 1 && nbcells %2 ==1)||(nbcells==0 || nbRows==0)){
           
            uneCellule.style.backgroundColor="white";
           
          

        if (nbcells==0){
          
            uneCellule.innerText = ((nbRows-1)+1).toString();
            uneCellule.style.border = "none";
            uneRow.appendChild(uneCellule);
           
            
            document.querySelector('td').style.borderBottom="solid white 1px";
   
        }

        if(nbRows==0){
            let lettre = ((nbcells-1)+1).toString();
            uneCellule.style.border = "none";
       uneCellule.innerText = (letters[lettre])  ;
       
             uneRow.appendChild(uneCellule);


         
        }
      
    
        }

        if(nbRows==2 && nbcells == 1){
            let pion=document.createElement("img");

            pion.src="./assets/images/pion.png";
            uneCellule.appendChild(pion);

            pion.addEventListener('click',function(){
                document.querySelector("#toto").setAttribute("img", "../images/pion.png");
                nbRows=nbRows+1;
            let toto=[nbRows,nbcells];
                
            uneCellule.appendChild(pion);

           
              
          
            });
          
        }
        uneRow.appendChild(uneCellule);
      

    }


 


}

