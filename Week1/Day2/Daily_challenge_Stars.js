for (let i =0; i<6 ;i++){
    console.log("* ".repeat(i));
}

for (let i = 1; i <= 6; i++) {
    let ligne = "";
    
    // Si i = 3, cette boucle va tourner 3 fois
    for (let j = 1; j <= i; j++) {
        ligne += "* ";
    }
    console.log(ligne.trimEnd());
}