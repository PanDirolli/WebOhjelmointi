class Henkilo {
  constructor(enimet, snimi, kutsumanimi, syntymavuosi) {
    this.enimet = enimet;
    this.snimi = snimi;
    this.kutsumanimi = kutsumanimi;
    this.syntymavuosi = syntymavuosi;
  }
  getKokoNimi() {
    return this.enimet + " " + this.snimi;
  }
  getIka() {
    const nykyvuosi = new Date().getFullYear();
    return nykyvuosi - this.syntymavuosi;
  }
}

const henkilo1 = new Henkilo("Pertti", "Eräreikä", "Pertsa", 1850);
console.log("Kokonimi: " + henkilo1.getKokoNimi());
console.log(henkilo1.getIka() + " Vuotias");
