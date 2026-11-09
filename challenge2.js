import { squads } from "./app.js";
//1
console.log(" ")
let counter = 0;
for (let i = 0; i < squads.length; i++) {
    counter++
    console.log(`le nom de la squad ${counter} est ${squads[i].nom}`)
}

//2
console.log(" ")
for (let i = 0; i < squads.length; i++) {
    for (let j = 0; j < squads[i].apprenants.length; j++) {
        console.log(`le nom de l'etudiant est ${squads[i].apprenants[j].nom} et sa note JavaScript est ${squads[i].apprenants[j].notes.javascript}`)
    }
}

//3
console.log(" ")
for (let i = 0; i < squads.length; i++) {
    for (let j = 0; j < squads[i].apprenants.length; j++) {
        if (squads[i].apprenants[j].nom === "Salma") {
            squads[i].apprenants[j].notes.javascript = 15;
            console.log(`la nouvelle note de Salma est ${squads[i].apprenants[j].notes.javascript}`)
        }
    }
}


//4
console.log(" ")
for (let i = 0; i < squads.length; i++) {
    for (let j = 0; j < squads[i].apprenants.length; j++) {
        if (squads[i].apprenants[j].nom === "Salma") {
            squads[0].apprenants[1].competences[squads[i].apprenants[j].competences.length] = "JavaScript"
            console.log(`les competences de Salma sont ${squads[i].apprenants[j].competences}`)

        }
    }
}

//5
console.log(" ")
for (let i = 0; i < squads.length; i++) {
    if (squads[i].nom === "Gamma") {
        squads[i].apprenants[squads[i].apprenants.length] = {
            id: 107,
            nom: "Ismail",
            notes: { javascript: 2, html: 2, css: 2 },
            competences: ["Arrays", "DOM"]
        }
    }
}