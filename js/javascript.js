console.log("miao");

for (i = 0; i < caffetteria.length; i++) {
  document.getElementById(
    "caffetteria"
  ).innerHTML += `
    <img class="img-fluid" src="${caffetteria[i]["img"]}" alt="${caffetteria[i]["nome"]}" />
    <div>${caffetteria[i]["nome"]}</div>
    `;
}

for (i = 0; i < gastronomia.length; i++) {
  document.getElementById(
    "gastronomia" //qui metto l'id
  ).innerHTML += `
    <img class="img-fluid" src="${gastronomia[i]["img"]}" alt="${gastronomia[i]["nome"]}" />
    <div>${gastronomia[i]["nome"]}</div>
    <div>${gastronomia[i]["prezzo"]}</div>
    `;
}
