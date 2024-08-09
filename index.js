//import { readFile, writeFile } from "./data/index.js";

import Possession from "./src/patrimoineManager/models/possessions/Possession.js"
import Flux from "./src/patrimoineManager/models/possessions/Flux.js"
import Patrimoine from "./src/patrimoineManager/models/Patrimoine.js"
import Personne from "./src/patrimoineManager/models/Personne.js"
import fs from "fs";


const john = new Personne("Vim");

const macBookPro = new Possession(john, "Asus Ma B", 40000, new Date("2022-2-5"), null, 5);
const salaire = new Flux(john,"FullStack",300_000,new Date("2020-3-2"),null,null,1);
const traindevie = new Flux(john,"Survie",-400_000,new Date("2021-2-6"),null,null,2)
const possessions = [macBookPro,salaire,traindevie];


const johnPatrimoine  = new Patrimoine(john,possessions);
johnPatrimoine.addPossession(macBookPro);
johnPatrimoine.addPossession(salaire);
johnPatrimoine.addPossession(traindevie);


/*
fetch('./fileManager/data.json')
  .then(response => response.json())
  .then(data => {
    // data contient maintenant votre tableau d'objets
    data.push(johnPatrimoine); // Ajout d'un nouvel objet
    // Enregistrez le nouveau tableau dans un nouveau fichier (optionnel)
    // ...
  })
  .catch(error => {
    console.error('Erreur lors de la récupération du fichier:', error);
  });

// Exemple avec fs.readFile (pour un fichier local)


fs.readFile('./fileManager/data.json', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  const jsonData = JSON.parse(data);
  jsonData.push(johnPatrimoine);
  // Écriture du nouveau contenu dans le fichier
  fs.writeFile('monfichier.json', JSON.stringify(jsonData), (err) => {
    if (err) {
      console.error(err);
    }
  });
});
*/



//console.log(JSON.parse(read()));
//save(john, johnPatrimoine);
//console.log(JSON.parse(read()));
function save(personne, patrimoine) {

  let readable = JSON.stringify(read());
  readable = JSON.parse(readable)
  let file = []
  file.push({
    model: "Personne",
    data: personne
  })
  file.push({
    model: "Patrimoine",
    data: patrimoine
  })
  const newdata = [];
  newdata.push(readable)
  newdata.push(file)
  return fs.writeFileSync("./fileManager/data.json", JSON.stringify(newdata),"utf8");

}
function read() {
  return fs.readFileSync("./fileManager/data.json")
}

function all(){
  return "hello"
}

export {save, read, all}

