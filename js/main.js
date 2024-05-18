let quote = ""
const quoteDisplay = document.querySelector(".quote")

// the link to your model provided by Teachable Machine export panel
const URL = "https://teachablemachine.withgoogle.com/models/LI8L76QxP/"

let model, webcam, labelContainer, maxPredictions

// Load the image model and setup the webcam
async function init() {
    const modelURL = URL + "model.json"
    const metadataURL = URL + "metadata.json"

    // load the model and metadata
    // Refer to tmImage.loadFromFiles() in the API to support files from a file picker
    // or files from your local hard drive
    // Note: the pose library adds "tmImage" object to your window (window.tmImage)
    model = await tmImage.load(modelURL, metadataURL)
    maxPredictions = model.getTotalClasses()

    // Convenience function to setup a webcam
    const flip = true // whether to flip the webcam
    webcam = new tmImage.Webcam(800, 800, flip) // width, height, flip
    await webcam.setup() // request access to the webcam
    await webcam.play()
    window.requestAnimationFrame(loop)

    // append elements to the DOM
    document.getElementById("webcam-container").appendChild(webcam.canvas)
    labelContainer = document.getElementById("label-container")
    for (let i = 0; i < maxPredictions; i++) {
        // and class labels
        labelContainer.appendChild(document.createElement("div"))
    }
}

async function loop() {
    webcam.update() // update the webcam frame
    await predict()
    window.requestAnimationFrame(loop)
}

// run the webcam image through the image model
async function predict() {
    // predict can take in an image, video or canvas html element
    const prediction = await model.predict(webcam.canvas)
    for (let i = 0; i < maxPredictions; i++) {
        // probability equals 1.0 means it should trigger the action
        shouldAct = prediction[i].probability.toFixed(2) === "1.00" ? true : false

        // trigger action when condition is met
        // Replace here with the commands to controle the application
        if (shouldAct) {
            let characterName = prediction[i].className
            let color = ""

            console.log(characterName)

            if (characterName === "yoda") {
                console.log("green")
            }

            switch (characterName) {
                case "yoda":
                    color = "green"
                    quote = '"Do or do not. There is no try."'
                    break
                case "ironman":
                    color = "red"
                    quote = '"Genius, billionaire, playboy, philanthropist."'
                    break
                case "darth vader":
                    color = "black"
                    quote = `"Luke, I'm your father!"'`
                    break
                case "john wick":
                    color = "dimgray"
                    quote = '"You stole my car, and you killed my dog!"'
                    break
                case "stormtrooper":
                    color = "white"
                    quote = '"Traitor!"'
                    break
                default:
                    color = "black" // Default color if characterName doesn't match any case
                    break
            }

            updateScreen(color, capitalizeFirstLetters(characterName), quote)
        }

        const classPrediction = prediction[i].className + ": " + prediction[i].probability.toFixed(2)
        labelContainer.childNodes[i].innerHTML = classPrediction
    }
}

function updateScreen(newColor, characterName, quote) {
    // Get the current background color
    const colorBox = document.getElementsByClassName("window-wrapper")[0]

    // Set the new background color with a smooth transition
    colorBox.style.backgroundColor = newColor

    // Update the text content with the new color name
    const characterNameElement = document.getElementsByClassName("title")[0]

    characterNameElement.textContent = characterName

    // Add the new style class
    characterNameElement.classList.add("title-big")

    quoteDisplay.textContent = quote
}

function capitalizeFirstLetters(str) {
    // Split the string into an array of words
    let words = str.split(" ")

    // Capitalize the first letter of each word
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase()
    }

    // Join the words back together
    return words.join(" ")
}
