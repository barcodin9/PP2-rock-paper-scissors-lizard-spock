const gameContainer = document.querySelector('.container');
const resultContainer = document.querySelector('.result-container');
userResult = document.querySelector('.user-result img');
cpuResult = document.querySelector('.cpu-result img');
result = document.querySelector('.result');
optionalImages = document.querySelectorAll('.image-option');
let winsCount = 0;
let lossesCount = 0;


//selecting image for your next move
optionalImages.forEach((image, index) => {
    image.addEventListener("click", (e) => {
        image.classList.add("active");

        //loop through each image option again
        optionalImages.forEach((image2, index2) => {
           // current index match clicked index or swap

           index !== index2 && image2.classList.remove("active");
        });
    })
})

function resetResultImages() {
    userResult.src = "assets/images/hand-rock_1.png";
    cpuResult.src = "assets/images/hand-rock_1.png";
  }

// move selected is the move played on the user side
function playMove(userMove) {
    const moves = ["rock", "paper", "scissors", "lizard", "spock"];
    const computerMove = moves[Math.floor(Math.random() * moves.length)];

    userResult.classList.add("shake-animation");
    cpuResult.classList.add("shake-animation");
    


// set delay between move selection and game judgement - animation inc.
setTimeout(() => {
    userResult.src = `assets/images/hand-${userMove}_1.png`;
    cpuResult.src = `assets/images/hand-${computerMove}_1.png`;

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
            winsCount++;
        } else {
            resultMessage = "Computer wins!"
            lossesCount++;
        }

        document.getElementById("wins").textContent = winsCount;
        document.getElementById("losses").textContent = lossesCount;
        

        resultContainer.textContent = resultMessage
        setTimeout(() => {
            userResult.classList.remove("shake-animation");
            cpuResult.classList.remove("shake-animation");
            resetResultImages();
          }, 1000); // 500ms is the duration of the shake animation
        }, 2500); 

    
    }

    

