/*alert('bonjour le monde');
var hi ='Bonjour' , name ='toi' ,result;
var text ='Bonjour';
result = hi + name ;
text += 'toi' ;
alert(result);
alert(text);

var userName = prompt('Entrez votre prenom:');
alert(userName);
var start = 'bonjour ' ,name, end ='!' , 
result; name = prompt('Quel est votre prénom ?');
result = start + name + end; alert(result);

var number1 = 2, number2 =2 , number3 = 4, result; 
result = number1 ===number2;// au lieu d'une seule valeur , on en ecrit deux avec l' operateur de comparaison entre elles
alert(result);// la condition est donc vérifiée car les deux variables contiennent bien la meme valeur
result = number1 ==number3; alert(result); //la condition n'est pas vérifiée car 2 est different de 4
result = number1 < number3 ; alert(result);

if  (confirm( "Pour accéder a ce site vous devez etre une fille, cliquez sur 'ok' si c'est le cas" ))
    { 
       alert("Vous allez etre redirigé vers le site .");

    } else 
    {
       alert("Désolé , vous n'avez pas accés a ce site .");}


var floor = parseInt(prompt(" Entrez l' etage ou l'ascenseur doit se rendre (de -2 a 30) :")); if (floor == 0) { alert('vous vous trouvez deja au rez- de chausséé.');} else if (-2 <= florr && floor <= 30) { alert("Direction l'etage n " + floor + '! ');} else { alert}

let n = parseInt(prompt("Entrez un nombre entier positif :"));
let som = 0 , i=1 ;

while(i<=n) {
    som +=i;
     i++;
}
alert("La somme vaut :" +som);

let p =parseInt(prompt("Entrez un entier positif"));
let j=1 , prod=1;
for(j=1; j<=p; j++){
    prod *=j;
}
alert("Le produit vaut " +prod);

function facto(n){
    if(n==0 || n==1)
        return 1;
    return n*facto(n-1);
}
let n1=parseInt(prompt("Entrer un entier positif"));
alert("Le factoriel de ce nombre vaut :"+facto(n1));

function calculerSomme(){
    let nombre1 = parseFloat(document.getElementById ("nombre1").value);
    let nombre2 = parseFloat(document.getElementById ("nombre2").value);
    if (isNaN(nombre1)|| isNaN(nombre2)){
        alert("veuillez entrer des nombres valides.");
        return;
    }
    let somme = nombre1 + nombre2;
    document.getElementById("resultat").innerText = "resultat:" + somme;
    alert("resultat: " + somme);
}

var
number =3;
number += 5;
alert(number);
//affiche:"8"*/

var divs = document.getElementsByTagName('div');
for (var i = 0, c = divs.length ; i < c ; i++){
    alert('Element n°' + (i + 1) + ' : ' + divs[i]);
} 

