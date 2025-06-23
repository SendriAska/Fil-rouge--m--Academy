// FILTRE CLASSE GUIDE DONJONS

// DOM
const palaGuide = document.getElementById("palaGuideFilter");
const warlockGuide = document.getElementById("warlockGuideFilter");
const deathknightGuide = document.getElementById("deathknightGuideFilter");
const druidGuide = document.getElementById("druidGuideFilter");
const huntGuide = document.getElementById("huntGuideFilter");
const shamanGuide = document.getElementById("shamanGuideFilter");
const demonHunterGuide = document.getElementById("demonHunterGuideFilter");
const evokerGuide = document.getElementById("evokerGuideFilter");
const monkGuide = document.getElementById("monkGuideFilter");
const priestGuide = document.getElementById("priestGuideFilter");
const warriorGuide = document.getElementById("warriorGuideFilter");
const mageGuide = document.getElementById("mageGuideFilter");
const rogueGuide = document.getElementById("rogueGuideFilter");

const specGuide = document.getElementById("guideSpec");
const specContainer = document.getElementById("specContainer");

let specShow = false;

// function showPalaSpec () {

//     // let divPalGuide = document.createElement("div");
//     // divPalGuide.className = ("bg-primary rounded p-2")

//     // let guideRet = document.createElement("button");
//     // guideRet.className = ("bg-primary paladin rounded");

//     // let guideRetText = document.createTextNode ("Retribution");



//     // divPalGuide.appendChild(guideRet);
//     // guideRet.appendChild(guideRetText);
//     // specGuide.appendChild(divPalGuide);

// }

palaGuide.addEventListener("click", () => {
    if (!specShow) {
        // Création dynamique des spécialisations
        const specs = ["Sacré", "Protection", "Vindicte"];

        specs.forEach(nom => {
            const btn = document.createElement("button");
            btn.textContent = nom;
            btn.className = ("paladin rounded bg-primary specPalaFilter px-5 mx-2");
            specContainer.appendChild(btn);
        });

        specShow = true;
    } else {
        // Suppression des boutons créés
        const specButtons = document.querySelectorAll(".specPalaFilter");
        specButtons.forEach(btn => btn.remove());
        specShow = false;
    }
});