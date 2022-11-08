function random(max) {
    return Math.floor(Math.random()* max + 1)
}

var cnum,trys;
trys = 10;
cnum = random(50);
console.log(cnum);
function number() {
     let num = Number(document.getElementById('while-input').value);
    while (trys> 1) {
        trys--;
        if (num > cnum) {
            document.getElementById('trys').innerHTML = (`Tentatives restantes : `+ trys+`/10`)
            document.getElementById('resulte').innerHTML = ("enter a smaller num");
            num = Number(document.getElementById('while-input').value);
        } else {
            document.getElementById('trys').innerHTML = (`Tentatives restantes : `+ trys+`/10`)
            document.getElementById('resulte').innerHTML =("enter a bigger num");
            num = Number(document.getElementById('while-input').value);
        }
        break
    }
    if (num === cnum) {
        document.getElementById('resulte').innerHTML = ("you win")     
    }
    document.getElementById('code').innerHTML = `function random(max) {
        return Math.floor(Math.random()* max + 1)
    }
    
    var cnum,trys;
    trys = 10;
    cnum = random(50);
    console.log(cnum);
    function number() {
         let num = Number(document.getElementById('while-input').value);
        while (trys> 1) {
            trys--;
            if (num > cnum) {
                document.getElementById('trys').innerHTML = (trys+`/10`)
                document.getElementById('resulte').innerHTML = ("enter a smaller num");
                num = Number(document.getElementById('while-input').value);
            } else {
                document.getElementById('trys').innerHTML = (trys+`/10`)
                document.getElementById('resulte').innerHTML =("enter a bigger num");
                num = Number(document.getElementById('while-input').value);
            }
            break
        }
        if (num === cnum) {
            document.getElementById('resulte').innerHTML = ("you win")     
        }
    }`
}

