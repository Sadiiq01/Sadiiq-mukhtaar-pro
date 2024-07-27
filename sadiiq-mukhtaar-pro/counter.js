let inc = document.querySelector(".inc")
let dec = document.querySelector(".dec")
let res = document.querySelector(".res")
let count = 0
let inp = document.querySelector("input")
inp.value=count
inc.addEventListener("click" , ()=>{
    count++
    inp.value=count
})
dec.addEventListener("click" , ()=>{
    count--
    inp.value=count
})
res.addEventListener("click" , ()=>{
    count=0
    inp.value=count
})