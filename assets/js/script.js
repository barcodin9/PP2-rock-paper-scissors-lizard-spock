const gameContainer = document.querySelector('.container');
userResult = document.querySelector('.user-result img');
cpuResult = document.querySelector('.cpu-result img');
result = document.querySelector('.result');
optionalImages = document.querySelectorAll('.image-option');

//selecting image for your next move
optionalImages.forEach((image, index) => {
    image.addEventListener("click", () =>{
        image.classList.add("active");

        //loop through each image option again
        optionalImages.forEach((image2, index2) => {
           // current index match clicked index or swap

           index !== index2 && image2.classList.remove("active");
        })

    })
})

// move selected is the move played on the user side
function playMove(userMove) {
    const moves = ["rock", "paper", "scissors", "lizard", "spock"];
    const computerMove = moves[Math.floor(Math.random) * moves.length];

    let resultMessage = `You played ${userMove}. Computer played ${computerMove}. `;

    if(userMove === computerMove) {
        resultMessage = "It's a tie!";
    } else if (
        (userMove === "rock" && computerMove === "scissors") ||
        (userMove === "rock" && computerMove === "lizard") ||
        (userMove === "paper" && computerMove === "rock") ||
        (userMove === "paper" && computerMove === "spock") ||
        (userMove === "scissors" && computerMove === "paper") ||
        (userMove === "scissors" && computerMove === "lizard") ||
        (userMove === "lizard" && computerMove === "spock") ||
        (userMove === "lizard" && computerMove === "paper") ||
        (userMove === "spock" && computerMove === "scissors") ||
        (userMove === "spock" && computerMove === "rock") 
        ) {
            resultMessage = "You win!"
        } else {
            resultMessage = "Computer wins!"
        }

        document.getElementsByClassName(".result-container").textContent = resultMessage;
}

