let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];
let extension = ['.com', '.es', '.net', '.us', '.io', '.onion'];
document.addEventListener("DOMContentLoaded", function(){
    const divHTML = document.getElementById("prueba")
    const btnHTML = document.getElementById("btn")


    function generadorDeDominios() {
        let dominio = "";
        let listHtml = "";
        for (let partes1 of pronoun) {
            for (let partes2 of adj) {
                for (let partes3 of noun) {
                    for (let partes4 of extension) {
                        dominio = partes1 + partes2 + partes3 + partes4;
                        listHtml += "<li>" + dominio + "</li>"
                    }
                }
            }
        }
        divHTML.innerHTML = "<ol>" + listHtml + "</ol>";

    }

    btnHTML.addEventListener("click", generadorDeDominios)

})