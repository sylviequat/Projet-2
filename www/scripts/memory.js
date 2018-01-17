

let tableau = 
[new Case("1", "1", "C"),
new Case("2", "1", "A"),
new Case("3", "1", "E"),
new Case("4", "1", "F"),
new Case("5", "1", "G"),
new Case("6", "1", "B"),
new Case("7", "1", "C"),
new Case("8", "1", "D"),
new Case("9", "1", "H"),
new Case("10", "1", "B"),
new Case("11", "1", "F"),
new Case("12", "1", "D"),
new Case("13", "1", "A"),
new Case("14", "1", "H"),
new Case("15", "1", "G"),
new Case("16", "1", "E")];


function affichTab() {
  for (let item of tableau) {
    let section = document.querySelector(".container");
    let p = document.createElement("div");
    p.textContent = item.ncase;
    p.className = "case";
    section.appendChild(p);
  }
}
affichTab();



let compa=('0','0');
let compteur=0;
let indic= true;


// boucle sur le tableau
for (i=0; i<tableau.length; i++) {
let ncase
}



// Adding event handler code to an onclick event
// document.getElementById(this.ncase).onclick = function(){code}	


// element.addEventListener("click", function(){ myFunction(p1, p2); });


//onclick = function() { alert("clic"); };


// function majAffichage(noCase){
// 	switch(case[etat]){
// 		case 0:
// 			imgCase[ncase].src="fondcarte.png";
// 			break;
// 		case 1:
// 			imgCase[ncase].src="case"+imgCase[ncase]+".png";
// 			break;
// 		case 2:
// 			imgCase[ncase].style.visibility="hidden";
// 			break;
// 	}
// }