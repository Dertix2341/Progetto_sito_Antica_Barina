console.log("miao");

for (i = 0; i < caffetteria.length; i++) {
    document.getElementById(
      "menù"
    ).innerHTML += `<li>${caffetteria[i]["nome"]}</li>`;
  }