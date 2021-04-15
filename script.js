function rpsGame(yourChoice){
  var humanChoice,botChoice,message;
  humanChoice = yourChoice.id;
  botChoice=numToChoice(randomNo());
  console.log(botChoice);
  results = decideWinner(humanChoice,botChoice);
  console.log(results);
  message=finalMessage(results);
  console.log(message);
  rpsFrontEnd(yourChoice.id,botChoice,message)
   
}
function randomNo(){
  return Math.floor(Math.random()*3);

}
function numToChoice(number){
  return ["rock","paper","scissors"][number]
}
function decideWinner(humanChoice,botChoice){
  var rpsDatabase ={
    "rock":{"scissors": 1, "rock" : 0.5, "paper" : 0},
    "paper":{"rock": 1,"paper" : 0.5,"scissors" : 0},
    "scissors":{"paper": 1,"scissors": 0.5,"rock": 0}
    };
var yourScore = rpsDatabase[humanChoice][botChoice];
var computerScore=rpsDatabase[botChoice][humanChoice];
return [yourScore, computerScore];
  }
function finalMessage([yourScore, computerScore]){
  if (yourScore === 0){
    return {"message":"You Lost!","color":"red"};
  }
    else if(yourScore === 0.5){
    return{"message":"You tied!","color":"yellow"};
  }
    else{
      return{"message":"You won!", "color":"green"};
    }
}
function rpsFrontEnd(humanImageChoice,botImageChoice,finalMessage){
  var imageDatabase ={
    "rock": document.getElementById('rock').src,
    "paper": document.getElementById('paper').src,
    "scissors": document.getElementById('scissors').src
  };
  document.getElementById('rock').remove();
  document.getElementById('paper').remove();
  document.getElementById('scissors').remove();
   


var headerDiv = document.createElement('div');
var botDiv = document.createElement('div');
var messageDiv = document.createElement('div');

headerDiv.innerHTML = "<img src='" + imageDatabase[humanImageChoice] +"' height=150 width=150 style='box-shadow:0px 10px 50px rgba(37, 58, 233,1);'>";

messageDiv.innerHTML = "<h1 style='color:" + finalMessage["color"] +"; font-size:60px; padding:30px;'> "+ finalMessage["message"] +" </h1>";

botDiv.innerHTML = "<img src='" + imageDatabase[botImageChoice] +"' height=150 width=150 style='box-shadow:0px 10px 50px rgba(243, 38, 24,1);'>";

document.getElementById('flex-box-rps-div').appendChild(headerDiv);
document.getElementById('flex-box-rps-div').appendChild(messageDiv);
document.getElementById('flex-box-rps-div').appendChild(botDiv);

/*var wrapperDiv =document.createElement('div');
  
wrapperDiv.style.display ="flex";
wrapperDiv.style.flexWrap ="wrap";

wrapperDiv.appendChild(headerDiv);
wrapperDiv.appendChild(messageDiv);
wrapperDiv.appendChild(botDiv);
*/
}