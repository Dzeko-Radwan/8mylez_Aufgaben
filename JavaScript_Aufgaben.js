// JavaScript
// Aufgabe 4: Durchschnitt kalkulieren

// Erste Lösung
function calculateAverage(numbers) {
  let sum = 0;
  for (let i = 0; i <= numbers.length - 1; i++) {
    sum += numbers[i];
  }
  var average = sum / numbers.length;
  return average;
}
let numbers = [1, 2, 3, 4, 5];
let average = calculateAverage(numbers);
console.log("Der Durchschnitt beträgt: " + average);

/*
// Alternative
function calculateAverage(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
  }
  var average = sum / numbers.length;
  return average;
  }
  let numbers = [1, 2, 3, 4, 5];
  let average = calculateAverage(numbers);
  console.log("Der Durchschnitt beträgt: " + average);
*/

// Aufgabe 5: Palindrom
function checkPalindrome(word) {
  let reverseWord = "";
  for (let i = word.length - 1; i >= 0; i--) {
    reverseWord += word[i];
  }
  if (reverseWord === word) {
    return false;
  } else {
    return true;
  }
}
let word = "level";
let isPalindrome = checkPalindrome(word);
console.log("Ist das Wort ein Palindrom? " + isPalindrome);
