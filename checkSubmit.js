function checkData() {

    let fName = document.forms["inputData"]["fName"].value;
    let lName = document.forms["inputData"]["lName"].value;

    let email = document.forms["inputData"]["email"].value;
    let date = document.forms["inputData"]["date"].value;
    let password = document.forms["inputData"]["pass"].value;

    if (fName == "" || lName == "" || 
    document.querySelectorAll('input[type=checkbox]:checked').length <= 0
    || email == "" || date == "" || password == "") {

        alert("Fyll i all data");
        return false;

    } else {
        return true;
    }
}