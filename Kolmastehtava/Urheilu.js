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

class Urheilija extends Henkilo {
  constructor(enimet, snimi, kutsumanimi, omapaino, syntymavuosi, laji, saavutukset) {
    super(enimet, snimi, kutsumanimi, syntymavuosi);
    this.omapaino = omapaino;
    this.laji = laji;
    this.saavutukset = saavutukset;
  }
  show() {
    return (
      "Nimi: " +
      this.getKokoNimi() +
      "\nSyntymävuosi: " +
      this.syntymavuosi +
      "\nIkä: " +
      this.getIka() +
      "\nOmapaino: " +
      this.omapaino +
      "\nLaji: " +
      this.laji +
      "\nSaavutukset: " +
      this.saavutukset
    );
  }
}

let Urheilija1 = new Urheilija("Pertti", "Eräreikä", "Pertsa", 85, 1980, "Jalkapallo", "MM-kulta");

let Urheilija2 = new Urheilija("Matti", "Meikäläinen", "Masa", 75, 1985, "Jääkiekko", "SM-kulta");

console.log(Urheilija1.show());
console.log(Urheilija2.show());
// const henkilo1 = new Henkilo("Pertti", "Eräreikä", "Pertsa", 1850);
// console.log("Kokonimi: " + henkilo1.getKokoNimi());
// console.log(henkilo1.getIka() + " Vuotias");
