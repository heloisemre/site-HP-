//console.log(localStorage.getItem("name"));

//check if connected and redirect
if (localStorage.getItem("connected") != 'true') {
  window.location.href = "inscription.html";
}

//set name with localstorage data
let nameB = document.getElementById("name");
//console.log(nameB);
nameB.innerHTML = localStorage.getItem("name");

let listeB = document.getElementById("Liste");

//fetch
let url = "https://hp-api.lainocs.fr/characters";
//prendre des info de l'api
fetch(url)
  //traduire variable en json
  .then((resp) => resp.json())
  .then(function (data) {
    //je recupere tout les élements qui se trouve dans data
    data.forEach((element) => {
      //creer un element div
      let i = document.createElement("div");
      //ajouter une classe carte
      i.classList.add("carte");
      //mettre li en enfant de listeB (<ul>)
      listeB.appendChild(i);
      
      //je crée mon model de carte
      i.innerHTML =
      `
      <div class="card">
        <div class="img-box">
          <img src="${element.image}" class="card-img" alt="Avatar">
        </div>
        <div class="container">
          <h4><b>${element.name}</b></h4>
          <p>${element.house}</p>
        </div>
      </div>
`;

    });

  })
  .catch(function (error) {
    console.log(error);
  });
