/*

Objective:
You will practice creating and combining boolean expressions
to drive logic and outcomes in you program.

Instructions:
If you are not familiar with the concept of a text-based adventure game,
let's set the scene...
Example: "You wake up in a dark forest. There are two paths ahead of you:
one leading to the mountains and one to a village.
Your choices will determine your fate!"

Define the Requirements: You must:
  - Write conditional statements to handle player choices.
  - Use boolean expressions to combine multiple conditions.
  - Include at least one use of logical operators (&&, ||, !).

Starter Code:
  - Run the following command in your terminal to install the readline-sync module:
    npm install readline-sync

Paste the following code into your editor:

*/

const readline = require('readline-sync');

const hasTorch = true;
const hasMap = false;
let mountainsVisit = false;
let villageVisit = false;
let stageOneComplete = false;
let stageTwoComplete = false;
let stageThreeComplete = false;
let hasWeapon = false;
let money = 10;
let gameOver = false;


while (!stageOneComplete && !gameOver){
  console.log("You see two paths: one leads to the mountains, the other to the village.");
  const choiceStageOne = readline.question("Do you go to the 'mountains' or the 'village'? ");

  if (choiceStageOne === "mountains" && hasTorch) {
    console.log("You safely navigate through the dark mountains.");
    mountainsVisit = true;
    stageOneComplete = true;
  } else if (choiceStageOne === "mountains" && !hasTorch) {
    console.log("It's too dark to proceed. You decide to turn back.");
  } else if (choiceStageOne === "village" || hasMap) {
    console.log("You find your way to the village.");
    villageVisit = true;
    stageOneComplete = true;
  } else {
    console.log("You get lost and wander aimlessly.");
  }
}

while (stageOneComplete && !stageTwoComplete && !gameOver){
  if (mountainsVisit){
    const choiceStageTwoMountain = readline.question("You hear the sound of a ferocious beast in the dark. Do you attempt to 'engage' or 'retreat' back to the village? ");
    if (choiceStageTwoMountain === "engage" && !hasWeapon){
        console.log("You are defenseless. Without a weapon, the monster quickly tears you to pieces. A lone traveler finds what's left of you the next morning.");
        gameOver = true;
    } else if (choiceStageTwoMountain === "engage" && hasWeapon){
        console.log("With your weapon at your side you are able to, with much effort, defeat the monster. You return to the village with its carcass the next day, to the sound of much celebration.");
        gameOver = true;
    } else if (choiceStageTwoMountain === "retreat") {
        console.log("Judging the beast to be too much for you to face, you retreat down the mountain and head for the village instead.");
        mountainsVisit = false;
        villageVisit = true;
    } else {
        console.log("You are paralyzed with indecision. You must make a choice quickly, lest the beast find you in the dark.");
    }
  } else if (villageVisit){
    let choiceStageTwoVillage = readline.question("You hear an odd rumbling from the mountain as you enter the village. People move to and fro, gradually slipping into their homes as the sun falls further below the horizon. Still, a few locations remain open. Would you like to visit the 'shops' or the 'tavern'? ")
      while (choiceStageTwoVillage === "tavern"){
        let choiceStageTwoVillageTavern = readline.question(`The roar of the tavern is almost deafening as you step inside. You approach the bar, and the barkeep speaks. "You here for a 'bed'? Two silver. Otherwise, 'leave'. I've got too much to deal with here." He gestures to the commotion, clearly overworked. Your coinpurse currently holds ${money} silver. `)
        if (choiceStageTwoVillageTavern === "bed" && money >= 2) {
          console.log("You pass over the two silver and he leads you quickly up the stairs to a small room. It's not much - an old straw mattress, stained a concerning variety of colors, and a few thin, scratchy sheets thrown over it. Still, after such a long travel it feels good to finally rest.")
          money = money - 2;
          choiceStageTwoVillage = 0;
          gameOver = true;
        } else if (choiceStageTwoVillageTavern === "bed" && money < 2){
          console.log('The barkeep regards you humorlessly. "What do you think this is, a charity? Get lost." He pushes you back out to the street.');
          choiceStageTwoVillage = 0;
        } else if (choiceStageTwoVillageTavern === "leave") {
          console.log("You leave the tavern, returning to the quiet, cool night.");
          choiceStageTwoVillage = 0;
        }
      }
      while (choiceStageTwoVillage === "shops") {
        let choiceStageTwoVillageShops = readline.question(`Only a few shops remain open, but you find a general store on the corner. The shopkeep greets you as you enter. She's selling a few miscellaneous wares, but a blade catches your eye. It's old and a bit rusted, but nothing a bit of care can't fix. The price is listed below it: 8 silver. You currently have ${money} silver. Would you like to buy it? 'yes' / 'no'. `)
        if (choiceStageTwoVillageShops === "yes" && money >= 8) {
          console.log("You pass the shopkeep the eight silver and she hands you the blade. You step back onto the street, and the woman locks the door behind you.");
          choiceStageTwoVillage = 0;
          money = money - 8;
          hasWeapon = true;
          stageTwoComplete = true;
        } else if (choiceStageTwoVillageShops === "yes" && money < 8) {
          console.log("You reach for your coinpurse, but are short. The woman only shakes her head, motioning for you to leave the shop. You step back onto the street.");
          choiceStageTwoVillage = 0;
        } else if (choiceStageTwoVillageShops === "no") {
          choiceStageTwoVillage = 0;
        } else {
          console.log("The woman watches you, expectantly.");
        }
      }
    }
  }  

while (stageOneComplete && stageTwoComplete && !stageThreeComplete && !gameOver) {
  let choiceStageThree = readline.question("As you step back out onto the street, that same roaring sound echoes from the mountain again, piquing your curiosity. The shops are now closed, but the 'tavern' is still open, or you could take a chance and see what the 'mountain' has to offer. ")
    while (choiceStageThree === "tavern"){
        let choiceStageThreeVillageTavern = readline.question(`The roar of the tavern is almost deafening as you step inside. You approach the bar, and the barkeep speaks. "You here for a 'bed'? Two silver. Otherwise, 'leave'. I've got too much to deal with here." He gestures to the commotion, clearly overworked. Your coinpurse currently holds ${money} silver. `)
        if (choiceStageThreeVillageTavern === "bed" && money >= 2) {
          console.log("You pass over the two silver and he leads you quickly up the stairs to a small room. It's not much - an old straw mattress, stained a concerning variety of colors, and a few thin, scratchy sheets thrown over it. Still, after such a long travel it feels good to finally rest.")
          money = money - 2;
          choiceStageThree = 0;
          gameOver = true;
        } else if (choiceStageThreeVillageTavern === "bed" && money < 2){
          console.log('The barkeep regards you humorlessly. "What do you think this is, a charity? Get lost." He pushes you back out to the street.');
          choiceStageThree = 0;
        } else if (choiceStageThreeVillageTavern === "leave") {
          console.log("You leave the tavern, returning to the quiet, cool night.")
          choiceStageThree = 0;
        }
    }
    while (choiceStageThree === "mountain") {
        if (hasTorch) {
          console.log("You safely navigate through the dark mountains.");
          
          let choiceStageThreeMountain = readline.question("You hear the sound of a ferocious beast in the dark. Do you attempt to 'engage' or 'retreat' back to the village? ");
          if (choiceStageThreeMountain === "engage" && !hasWeapon){
            console.log("You are defenseless. Without a weapon, the monster quickly tears you to pieces. A lone traveler finds what's left of you the next morning.");
            gameOver = true;
          } else if (choiceStageThreeMountain === "engage" && hasWeapon){
            console.log("With your weapon at your side you are able to, with much effort, defeat the monster. You return to the village with its carcass the next day, to the sound of much celebration.");
            choiceStageThree = 0;
            gameOver = true;
          } else if (choiceStageThreeMountain === "retreat") {
            console.log("Judging the beast to be too much for you to face, you retreat down the mountain and head for the village instead.");
            choiceStageThree = 0;
          } else {
            console.log("You are paralyzed with indecision. You must make a choice quickly, lest the beast find you in the dark.");
          }
        } else if (!hasTorch) {
          console.log("It's too dark to proceed. You decide to turn back.");
          choiceStageThree = 0;
        }
    }
}     
        


          
      








/* 

Add Customization and expand the game:
  - Add more choices and scenarios.
  - Include additional items (e.g., a sword, a compass).
  - Use nested conditionals and logical operators to create complex outcomes.

*/