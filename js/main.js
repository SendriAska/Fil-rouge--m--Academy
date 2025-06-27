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
const listDungeons = document.getElementById("listDungeons");

// Img Guide 


// Class
class Guide {
    constructor(href, img, alt) {
        this.href = href;
        this.img = img;
        this.alt = alt;
    }
    constructGuide() {
        const anchor = document.createElement("a");
        anchor.href = this.href;
        anchor.className = "col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center my-1"

        const img = document.createElement("img");
        img.src = this.img;
        img.alt = this.alt;
        img.className = "img-fluid rounded guideCard";

        anchor.appendChild(img);
        return anchor;
    }
}


class GameSpec {
    constructor(name, color, guides) {
        this.name = name;
        this.color = color;
        this.guides = guides;
    }

    constructListGuides() {
        listDungeons.replaceChildren();
        this.guides.forEach((guide, index) => {
            const guidePerClass = guide.constructGuide();
            listDungeons.appendChild(guidePerClass);

            setTimeout(() => {
                const img = guidePerClass.querySelector("img");
                img.classList.add("show");
            }, 100 * index);
        });
    }

    constructButton() {
        const button = document.createElement("button");
        button.className = "filterSpec bg-primary m-1 rounded " + this.color;
        button.textContent = this.name;
        return button;
    }
}

class GameClass {
    constructor(specs) {
        this.specs = specs;

    }

    constructSpecContainer() {
        listDungeons.replaceChildren();
        specContainer.replaceChildren();
        this.specs.forEach(function (spe) {
            const button = spe.constructButton();
            button.addEventListener('click', function () {
                spe.constructListGuides();
            });
            specContainer.appendChild(button);
        });
    }
}

// Paladin
const retribution = new GameSpec('Retribution', "paladin",
    [
        new Guide("#", "./img/Priory_of_the_Sacred_Flame_loading_screen.jpg", "guide prieuré ret"),
        new Guide("#", "./img/operation-vannes-ouvertes.jpg", "guide vanne ouverte ret"),
        new Guide("#", "./img/The_Rookery_loading_screen.jpg", "guide Rookery ret"),
        new Guide("#", "./img/Theater_of_Pain (1).png", "guide Théatre de la souffrance ret"),
        new Guide("#", "./img/Cinderbrew_Meadery_loading_screen.jpg", "guide Brassecendre ret"),
        new Guide("#", "./img/Darkflame_Cleft_loading_screen.jpg", "guide Repaire de la Flamme Noire ret"),
        new Guide("#", "./img/Motherlode_loading_screen.jpg", "guide Le FILON ret"),
        new Guide("#", "./img/Mechagon_loading_screen.jpg", "guide Mechagon ret")

    ]);

const sacre = new GameSpec('Sacré', "paladin",
    [
        new Guide("#", "./img/Priory_of_the_Sacred_Flame_loading_screen.jpg", "guide prieuré sacré"),
        new Guide("#", "./img/operation-vannes-ouvertes.jpg", "guide vanne ouverte sacré"),
        new Guide("#", "./img/The_Rookery_loading_screen.jpg", "guide Rookery sacré"),
        new Guide("#", "./img/Theater_of_Pain (1).png", "guide Théatre de la souffrance sacré"),
        new Guide("#", "./img/Cinderbrew_Meadery_loading_screen.jpg", "guide Brassecendre sacré"),
        new Guide("#", "./img/Darkflame_Cleft_loading_screen.jpg", "guide Repaire de la Flamme Noire sacré"),
        new Guide("#", "./img/Motherlode_loading_screen.jpg", "guide Le FILON sacré"),
        new Guide("#", "./img/Mechagon_loading_screen.jpg", "guide Mechagon sacré")
    ]);
const protection = new GameSpec('Protection', "paladin",
    [
        new Guide("#", "./img/Priory_of_the_Sacred_Flame_loading_screen.jpg", "guide prieuré prot"),
        new Guide("#", "./img/operation-vannes-ouvertes.jpg", "guide vanne ouverte prot"),
        new Guide("#", "./img/The_Rookery_loading_screen.jpg", "guide Rookery prot"),
        new Guide("#", "./img/Theater_of_Pain (1).png", "guide Théatre de la souffrance prot"),
        new Guide("#", "./img/Cinderbrew_Meadery_loading_screen.jpg", "guide Brassecendre prot"),
        new Guide("#", "./img/Darkflame_Cleft_loading_screen.jpg", "guide Repaire de la Flamme Noire prot"),
        new Guide("#", "./img/Motherlode_loading_screen.jpg", "guide Le FILON prot"),
        new Guide("#", "./img/Mechagon_loading_screen.jpg", "guide Mechagon prot")
    ]);

const buttonActivePaladin = new GameClass([retribution, sacre, protection]);

palaGuide.addEventListener("click", () => {
    buttonActivePaladin.constructSpecContainer();
});


// Druide
const balance = new GameSpec('Equilibre', "druid",
    [
        new Guide("#", "./img/Priory_of_the_Sacred_Flame_loading_screen.jpg", "guide prieuré equi"),
        new Guide("#", "./img/operation-vannes-ouvertes.jpg", "guide vanne ouverte equi"),
        new Guide("#", "./img/The_Rookery_loading_screen.jpg", "guide Rookery equi"),
        new Guide("#", "./img/Theater_of_Pain (1).png", "guide Théatre de la souffrance equi"),
        new Guide("#", "./img/Cinderbrew_Meadery_loading_screen.jpg", "guide Brassecendre equi"),
        new Guide("#", "./img/Darkflame_Cleft_loading_screen.jpg", "guide Repaire de la Flamme Noire equi"),
        new Guide("#", "./img/Motherlode_loading_screen.jpg", "guide Le FILON equi"),
        new Guide("#", "./img/Mechagon_loading_screen.jpg", "guide Mechagon equi")
    ]);

const feral = new GameSpec('Farouche', "druid",
    [
        new Guide("#", "./img/Priory_of_the_Sacred_Flame_loading_screen.jpg", "guide prieuré feral"),
        new Guide("#", "./img/operation-vannes-ouvertes.jpg", "guide vanne ouverte feral"),
        new Guide("#", "./img/The_Rookery_loading_screen.jpg", "guide Rookery feral"),
        new Guide("#", "./img/Theater_of_Pain (1).png", "guide Théatre de la souffrance feral"),
        new Guide("#", "./img/Cinderbrew_Meadery_loading_screen.jpg", "guide Brassecendre feral"),
        new Guide("#", "./img/Darkflame_Cleft_loading_screen.jpg", "guide Repaire de la Flamme Noire feral"),
        new Guide("#", "./img/Motherlode_loading_screen.jpg", "guide Le FILON feral"),
        new Guide("#", "./img/Mechagon_loading_screen.jpg", "guide Mechagon feral")
    ]);
const guardian = new GameSpec('Gardien', "druid",
    [
        new Guide("#", "./img/Priory_of_the_Sacred_Flame_loading_screen.jpg", "guide prieuré gardien"),
        new Guide("#", "./img/operation-vannes-ouvertes.jpg", "guide vanne ouverte gardien"),
        new Guide("#", "./img/The_Rookery_loading_screen.jpg", "guide Rookery gardien"),
        new Guide("#", "./img/Theater_of_Pain (1).png", "guide Théatre de la souffrance gardien"),
        new Guide("#", "./img/Cinderbrew_Meadery_loading_screen.jpg", "guide Brassecendre gardien"),
        new Guide("#", "./img/Darkflame_Cleft_loading_screen.jpg", "guide Repaire de la Flamme Noire gardien"),
        new Guide("#", "./img/Motherlode_loading_screen.jpg", "guide Le FILON gardien"),
        new Guide("#", "./img/Mechagon_loading_screen.jpg", "guide Mechagon gardien")
    ]);
const restoration = new GameSpec('Restauration', "druid",
    [
        new Guide("#", "./img/Priory_of_the_Sacred_Flame_loading_screen.jpg", "guide prieuré resto"),
        new Guide("#", "./img/operation-vannes-ouvertes.jpg", "guide vanne ouverte resto"),
        new Guide("#", "./img/The_Rookery_loading_screen.jpg", "guide Rookery resto"),
        new Guide("#", "./img/Theater_of_Pain (1).png", "guide Théatre de la souffrance resto"),
        new Guide("#", "./img/Cinderbrew_Meadery_loading_screen.jpg", "guide Brassecendre resto"),
        new Guide("#", "./img/Darkflame_Cleft_loading_screen.jpg", "guide Repaire de la Flamme Noire resto"),
        new Guide("#", "./img/Motherlode_loading_screen.jpg", "guide Le FILON resto"),
        new Guide("#", "./img/Mechagon_loading_screen.jpg", "guide Mechagon resto")
    ]);

const buttonActiveDrood = new GameClass([balance, feral, guardian, restoration]);

druidGuide.addEventListener("click", () => {
    buttonActiveDrood.constructSpecContainer();
});


// Demon Hunter
const havoc = new GameSpec('Devastation', "demonHunter",
    [
        new Guide("#", "./img/Priory_of_the_Sacred_Flame_loading_screen.jpg", "guide prieuré DevaDH"),
        new Guide("#", "./img/operation-vannes-ouvertes.jpg", "guide vanne ouverte DevaDH"),
        new Guide("#", "./img/The_Rookery_loading_screen.jpg", "guide Rookery DevaDH"),
        new Guide("#", "./img/Theater_of_Pain (1).png", "guide Théatre de la souffrance DevaDH"),
        new Guide("#", "./img/Cinderbrew_Meadery_loading_screen.jpg", "guide Brassecendre DevaDH"),
        new Guide("#", "./img/Darkflame_Cleft_loading_screen.jpg", "guide Repaire de la Flamme Noire DevaDH"),
        new Guide("#", "./img/Motherlode_loading_screen.jpg", "guide Le FILON DevaDH"),
        new Guide("#", "./img/Mechagon_loading_screen.jpg", "guide Mechagon DevaDH")
    ]);
const vengeance = new GameSpec('Vengeance', "demonHunter",
    [
        new Guide("#", "./img/Priory_of_the_Sacred_Flame_loading_screen.jpg", "guide prieuré vengeance"),
        new Guide("#", "./img/operation-vannes-ouvertes.jpg", "guide vanne ouverte vengeance"),
        new Guide("#", "./img/The_Rookery_loading_screen.jpg", "guide Rookery vengeance"),
        new Guide("#", "./img/Theater_of_Pain (1).png", "guide Théatre de la souffrance vengeance"),
        new Guide("#", "./img/Cinderbrew_Meadery_loading_screen.jpg", "guide Brassecendre vengeance"),
        new Guide("#", "./img/Darkflame_Cleft_loading_screen.jpg", "guide Repaire de la Flamme Noire vengeance"),
        new Guide("#", "./img/Motherlode_loading_screen.jpg", "guide Le FILON vengeance"),
        new Guide("#", "./img/Mechagon_loading_screen.jpg", "guide Mechagon vengeance")
    ]);

const buttonActiveDh = new GameClass([havoc, vengeance]);

demonHunterGuide.addEventListener("click", () => {
    buttonActiveDh.constructSpecContainer();
});


// DK 
const blood = new GameSpec('Sang', "deathknight",
    [
        new Guide("#", "./img/Priory_of_the_Sacred_Flame_loading_screen.jpg", "guide prieuré sang"),
        new Guide("#", "./img/operation-vannes-ouvertes.jpg", "guide vanne ouverte sang"),
        new Guide("#", "./img/The_Rookery_loading_screen.jpg", "guide Rookery sang"),
        new Guide("#", "./img/Theater_of_Pain (1).png", "guide Théatre de la souffrance sang"),
        new Guide("#", "./img/Cinderbrew_Meadery_loading_screen.jpg", "guide Brassecendre sang"),
        new Guide("#", "./img/Darkflame_Cleft_loading_screen.jpg", "guide Repaire de la Flamme Noire sang"),
        new Guide("#", "./img/Motherlode_loading_screen.jpg", "guide Le FILON sang"),
        new Guide("#", "./img/Mechagon_loading_screen.jpg", "guide Mechagon sang")
    ]);
const unholy = new GameSpec('Impie', "deathknight",
    [
        new Guide("#", "./img/Priory_of_the_Sacred_Flame_loading_screen.jpg", "guide prieuré impie"),
        new Guide("#", "./img/operation-vannes-ouvertes.jpg", "guide vanne ouverte impie"),
        new Guide("#", "./img/The_Rookery_loading_screen.jpg", "guide Rookery impie"),
        new Guide("#", "./img/Theater_of_Pain (1).png", "guide Théatre de la souffrance impie"),
        new Guide("#", "./img/Cinderbrew_Meadery_loading_screen.jpg", "guide Brassecendre impie"),
        new Guide("#", "./img/Darkflame_Cleft_loading_screen.jpg", "guide Repaire de la Flamme Noire impie"),
        new Guide("#", "./img/Motherlode_loading_screen.jpg", "guide Le FILON impie"),
        new Guide("#", "./img/Mechagon_loading_screen.jpg", "guide Mechagon impie")
    ]);
const frost = new GameSpec('Givre', "deathknight",
    [
        new Guide("#", "./img/Priory_of_the_Sacred_Flame_loading_screen.jpg", "guide prieuré givre"),
        new Guide("#", "./img/operation-vannes-ouvertes.jpg", "guide vanne ouverte givre"),
        new Guide("#", "./img/The_Rookery_loading_screen.jpg", "guide Rookery givre"),
        new Guide("#", "./img/Theater_of_Pain (1).png", "guide Théatre de la souffrance givre"),
        new Guide("#", "./img/Cinderbrew_Meadery_loading_screen.jpg", "guide Brassecendre givre"),
        new Guide("#", "./img/Darkflame_Cleft_loading_screen.jpg", "guide Repaire de la Flamme Noire givre"),
        new Guide("#", "./img/Motherlode_loading_screen.jpg", "guide Le FILON givre"),
        new Guide("#", "./img/Mechagon_loading_screen.jpg", "guide Mechagon givre")
    ]);

const buttonActiveDk = new GameClass([blood, frost, unholy]);

deathknightGuide.addEventListener("click", () => {
    buttonActiveDk.constructSpecContainer();
});


// Démoniste
const destruction = new GameSpec('Destruction', "warlock",
    [
        new Guide("#", "./img/Priory_of_the_Sacred_Flame_loading_screen.jpg", "guide prieuré destru"),
        new Guide("#", "./img/operation-vannes-ouvertes.jpg", "guide vanne ouverte destru"),
        new Guide("#", "./img/The_Rookery_loading_screen.jpg", "guide Rookery destru"),
        new Guide("#", "./img/Theater_of_Pain (1).png", "guide Théatre de la souffrance destru"),
        new Guide("#", "./img/Cinderbrew_Meadery_loading_screen.jpg", "guide Brassecendre destru"),
        new Guide("#", "./img/Darkflame_Cleft_loading_screen.jpg", "guide Repaire de la Flamme Noire destru"),
        new Guide("#", "./img/Motherlode_loading_screen.jpg", "guide Le FILON destru"),
        new Guide("#", "./img/Mechagon_loading_screen.jpg", "guide Mechagon destru")
    ]);
const affliction = new GameSpec('Affliction', "warlock",
    [
        new Guide("#", "./img/Priory_of_the_Sacred_Flame_loading_screen.jpg", "guide prieuré Affli"),
        new Guide("#", "./img/operation-vannes-ouvertes.jpg", "guide vanne ouverte Affli"),
        new Guide("#", "./img/The_Rookery_loading_screen.jpg", "guide Rookery Affli"),
        new Guide("#", "./img/Theater_of_Pain (1).png", "guide Théatre de la souffrance Affli"),
        new Guide("#", "./img/Cinderbrew_Meadery_loading_screen.jpg", "guide Brassecendre Affli"),
        new Guide("#", "./img/Darkflame_Cleft_loading_screen.jpg", "guide Repaire de la Flamme Noire Affli"),
        new Guide("#", "./img/Motherlode_loading_screen.jpg", "guide Le FILON Affli"),
        new Guide("#", "./img/Mechagon_loading_screen.jpg", "guide Mechagon Affli")
    ]);
const demonology = new GameSpec('Démonologie', "warlock",
    [
        new Guide("#", "./img/Priory_of_the_Sacred_Flame_loading_screen.jpg", "guide prieuré demono"),
        new Guide("#", "./img/operation-vannes-ouvertes.jpg", "guide vanne ouverte demono"),
        new Guide("#", "./img/The_Rookery_loading_screen.jpg", "guide Rookery demono"),
        new Guide("#", "./img/Theater_of_Pain (1).png", "guide Théatre de la souffrance demono"),
        new Guide("#", "./img/Cinderbrew_Meadery_loading_screen.jpg", "guide Brassecendre demono"),
        new Guide("#", "./img/Darkflame_Cleft_loading_screen.jpg", "guide Repaire de la Flamme Noire demono"),
        new Guide("#", "./img/Motherlode_loading_screen.jpg", "guide Le FILON demono"),
        new Guide("#", "./img/Mechagon_loading_screen.jpg", "guide Mechagon demono")
    ]);

const buttonActiveLock = new GameClass([destruction, affliction, demonology]);

warlockGuide.addEventListener("click", () => {
    buttonActiveLock.constructSpecContainer();
});

// Chasseur
const marksman = new GameSpec('Précision', "hunt",
    [
        new Guide("#", "./img/Priory_of_the_Sacred_Flame_loading_screen.jpg", "guide prieuré précision"),
        new Guide("#", "./img/operation-vannes-ouvertes.jpg", "guide vanne ouverte précision"),
        new Guide("#", "./img/The_Rookery_loading_screen.jpg", "guide Rookery précision"),
        new Guide("#", "./img/Theater_of_Pain (1).png", "guide Théatre de la souffrance précision"),
        new Guide("#", "./img/Cinderbrew_Meadery_loading_screen.jpg", "guide Brassecendre précision"),
        new Guide("#", "./img/Darkflame_Cleft_loading_screen.jpg", "guide Repaire de la Flamme Noire précision"),
        new Guide("#", "./img/Motherlode_loading_screen.jpg", "guide Le FILON précision"),
        new Guide("#", "./img/Mechagon_loading_screen.jpg", "guide Mechagon précision")
    ]);
const beastmaster = new GameSpec('Maîtrise des bêtes', "hunt",
    [
        new Guide("#", "./img/Priory_of_the_Sacred_Flame_loading_screen.jpg", "guide prieuré maîtrise des bêtes"),
        new Guide("#", "./img/operation-vannes-ouvertes.jpg", "guide vanne ouverte maîtrise des bêtes"),
        new Guide("#", "./img/The_Rookery_loading_screen.jpg", "guide Rookery maîtrise des bêtes"),
        new Guide("#", "./img/Theater_of_Pain (1).png", "guide Théatre de la souffrance maîtrise des bêtes"),
        new Guide("#", "./img/Cinderbrew_Meadery_loading_screen.jpg", "guide Brassecendre maîtrise des bêtes"),
        new Guide("#", "./img/Darkflame_Cleft_loading_screen.jpg", "guide Repaire de la Flamme Noire maîtrise des bêtes"),
        new Guide("#", "./img/Motherlode_loading_screen.jpg", "guide Le FILON maîtrise des bêtes"),
        new Guide("#", "./img/Mechagon_loading_screen.jpg", "guide Mechagon maîtrise des bêtes")
    ]);
const survival = new GameSpec('Survie', "hunt",
    [
        new Guide("#", "./img/Priory_of_the_Sacred_Flame_loading_screen.jpg", "guide prieuré survie"),
        new Guide("#", "./img/operation-vannes-ouvertes.jpg", "guide vanne ouverte survie"),
        new Guide("#", "./img/The_Rookery_loading_screen.jpg", "guide Rookery survie"),
        new Guide("#", "./img/Theater_of_Pain (1).png", "guide Théatre de la souffrance survie"),
        new Guide("#", "./img/Cinderbrew_Meadery_loading_screen.jpg", "guide Brassecendre survie"),
        new Guide("#", "./img/Darkflame_Cleft_loading_screen.jpg", "guide Repaire de la Flamme Noire survie"),
        new Guide("#", "./img/Motherlode_loading_screen.jpg", "guide Le FILON survie"),
        new Guide("#", "./img/Mechagon_loading_screen.jpg", "guide Mechagon survie")
    ]);

const buttonActiveHunt = new GameClass([marksman, beastmaster, survival]);

huntGuide.addEventListener("click", () => {
    buttonActiveHunt.constructSpecContainer();
});

// Chaman
const elemental = new GameSpec('Elementaire', "shaman", 
    [
        new Guide("#", "./img/Priory_of_the_Sacred_Flame_loading_screen.jpg", "guide prieuré elem"),
        new Guide("#", "./img/operation-vannes-ouvertes.jpg", "guide vanne ouverte elem"),
        new Guide("#", "./img/The_Rookery_loading_screen.jpg", "guide Rookery elem"),
        new Guide("#", "./img/Theater_of_Pain (1).png", "guide Théatre de la souffrance elem"),
        new Guide("#", "./img/Cinderbrew_Meadery_loading_screen.jpg", "guide Brassecendre elem"),
        new Guide("#", "./img/Darkflame_Cleft_loading_screen.jpg", "guide Repaire de la Flamme Noire elem"),
        new Guide("#", "./img/Motherlode_loading_screen.jpg", "guide Le FILON elem"),
        new Guide("#", "./img/Mechagon_loading_screen.jpg", "guide Mechagon elem")
    ]);
const amelio = new GameSpec('Amélioration',  "shaman", 
    [
        new Guide("#", "./img/Priory_of_the_Sacred_Flame_loading_screen.jpg", "guide prieuré amélio"),
        new Guide("#", "./img/operation-vannes-ouvertes.jpg", "guide vanne ouverte amélio"),
        new Guide("#", "./img/The_Rookery_loading_screen.jpg", "guide Rookery amélio"),
        new Guide("#", "./img/Theater_of_Pain (1).png", "guide Théatre de la souffrance amélio"),
        new Guide("#", "./img/Cinderbrew_Meadery_loading_screen.jpg", "guide Brassecendre amélio"),
        new Guide("#", "./img/Darkflame_Cleft_loading_screen.jpg", "guide Repaire de la Flamme Noire amélio"),
        new Guide("#", "./img/Motherlode_loading_screen.jpg", "guide Le FILON amélio"),
        new Guide("#", "./img/Mechagon_loading_screen.jpg", "guide Mechagon amélio")
    ]);
const resto = new GameSpec('Restauration',  "shaman", 
    [
        new Guide("#", "./img/Priory_of_the_Sacred_Flame_loading_screen.jpg", "guide prieuré restocham"),
        new Guide("#", "./img/operation-vannes-ouvertes.jpg", "guide vanne ouverte restocham"),
        new Guide("#", "./img/The_Rookery_loading_screen.jpg", "guide Rookery restocham"),
        new Guide("#", "./img/Theater_of_Pain (1).png", "guide Théatre de la souffrance restocham"),
        new Guide("#", "./img/Cinderbrew_Meadery_loading_screen.jpg", "guide Brassecendre restocham"),
        new Guide("#", "./img/Darkflame_Cleft_loading_screen.jpg", "guide Repaire de la Flamme Noire restocham"),
        new Guide("#", "./img/Motherlode_loading_screen.jpg", "guide Le FILON restocham"),
        new Guide("#", "./img/Mechagon_loading_screen.jpg", "guide Mechagon restocham")
    ]);

const buttonActiveSham = new GameClass([elemental, amelio, resto]);

shamanGuide.addEventListener("click", () => {
    buttonActiveSham.constructSpecContainer();
});

// Voleur
const outlaw = new GameSpec('Hors-la-loi', "rogue",
    [
        new Guide("#", "./img/Priory_of_the_Sacred_Flame_loading_screen.jpg", "guide prieuré Hors-la-loi"),
        new Guide("#", "./img/operation-vannes-ouvertes.jpg", "guide vanne ouverte Hors-la-loi"),
        new Guide("#", "./img/The_Rookery_loading_screen.jpg", "guide Rookery Hors-la-loi"),
        new Guide("#", "./img/Theater_of_Pain (1).png", "guide Théatre de la souffrance Hors-la-loi"),
        new Guide("#", "./img/Cinderbrew_Meadery_loading_screen.jpg", "guide Brassecendre Hors-la-loi"),
        new Guide("#", "./img/Darkflame_Cleft_loading_screen.jpg", "guide Repaire de la Flamme Noire Hors-la-loi"),
        new Guide("#", "./img/Motherlode_loading_screen.jpg", "guide Le FILON Hors-la-loi"),
        new Guide("#", "./img/Mechagon_loading_screen.jpg", "guide Mechagon Hors-la-loi")
    ]);
const assa = new GameSpec('Assassinat',  "rogue",
    [
        new Guide("#", "./img/Priory_of_the_Sacred_Flame_loading_screen.jpg", "guide prieuré Assa"),
        new Guide("#", "./img/operation-vannes-ouvertes.jpg", "guide vanne ouverte Assa"),
        new Guide("#", "./img/The_Rookery_loading_screen.jpg", "guide Rookery Assa"),
        new Guide("#", "./img/Theater_of_Pain (1).png", "guide Théatre de la souffrance Assa"),
        new Guide("#", "./img/Cinderbrew_Meadery_loading_screen.jpg", "guide Brassecendre Assa"),
        new Guide("#", "./img/Darkflame_Cleft_loading_screen.jpg", "guide Repaire de la Flamme Noire Assa"),
        new Guide("#", "./img/Motherlode_loading_screen.jpg", "guide Le FILON Assa"),
        new Guide("#", "./img/Mechagon_loading_screen.jpg", "guide Mechagon Assa")
    ]);
const subtetly = new GameSpec('Finesse',  "rogue",
    [
        new Guide("#", "./img/Priory_of_the_Sacred_Flame_loading_screen.jpg", "guide prieuré finesse"),
        new Guide("#", "./img/operation-vannes-ouvertes.jpg", "guide vanne ouverte finesse"),
        new Guide("#", "./img/The_Rookery_loading_screen.jpg", "guide Rookery finesse"),
        new Guide("#", "./img/Theater_of_Pain (1).png", "guide Théatre de la souffrance finesse"),
        new Guide("#", "./img/Cinderbrew_Meadery_loading_screen.jpg", "guide Brassecendre finesse"),
        new Guide("#", "./img/Darkflame_Cleft_loading_screen.jpg", "guide Repaire de la Flamme Noire finesse"),
        new Guide("#", "./img/Motherlode_loading_screen.jpg", "guide Le FILON finesse"),
        new Guide("#", "./img/Mechagon_loading_screen.jpg", "guide Mechagon finesse")
    ]);

const buttonActiveRogue = new GameClass([outlaw, assa, subtetly]);

rogueGuide.addEventListener("click", () => {
    buttonActiveRogue.constructSpecContainer();
});

// Evoker
const devaEvo = new GameSpec('Devastation', "evoker",
    [
        new Guide("#", "./img/Priory_of_the_Sacred_Flame_loading_screen.jpg", "guide prieuré Devastation evoker"),
        new Guide("#", "./img/operation-vannes-ouvertes.jpg", "guide vanne ouverte Devastation evoker"),
        new Guide("#", "./img/The_Rookery_loading_screen.jpg", "guide Rookery Devastation evoker"),
        new Guide("#", "./img/Theater_of_Pain (1).png", "guide Théatre de la souffrance Devastation evoker"),
        new Guide("#", "./img/Cinderbrew_Meadery_loading_screen.jpg", "guide Brassecendre Devastation evoker"),
        new Guide("#", "./img/Darkflame_Cleft_loading_screen.jpg", "guide Repaire de la Flamme Noire Devastation evoker"),
        new Guide("#", "./img/Motherlode_loading_screen.jpg", "guide Le FILON Devastation evoker"),
        new Guide("#", "./img/Mechagon_loading_screen.jpg", "guide Mechagon Devastation evoker")
    ]);
const augmentation = new GameSpec('Augmentation',  "evoker",
    [
        new Guide("#", "./img/Priory_of_the_Sacred_Flame_loading_screen.jpg", "guide prieuré Augmentation"),
        new Guide("#", "./img/operation-vannes-ouvertes.jpg", "guide vanne ouverte Augmentation"),
        new Guide("#", "./img/The_Rookery_loading_screen.jpg", "guide Rookery Augmentation"),
        new Guide("#", "./img/Theater_of_Pain (1).png", "guide Théatre de la souffrance Augmentation"),
        new Guide("#", "./img/Cinderbrew_Meadery_loading_screen.jpg", "guide Brassecendre Augmentation"),
        new Guide("#", "./img/Darkflame_Cleft_loading_screen.jpg", "guide Repaire de la Flamme Noire Augmentation"),
        new Guide("#", "./img/Motherlode_loading_screen.jpg", "guide Le FILON Augmentation"),
        new Guide("#", "./img/Mechagon_loading_screen.jpg", "guide Mechagon Augmentation")
    ]);
const preservation = new GameSpec('Preservation',  "evoker",
    [
        new Guide("#", "./img/Priory_of_the_Sacred_Flame_loading_screen.jpg", "guide prieuré préservation"),
        new Guide("#", "./img/operation-vannes-ouvertes.jpg", "guide vanne ouverte préservation"),
        new Guide("#", "./img/The_Rookery_loading_screen.jpg", "guide Rookery préservation"),
        new Guide("#", "./img/Theater_of_Pain (1).png", "guide Théatre de la souffrance préservation"),
        new Guide("#", "./img/Cinderbrew_Meadery_loading_screen.jpg", "guide Brassecendre préservation"),
        new Guide("#", "./img/Darkflame_Cleft_loading_screen.jpg", "guide Repaire de la Flamme Noire préservation"),
        new Guide("#", "./img/Motherlode_loading_screen.jpg", "guide Le FILON préservation"),
        new Guide("#", "./img/Mechagon_loading_screen.jpg", "guide Mechagon préservation")
    ]);

const buttonActiveEvoker = new GameClass([devaEvo, augmentation, preservation]);

evokerGuide.addEventListener("click", () => {
    buttonActiveEvoker.constructSpecContainer();
});

// Moine
const brewmaster = new GameSpec('Maître-brasseur', "monk",
    [
        new Guide("#", "./img/Priory_of_the_Sacred_Flame_loading_screen.jpg", "guide prieuré maitrebrasseur"),
        new Guide("#", "./img/operation-vannes-ouvertes.jpg", "guide vanne ouverte maitrebrasseur"),
        new Guide("#", "./img/The_Rookery_loading_screen.jpg", "guide Rookery maitrebrasseur"),
        new Guide("#", "./img/Theater_of_Pain (1).png", "guide Théatre de la souffrance maitrebrasseur"),
        new Guide("#", "./img/Cinderbrew_Meadery_loading_screen.jpg", "guide Brassecendre maitrebrasseur"),
        new Guide("#", "./img/Darkflame_Cleft_loading_screen.jpg", "guide Repaire de la Flamme Noire maitrebrasseur"),
        new Guide("#", "./img/Motherlode_loading_screen.jpg", "guide Le FILON maitrebrasseur"),
        new Guide("#", "./img/Mechagon_loading_screen.jpg", "guide Mechagon maitrebrasseur")
    ]);
const windwalker = new GameSpec('Marche-vent', "monk",
    [
        new Guide("#", "./img/Priory_of_the_Sacred_Flame_loading_screen.jpg", "guide prieuré marchevent"),
        new Guide("#", "./img/operation-vannes-ouvertes.jpg", "guide vanne ouverte marchevent"),
        new Guide("#", "./img/The_Rookery_loading_screen.jpg", "guide Rookery marchevent"),
        new Guide("#", "./img/Theater_of_Pain (1).png", "guide Théatre de la souffrance marchevent"),
        new Guide("#", "./img/Cinderbrew_Meadery_loading_screen.jpg", "guide Brassecendre marchevent"),
        new Guide("#", "./img/Darkflame_Cleft_loading_screen.jpg", "guide Repaire de la Flamme Noire marchevent"),
        new Guide("#", "./img/Motherlode_loading_screen.jpg", "guide Le FILON marchevent"),
        new Guide("#", "./img/Mechagon_loading_screen.jpg", "guide Mechagon marchevent")
    ]);
const mistweaver = new GameSpec('Tisse-brume', "monk",
    [
        new Guide("#", "./img/Priory_of_the_Sacred_Flame_loading_screen.jpg", "guide prieuré tissebrume"),
        new Guide("#", "./img/operation-vannes-ouvertes.jpg", "guide vanne ouverte tissebrume"),
        new Guide("#", "./img/The_Rookery_loading_screen.jpg", "guide Rookery tissebrume"),
        new Guide("#", "./img/Theater_of_Pain (1).png", "guide Théatre de la souffrance tissebrume"),
        new Guide("#", "./img/Cinderbrew_Meadery_loading_screen.jpg", "guide Brassecendre tissebrume"),
        new Guide("#", "./img/Darkflame_Cleft_loading_screen.jpg", "guide Repaire de la Flamme Noire tissebrume"),
        new Guide("#", "./img/Motherlode_loading_screen.jpg", "guide Le FILON tissebrume"),
        new Guide("#", "./img/Mechagon_loading_screen.jpg", "guide Mechagon tissebrume")
    ]);

const buttonActiveMonk = new GameClass([brewmaster, windwalker, mistweaver]);

monkGuide.addEventListener("click", () => {
    buttonActiveMonk.constructSpecContainer();
});


// Prêtre
const shadow = new GameSpec('Ombre', "priest",
    [
        new Guide("#", "./img/Priory_of_the_Sacred_Flame_loading_screen.jpg", "guide prieuré ombre"),
        new Guide("#", "./img/operation-vannes-ouvertes.jpg", "guide vanne ouverte ombre"),
        new Guide("#", "./img/The_Rookery_loading_screen.jpg", "guide Rookery ombre"),
        new Guide("#", "./img/Theater_of_Pain (1).png", "guide Théatre de la souffrance ombre"),
        new Guide("#", "./img/Cinderbrew_Meadery_loading_screen.jpg", "guide Brassecendre ombre"),
        new Guide("#", "./img/Darkflame_Cleft_loading_screen.jpg", "guide Repaire de la Flamme Noire ombre"),
        new Guide("#", "./img/Motherlode_loading_screen.jpg", "guide Le FILON ombre"),
        new Guide("#", "./img/Mechagon_loading_screen.jpg", "guide Mechagon ombre")
    ]);
const holy = new GameSpec('Sacré', "priest",
    [
        new Guide("#", "./img/Priory_of_the_Sacred_Flame_loading_screen.jpg", "guide prieuré sacré prêtre"),
        new Guide("#", "./img/operation-vannes-ouvertes.jpg", "guide vanne ouverte sacré prêtre"),
        new Guide("#", "./img/The_Rookery_loading_screen.jpg", "guide Rookery sacré prêtre"),
        new Guide("#", "./img/Theater_of_Pain (1).png", "guide Théatre de la souffrance sacré prêtre"),
        new Guide("#", "./img/Cinderbrew_Meadery_loading_screen.jpg", "guide Brassecendre sacré prêtre"),
        new Guide("#", "./img/Darkflame_Cleft_loading_screen.jpg", "guide Repaire de la Flamme Noire sacré prêtre"),
        new Guide("#", "./img/Motherlode_loading_screen.jpg", "guide Le FILON sacré prêtre"),
        new Guide("#", "./img/Mechagon_loading_screen.jpg", "guide Mechagon sacré prêtre")
    ]);
const disco = new GameSpec('Discipline', "priest",
    [
        new Guide("#", "./img/Priory_of_the_Sacred_Flame_loading_screen.jpg", "guide prieuré discipline"),
        new Guide("#", "./img/operation-vannes-ouvertes.jpg", "guide vanne ouverte discipline"),
        new Guide("#", "./img/The_Rookery_loading_screen.jpg", "guide Rookery discipline"),
        new Guide("#", "./img/Theater_of_Pain (1).png", "guide Théatre de la souffrance discipline"),
        new Guide("#", "./img/Cinderbrew_Meadery_loading_screen.jpg", "guide Brassecendre discipline"),
        new Guide("#", "./img/Darkflame_Cleft_loading_screen.jpg", "guide Repaire de la Flamme Noire discipline"),
        new Guide("#", "./img/Motherlode_loading_screen.jpg", "guide Le FILON discipline"),
        new Guide("#", "./img/Mechagon_loading_screen.jpg", "guide Mechagon discipline")
    ]);

const buttonActivePriest = new GameClass([shadow, holy, disco]);

priestGuide.addEventListener("click", () => {
    buttonActivePriest.constructSpecContainer();
});

// Guerrier
const arms = new GameSpec('Armes', "warrior", 
    [
        new Guide("#", "./img/Priory_of_the_Sacred_Flame_loading_screen.jpg", "guide prieuré armes"),
        new Guide("#", "./img/operation-vannes-ouvertes.jpg", "guide vanne ouverte armes"),
        new Guide("#", "./img/The_Rookery_loading_screen.jpg", "guide Rookery armes"),
        new Guide("#", "./img/Theater_of_Pain (1).png", "guide Théatre de la souffrance armes"),
        new Guide("#", "./img/Cinderbrew_Meadery_loading_screen.jpg", "guide Brassecendre armes"),
        new Guide("#", "./img/Darkflame_Cleft_loading_screen.jpg", "guide Repaire de la Flamme Noire armes"),
        new Guide("#", "./img/Motherlode_loading_screen.jpg", "guide Le FILON armes"),
        new Guide("#", "./img/Mechagon_loading_screen.jpg", "guide Mechagon armes")
    ]);
const fury = new GameSpec('Fureur', "warrior", 
    [
        new Guide("#", "./img/Priory_of_the_Sacred_Flame_loading_screen.jpg", "guide prieuré fureur"),
        new Guide("#", "./img/operation-vannes-ouvertes.jpg", "guide vanne ouverte fureur"),
        new Guide("#", "./img/The_Rookery_loading_screen.jpg", "guide Rookery fureur"),
        new Guide("#", "./img/Theater_of_Pain (1).png", "guide Théatre de la souffrance fureur"),
        new Guide("#", "./img/Cinderbrew_Meadery_loading_screen.jpg", "guide Brassecendre fureur"),
        new Guide("#", "./img/Darkflame_Cleft_loading_screen.jpg", "guide Repaire de la Flamme Noire fureur"),
        new Guide("#", "./img/Motherlode_loading_screen.jpg", "guide Le FILON fureur"),
        new Guide("#", "./img/Mechagon_loading_screen.jpg", "guide Mechagon fureur")
    ]);
const protectionWar = new GameSpec('Protection', "warrior", 
    [
        new Guide("#", "./img/Priory_of_the_Sacred_Flame_loading_screen.jpg", "guide prieuré protection guerrier"),
        new Guide("#", "./img/operation-vannes-ouvertes.jpg", "guide vanne ouverte protection guerrier"),
        new Guide("#", "./img/The_Rookery_loading_screen.jpg", "guide Rookery protection guerrier"),
        new Guide("#", "./img/Theater_of_Pain (1).png", "guide Théatre de la souffrance protection guerrier"),
        new Guide("#", "./img/Cinderbrew_Meadery_loading_screen.jpg", "guide Brassecendre protection guerrier"),
        new Guide("#", "./img/Darkflame_Cleft_loading_screen.jpg", "guide Repaire de la Flamme Noire protection guerrier"),
        new Guide("#", "./img/Motherlode_loading_screen.jpg", "guide Le FILON protection guerrier"),
        new Guide("#", "./img/Mechagon_loading_screen.jpg", "guide Mechagon protection guerrier")
    ]);

const buttonActiveWarrior = new GameClass([arms, fury, protectionWar]);

warriorGuide.addEventListener("click", () => {
    buttonActiveWarrior.constructSpecContainer();
});

// Mage
const arcane = new GameSpec('Arcane', "mage", 
    [
        new Guide("#", "./img/Priory_of_the_Sacred_Flame_loading_screen.jpg", "guide prieuré arcane"),
        new Guide("#", "./img/operation-vannes-ouvertes.jpg", "guide vanne ouverte arcane"),
        new Guide("#", "./img/The_Rookery_loading_screen.jpg", "guide Rookery arcane"),
        new Guide("#", "./img/Theater_of_Pain (1).png", "guide Théatre de la souffrance arcane"),
        new Guide("#", "./img/Cinderbrew_Meadery_loading_screen.jpg", "guide Brassecendre arcane"),
        new Guide("#", "./img/Darkflame_Cleft_loading_screen.jpg", "guide Repaire de la Flamme Noire arcane"),
        new Guide("#", "./img/Motherlode_loading_screen.jpg", "guide Le FILON arcane"),
        new Guide("#", "./img/Mechagon_loading_screen.jpg", "guide Mechagon arcane")
    ]);
const frostMage = new GameSpec('Givre', "mage", 
    [
        new Guide("#", "./img/Priory_of_the_Sacred_Flame_loading_screen.jpg", "guide prieuré givre"),
        new Guide("#", "./img/operation-vannes-ouvertes.jpg", "guide vanne ouverte givre"),
        new Guide("#", "./img/The_Rookery_loading_screen.jpg", "guide Rookery givre"),
        new Guide("#", "./img/Theater_of_Pain (1).png", "guide Théatre de la souffrance givre"),
        new Guide("#", "./img/Cinderbrew_Meadery_loading_screen.jpg", "guide Brassecendre givre"),
        new Guide("#", "./img/Darkflame_Cleft_loading_screen.jpg", "guide Repaire de la Flamme Noire givre"),
        new Guide("#", "./img/Motherlode_loading_screen.jpg", "guide Le FILON givre"),
        new Guide("#", "./img/Mechagon_loading_screen.jpg", "guide Mechagon givre")
    ]);
const fire = new GameSpec('Feu', "mage", 
    [
        new Guide("#", "./img/Priory_of_the_Sacred_Flame_loading_screen.jpg", "guide prieuré feu"),
        new Guide("#", "./img/operation-vannes-ouvertes.jpg", "guide vanne ouverte feu"),
        new Guide("#", "./img/The_Rookery_loading_screen.jpg", "guide Rookery feu"),
        new Guide("#", "./img/Theater_of_Pain (1).png", "guide Théatre de la souffrance feu"),
        new Guide("#", "./img/Cinderbrew_Meadery_loading_screen.jpg", "guide Brassecendre feu"),
        new Guide("#", "./img/Darkflame_Cleft_loading_screen.jpg", "guide Repaire de la Flamme Noire feu"),
        new Guide("#", "./img/Motherlode_loading_screen.jpg", "guide Le FILON feu"),
        new Guide("#", "./img/Mechagon_loading_screen.jpg", "guide Mechagon feu")
    ]);

const buttonActiveMage = new GameClass([arcane, frostMage, fire]);

mageGuide.addEventListener("click", () => {
    buttonActiveMage.constructSpecContainer();
});