## Dinosaur Game

This is a simple dinosaur game implemented using the p5.js library. The player controls a dinosaur character and tries to avoid oncoming trains. The game features a scoring system and background motion effect to create an immersive gameplay experience.

### Gameplay Instructions

- Use the spacebar or voice command ("up") to make the dinosaur jump and avoid the trains.
- The game ends if the dinosaur collides with a train.
- The score increases as the dinosaur successfully avoids trains.

### Prerequisites

- Make sure you have a modern web browser installed.
- Text-to-speech support is required for voice commands.

### How to Run the Game

1. Clone the repository or download the source code files.
2. Open the `index.html` file in a web browser.

### Controls

- Press the spacebar to make the dinosaur jump.
- Alternatively, use the voice command "up" to make the dinosaur jump.

### Game Assets

- The dinosaur character and train images are provided as SVG files in the `SVG` directory.
- The background image is loaded from `background.jpg`.

### Code Overview

The game is implemented using JavaScript and the p5.js library. Here's a brief overview of the code structure:

- `setup()`: Initializes the game, sets up the canvas, loads assets, and starts the sound classifier for voice commands.
- `draw()`: Handles the game logic and rendering. It updates the background motion, pushes new trains, moves and shows the dinosaur and trains, checks for collisions, updates the score, and displays the score on the canvas.
- `keyPressed()`: Handles the spacebar key press event to make the dinosaur jump.
- `gotCommand()`: Handles the voice command recognition. If the recognized command is "up", it makes the dinosaur jump.
- `canPushTrain()`: Checks if a new train can be pushed based on the minimum distance between trains.
- `Train` class: Represents the train object. It has properties for position and methods for movement and rendering.
- `Unicorn` class: Represents the dinosaur character. It has properties for position, velocity, gravity, and methods for jumping, collision detection, movement, and rendering.

Feel free to modify the code and assets to customize the game according to your preferences.

### Credits

- Dinosaur SVG image: [OpenGameArt](https://opengameart.org/content/dinosaur)
- Train SVG image: [OpenGameArt](https://opengameart.org/content/sheriff-cactus)

Enjoy playing the Dinosaur Game!