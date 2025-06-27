// FILTRE CLASSE GUIDE DONJONS

// DOM //

// Boutons classes
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

// Container
const specGuide = document.getElementById("guideSpec");
const specContainer = document.getElementById("specContainer");

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
class GameSpec {
    constructor(name, guides) {
        this.name = name;
        this.guides = guides;
    }
    display() {
        console.log("La spé", this.name, "a pour guides", this.guides)
    }
    
}

class GameClass {
    constructor(name, specOne, specTwo, specThree, specFour) {
        this.name = name;
        this.specOne = specOne;
        this.specTwo = specTwo;
        this.specThree = specThree;
        this.specFour = specFour;
        // this.modifyButtons();
    }
    modifyButtons() {
        const firstButton = document.getElementById("firstButton");
        const secondButton = document.getElementById("secondButton");
        const thirdButton = document.getElementById("thirdButton");
        const fourthButton = document.getElementById("fourthButton");
        // const sectionButton = document.getElementById("classContainer");
        firstButton.value = this.specOne.name;
        secondButton.value = this.specTwo.name;

        if (this.specThree == undefined) {
            thirdButton.style.display = "none";
        } else {
            thirdButton.value = this.specThree.name;
            thirdButton.style.display = "block";
        }

        if (this.specFour == undefined) {
            fourthButton.style.display = "none";
        } else {
            fourthButton.value = this.specFour.name;
            fourthButton.style.display = "block";
        }

    }
}

const retribution = new GameSpec('Retribution', []);
const sacre = new GameSpec('Sacré', []);
const protection = new GameSpec('Protection', []);

const balance = new GameSpec('Equilibre', []);
const feral = new GameSpec('Farouche', []);
const guardian = new GameSpec('Gardien', []);
const restoration = new GameSpec('Restauration', []);

const havoc = new GameSpec('Devastation', []);
const vengeance = new GameSpec('Vengeance', []);

const testDh = new GameClass('Chasseur de démon', havoc, vengeance);
const testPaladin = new GameClass('Paladin', retribution, sacre, protection);
const testDrood = new GameClass('Druide', balance, feral, guardian, restoration);





palaGuide.addEventListener("click", () => {
    testPaladin.modifyButtons();
});

demonHunterGuide.addEventListener("click", () => {
    testDh.modifyButtons();
});

druidGuide.addEventListener("click", () => {
    testDrood.modifyButtons();
});



// // Autre aled


// let specShow = false;

// palaGuide.addEventListener("click", () => {
    
//      if (!specShow) {

//         // Création dynamique des spécialisations
//         const specs = ["Sacré", "Protection", "Vindicte"];

//         specs.forEach(nom => {
//             const btn = document.createElement("button");
//             btn.textContent = nom;
//             btn.className = ("paladin rounded bg-primary specFilter specPalaFilter px-5 mx-2");
//             specContainer.appendChild(btn);

//         });

//         specShow = true;
//     } else {
//         // Suppression des boutons créés
//         const specButtons = document.querySelectorAll(".specFilter");
//         specButtons.forEach(btn => btn.remove());
//         specShow = false;
//     }
// });

// warlockGuide.addEventListener("click", () => {
//     if (!specShow) {
//         // Création dynamique des spécialisations
//         const specs = ["Affliction", "Demonologie", "Destruction"];

//         specs.forEach(nom => {
//             const btn = document.createElement("button");
//             btn.textContent = nom;
//             btn.className = ("warlock rounded bg-primary specFilter specWarlockFilter px-5 mx-2");
//             specContainer.appendChild(btn);
//         });

//         specShow = true;
//     } else {
//         // Suppression des boutons créés
//         const specButtons = document.querySelectorAll(".specFilter");
//         specButtons.forEach(btn => btn.remove());
//         specShow = false;
//     }
// });