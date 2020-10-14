function change_value() {
    prenom = document.querySelector("#prenom").value
    if (prenom) {
        fetch('/api/current/numerologie/' + prenom)
            .then(response => response.json())
            .then(data => {
                document.querySelector("#get-value").textContent = data.numero
                console.log(data)
            })
    } else {
        document.querySelector("#get-value").textContent = "?"
    }

}
change_value()

document.querySelector("#button-form").addEventListener("click", (event) => {
    change_value()
    event.preventDefault()
})
