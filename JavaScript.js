
let playerPointsCounter = 0;
let computerPointsCounter = 0;
let onGame = true
let isRemoved = false



const computerChoiceImg = document.createElement('img')
const playerChoiceImg = document.createElement('img')


const questionMark = document.createElement('img')
const questionMarkTwo = document.createElement('img')


const pointsResult = document.createElement('p')
const divPoints = document.querySelector('#Result')


const popup = document.querySelector('#popup')
const popupOverlay = document.querySelector('#popupOverlay')
const popupButton = document.querySelector('#btn')


computerChoiceImg.classList.add('computerChoice')
playerChoiceImg.classList.add('playerChoice')


const whoWon = document.querySelector('#whoWon');

appendQestionMarkStart()
showResult()

popupButton.addEventListener('click', () => closePopupPlayAgain())
popupOverlay.addEventListener('click', () => closePopupPlayAgainOverlay())

function appendQuestionMark()
{
    console.log('daje na false');
    isRemoved = false
    questionMarkTwo.src = "img/questionMark.png"
    questionMark.src = "img/questionMark.png"
    questionMark.classList.add('playerChoice')
    questionMarkTwo.classList.add('playerChoice')

    removeChoiceImg()

    document.querySelector('.computerChoice').appendChild(questionMark)
    document.querySelector('.playerChoice').appendChild(questionMarkTwo)
    
    
}
function appendQestionMarkStart(){
    console.log('daje na false');
    isRemoved = false
    questionMarkTwo.src = "img/questionMark.png"
    questionMark.src = "img/questionMark.png"
    questionMark.classList.add('playerChoice')
    questionMarkTwo.classList.add('playerChoice')

    document.querySelector('.computerChoice').appendChild(questionMark)
    document.querySelector('.playerChoice').appendChild(questionMarkTwo)

}
function removeQuestionMark()
{
    isRemoved = true
    document.querySelector('.computerChoice').removeChild(questionMark)
    document.querySelector('.playerChoice').removeChild(questionMarkTwo)
}
function removeChoiceImg(){
    document.querySelector('.computerChoice').removeChild(computerChoiceImg)
    document.querySelector('.playerChoice').removeChild(playerChoiceImg)
}
function showResult(){
    pointsResult.textContent = `${playerPointsCounter}:${computerPointsCounter}`
    divPoints.appendChild(pointsResult)
    if((startChecker() == false || onGame == true) && isRemoved == false) removeQuestionMark()
}
function computerChoice()
{
    let randNumber = Math.floor(Math.random() * 3);
    let choice = "doesn't work";
    switch(randNumber)
    {
        case 0:
            choice = "paper";
            if(pointsChecker()) computerChoiceImg.src = "img/paper.png";
            break;
        case 1:
            choice = "scissors";
            if(pointsChecker()) computerChoiceImg.src = "img/scissors.png";
            break;
        case 2:
            choice = "rock";
            if(pointsChecker()) computerChoiceImg.src = "img/rock.png";
            break;
    }
    return choice;
}
function playerChoicePaper()
{
    document.querySelector('.computerChoice').appendChild(computerChoiceImg)
    if(pointsChecker()) playerChoiceImg.src = "img/paper.png"
    document.querySelector('.playerChoice').appendChild(playerChoiceImg)
    
    game(computerChoice(), "paper")
}
function playerChoiceRock(){
    document.querySelector('.computerChoice').appendChild(computerChoiceImg);
    if(pointsChecker()) playerChoiceImg.src = "img/rock.png"; 
    document.querySelector('.playerChoice').appendChild(playerChoiceImg);
    game(computerChoice(), "rock")
}
function playerChoiceScissors(){
    document.querySelector('.computerChoice').appendChild(computerChoiceImg)
    if(pointsChecker()) playerChoiceImg.src = "img/scissors.png"
    document.querySelector('.playerChoice').appendChild(playerChoiceImg)
    game(computerChoice(), "scissors")
}
function showPopupPlayAgain()
{
    whoWonPopup()
    popup.classList.add('active')
    popupOverlay.classList.add('active')
}
function closePopupPlayAgainOverlay(){
    popup.classList.remove('active')
    popupOverlay.classList.remove('active')
}
function closePopupPlayAgain(){
    popup.classList.remove('active')
    popupOverlay.classList.remove('active')
    playerPointsCounter = 0
    computerPointsCounter = 0
    showResult()
    onGame = false
    appendQuestionMark()
}
function pointsChecker(){
    if(playerPointsCounter < 5 && computerPointsCounter < 5)
    {
        return true
    }
    else{
        return false
    }
}
function startChecker(){
    if(playerPointsCounter == 0  && computerPointsCounter == 0)
    {
        return true
    }
    else{
        return false
    }
}
function whoWonPopup(){
    if(playerPointsCounter == 5){
        whoWon.textContent = 'You Win!'
    }
    else{
        whoWon.textContent = 'You Lose!'
    }
}

const paper = document.querySelector('#choice2')
paper.addEventListener('click', () => playerChoicePaper())

const rock = document.querySelector('#choice1')
rock.addEventListener('click', () => playerChoiceRock())

const scissors = document.querySelector('#choice3')
scissors.addEventListener('click', () => playerChoiceScissors())

if(startChecker() == true && onGame == false)
{
    appendQuestionMark()
}
function playGround(computerSelection, playerSelection)
{
    if(playerSelection == "rock")
    {
        if(computerSelection == "paper") return "You Lose!";
        else if(computerSelection == "rock") return "Draw!";
        else if(computerSelection == "scissors") return "You Win!";
    }
    else if(playerSelection == "paper")
    {
        if(computerSelection == "paper") return "Draw!";
        else if(computerSelection == "rock") return "You Win!";
        else if(computerSelection == "scissors") return "You Lose!";
    }
    else if(playerSelection == "scissors")
    {
        if(computerSelection == "paper") return "You Win!";
        else if(computerSelection == "rock") return "You Lose!";
        else if(computerSelection == "scissors") return "Draw!";
    }
    else
    {
        return "Valid shape!"
    }
}

function game(computerSelection, playerSelection)
{
    computerSelection = computerChoice()
    if(playerPointsCounter < 5 && computerPointsCounter < 5)
    {
    if(playGround(computerSelection, playerSelection) == "You Win!") playerPointsCounter++
    if(playGround(computerSelection, playerSelection) == "You Lose!") computerPointsCounter++
    else{onGame = true}
    }
    
    if(playerPointsCounter == 5 || computerPointsCounter == 5)
    {
        showPopupPlayAgain();
    }
    showResult();
    

}

console.log(game())
