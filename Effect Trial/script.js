Mousecircle=document.getElementById("mouse-circle")
body = document.getElementById("body")
body.addEventListener(onmousemove, function(e){
    console.log("moving")
    Mousecircle.style.top = e.clientY+"px"
    Mousecircle.style.left = e.clientX+"px"
})