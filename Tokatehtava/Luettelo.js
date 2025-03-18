const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const puhelinluettelo = [];

function haeNumero(taulukko, nimi) {
  const henkilo = taulukko.find(h => h.nimi.toLowerCase() === nimi.toLowerCase());
  return henkilo ? henkilo.puhelinnumero : "Numeroa ei löytynyt.";
}

function kysyToiminto() {
  console.log("\nPuhelinluettelo");
  console.log("1. Lisää henkilö");
  console.log("2. Hae numero");
  console.log("3. Lopeta");

  rl.question("Valitse toiminto: ", valinta => {
    if (valinta === "1") {
      rl.question("Anna nimi: ", nimi => {
        rl.question("Anna puhelinnumero: ", numero => {
          puhelinluettelo.push({ nimi, puhelinnumero: numero });
          console.log(`${nimi} lisätty puhelinluetteloon.`);
          kysyToiminto();
        });
      });
    } else if (valinta === "2") {
      rl.question("Anna haettava nimi: ", nimi => {
        console.log(`Puhelinnumero: ${haeNumero(puhelinluettelo, nimi)}`);
        kysyToiminto();
      });
    } else if (valinta === "3") {
      console.log("Ohjelma lopetetaan.");
      rl.close();
    } else {
      console.log("Virheellinen valinta, yritä uudelleen.");
      kysyToiminto();
    }
  });
}

kysyToiminto();
