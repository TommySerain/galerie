let zone1=document.querySelector("#zone1");
let zone2=document.querySelector("#zone2");
let zoneInfos=document.querySelector("#zoneInfos")
let zoneNom=document.querySelector("#nom")
let zoneCategorie=document.querySelector("#categorie")
let zonePrix=document.querySelector("#prix")


let elements=[  {image:"img/animal1.jpg",nom:"Animal 1",categorie:"animaux",prix:200},
                {image:"img/animal2.jpg",nom:"Animal 2",categorie:"animaux",prix:200},
                {image:"img/animal3.jpg",nom:"Animal 3",categorie:"animaux",prix:200},
                {image:"img/animal4.jpg",nom:"Animal 4",categorie:"animaux",prix:200},
                {image:"img/personne1.jpg",nom:"Persone 1",categorie:"personnes",prix:300},
                {image:"img/personne2.jpg",nom:"Persone 2",categorie:"personnes",prix:300},
                {image:"img/personne3.jpg",nom:"Persone 3",categorie:"personnes",prix:300},
                {image:"img/personne4.jpg",nom:"Persone 4",categorie:"personnes",prix:300},
                {image:"img/paysage1.jpg",nom:"Paysage 1",categorie:"paysage",prix:100},
                {image:"img/paysage2.jpg",nom:"Paysage 2",categorie:"paysage",prix:100},
                {image:"img/paysage3.jpg",nom:"Paysage 3",categorie:"paysage",prix:100},
                {image:"img/paysage4.jpg",nom:"Paysage 4",categorie:"paysage",prix:100}
];

elements.forEach((element,i)=>{
    let vignette=document.createElement("div");
    let image=document.createElement("img");
    let nom=document.createElement("p");
    image.setAttribute("src",element.image)
    nom.innerHTML=element.nom
    vignette.className="vignette";
    vignette.id="v"+i
    vignette.onmouseover=()=>{
            vignette.style.border="5px solid bisque"
    }
    vignette.onmouseout=()=>{
        vignette.style.border=""
    }
    vignette.onclick=()=>{
        zone1.style.backgroundImage=`url(${element.image})`
        zoneNom.innerHTML=element.nom
        zoneCategorie.innerHTML=element.categorie
        zonePrix.innerHTML=element.prix+"€"
        console.log(element.image)
    }
    zone2.appendChild(vignette)
    vignette.appendChild(image)
    vignette.appendChild(nom)
    console.log(vignette)
})

let infos1=elements[0]
console.log(infos1)

zone1.style.backgroundImage=`url(${infos1.image})`
zoneNom.innerHTML=infos1.nom
zoneCategorie.innerHTML=infos1.categorie
zonePrix.innerHTML=infos1.prix+"€"
// console.log(zone1)
