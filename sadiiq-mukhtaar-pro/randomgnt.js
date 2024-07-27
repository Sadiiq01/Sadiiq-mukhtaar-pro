let p = document.querySelector("p")
let btn = document.querySelector("button")
let randOne = Math.floor(Math.random()*10)
let randTwo = Math.floor(Math.random()*10)
let randThre = Math.floor(Math.random()*10)
let randFour = Math.floor(Math.random()*10)
p.innerHTML= `${randOne}${randTwo}${randThre}${randFour}`
btn.addEventListener("click" , ()=>{
    location.reload()
})

