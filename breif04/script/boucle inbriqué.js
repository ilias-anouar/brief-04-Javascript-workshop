
function draw() {
	var usern = parseInt(document.getElementById("boucle-input").value);
  if(usern % 2==0)
  {
    alert("you should enter a number impair")
  }
  else
  {
    console.log(usern);
    let string = "";
    let lvalue = (usern + 1) / 2;
    for (let i = 1; i <= lvalue; i++) {
      //  spaces
      for (let j = lvalue; j > i; j--) {
        string +=" ";
      }
      // star
      for (let k = 0; k < i * 2 - 1; k++) {
        string += "*";
      }
      string += "\n";
    }
    for (let i = 1; i <= lvalue - 1; i++) {
      // spaces
      for (let j = 0; j < i; j++) {
        string +=" ";
      }
      // star
      for (let k = (lvalue - i)*2 - 1; k > 0; k--) {
        string += "*";
      }
      string += "\n";
    }
    console.log(string);

    document.getElementById("result").innerHTML = string;
  }
}