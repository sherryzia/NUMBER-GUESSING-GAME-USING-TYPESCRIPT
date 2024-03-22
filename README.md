
# Number Guessing Game

This TypeScript console application allows users to play a number guessing game. The user selects a range (1-10, 1-100, 1-1000, or 1-10000) and enters a value. The program generates a random number within the selected range, and the user has to guess the correct value. After each guess, the program provides feedback on whether the guess was too high, too low, or correct. Users can choose to play the game again after each round.

## Features

- Select the range for number guessing.
- Input a value to guess the correct number.
- Receive feedback on each guess (too high, too low, or correct).
- Option to play the game again after each round.

## How to Play

1. Install the npm package `ngg_sherry`.
   ```
   npm i ngg_sherry
   ```

2. Import the package and run the game in your TypeScript file.

   ```typescript
   import { startGame } from 'ngg_sherry';

   startGame();
   ```

3. Choose a range for number guessing (1-10, 1-100, 1-1000, or 1-10000).
4. Enter a value to guess the correct number within the selected range.
5. Receive feedback on your guess (too high, too low, or correct).
6. Choose to play again if desired.

## Dependencies

- `inquirer`: For interactive command-line user interface.
- `figlet`: For generating ASCII art text.

## Contributing

Contributions are welcome! If you have suggestions or feature requests, please open an issue or submit a pull request.

## Acknowledgments

ASCII art generated using `figlet`.
