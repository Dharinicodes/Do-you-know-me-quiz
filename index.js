var readlinesync = require("readline-sync");

var score = 0

var userName = readlinesync.question("May I have your name? ")

var someMessage = "Hey " + userName
console.log(someMessage)


console.log("I have a quiz for you. Let's see how well do you know me\n")



function play(question, answer) {
  var userAnswer = readlinesync.question(question)
  if (userAnswer === answer) {
    console.log("You are right! +1")
    score = score + 1
  }
  else {
    console.log("You are wrong! -1")
    score = score - 1
  }
}

play("Which cartoon do I like the most? ", "doraemon")

play("What is my most fav dish? ", "noodles")

play("What is my most fav color? ", "black")

play("Who is my fav actor? ", "siva karthikeyan")

play("Who is my fav music director? ", "yuvan")


console.log("Final Score: ", score)