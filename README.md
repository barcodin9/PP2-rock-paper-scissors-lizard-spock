# Rock, Paper, Scissors, Lizard, Spock! 

![RPSLS Mockup-min](https://github.com/barcodin9/PP2-rock-paper-scissors-lizard-spock/assets/109236559/4c28b083-041d-45b2-86e8-0b6084a7975c)

Rock, Paper, Scissors, Lizard, Spock (RPSLS!) is a basic game built using HTML, CSS and JavaScript. This site is targeted toward anybody who wishes to play a more complex Rock, Paper, Scissors against a cpu.

I built this game in order to gain a greater understanding of JavaScript and its functionalities. I found this to be quite a challenging project but I am pleased with the overall outcome. I recently played through **FlexboxZombies created by Dave Geddes of MasteryGames** which I feel helped me immensely with the HTML and CSS portion of this project. I would highly recommend giving it a go if you struggle with flexbox. 

# Features

## The Head Bar

The head bar is in a contrasting black with white text that jumps out at the viewer - it features a heading for the website done in the Permenant Marker font from GoogleFonts (the remainder of the website uses this font also) with Helvetica Neau as backup. It also features a Rules element which, when clicked, navigates to the rules page which explains how the game works.

![Screenshot 2023-07-26 at 11 05 39](https://github.com/barcodin9/PP2-rock-paper-scissors-lizard-spock/assets/109236559/e7523bbd-06f8-4e2a-b369-48913878dbfc)

When you downsize the screen below 768px - the **"Rock, Paper, Scissors, Lizard, Spock!"** heading downsizes to **"RPSLS"** to fit better with the page.

![Screenshot 2023-07-26 at 11 15 27](https://github.com/barcodin9/PP2-rock-paper-scissors-lizard-spock/assets/109236559/53b51e1e-b023-4ff7-af32-bd4e1fd7f62f)



## The Rules Page

The rules page features a basic list of the rules of the game, essentially which moves beat eachother.

![Screenshot 2023-07-26 at 11 06 48](https://github.com/barcodin9/PP2-rock-paper-scissors-lizard-spock/assets/109236559/854622c7-f3c9-42da-a310-f4f5a7ef2d3f)

It also features this fantastic image from WikiMedia Commons which gives a more visual breakdown of the above rules.

![Screenshot 2023-07-26 at 11 06 58](https://github.com/barcodin9/PP2-rock-paper-scissors-lizard-spock/assets/109236559/6ff360b4-5565-4841-a3cb-babfb1a6a147)

The RPSLS heading on the rules page acts as a link back to the index file for easy navigation back to the game page.

## The Game Area 

### Game Visual
The immediate visual cue of the game area are the 2 big hands which dominate most of it. These are animated to spin 3 times when a selection is made before showing the result of the game, I had gone with a shake initially but personally prefer the spin for digital.

![Screenshot 2023-07-26 at 11 06 13](https://github.com/barcodin9/PP2-rock-paper-scissors-lizard-spock/assets/109236559/3f4f538d-e3f8-43a4-a4fe-6706635a601b)

### Result Identifier
The game result is displayed in between the two hands - this displays whether the player or cpu have won.

![Screenshot 2023-07-26 at 11 06 23](https://github.com/barcodin9/PP2-rock-paper-scissors-lizard-spock/assets/109236559/3651ed25-4594-4a20-9422-e302db167ce3)

### Move Selector
The move selector is a row of 5 options with names below them, the selected one is highlighted while the rest remain at 0.5 opacity, if a new selection is made then the new option is highlighted and the previous highlight is removed. Once the game animation (spin) has played, the option that you selected will be displayed in the game area.

![Screenshot 2023-07-26 at 11 06 30](https://github.com/barcodin9/PP2-rock-paper-scissors-lizard-spock/assets/109236559/00d536e7-4d2f-4931-b7df-77b87b8022b6)

### The Score Tracker
Below the game area is a score tracker which keeps track of your wins and losses VS the CPU. The score increments with each win or loss - using a contrasting red to make it pop.

![Screenshot 2023-07-26 at 11 06 35](https://github.com/barcodin9/PP2-rock-paper-scissors-lizard-spock/assets/109236559/2fbef880-4104-4c97-8bbc-be0403ade04e)

## The Footer
The footer is a simple black footer with links to the nonexistent socials using icons from FontAwesome - the icons when hovered over change to a grey color to show it registers the hover and when clicked, will open a new tab and default to the social media log in pages.

![Screenshot 2023-07-26 at 11 06 39](https://github.com/barcodin9/PP2-rock-paper-scissors-lizard-spock/assets/109236559/e6797760-ea09-4b24-af9b-8f4dfce6bec6)

# Testing
I would have liked to do more testing but was met with time constraints, I played through the game functionality in every way I could think of, it functions as intended with one minor unfixed bug which is detailed below in the **Unfixed Bugs** section of this doc.

When game is loaded, you are on the game screen, you can navigate to the rules section to view rules then click the heading to navigate back to the game area. To begin the game, simply select an option, wait for the animation to play out and see the result, then wait for the animation to reset to the rock move before selecting another option to go again, rinse and repeat.

Here are examples of the different visuals on different screen sizes below.

### <1335px
At less than 1335px the heading changes to abbreviate it in order to fit better.
![Screenshot 2023-07-26 at 11 38 26](https://github.com/barcodin9/PP2-rock-paper-scissors-lizard-spock/assets/109236559/e28960c3-c358-48f9-a1c3-2f501cf1b99a)

### <768px
At less than 768px the padding around the images changes to fit the box to the window without warping the game area.

![Screenshot 2023-07-26 at 11 38 39](https://github.com/barcodin9/PP2-rock-paper-scissors-lizard-spock/assets/109236559/688df6a1-6e80-4ede-a6bc-cb1504e3e69f)

### <500px 
At less than 500px or for phone screens, similar to <768 the padding is changed to allow the game area to fit the screen, the result image in the game area is reduced in size along with the image options below that, the result text to define who wins is also reduced in size. The score element is reduced in size and padding and moved to the bottom of the screen. The head bar content is reduced in size to fit more appropriately also.

![Screenshot 2023-07-26 at 11 38 51](https://github.com/barcodin9/PP2-rock-paper-scissors-lizard-spock/assets/109236559/7fef3938-aaf3-470e-93d1-80a4cdb3509e)





## Vaildator Testing
- HTML
    - No errors were returned when passing through the official [W3C validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Fcode-institute-org.github.io%2Flove-maths%2F)
- CSS
    - No errors were found when passing through the official [(Jigsaw) validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fvalidator.w3.org%2Fnu%2F%3Fdoc%3Dhttps%253A%252F%252Fcode-institute-org.github.io%252Flove-maths%252F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)
  ![Screenshot 2023-07-26 at 11 39 34](https://github.com/barcodin9/PP2-rock-paper-scissors-lizard-spock/assets/109236559/2e067984-f6c0-47a3-ab30-ae988d457c9f)
- JavaScript
   - There are 8 functions in this file.
   - Function with the largest signature take 2 arguments, while the median is 0.
   - Largest function has 13 statements in it, while the median is 2.5.
   - The most complex function has a cyclomatic complexity value of 22 while the median is 1.
   - 
   **NOTE** (JSHint did point out that there was an unused variable in the function PlayMove, however removing any portion of the function removed the functionality of the game - I have left it as is)

## Unfixed Bugs 
There is 1 unfixed bug that I could locate where if you spam an answer before the animation finishes playing and reverting back to rock, then it will play another game before the animation has time to start, causing a loop of win/ losses with no animation depending on how many times you press it, I dont believe it is a catastrophic bug and could probably be remedied with a delay function, however due to time constraints, I was unable to address it prior to submission.

## Deployment

This section should describe the process you went through to deploy the project to a hosting platform (e.g. GitHub) 

- The site was deployed to GitHub pages. The steps to deploy are as follows: 
  - In the GitHub repository, navigate to the Settings tab 
  - From the source section drop-down menu, select the Master Branch
  - Once the master branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment. 

The live link can be found here - https://barcodin9.github.io/PP2-rock-paper-scissors-lizard-spock/

## Credits

### Content
- Instruction for how to build the image selection option was taken from CodeNepal - https://www.codingnepalweb.com/rock-paper-scissors-game-javascript/

### Media 
- Icons used for the selection and game area taken from www.seekicon.com
- https://seekicon.com/free-icon/fist-raised_1
- https://seekicon.com/free-icon/hand-paper_1
- https://seekicon.com/free-icon/hand-scissors_1
- https://seekicon.com/free-icon/hand-lizard_1
- https://seekicon.com/free-icon/hand-spock_1

- RPSLS Rules image taken from https://commons.wikimedia.org/wiki/File:Rock_paper_scissors_lizard_spock.svg

# Thank you for reading, I hope you enjoyed my project.


