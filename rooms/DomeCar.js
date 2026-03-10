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
});
};


const inventory = ["key"];

Bling = "../sprites/Blingbah.png";
Jing = "../sprites/Jingbah.png";
Zing = "../sprites/Zingbah.png";
ZingDead = "../sprites/ZingbahDead.png";
ZingPhil = "../sprites/Philzingzingcollins.png";
Hum = "../sprites/Humbah.png";
Jum = "../sprites/Jumbah.png";
Zum = "../sprites/Zumbah.png";
You = "../sprites/you.png"; 


// Begning convo
const character1 =[You,Bling,You,Bling,You,Bling];
const dialouge1 = ["&quot;What happened?&quot;","&quot;Zing Zing Zingbah's dead&quot;","&quot;Who are you?&quot;","&quot;Blingbah, I run the casino&quot;","&quot;Gambling?&quot;","&quot;Not for You&quot;"];
console.log("There is an imposter among us");
goThruDialouge("roomText", dialouge1, character1);


// Click on Zing dead
const zingDeadChars = [ZingDead, ZingDead, ZingDead, ZingDead, ZingDead, "../sprites/GreenFur.png", "../sprites/GreenFur.png",""];
const zingDeadTalk = ["Damn... he dead...","...","rip","...","What's that??","Green... fur???","I should talk to Blingbah", ""];
const zingDeadDidTalk =["I don't think i'll find anything else", ""];
inventory.push("Green Fur");


document.getElementById("ZingDead").addEventListener("click", function() {
if(inventory.includes("Green Fur")) {
  console.log("No, Dead bodies don't talk");
  goThruDialouge("roomText", zingDeadDidTalk, "");
} else {
  console.log("Do Dead bodies talk?");
  goThruDialouge("roomText", zingDeadTalk, zingDeadChars);
}

});

document.getElementById("Bling").addEventListener("click", function() {
  if(inventory.includes("Green Fur")) {
    console.log("You have the greeeeennnnnn");
  } else {
    console.log("You don't have the greeeeennnnnn");
    goThruDialouge("roomText", dialouge1, character1);
  }
});  