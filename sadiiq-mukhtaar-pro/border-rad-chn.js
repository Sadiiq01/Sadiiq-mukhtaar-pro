let container = document.querySelector(".border-container")
let btn = document.querySelector(".btn-one")
let btnTwo = document.querySelector(".btn-two")
let inpOne = document.querySelector(".inp1")
let inpTwo = document.querySelector(".inp2")
let inpThtee = document.querySelector(".inp3")
let inpFour = document.querySelector(".inp4")
btn.addEventListener("click" ,()=>{
    container.style.borderRadius= 
//    ` ${inpOne.value}px ${inpTwo.value}px ${inpThtee.value}px ${inpFour.value}px`
   ` ${inpOne.value}px ${inpTwo.value}px ${inpThtee.value}px ${inpFour.value}px`
})

btnTwo.addEventListener("click" , ()=>{
   location.reload()
})