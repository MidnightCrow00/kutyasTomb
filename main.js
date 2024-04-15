import { kutyakLISTA } from "./adat.js";
import { rendez, szures } from "./adatKezelo.js";
import { megjelenit,tablazatLetrehoz } from "./fuggveny.js";

let rIrany = 1;
init(kutyakLISTA);
szuresNevSzerint()

function init(lista) {
  let txt = tablazatLetrehoz(lista);
  megjelenit(txt);
  rendezesEsemeny();
}

function szuresNevSzerint() {
  // akkor kell lefutni, ha szűrőmezőbe beírunk valamit
const szuroElem = $("#sznev");
szuroElem.on("keyup", function () {
  let szoveg = szuroElem.val();
  init(szures(kutyakLISTA, szoveg));
});
// szorgalmi: egyébb mezők szerint:
const szurokorElem = $("#szkor");
szurokorElem.on("keyup", function () {
  let szoveg = szurokorElem.val();
  init(szures(kutyakLISTA, szoveg));
});
const szuronemElem = $("#sznem");
szuronemElem.on("keyup", function () {
  let szoveg = szuronemElem.val();
  init(szures(kutyakLISTA, szoveg));
});
}


function rendezesEsemeny() {
  const nevMezoElem = $(".adatok  table th").eq(0);
  nevMezoElem.on("click", function () {
    const lista = rendez(kutyakLISTA, "nev", rIrany);
    console.log(lista);

    let txt = tablazatLetrehoz(lista);
    megjelenit(txt);
    rendezesEsemeny();

    rIrany *= -1;
    console.log(rIrany);
  });

  // szorgalmi: tudjunk rendezni a többi mező szerint is:
  const korMezoElem = $(".adatok  table th").eq(1);
  korMezoElem.on("click", function () {
    const lista = rendez(kutyakLISTA, "kor", rIrany);
    console.log(lista);

    let txt = tablazatLetrehoz(lista);
    megjelenit(txt);
    rendezesEsemeny();

    rIrany *= -1;
    console.log(rIrany);
  });
  const nemMezoElem = $(".adatok  table th").eq(2);
  nemMezoElem.on("click", function () {
    const lista = rendez(kutyakLISTA, "nem", rIrany);
    console.log(lista);

    let txt = tablazatLetrehoz(lista);
    megjelenit(txt);
    rendezesEsemeny();

    rIrany *= -1;
    console.log(rIrany);
  })
  const fajMezoElem = $(".adatok  table th").eq(3);
  fajMezoElem.on("click", function () {
    const lista = rendez(kutyakLISTA, "faj", rIrany);
    console.log(lista);

    let txt = tablazatLetrehoz(lista);
    megjelenit(txt);
    rendezesEsemeny();

    rIrany *= -1;
    console.log(rIrany);
  })
}


 //Keverjük össze, véletlenszerű sorrend 
function veletlen() {
  kutyakLISTA.sort(function (e1, e2) {
     //véletlenszerűen kapjunk negatív, vagy pozitív számot 
    return Math.random()-0.5;
  });
}
