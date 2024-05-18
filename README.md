# Action Figure ID: AI Character Recognition Application

This project utilizes Machine Learning and AI techniques for real-time character recognition through webcam input. By leveraging the Teachable Machine platform, this application can identify various characters and trigger actions based on the recognized character.

## Overview

The application is built using JavaScript and integrates with the Teachable Machine model for image recognition. It uses a webcam feed to capture images, which are then processed by the machine learning model to predict the character present in the frame. Upon recognition, specific actions are triggered corresponding to the identified character.

## Features

-   Real-time character recognition using webcam input
-   Integration with Teachable Machine model for image classification
-   Dynamic background color change based on the recognized character
-   Display of character name and iconic quotes associated with them

## Technologies Used

-   **JavaScript**: The application logic is written in JavaScript, making use of modern web technologies for real-time processing.
-   **Tensorflow.js**: Tensorflow.js is utilized for loading and executing the machine learning model within the browser environment, enabling efficient inference on webcam input data.
-   **Teachable Machine**: The model for image classification is trained and hosted using Teachable Machine, a platform for creating machine learning models with minimal coding.
-   **Webcam API**: Webcam input is captured using the browser's native Webcam API, allowing access to the user's camera.
-   **HTML/CSS**: Basic HTML and CSS are used for structuring the UI elements and styling.

## Getting Started

To run the application locally, follow these steps:

1. Clone this repository to your local machine.
2. Open `index.html` in a web browser that supports webcam access.
3. Ensure your webcam is connected and accessible.
4. Allow webcam access when prompted by the browser.
5. The application will start recognizing the action figures in real-time.

## Supported Action Figure Characters

The model was trained to identify specific action figures for:

-   Yoda
-   Darth Vader
-   Stormtrooper
-   John Wick
-   Ironman
-   Buzz (BEES mascot)

## Usage

-   Position yourself in front of the webcam.
-   Display images or objects representing the characters (e.g., Yoda, Iron Man, Darth Vader) to trigger recognition.
-   The application will dynamically update the background color and display the character's name along with an iconic quote associated with them.

## Contributions

Contributions to the project are welcome. Feel free to fork this repository, make changes, and submit pull requests.

## License

This project is licensed under the [MIT License](LICENSE).

---

_This project demonstrates the intersection of machine learning, AI, and real-time applications, showcasing the potential for creating interactive experiences using readily available technologies._
