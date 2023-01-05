console.log("miao");

for (i = 0; i < caffetteria.length; i++) {
    document.getElementById(
      "menù"
    ).innerHTML += `
    <img class="img-fluid" src="${caffetteria[i]["img"]}" alt="${caffetteria[i]["nome"]}" />
    <div>${caffetteria[i]["nome"]}</div>
    `;
  }