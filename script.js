const notesContainer = document.querySelector(".notes-container")
const creatBtn = document.querySelector(".btn")
let notes = document.querySelectorAll(".input-box")



function showNotes() {
    notesContainer.innerHTML = localStorage.getItem("notes")
}
showNotes()

updatestorag = () => {
    localStorage.setItem("notes", notesContainer.innerHTML)
}




creatBtn.addEventListener("click", () => {
    let inputBox = document.createElement("p")
    let img = document.createElement("img")
    inputBox.className = "input-box"
    inputBox.setAttribute("contenteditable", "true")
    img.src = "/img/delete.png"
    notesContainer.appendChild(inputBox).appendChild(img)

})
notesContainer.addEventListener("click", (e) => {
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove()
        updatestorag()
    } else if (e.target.tagName === "P") {
        notes = document.querySelectorAll(".input-box")
        notes.forEach(nt => {
            nt.onkeyup = function () {
                updatestorag()
            }
        })
    }
})
document.addEventListener("keydown", event => {
    if (event.key === "Enter") {
        document.execCommand("insertlineBreak")
        event.preventDefault()
    }
})
