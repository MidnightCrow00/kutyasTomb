export function tablazatLetrehoz(lista) {
    let txt = "<div class='table-responsive'><table class='table table-striped'>";
    txt += "<thead>";
    txt += "<tr><th>Név</th><th>Kor</th><th>Nem</th><th>Faj</th></tr>";
    txt += "</thead>";
    txt += "<tbody>";
    lista.forEach((elem) => {
      txt += `<tr>
              <td>${elem.nev}</td>
              <td>${elem.kor}</td>
              <td>${elem.nem ? "nöstény" : "hím"}</td>
              <td>${elem.faj}</td>
          </tr>`;
    });
    txt += "</tbody>";
    txt += "</table></div>";
    return txt;
  }
  
  export function megjelenit(txt) {
    const ELEM = $(".adatok");
    ELEM.html(txt);
  }
  