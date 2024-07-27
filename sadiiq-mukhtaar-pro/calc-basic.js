let displayInp = document.querySelector("input")
let btn = document.querySelector("button")

btn.addEventListener("click" , function(){
    try{
        displayInp.value = eval(displayInp.value)
    }
    catch(error){
        displayInp.value= 'syntax error'
    }
})
