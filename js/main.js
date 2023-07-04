const form = document.getElementById('novoItem')

form.addEventListener("submit", (evento) => {
    evento.preventDefault()

    evento.target[0].value
    console.log("funcionando")
});