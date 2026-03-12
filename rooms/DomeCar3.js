
function goThruDialouge(id, array, characters) {

  let index = 0;
  document.getElementById(id).innerHTML = array[0];
  document.getElementById("characterImage").src = characters[0];

  document.addEventListener("click", function() {
  index++;

  if(index < array.length) {

    document.getElementById(id).innerHTML = array[index];
    document.getElementById("characterImage").src = characters[index];
    
  }
  if(index == array.length){
    if (index == array.length) {
  setTimeout(() => {
    window.location.href = "ZingZingZingbah.html";
  }, 2000);
}
  }
});
};


const inventory = ["key"];

Bling = "../sprites/Blingbah.png";
Jing = "../sprites/Jingbah.png";
Zing = "../sprites/Zingbah.png";
ZingDead = "../sprites/ZingbahDead.png";
ZingPhil = "../sprites/Philzingzingcollins.png";
ZingBorax = "../sprites/ZingbahBorax.png";
Hum = "../sprites/Humbah.png";
Jum = "../sprites/Jumbah.png";
Zum = "../sprites/Zumbah.png";
You = "../sprites/you.png"; 
Lorax = "../sprites/Lorax.png";


// Begning convo
const character1 =[Bling,You,Zing,You,Zing];

const dialouge1 = ["&quot;Aww Dangit&quot;","&quot;Lets's GOOOOOOOOOOOOOOOOOOOOOOOOOO&quot;","&quot; I'm gonna fight you now&quot;","&quot; wait why?&quot;","&quot; why not&quot;"];
console.log("ZingZing time!!!!");
goThruDialouge("roomText", dialouge1, character1);



