let inpOne = document.querySelector(".inp-1")
let btnOne = document.querySelector(".btn1")
let main = document.querySelector(".main")
btnOne.addEventListener("click" , ()=>{
    let inpTwo = document.createElement("input")
    let p = document.createElement("p")
    let div = document.createElement("div")
    inpTwo.type="checkbox"

    p.innerHTML=inpOne.value

    if(inpTwo.checked === true){
        p.classList.add("active")
    } 

    // p.classList.add("active")

    div.classList.add("div")
    //     p.classList.remove("active")
    // }


    div.append( inpTwo, p )
    main.append(div)
})

inpOne.addEventListener("change" , ()=>{
    let inpTwo = document.createElement("input")
    let p = document.createElement("p")
    let div = document.createElement("div")
    inpTwo.type="checkbox"

    p.innerHTML=inpOne.value

    if(inpTwo.checked === true){
        p.classList.add("active")
    } 

    // p.classList.add("active")

    div.classList.add("div")
    //     p.classList.remove("active")
    // }


    div.append( inpTwo, p )
    main.append(div)
})