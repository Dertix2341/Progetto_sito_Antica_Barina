console.log("miao");

for (i = 0; i < caffetteria.length; i++) {
  document.getElementById(
    "caffetteria"
  ).innerHTML += `
  <div>${caffetteria[i]["nome"]}</div>
  <div>${caffetteria[i]["prezzo"]}</div>
  `;
}

for (i = 0; i < bibite_e_aperitivi.lenght; i++) {
  document.getElementById(
    "bibite_e_aperitivi"
  ).innerHTML +=`
  <div>${bibite_e_aperitivi[i]["nome"]}</div>
  <div>${bibite_e_aperitivi[i]["prezzo"]}</div>
  `;
}

for (i = 0; i < cocktail_distillati_e_amari.length; i++) {
  document.getElementById(
   "cocktail_distillati_e_amari"
  ).innerHTML +=`
  <div>${cocktail_distillati_e_amari[i]["nome"]}</div>
  <div>${cocktail_distillati_e_amari[i]["prezzo"]}</div>
  `;
}

for (i = 0; i < gastronomia.length; i++) {
  document.getElementById(
    "gastronomia" //qui metto l'id
  ).innerHTML += `
  <div>${gastronomia[i]["nome"]}</div>
  <div>${gastronomia[i]["prezzo"]}</div>
  `;
}

 
for (i = 0; i < apericena.length; i++) {
  document.getElementById(
   "apericena"
  ).innerHTML +=`
  <div>${apericena[i]["nome"]}</div>
  <div>${apericena[i]["prezzo"]}</div>
  `;
}