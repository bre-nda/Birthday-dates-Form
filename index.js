var day = (((cc / 4) - 2 * cc - 1) + ((5 * yy / 4) + ((26 * (mm + 1) / 10)) + dd) % 7);
// the day might returned as a decimal so we need to round it off
if (day! == 2)
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
        if (mm == "")
            alert("field required")
        if (yr == "")
            alert("field required")
        if (female == "")
            alert("field required")
        if (male == "")
            alert("field required")
    }

}
//