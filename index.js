function rollDice() {
    // Get the number of dice from the input field
    const numOfDice = document.getElementById('numOfDice').value;

    // Get the elements to display the results and images
    const diceResult = document.getElementById('diceResult');
    const diceImages = document.getElementById('diceImages');

    // Initialize arrays to store the dice values and image tags
    const values = [];
    const images = [];

    // Loop through the number of dice to roll
    for (let i = 0; i < numOfDice; i++) {
        // Generate a random value between 1 and 6
        const value = Math.floor(Math.random() * 6) + 1;
        // Add the value to the values array
        values.push(value);
        // Create an image tag for the dice value and add it to the images array
        images.push(`<img src="images/${value}.png" alt="Dice ${value}">`);
    }

    // Display the rolled values in the diceResult element
    diceResult.textContent = `Dice: ${values.join(', ')}`;
    // Display the dice images in the diceImages element
    diceImages.innerHTML = images.join('');
}
