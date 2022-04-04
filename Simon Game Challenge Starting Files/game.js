const buttonColor = ["red", "blue", "green", "yellow"]

const gamePattern = []

let userClickedPattern = []

let level = 0

const started = false


$(".btn").click((event)=>{
    const userChosenColour = event.target.id
    userClickedPattern.push(userChosenColour)
    // console.log(userClickedPattern)
    
    playSound(userChosenColour)
    animatePress(userChosenColour)
    checkAnswer(userClickedPattern.length-1);

})

function playSound(name) {
    const audio = new Audio("/sounds/"+name+".mp3")
    audio.play()
}

function nextSequence() {
    userClickedPattern = []
    const randomNumber = Math.floor(Math.random() * 4)
    const randomChosenColour = buttonColor[randomNumber]
    gamePattern.push(randomChosenColour)

    level++
    $("#level-title").text("Level " + level)
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100)

    playSound(randomChosenColour)

}

function animatePress(currentColour) {
    $("#" + currentColour).addClass("pressed")

    setTimeout(() => {
        $("#" + currentColour).removeClass("pressed")
    }, 100);
    
}

$("body").on("keypress",(event)=>{
    if (!started) {
        $("#level-title").text("Level " + level)
        nextSequence()
    }
})

function checkAnswer(currentLevel) {
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

    console.log("Success")   
        
        if (userClickedPattern.length === gamePattern.length){
            setTimeout(function () {
              nextSequence();
            }, 1000);
    
          }
    }
    else{
        console.log("wrong")
    }
}