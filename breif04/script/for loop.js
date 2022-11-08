// function multip() { 
//     let num =document.getElementById('for-input').value;
//     for (i = 1; i <= 10; i++){
//         document.getElementById('result').innerHTML = num + " x " +  i + " = " + num * i + "<br>"
//     }
// }
function table()
{
    let a=document.getElementById("for-input").value;

    let re='\n'

for(var i = 1; i <=10 ; i++){
    var resultat =a * i;
     re += a + " x " +i+" = " + resultat +" <br> ";

    document.getElementById("result").innerHTML= re;
    // console.log(a +""+i+" = " + resultat);
}
document.getElementById('code').innerHTML = `function table()
{
    let a=document.getElementById("for-input").value;

    let re='\n'

for(var i = 1; i <=10 ; i++){
    var resultat =a * i;
     re += a + " x " +i+" = " + resultat +" <br> ";

    document.getElementById("result").innerHTML= re;
    // console.log(a +""+i+" = " + resultat);
}

}`
}
