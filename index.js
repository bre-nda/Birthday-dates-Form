var day = (((cc / 4) - 2 * cc - 1) + ((5 * yy / 4) + ((26 * (mm + 1) / 10)) + dd) % 7);


console.log(day)
    // recieve inputs
function receiveInputs() {
    const dd = document.getElementById("day").value;
    const mm = document.getElementById("month").value;
    const yr = document.getElementById("year").value;
    const female = document.getElementById("Female").value;
    const male = document.getElementById("Male").value;
    console.log(dd + mm + yr + male + female)



    // check if all the fields above hava been entered
    if (dd == "") {
        alert("field required")
        return false;
    }
    if (mm == "") {
        alert("field required")
        return required;
    }
    if (yr == "") {
        alert("field required")
        return required;
    }
    if (female == "") {
        alert("field required")
        return required;
    }
    if (male == "") {
        alert("field required")
        return required;
    }
}


//validating the inputs
if (dd <= 0 || dd > 31) { var error = "is in correct" }
if (mm <= 0 || mm > 12) { var error = "is in correct" }
if (yr > 2021) { var error = "is in correct" }

if (error = "") {
    alert
}

if (gender == "Male") {
    switch (day) {
        case 0:
            dayName = "Kwasi"
        case 1:
            dayName = "Kwaduo"
        case 2:
            dayName = "Kwadena"
        case 3:
            dayName = "Kwaku"
        case 4:
            dayName = "Yaw"
        case 5:
            dayName = "Kofi"
        case 6:
            dayName = "Kwame"



    }
    console.log(dayName)
}

if (gender == "female") {
    switch (day) {
        case 0:
            dayName = "Akosua";
        case 1:
            dayName = "Adwoa";
        case 2:
            dayName = "Abenaa"
        case 3:
            dayName = "Akua"
        case 4:
            dayName = "Yaa"
        case 5:
            dayName = "Afua"
        case 6:
            dayName = "Ama"

    }
    console.log(dayName);
}
var name = "your gender name"
document.getElementById("output").value