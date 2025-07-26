function pickRandomElement(array) {
  let randomIndex = Math.floor(Math.random() * array.length);
  let randomElement = array[randomIndex];

  return randomElement;
}
