function ajoutee(){
    var nom =document.getElementById("na").value;
    var space = nom.split("");
    if(space.lenght ==3){
        if(space[0]==String && space[0].lenght>3){
            if(space[1]==String && space[1].lenght>3){
                if(space[2]==Number && space[2]>18 && space[2]<80){
                    var list = document.getElementById("liste");
                    list.innerHTML="<tr><td>'${space[0]}'</td><td>${space[1]}</td><td>${space[2]}</td></tr>"
                    

                }
            }
        }
    }


}