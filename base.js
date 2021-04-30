let curURL = new URL(window.location.href);

let searchParams = new URLSearchParams(curURL.search);

let fName = searchParams.get("fName");
let lName = searchParams.get("lName");

let email = searchParams.get("email");
let dateString = searchParams.get("date");
let date = new Date(dateString);
let password = searchParams.get("pass");
let checkboxes = searchParams.getAll("cBox");

document.getElementById('fName').innerText += " " + fName;

if(fName == "Carl Fredrik" && lName == "Ahl") {
    document.getElementById('fName').style.color="green";
    document.getElementById('lName').style.color="green";
}

if(email == "carlfredrikahl@gmail.com") {
    document.getElementById('email').style.color="green";
}

document.getElementById('lName').innerText += " " + lName;

for(let x = 0; x <= 10; x++) {
    
    if(checkboxes.includes(x.toString())) {
        if(document.getElementById(x)!= null) {
            document.getElementById(x).checked = true;
        }
    }
}

document.getElementById('email').innerText += " " + email;
document.getElementById('date').innerText += " " + date.getFullYear() + "/"
    + (date.getMonth() + 1) + "/" + date.getDate();
document.getElementById('pass').innerText += " " + password;


