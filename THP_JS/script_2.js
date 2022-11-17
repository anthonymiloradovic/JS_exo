let a = prompt("De quel nombre veux-tu calculer la factorielle ?");


function factorielle(number){
    var nombreChoisi, number, f = 1;
    for(nombreChoisi = 1; nombreChoisi <= number; nombreChoisi++)  
    {
      f = f * nombreChoisi;  
    }  
    return f;
  }
  console.log(" Le résultat est: " +(factorielle(a)));
