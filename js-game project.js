//const readline=require('readline');
//const rl=readline.createInterface({
//    input:process.stdin,
//    output:process.stdout,
//})
//rl.question('enter your name', (answer)=>{
//console.log(`you are welcome ${answer}`)
//})
const quiz= [
    questions={
        question:"Mouse is used to...",
        options:["drive","push", "type", "drag"],
        correctAnswer: "drag"
    },
    questions={
        question:"RAM simply means...",
        options:["Read Access Memory","Read Only Memory", "Random Access Memory", "Random Only Memory"],
        correctAnswer: "Random Access Memory"
    },
    questions={
        question:"The physical part of computer is called...",
        options:["hardware","software", "shareware", "kitchenware"],
        correctAnswer: "hardware"
    },
    questions={
        question:"Which key is used to separate two words on the computer?",
        options:["Spacebar","Backspace", "Enter", "Caps lock"],
        correctAnswer: "Spacebar"
    },
    questions={
        question:"Which of the following is not a hardware",
        options:["mouse","monitor", "antivirus", "printer"],
        correctAnswer: "antivirus"}]
    
      // console.log(questionsArr[i].questions)
    function displayQuestion(quiz){
        for(i=0; i<quiz.length; i++){
            console.log(`${quiz[i].question}`)
            for(n=0; n<questions.options.length; n++){
                console.log(`${n+1}.${quiz[i].options[n]}`)
            } 
          }
        }
   // console.log(displayQuestion())
playerScore=0
    function getUserAnswer(){
 playerAnswer=prompt("enter the correct answer")
 playerAnswer.toLowerCase
         }//console.log( getUserAnswer())


 function checkAnswer(){
 if(getUserAnswer()===questions.correctAnswer){
    playerScore++
return "true"
 }
 else
return "false"
      }//console.log(checkAnswer())


function playGame(){
    userName=prompt("enter your name")
    console.log(userName, "you are welcome to quiz game")
    playerScore=0
for(i=0; i<quiz.length; i++){
console.log(`${quiz[i].question}`)
for(n=0; n<questions.options.length; n++){
    console.log(`${n+1}.${quiz[i].options[n]}`)
}
playerAnswer=prompt("enter the correct answer")


if(playerAnswer===quiz[i].correctAnswer){
    console.log("true"+"..."+(playerAnswer))
  playerScore++

    console.log(playerScore)
     }
     else{
     console.log("false"+"..."+(playerAnswer))
     console.log(playerScore)
  

}
playerScore=+playerScore
}
console.log(`${userName} you scored ${playerScore} out of ${quiz.length}`)
}
console.log(playGame())


function displayHighScore(){
    highScore=0
    if(score>highscore){
    highScore=score
    }
    highscore
}