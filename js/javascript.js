console.log("miao");

//questo contenitore riempie la caffeteria cioè div con id="caffeteria"
for (i = 0; i < 12; i++) {
  document.getElementById(//vai a prendere il documento ovvero l'html con id 
    "caffetteria"
  ).innerHTML += `
    <div class="card_container">
      <div>${caffetteria[i]["nome"]}</div>
      <div>${caffetteria[i]["prezzo"]}</div>
    </div>
    `;
}

for (i = 12; i < 24; i++) {
  document.getElementById(//vai a prendere il documento ovvero l'html con id 
    "caffetteria2"
  ).innerHTML += `
    <div class="card_container">
      <div>${caffetteria[i]["nome"]}</div>
      <div>${caffetteria[i]["prezzo"]}</div>
    </div>
    `;
}

for (i = 24; i < 37; i++) {
  document.getElementById(//vai a prendere il documento ovvero l'html con id 
    "caffetteria3"
  ).innerHTML += `
    <div class="card_container">
      <div>${caffetteria[i]["nome"]}</div>
      <div>${caffetteria[i]["prezzo"]}</div>
    </div>
    `;
}

//questo contenitore riempie la gastronomia cioè div con id="gastronimia"
for (i = 0; i < gastronomia.length; i++) {
  document.getElementById(
    "gastronomia" //qui metto l'id
  ).innerHTML += `
    <img class="img-fluid" src="${gastronomia[i]["img"]}" alt="${gastronomia[i]["nome"]}" />
    <div>${gastronomia[i]["nome"]}</div>
    <div>${gastronomia[i]["prezzo"]}</div>
    `;
}


const array = [//array inizia a contare da 0
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10
]

console.log(caffetteria.length);

for (i = 1; i <= caffetteria.length; i++) {
  console.log("indice caffetteria ", i, "-> valore", array[i]);
}