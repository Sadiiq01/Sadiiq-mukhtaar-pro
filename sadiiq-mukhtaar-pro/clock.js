let hour = document.querySelector(".hour")
let minute = document.querySelector(".minute")
let second = document.querySelector(".second")

setInterval(function(){
    let date = new Date()
    let h = date.getHours()
    let m = date.getMinutes()
    let s = date.getSeconds()

    if(h<10){
        hour.innerHTML = "0" + h
    }else{
        hour.innerHTML = h
    }
    if(m<10){
        minute.innerHTML = "0" + m
        }else{
            minute.innerHTML = m
        }
        if(s<10){
            second.innerHTML = "0" + s
            }else{
                second.innerHTML = s
            }
},1000)