function valid() {
    var d, m, y;
    var c1, c2, c3;


    d = Number(document.getElementById('day').value);
    m = Number(document.getElementById('month').value);
    y = Number(document.getElementById('year').value);
    c1 = y >= 1 && (m == 1 || m == 3 || m == 5 || m == 7 || m == 8 || m == 10 || m == 12) && (d >= 1 && d <= 31);
    c2 = y >= 1 && (m == 4 || m == 6 || m == 9 || m == 11) && (d >= 1 && d <= 30);
    c3 = y % 400 == 0 || y % 4 == 0 && y % 100 != 0;
    if (m == 2) {
        if (c3) {
            if (d >= 1 && d <= 29) {
                document.getElementById('result').innerHTML = (d + "/" + m + "/" + y + " : valid date");
            } else {
                document.getElementById('result').innerHTML = ("please enter valid day");
            }
        } else {
            if (d >= 1 && d <= 28) {
                document.getElementById('result').innerHTML = (d + "/" + m + "/" + y + " : valid date");
            } else {
                document.getElementById('result').innerHTML = ("please enter valid day");
            }
        }
    } else {
        if (c1) {
            document.getElementById('result').innerHTML = (d + "/" + m + "/" + y + " : valid date");
        } else {
            if (c2) {
                document.getElementById('result').innerHTML = (d + "/" + m + "/" + y + " : valid date");
            } else {
                document.getElementById('result').innerHTML = ("invalide date");
            }
        }
    }
    document.getElementById('code').innerHTML = `function main() {
        var d, m, y;
        var c1, c2, c3;
        
        d = Number(window.prompt('Enter a value for d'));
        
        m = Number(window.prompt('Enter a value for m'));
        
        y = Number(window.prompt('Enter a value for y'));
        c1 = y >= 1 && (m == 1 || m == 3 || m == 5 || m == 7 || m == 8 || m == 10 || m == 12) && (d >= 1 && d <= 31);
        c2 = y >= 1 && (m == 4 || m == 6 || m == 9 || m == 11) && (d >= 1 && d <= 30);
        c3 = y % 400 == 0 || y % 4 == 0 && y % 100 != 0;
        if (m == 2) {
            if (c3) {
                if (d >= 1 && d <= 29) {
                    window.alert(d.ToString() + "/" + m + "/" + y + " : valid date");
                } else {
                    window.alert("please enter valid day");
                }
            } else {
                if (d >= 1 && d <= 28) {
                    window.alert(d.ToString() + "/" + m + "/" + y + " : valid date");
                } else {
                    window.alert("please enter valid day");
                }
            }
        } else {
            if (c1) {
                window.alert(d.ToString() + "/" + m + "/" + y + " : valid date");
            } else {
                if (c2) {
                    window.alert(d.ToString() + "/" + m + "/" + y + " : valid date");
                } else {
                    window.alert("invalide date");
                }
            }
        }
    }
    `
}
