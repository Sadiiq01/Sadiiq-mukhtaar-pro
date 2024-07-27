let inpOne = document.querySelector(".inp-1")
let btnOne = document.querySelector(".btn-1")
let container = document.querySelector(".main")
btnOne.addEventListener("click" , ()=>{
    let div = document.createElement("div")
    let btnTwo = document.createElement("button")
    let p = document.createElement("p")

    p.innerHTML= inpOne.value
    btnTwo.innerHTML = "clear"
    div.classList.add("div")

    div.append(p,btnTwo)
    container.append(div)

    btnTwo.addEventListener("click" ,()=>{
        div.remove()
    })
})