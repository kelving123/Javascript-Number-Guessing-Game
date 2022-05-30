let score = 0; //Assign a variable of limited scope (score) the value of 0

let prevNumber; //Instantiate a variable of limited scope(prevNumber) for later use
let nextNumber = null; //Instantiate a variable of limited scope (nextNumber) with the value of null

let streak = 0; //Assign a variable of limited scope (streak) the value of 0

const lower_button = document.querySelector(".lower"); //Assign the constant (lower_button) to the first element with the class lower
lower_button.addEventListener("click", Lower); //Add an event listener (click) to this object and call the lower function when a click is dected.

const higher_button = document.querySelector(".higher");
higher_button.addEventListener("click", Higher);

function Lower(evt) {
  if (nextNumber < prevNumber) {
    // if next number is less than prevNumber correct continue game add score
    score += 1 + streak * 2; //we are adding 1+ streak times 2 to the score
    GenNewNumbers(); //Run the GenNewNumbers Function
    UpdateText(`Correct! Keep Going! Current Number: ${prevNumber}`); //Output this message to the user
    UpdateScore(score); //output updated score to the user
    streak++; //increase the streak counter by 1
  } else {
    //wrong. reset the game
    GenNewNumbers();
    UpdateText(`Wrong :( Score: ${score} New Number ${prevNumber}`); //Tell the user they were wrong show new number

    score = 0; // set score to 0
    UpdateScore(score); //Outpute the score to the user
    streak = 0; //Reset streak to 0
  }
}

function Higher(evt) {
  if (nextNumber > prevNumber) {
    // if next number is less than prevNumber correct continue game add score
    score += 1 + streak * 2; //we are adding 1+ streak times 2 to the score
    GenNewNumbers(); //Run the GenNewNumbers Function
    UpdateText(`Correct! Keep Going! Current Number: ${prevNumber}`); //Output this message to the user
    UpdateScore(score); //output updated score to the user
    streak++; //increase the streak counter by 1
  } else {
    //wrong. reset the game
    GenNewNumbers();
    UpdateText(`Wrong :( Score: ${score} New Number ${prevNumber}`); //Tell the user they were wrong show new number

    score = 0; // set score to 0
    UpdateScore(score); //Outpute the score to the user
    streak = 0; //Reset streak to 0
  }
}
function UpdateText(txt) {
  //updates the output element with the text we pass
  const output_area = document.querySelector(".output");
  output_area.innerText = txt; //Set the text of the output to the text of provided via txt
}

function UpdateScore(score) {
  //updates the output element with the text we pass
  const output_area = document.querySelector(".score");
  output_area.innerText = score; //Set the text of the output to the text of provided via score
}
function GenNewNumbers() {
  if (nextNumber == null) {
    nextNumber = GetRandomInt(0, 10);
  } //if we are just starting get random value
  prevNumber = nextNumber; //Assign prevNumber to NextNumber
  while (nextNumber == prevNumber) {
    //while prevNumber and nextNumber are the same do this
    nextNumber = GetRandomInt(0, 10);
  }
}

function GetRandomInt(min, max) {
  //This function returns a random int within the range inclusively
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //returns the value
}

GenNewNumbers(); //Generate some new numbers
UpdateText(`Lets start! New Number: ${prevNumber}`); //output user first clue

const submit_button = document.querySelector(".submit");
submit_button.addEventListener("click", LogScore);

function LogScore(evt) {
  console.log(score);
}
