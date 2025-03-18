const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function onPalindromi(sana) {
  let pituus = sana.length;

  for (let i = 0; i < pituus / 2; i++) {
    if (sana[i] !== sana[pituus - 1 - i]) {
      return false;
    }
  }
  return true;
}

rl.question("Anna sana: ", function (syote) {
  syote = syote.toLowerCase();

  if (onPalindromi(syote)) {
    console.log("Sana on palindromi!");
  } else {
    console.log("Sana ei ole palindromi.");
  }
});
