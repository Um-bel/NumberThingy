const generateRandomNDigits = (n) => {
    return Math.floor(Math.random() * (9 * (Math.pow(10, n)))) + (Math.pow(10, n));
  }

while(true) {
    console.log(generateRandomNDigits(4))
}
