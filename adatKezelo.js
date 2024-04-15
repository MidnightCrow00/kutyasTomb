export function rendez(lista, kulcs, rIrany) {
    const rlista = lista.sort(function (e1, e2) {
      return e1[kulcs] < e2[kulcs] ? -1 * rIrany : 1 * rIrany;
    });
  
    return rlista;
  
    //szorgalmi: legyen egy függvény, hogy az ékezetes karaktereket cseréljük ki nem ékezetesre és utána rendezzük. replaceAll()
  }
  export function szures(lista, keresoSzoveg) {
    const szLista = lista.filter(function (kutya) {
      return kutya.nev.toUpperCase().includes(keresoSzoveg.toUpperCase());
    });
    return szLista;
  
    const szkorLista = lista.filter(function (kutya) {
      return kutya.kor.toUpperCase().includes(keresoSzoveg.toUpperCase());
    });
    return szkorLista;
  
    const sznemLista = lista.filter(function (kutya) {
      return kutya.nem.toUpperCase().includes(keresoSzoveg.toUpperCase());
    });
    return sznemLista;

    const szfajLista = lista.filter(function (kutya) {
        return kutya.faj.toUpperCase().includes(keresoSzoveg.toUpperCase());
      });
      return szfajLista;
  }