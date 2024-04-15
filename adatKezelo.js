export function rendez(lista, kulcs, rIrany) {
    const rlista = lista.sort(function (k1, k2) {
      return k1[kulcs] < k2[kulcs] ? -1 * rIrany : 1 * rIrany;
    });
  
    return rlista;
  
    //szorgalmi: legyen egy függvény, hogy az ékezetes karaktereket cseréljük ki nem ékezetesre és utána rendezzük. replaceAll()
  }
  export function szures(lista, keresoSzoveg) {
    const szLista = lista.filter(function (kutya) {
      if (kutya.nev.toUpperCase().includes(keresoSzoveg.toUpperCase()) ||kutya.kor.toUpperCase().includes(keresoSzoveg.toUpperCase()) ||(kutya.nem ? "NŐSTÉNY" : "HÍM").includes() || kutya.faj.toUpperCase().includes(keresoSzoveg.toUpperCase()) ){

      }
    });
    return szLista;
  }