
function goThruDialouge(id, array, characters) {

  let index = 0;
  let text = document.getElementById(id);
  text.innerHTML = array[0];
  document.addEventListener("click", function() {
  index++;
  //const character1 =[Bling,You,Zing,You,Zing];
  if(index == 2 || index >= 4){
    document.getElementById("characterImage").src = characters[index];
    document.getElementById("characterImage").style.opacity = "1";
    text.style.backgroundColor = "#ff5733";
    text.style.color = "white";
    text.style.border = "3px solid #c70039";
 
  } else if(index == 0){
    document.getElementById("characterImage").src = Bling;
    document.getElementById("characterImage").style.opacity = "1";
    text.style.backgroundColor = "#0cf100";
    text.style.color = "rgb(0, 0, 0)";
    text.style.border = "3px solid #066b1c";
  }
  else {
    document.getElementById("characterImage").style.opacity = "0";
    
    text.style.backgroundColor = "#898989";
    text.style.color = "white";
    text.style.border = "3px solid #575757";
    
  }
  if(index < array.length) {
    //document.getElementById("characterImage").src = characters[index];
    document.getElementById(id).innerHTML = array[index];
    
  }

  if(index == array.length){
    if (index == array.length) {
      document.getElementById("characterImage").src = characters[index];
  setTimeout(() => {
    window.location.href = "LetsGoGambling.html";
  }, 3000);
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



