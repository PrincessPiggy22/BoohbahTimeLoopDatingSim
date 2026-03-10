const dialouge1 = ["*Insert Boohbah Screaming as their being murdered noises*" , "That sounded like it's coming from the dome"];

let diaOneIndex = 0;
document.getElementById("roomText").textContent = dialouge1[0];

document.addEventListener("click", function() {

  diaOneIndex++;

  if(diaOneIndex < dialouge1.length) {

    document.getElementById("roomText").textContent = dialouge1[diaOneIndex];
    
  }
});