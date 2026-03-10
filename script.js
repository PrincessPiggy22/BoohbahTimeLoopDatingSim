
// function to be able to click thru dialouge
function goThruDialouge(id, array, file) {

  let index = 0;
  file.getElementById(id).textContent = array[0];

  document.addEventListener("click", function() {
  index++;

  if(index < array.length) {

    file.getElementById(id).textContent = array[index];
    
  }
});
};


document.getElementById("start").onclick = function() {

  window.location.href = "rooms/intro.html";

};

// Player Room
// Starting Dialouge
const dialouge1 = ["*Insert Boohbah Screaming as their being murdered noises*" , "That sounded like it's coming from the Dome Car","I should get my key and check it out", " "];
goThruDialouge("roomText", dialouge1, document);



// if key not in inventory --> don't open door 










