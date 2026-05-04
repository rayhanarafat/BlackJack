
let firstCard
let secondCard
let sum
let cards = []


let messageEl = document.getElementById("message-el")
let cardEl = document.getElementById("cards-el")
let sumEl = document.getElementById("sum-el")
let isAlive = false
let hasBlackJack = false

let player = {
    name : "Rayhan",
    chips : "200"
}



let playerEl = document.getElementById("player-el")

function updatePlayer() {
    playerEl.textContent = player.name + ": $" + player.chips
}

updatePlayer()


let message = ""

function getRandomCard() {
    let number = Math.floor(Math.random() * 13) +1
    if (number>=10) {
        return 10
    } else if ( number === 1){
        return 11
    } else {
        return number
    }
}

function startGame() {
    if(player.chips >= 60){
    player.chips -= 60
    updatePlayer()
    firstCard = getRandomCard()
    secondCard = getRandomCard()
    sum = firstCard + secondCard
    cards = [firstCard , secondCard]
    isAlive = true
    renderGame()
    }
    else {
        messageEl.textContent = "You don't have enough balance!"
    }
}

function renderGame() {
    cardEl.textContent = "Cards: "

    for (let i = 0; i < cards.length; i++){
        
        cardEl.textContent += cards[i] + " "
    }


    sumEl.textContent = "Sum: " + sum
    
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
        player.chips += 500
        updatePlayer()
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
        messageEl.textContent = message
    }



function newCards() {
    if (isAlive==true && hasBlackJack==false){
        let card = getRandomCard()
        cards.push(card)
        sum += card;
        renderGame()
    }
}
    
