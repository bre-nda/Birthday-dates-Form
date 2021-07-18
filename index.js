var day = (((20 / 4) - 2 * 20 - 1) + ((21 / 4) + ((26 * (07 + 1) / 10)) + 17) % 7);
console.log(day)
    // recieve inputs
function receiveInputs() {
    const date = document.getElementById("start").value;
    const female = document.getElementById("Female").value;
    const male = document.getElementById("Male").value;
    console.log(date + female + male)

}