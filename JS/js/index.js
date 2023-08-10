//ex1 
// function triangle(x,y,z ){
// if(x==y==z){
//     console.log("equilateral")
// }else if (x==y || y==z||z==x){
// console.log("isocele")
// }else{
//     console.log("scalene")
// }
// }
// triangle(1,1,3)


//ex2

// Demande à l'utilisateur de saisir une chaîne de caractères
// let inputString = prompt("Veuillez saisir une chaîne de caractères :");

// // Vérifie si l'utilisateur a saisi quelque chose
// if (inputString) {
//   // Boucle pour afficher progressivement les premiers caractères
//   let output = "";
//   for (let i = 0; i < inputString.length; i++) {
//     output += inputString[i];
//     console.log(output);
//   }
// } else {
//   console.log("Vous n'avez rien saisi.");
// }

//ex3

function estpluspropche(x,y){
    var v1=Math.abs(100-x)
    var v2 = Math.abs(100-y)
    if(v1<v2){
        console.log(v1+"plus grand")
    }else if(v1>v2){
        console.log(v2+"plus grand")
    }else{
        console.log("sont egal")
    }
}
estpluspropche(40,-80)