import { squads } from "./app.js";
function getApprenantsPerformants(squads) {
    let students15OrMoreJS = []
    for (let i = 0; i < squads.length; i++) {
        for (let j = 0; j < squads[i].apprenants.length; j++) {
            if (squads[i].apprenants[j].notes.javascript >= 15) {
                let students = {
                    nom: squads[i].apprenants[j].nom,
                    squad:squads[i].nom,
                    note: squads[i].apprenants[j].notes.javascript
                }
                students15OrMoreJS.push(students)
            }
        }
    }
    return students15OrMoreJS
}
console.log(getApprenantsPerformants(squads))