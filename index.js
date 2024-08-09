//import { readFile, writeFile } from "./data/index.js";

import Possession from "./src/patrimoineManager/models/possessions/Possession.js"
import Flux from "./src/patrimoineManager/models/possessions/Flux.js"
import Patrimoine from "./src/patrimoineManager/models/Patrimoine.js"
import Personne from "./src/patrimoineManager/models/Personne.js"
import fs from "fs";



const john = new Personne("Kate Doe");

const macBookPro = new Possession(john, "MacBook Pro", 4000000, new Date("2020-12-25"), null, 5);
const salaire = new Flux(john,"FullStack",600_000,new Date("2024-1-1"),null,null,1);
const traindevie = new Flux(john,"Survie",-400_000,new Date("2024-1-1"),null,null,2)
const possessions = [macBookPro,salaire,traindevie];


const johnPatrimoine  = new Patrimoine(john,possessions);
johnPatrimoine.addPossession(macBookPro);
johnPatrimoine.addPossession(salaire);
johnPatrimoine.addPossession(traindevie);

save(john, johnPatrimoine);
console.log(JSON.parse(read()).map(item => item.data));
function save(personne, patrimoine) {
  const file = []
  file.push({
    model: "Personne",
    data: personne
  })
  file.push({
    model: "Patrimoine",
    data: patrimoine
  })
  return fs.writeFileSync("./fileManager/data.json", JSON.stringify(file),"utf8");

}
function read() {
  return fs.readFileSync("./fileManager/data.json")
}

export {save, read}