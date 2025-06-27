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
    constructor(name, guides) {
        this.name = name;
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
}

class GameClass {
    constructor(colorClass, specOne, specTwo, specThree, specFour) {
        this.colorClass = colorClass;
        this.specOne = specOne;
        this.specTwo = specTwo;
        this.specThree = specThree;
        this.specFour = specFour;

    }

    constructButton(color, value, id) {
        const button = document.createElement("button");
        button.className = "filterSpec bg-primary m-1 " + color;
        button.id = id;
        button.textContent = value;
        return button;
    }

    constructSpecContainer() {
        listDungeons.replaceChildren();
        specContainer.replaceChildren();
        const buttonOne = this.constructButton(this.colorClass, this.specOne.name, "firstButton");
        const buttonTwo = this.constructButton(this.colorClass, this.specTwo.name, "secondButton");

        buttonOne.addEventListener("click", () => {
            this.specOne.constructListGuides();
        });

        buttonTwo.addEventListener("click", () => {
            this.specTwo.constructListGuides();
        });


        specContainer.appendChild(buttonOne);
        specContainer.appendChild(buttonTwo);

        if (this.specThree !== undefined) {
            const buttonThree = this.constructButton(this.colorClass, this.specThree.name, "thirdButton");
            buttonThree.addEventListener("click", () => {
                this.specThree.constructListGuides();
            });
            specContainer.appendChild(buttonThree);
        }
        if (this.specFour !== undefined) {
            const buttonFour = this.constructButton(this.colorClass, this.specFour.name, "fourButton");
            buttonFour.addEventListener("click", () => {
                this.specFour.constructListGuides();
            });
            specContainer.appendChild(buttonFour);
        }
    }
}

// Paladin

const retribution = new GameSpec('Retribution',
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

const sacre = new GameSpec('Sacré',
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
const protection = new GameSpec('Protection',
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

const buttonActivePaladin = new GameClass("paladin", retribution, sacre, protection);

palaGuide.addEventListener("click", () => {
    specContainer.classList.remove("d-none");
    specContainer.classList.add("d-flex");
    buttonActivePaladin.constructSpecContainer();
});


// Druide
const balance = new GameSpec('Equilibre',
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

const feral = new GameSpec('Farouche',
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
const guardian = new GameSpec('Gardien',
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
const restoration = new GameSpec('Restauration',
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

const buttonActiveDrood = new GameClass("druid", balance, feral, guardian, restoration);

druidGuide.addEventListener("click", () => {
    specContainer.classList.remove("d-none");
    specContainer.classList.add("d-flex");
    buttonActiveDrood.constructSpecContainer();
});


// Demon Hunter
const havoc = new GameSpec('Devastation',
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
const vengeance = new GameSpec('Vengeance',
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

const buttonActiveDh = new GameClass("demonHunter", havoc, vengeance);

demonHunterGuide.addEventListener("click", () => {
    specContainer.classList.remove("d-none");
    specContainer.classList.add("d-flex");
    buttonActiveDh.constructSpecContainer();
});


// DK 
const blood = new GameSpec('Sang',
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
const unholy = new GameSpec('Impie',
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
const frost = new GameSpec('Givre',
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

const buttonActiveDk = new GameClass("deathknight", blood, frost, unholy);

deathknightGuide.addEventListener("click", () => {
    specContainer.classList.remove("d-none");
    specContainer.classList.add("d-flex");
    buttonActiveDk.constructSpecContainer();
});


// Démoniste
const destruction = new GameSpec('Destruction', []);
const affliction = new GameSpec('Affliction',[]);
const demonology = new GameSpec('Démonologie', []);

const buttonActiveLock = new GameClass("warlock", destruction, affliction, demonology);

warlockGuide.addEventListener("click", () => {
    specContainer.classList.remove("d-none");
    specContainer.classList.add("d-flex");
    buttonActiveLock.constructSpecContainer();
});

// Chasseur
const marksman = new GameSpec('Précision', []);
const beastmaster = new GameSpec('Maîtrise des bêtes',[]);
const survival = new GameSpec('Survie', []);

const buttonActiveHunt = new GameClass("hunt", marksman, beastmaster, survival);

huntGuide.addEventListener("click", () => {
    specContainer.classList.remove("d-none");
    specContainer.classList.add("d-flex");
    buttonActiveHunt.constructSpecContainer();
});

// Chaman
const elemental = new GameSpec('Elementaire', []);
const amelio = new GameSpec('Amélioration',[]);
const resto = new GameSpec('Restauration', []);

const buttonActiveSham = new GameClass("shaman", elemental, amelio, resto);

shamanGuide.addEventListener("click", () => {
    specContainer.classList.remove("d-none");
    specContainer.classList.add("d-flex");
    buttonActiveSham.constructSpecContainer();
});

// Voleur
const outlaw = new GameSpec('Hors-la-loi', []);
const assa = new GameSpec('Assassinat',[]);
const subtetly = new GameSpec('Finesse', []);

const buttonActiveRogue = new GameClass("rogue", outlaw, assa, subtetly);

rogueGuide.addEventListener("click", () => {
    specContainer.classList.remove("d-none");
    specContainer.classList.add("d-flex");
    buttonActiveRogue.constructSpecContainer();
});

// Evoker
const devaEvo = new GameSpec('Devastation', []);
const augmentation = new GameSpec('Augmentation',[]);
const preservation = new GameSpec('Preservation', []);

const buttonActiveEvoker = new GameClass("evoker", devaEvo, augmentation, preservation);

evokerGuide.addEventListener("click", () => {
    specContainer.classList.remove("d-none");
    specContainer.classList.add("d-flex");
    buttonActiveEvoker.constructSpecContainer();
});

// Moine
const brewmaster = new GameSpec('Maître-brasseur', []);
const windwalker = new GameSpec('Marche-vent',[]);
const mistweaver = new GameSpec('Tisse-brume', []);

const buttonActiveMonk = new GameClass("monk", brewmaster, windwalker, mistweaver);

monkGuide.addEventListener("click", () => {
    specContainer.classList.remove("d-none");
    specContainer.classList.add("d-flex");
    buttonActiveMonk.constructSpecContainer();
});


// Prêtre
const shadow = new GameSpec('Maître-brasseur', []);
const holy = new GameSpec('Marche-vent',[]);
const sacred = new GameSpec('Tisse-brume', []);

const buttonActivePriest = new GameClass("evoker", brewmaster, windwalker, mistweaver);

monkGuide.addEventListener("click", () => {
    specContainer.classList.remove("d-none");
    specContainer.classList.add("d-flex");
    buttonActiveMonk.constructSpecContainer();
});