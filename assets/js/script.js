const gameContainer = document.querySelector('.container');
userResult = document.querySelector('.user-result img');
cpuResult = document.querySelector('.cpu-result img');
result = document.querySelector('.result');
optionalImages = document.querySelectorAll('.image-option');

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
