const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function muunnaPieniksi(sana) {
  let tulos = "";
  for (let i = 0; i < sana.length; i++) {
    let merkki = sana[i];
    let ascii = merkki.charCodeAt(0);

    // Jos merkki on iso kirjain (A-Z), muutetaan se pieneksi
    if (ascii >= 65 && ascii <= 90) {
      merkki = String.fromCharCode(ascii + 32);
    }

    tulos += merkki;
  }
  return tulos;
}

function onkoPalindromi(sana) {
  let kaannetty = "";
  let pieneksiMuunnettu = muunnaPieniksi(sana);

  for (let i = pieneksiMuunnettu.length - 1; i >= 0; i--) {
    kaannetty += pieneksiMuunnettu[i];
  }

  return pieneksiMuunnettu === kaannetty;
}

// Funktion kutsu
console.log(onkoPalindromi("saippuakauppias")); // true
console.log(onkoPalindromi("testi")); // false
