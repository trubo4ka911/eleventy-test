function outputSentence() {
    console.log('This is a sentence from my function.');
  }
  
  outputSentence(); 

function combineNames(firstName, lastName) {
return `${firstName} ${lastName}`;
}

let fullName = combineNames('Anna', 'Trubnikova');
console.log(fullName); 

let temperature = 45; // Example temperature variable

let isRaining = true;

if (temperature < 50 && isRaining) {
console.log("It's cold and raining. Definitely wear a coat and bring an umbrella!");
} else if (temperature < 50) {
console.log("It's cold. You should wear a coat.");
} else {
console.log("No coat needed. It's warm enough!");
}
  
  
