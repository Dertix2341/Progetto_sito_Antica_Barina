console.log("miao");

//questo contenitore riempie la caffeteria cioè div con id="caffeteria"
for (i = 0; i < caffetteria.length; i++) {
  document.getElementById(//vai a prendere il documento ovvero l'html con id 
    "caffetteria"
  ).innerHTML += `
    <div class="card_container">
      <img class="img-fluid" src="${caffetteria[i]["img"]}" alt="${caffetteria[i]["nome"]}" />
      <div>${caffetteria[i]["nome"]}</div>
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

console.log(array.length);

for (i = 1; i <= array.length; i++) {
  console.log("indice array ", i - 1, "-> valore", array[i - 1]);
}