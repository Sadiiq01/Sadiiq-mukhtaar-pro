let contOne = document.querySelector(".container-1")
let contTwo = document.querySelector(".container-2")


let interval = setInterval(function(){
    contOne.classList.add("de-active")
    contTwo.classList.remove("active")
},10000)


let btnContin= document.querySelector(".container-1 button")

btnContin.addEventListener("click" , function(){
    contOne.classList.add("de-active")
    contTwo.classList.remove("active")
})

let calculatorBasic = document.querySelector(".calculator-basic")
let charectorChecker = document.querySelector(".charector-checker")
let counterPro = document.querySelector(".counter-pro")

let calcBasic = document.querySelector(".calc-basic")
let chrcChek = document.querySelector(".chrc-chek")
let ctr = document.querySelector(".ctr")

let task = document.querySelector(".task")
let brdChang = document.querySelector(".brd-chang")
let calcAdv = document.querySelector(".calc-adv")

let rndGnt = document.querySelector(".rnd-gnt")
let stpWtch = document.querySelector(".stp-wtch")
let tdList = document.querySelector(".td-list")

calcBasic.addEventListener("click" ,()=>{
    window.location.href="calc-basic.html"
} )
counterPro.addEventListener("click" ,()=>{
    window.location.href="counter.html"
} )
brdChang.addEventListener("click" , function(){
    location.href="border-rad-chn.html"
})

rndGnt.addEventListener("click" , ()=>{
    location.href="randomgnt.html"
})

tdList.onclick= ()=>{
    location.href="todo.html"
}

stpWtch.onclick=()=>{
    location.href="keyboard.html"
}

calcAdv.addEventListener("click" , ()=>{
    location.href="clock.html"
})

charectorChecker.onclick=()=>{
    location.href="qr generator.html"
}