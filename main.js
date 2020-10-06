function change_value() {
    prenom = document.querySelector("#prenom").value
    if (prenom) {
        document.querySelector("#get-value").textContent = nombre(prenom)
    } else {
        console.log("prout")
        document.querySelector("#get-value").textContent = "?"
    }

}
change_value()

document.querySelector("#button-form").addEventListener("click", (event) => {
    change_value()
    event.preventDefault()
})
