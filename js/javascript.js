console.log("miao");

//questo contenitore riempie la caffeteria cioè div con id="caffeteria"
for (i = 0; i < 13; i++) {
  document.getElementById(//vai a prendere il documento ovvero l'html con id 
    "caffetteria"
  ).innerHTML += `
    <div class="card_container">

      <div>${caffetteria[i]["nome"]}</div>
      <div>${caffetteria[i]["prezzo"]}</div>

    </div>
    `;
}

for (i = 13; i < 26; i++) {
  document.getElementById(//vai a prendere il documento ovvero l'html con id 
    "caffetteria2"
  ).innerHTML += `
    <div class="card_container">
      
      <div>${caffetteria[i]["nome"]}</div>
      <div>${caffetteria[i]["prezzo"]}</div>

    </div>
    `;
}

for (i = 26; i < 37; i++) {
  document.getElementById(//vai a prendere il documento ovvero l'html con id 
    "caffetteria3"
  ).innerHTML += `
    <div class="card_container">
      
      <div>${caffetteria[i]["nome"]}</div>
      <div>${caffetteria[i]["prezzo"]}</div>
      
    </div>
    `;
}

//questo contenitore riempie la bibite_e_aperitivi cioè div con id="bibite_e_aperitivi"
for (i = 0; i < 12; i++) {
  document.getElementById(
    "bibite_e_aperitivi" //qui metto l'id
  ).innerHTML += `
    <div>${bibite_e_aperitivi[i]["nome"]}</div>
    <div>${bibite_e_aperitivi[i]["prezzo"]}</div>
    `;
}

for (i = 12; i < 24; i++) {
  document.getElementById(
    "bibite_e_aperitivi2" //qui metto l'id
  ).innerHTML += `
    <div>${bibite_e_aperitivi[i]["nome"]}</div>
    <div>${bibite_e_aperitivi[i]["prezzo"]}</div>
    `;
}

for (i = 24; i < 35; i++) {
  document.getElementById(
    "bibite_e_aperitivi3" //qui metto l'id
  ).innerHTML += `
    <div>${bibite_e_aperitivi[i]["nome"]}</div>
    <div>${bibite_e_aperitivi[i]["prezzo"]}</div>
    `;
}

//questo contenitore riempie la cocktail_distillati_e_amari cioè div con id="cocktail_distillati_e_amari"

for (i = 0; i < 4; i++) {
  document.getElementById(
    "cocktail_distillati_e_amari" //qui metto l'id
  ).innerHTML += `
    <div>${cocktail_distillati_e_amari[i]["nome"]}</div>
    <div>${cocktail_distillati_e_amari[i]["prezzo"]}</div>
    `;
}

for (i = 4; i < 8; i++) {
  document.getElementById(
    "cocktail_distillati_e_amari2" //qui metto l'id
  ).innerHTML += `
    <div>${cocktail_distillati_e_amari[i]["nome"]}</div>
    <div>${cocktail_distillati_e_amari[i]["prezzo"]}</div>
    `;
}


//questo contenitore riempie la gastronomia cioè div con id="gastronimia"
for (i = 0; i < 7; i++) {
  document.getElementById(
    "gastronomia" //qui metto l'id
  ).innerHTML += `
    <div>${gastronomia[i]["nome"]}</div>
    <div>${gastronomia[i]["prezzo"]}</div>
    `;
}

for (i = 7; i < 14; i++) {
  document.getElementById(
    "gastronomia2" //qui metto l'id
  ).innerHTML += `
    <div>${gastronomia[i]["nome"]}</div>
    <div>${gastronomia[i]["prezzo"]}</div>
    `;
}

for (i = 14; i < 21; i++) {
  document.getElementById(
    "gastronomia3" //qui metto l'id
  ).innerHTML += `
    <div>${gastronomia[i]["nome"]}</div>
    <div>${gastronomia[i]["prezzo"]}</div>
    `;
}

//questo contenitore riempie la apericena cioè div con id="apericena"
for (i = 0; i < 5; i++) {
  document.getElementById(
    "apericena" //qui metto l'id
  ).innerHTML += `
    <div>${apericena[i]["nome"]}</div>
    <div>${apericena[i]["prezzo"]}</div>
    `;
}

for (i = 5; i < 10; i++) {
  document.getElementById(
    "apericena2" //qui metto l'id
  ).innerHTML += `
    <div>${apericena[i]["nome"]}</div>
    <div>${apericena[i]["prezzo"]}</div>
    `;
}

for (i = 10; i < 15; i++) {
  document.getElementById(
    "apericena3" //qui metto l'id
  ).innerHTML += `
    <div>${apericena[i]["nome"]}</div>
    <div>${apericena[i]["prezzo"]}</div>
    `;
}



//const array = [//array inizia a contare da 0
//  1, 2, 3, 4, 5, 6, 7, 8, 9, 10
//]

console.log(cocktail_distillati_e_amari.length);

//for (i = 1; i <= array.length; i++) {
//  console.log("indice array ", i - 1, "-> valore", array[i - 1]);
//}

//img  <img class="img-fluid" src="${gastronomia[i]["img"]}" alt="${gastronomia[i]["nome"]}" />