function rechercher(){
    let text = document.getElementById('phrase').value;
    let word = document.getElementById('supprimer').value;
    let search = text.includes(word)

    if(search){
        result = 'Le mot existe dans la phrase.'
        }
        else{
        result = `Le mot n'existe pas dans la phrase.`
        }
    document.getElementById('result').innerHTML = result;
}
function supprimer(){
    let text = document.getElementById('phrase').value;
    let word = document.getElementById('supprimer').value;
    let search = text.includes(word)
    let result = text.replace(word,"")

    if(!search){
        result = `Le mot n'existe pas dans la phrase.`
    }
    document.getElementById('result').innerHTML = result;
}