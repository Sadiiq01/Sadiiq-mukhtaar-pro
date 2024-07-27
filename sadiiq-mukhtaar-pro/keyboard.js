let inp = document.querySelector("input")

let q = document.querySelector(".q")
let w = document.querySelector(".w")
let e = document.querySelector(".e")
let r = document.querySelector(".r")
let t = document.querySelector(".t")
let y = document.querySelector(".y")
let u = document.querySelector(".u")
let i = document.querySelector(".i")
let o = document.querySelector(".o")
let p = document.querySelector(".p")
let a = document.querySelector(".a")
let s = document.querySelector(".s")
let d = document.querySelector(".d")
let f = document.querySelector(".f")
let g = document.querySelector(".g")
let h = document.querySelector(".h")
let j = document.querySelector(".j")
let k = document.querySelector(".k")
let l = document.querySelector(".l")
let z = document.querySelector(".z")
let x = document.querySelector(".x")
let c = document.querySelector(".c")
let v = document.querySelector(".v")
let b = document.querySelector(".b")
let n = document.querySelector(".n")
let m = document.querySelector(".m")


q.addEventListener("click" , ()=>{
    inp.value += "q"
})
w.addEventListener("click" , ()=>{
    inp.value += "w"

})
e.addEventListener("click" , ()=>{
    inp.value += "e"
})
r.addEventListener("click" , ()=>{
    inp.value += "r"
    
})
t.addEventListener("click" , ()=>{
    inp.value += "t"
})
y.addEventListener("click" , ()=>{
    inp.value += "y"
})
u.addEventListener("click" , ()=>{
    inp.value += "u"
})
i.addEventListener("click" , ()=>{
    inp.value += "i"
})
o.addEventListener("click" , ()=>{
    inp.value += "o"
})
p.addEventListener("click" , ()=>{
    inp.value += "p"
})
a.addEventListener("click" , ()=>{
    inp.value += "a"
})
s.addEventListener("click" , ()=>{
    inp.value += "s"
})
d.addEventListener("click" , ()=>{
    inp.value += "d"
})
f.addEventListener("click" , ()=>{
    inp.value += "f"
})
g.addEventListener("click" , ()=>{
    inp.value += "g"
})
h.addEventListener("click" , ()=>{
    inp.value += "h"
})
j.addEventListener("click" , ()=>{
    inp.value += "j"
})
k.addEventListener("click" , ()=>{
    inp.value += "k"
})
l.addEventListener("click" , ()=>{
    inp.value += "l"
})
z.addEventListener("click" , ()=>{
    inp.value += "z"
})
x.addEventListener("click" , ()=>{
    inp.value += "x"
})
c.addEventListener("click" , ()=>{
    inp.value += "c"
})
v.addEventListener("click" , ()=>{
    inp.value += "v"
})
b.addEventListener("click",()=>{
    inp.value+="b"
})
n.addEventListener("click",()=>{
    inp.value+="n"
})
m.addEventListener("click",()=>{
    inp.value+="m"
})

let upperCase = document.querySelector(".upercase")
let lowerCase = document.querySelector(".lowercase")
let copy = document.querySelector(".copy")

upperCase.onclick= function(){
    inp.value= inp.value.toUpperCase()
}
lowerCase.onclick= function(){
    inp.value= inp.value.toLowerCase()
}
copy.onclick=()=>{
    inp.select();
    document.execCommand("copy");
}