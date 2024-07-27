let inp = document.querySelector("input")
let img = document.querySelector("img")
let clickBtn = document.querySelector(".click")
let cancelBtn = document.querySelector(".cancel")
let containerOne = document.querySelector(".container")
let containerTwo= document.querySelector(".container-2")

let p = document.querySelector("p")
let prog = document.querySelector("progress")

clickBtn.addEventListener("click",()=>{
    if(inp.value===""){
        confirm("please enter avalue")
    }else{
        img.src='https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' + inp.value
    }
})