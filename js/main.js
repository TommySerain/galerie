let zone1=document.querySelector("#zone1");
let zone2=document.querySelector("#zone2");
let zoneInfos=document.querySelector("#zoneInfos")
let zoneNom=document.querySelector("#nom")
let zoneCategorie=document.querySelector("#categorie")
let zonePrix=document.querySelector("#prix")
let filtre=document.querySelector("#filtre")


let elements=[  {image:"img/animal1.jpg",nom:"Animal 1",categorie:"animaux",prix:200},
                {image:"img/animal2.jpg",nom:"Animal 2",categorie:"animaux",prix:200},
                {image:"img/animal3.jpg",nom:"Animal 3",categorie:"animaux",prix:200},
                {image:"img/animal4.jpg",nom:"Animal 4",categorie:"animaux",prix:200},
                {image:"img/personne1.jpg",nom:"Persone 1",categorie:"personnes",prix:300},
                {image:"img/personne2.jpg",nom:"Persone 2",categorie:"personnes",prix:300},
                {image:"img/personne3.jpg",nom:"Persone 3",categorie:"personnes",prix:300},
                {image:"img/personne4.jpg",nom:"Persone 4",categorie:"personnes",prix:300},
                {image:"img/paysage1.jpg",nom:"Paysage 1",categorie:"paysages",prix:100},
                {image:"img/paysage2.jpg",nom:"Paysage 2",categorie:"paysages",prix:100},
                {image:"img/paysage3.jpg",nom:"Paysage 3",categorie:"paysages",prix:100},
                {image:"img/paysage4.jpg",nom:"Paysage 4",categorie:"paysages",prix:100}
            ];

function afficherElement(configElement,i){
    let vignette=document.createElement("div");
    let image=document.createElement("img");
    let nom=document.createElement("p");
    image.setAttribute("src",configElement.image)
    nom.innerHTML=configElement.nom
    vignette.className="vignette clicable";
    vignette.id="v"+i
    vignette.style.border="5px solid white"
    vignette.style.transitionDuration="500ms"

    vignette.onmouseover=()=>{
        vignette.style.scale="1.2"
        vignette.style.border="5px solid red"
    }
    vignette.onmouseout=()=>{
        vignette.style.scale="1"
        vignette.style.border="5px solid white"
    }
    vignette.onclick=()=>{
        zone1.style.backgroundImage=`url(${configElement.image})`
        zoneNom.innerHTML=configElement.nom
        zoneCategorie.innerHTML=configElement.categorie
        zonePrix.innerHTML=configElement.prix+"€"
    }

    zone2.appendChild(vignette)
    vignette.appendChild(image)
    vignette.appendChild(nom)
}

let infos1=elements[0]
zone1.style.backgroundImage=`url(${infos1.image})`
zoneNom.innerHTML=infos1.nom
zoneCategorie.innerHTML=infos1.categorie
zonePrix.innerHTML=infos1.prix+"€"

majInterface("");

function majInterface(typeDemande){
    let Elements=document.querySelectorAll(".vignette");
    Elements.forEach((element)=>{
        element.remove();
    })
    if(typeDemande=="") {
        var elementsFiltre=elements;
    }else{
        var elementsFiltre=elements.filter(function(configElement){
            return configElement.categorie==typeDemande;
        })
    }
    console.table(elementsFiltre)
    
    elementsFiltre.forEach((configElement,i)=>{
        afficherElement(configElement,i)
    })
}

filtre.style.fontSize="1.2rem"
filtre.style.fontFamily="arial"
filtre.onmouseover=()=>{
    filtre.style.border="6px solid red"
    filtre.style.transitionDuration="500ms"
}
filtre.onmouseout=()=>{
    filtre.style.border="6px solid black"
    filtre.style.transitionDuration="500ms"
}



let montrerInfos= document.querySelector("#montrerInfos");
montrerInfos.style.rotate="0deg";

montrerInfos.onclick=()=>{
    if(montrerInfos.style.rotate=="0deg"){
        montrerInfos.style.rotate="180deg"
        zoneInfos.style.right="0%"
    }else{
        montrerInfos.style.rotate="0deg"
        zoneInfos.style.right="-35%"
    }
}