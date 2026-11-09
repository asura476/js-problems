import { squads } from "./app.js";
function analyserResultats(squads) {
    let apprenantsMoin12 = [];
    let moyenArray = []
    for (let i = 0; i < squads.length; i++) {
        for (let j = 0; j < squads[i].apprenants.length; j++) {
            let somme = 0;
            let moyen = 0;
            for (let key in squads[i].apprenants[j].notes) {
                somme += squads[i].apprenants[j].notes[key]
                moyen = somme / (Object.keys(squads[i].apprenants[j].notes).length)
            }
            console.log(`la moyen de "${squads[i].apprenants[j].nom}" est ${parseInt(moyen)}`)
            moyenArray += parseInt(moyen)

            if (moyen < 12) {
                apprenantsMoin12 += squads[i].apprenants[j].nom
                apprenantsMoin12 += ", "
            }
        }
    }
    console.log(`les etudiants avec moyen moins a 12 sont: ${apprenantsMoin12}`)
    for(let i = 0; i < moyenArray.length; i++){
        let max = 0; 
        if(moyenArray[i] > max){
            max = moyenArray[i]
        }
        console.log(`l'apprenant ayant le meilleure moyen est ${max}`)
    }
}
analyserResultats(squads)