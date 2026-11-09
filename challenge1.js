import { notesHebdomadaires } from "./app.js";
//1

//1
console.log(`la deuxieme note du premier ligne est ${notesHebdomadaires[0][1]}`)

//2
let somme = 0;
for (let i = 0; i < notesHebdomadaires.length; i++) {
    for (let j = 0; j < notesHebdomadaires[i].length; j++) {
        somme += notesHebdomadaires[i][j]
    }
}

//3
console.log(`la somme des notes de chaque ligne est ${somme}`)
let noteSuperieur = []
for (let i = 0; i < notesHebdomadaires.length; i++) {
    for (let j = 0; j < notesHebdomadaires[i].length; j++) {
        if (notesHebdomadaires[i][j] >= 15) {
            noteSuperieur += notesHebdomadaires[i][j]
            noteSuperieur += " "
        }
    }
}
console.log(`les note superieur ou egal a 15 sont ${noteSuperieur}`)

//4
let max = 0;
for (let i = 0; i < notesHebdomadaires.length; i++) {
    for (let j = 0; j < notesHebdomadaires[i].length; j++) {
        if (notesHebdomadaires[i][j] > max) {
            max = notesHebdomadaires[i][j]
        }
    }
}
console.log(`la note la plus élevée de toute la matrice est ${max}`)