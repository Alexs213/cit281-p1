// Returns a random number between min (inclusive) and max (exclusive)
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
//let letters = "abcdefghijklmnopqrstuvwxyz"
function alpha() {
let text = "";
  let letters = "abcdefghijklmnopqrstuvwxyz";

  for (var i = 5; i < 26; i++)
    text += letters.charAt(getRandomInteger(0,27));

  return text;
}

console.log(alpha());