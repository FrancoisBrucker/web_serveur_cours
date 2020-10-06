
function somme(nombre) {
    var somme = 0
    chaine = String(nombre)
    for (var i=0; i < chaine.length ; i++) {
        somme += parseInt(chaine.charAt(i))
    }
    return somme
}

function sommeFinale(nombre) {
    while (nombre > 9) {
        nombre = somme(nombre)
    }
    return nombre
}

function nombre(chaine) {
    var somme = 0
    for (var i=0; i< chaine.length; i++) {
        somme += sommeFinale(chaine.charCodeAt(i))
    }
    return sommeFinale(somme)
}

module.exports = {
    somme: somme,
    sommeFinale: sommeFinale,
    nombre: nombre,
}
