let motifsCartes=[1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10];
let etatsCartes=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
let cartesRetournees=[];
let nbPairesTrouvees=0;
let imgCartes=document.getElementById("tapis").getElementsByTagName("img");

for(let i=0;i<imgCartes.length;i++){
    imgCartes[i].noCarte=i; //Ajout de la propriété noCarte à l'objet img
    imgCartes[i].onclick=function(){
    controleJeu(this.noCarte);
    }                      
}

initialiseJeu();

function majAffichage(noCarte){
    switch(etatsCartes[noCarte]){
        case 0:
        imgCartes[noCarte].src="fondcarte.png";
        break;
        case 1:
        imgCartes[noCarte].src="carte"+motifsCartes[noCarte]+".png";
        break;
        case -1:
        imgCartes[noCarte].style.visibility="hidden";
        break;
    }
}

function rejouer(){
alert("Bravo c'est gagné !");
location.reload();
}

function initialiseJeu(){
    for(let position=motifsCartes.length-1; position>=1; position--){
    let hasard=Math.floor(Math.random()*(position+1));
    let sauve=motifsCartes[position];
    motifsCartes[position]=motifsCartes[hasard];
    motifsCartes[hasard]=sauve;
    }
}

function controleJeu(noCarte){
    if(etatsCartes[noCarte]==0){
    etatsCartes[noCarte]=1;
    cartesRetournees.push(noCarte);
    majAffichage(noCarte);
}       

if(cartesRetournees.length==2){
    let nouveauEtat=0;
if(motifsCartes[cartesRetournees[0]]==motifsCartes[cartesRetournees[1]]){
    nouveauEtat=-1;
    nbPairesTrouvees++;
}

etatsCartes[cartesRetournees[0]]=nouveauEtat;
etatsCartes[cartesRetournees[1]]=nouveauEtat;


setTimeout(function(){
majAffichage(cartesRetournees[0]);
majAffichage(cartesRetournees[1]);
cartesRetournees=[];
if(nbPairesTrouvees==10){
rejouer();
}
},750);
}
}