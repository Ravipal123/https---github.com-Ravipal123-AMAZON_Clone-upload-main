let btn1=document.getElementById("btn1");
let btn2=document.getElementById("btn2");
let imgitem=document.querySelectorAll(".image-item");

console.log(imgitem.length-1);

let startslider=0;
let endslider=(imgitem.length-1)*100

btn1.addEventListener("click", handleleftbtn)

function handleleftbtn(){
    if(startslider<0 ){
        startslider = startslider + 100;
    }
    
    imgitem.forEach(element => {
        element.style.transform=`translateX(${startslider}%)`;
    });
}

btn2.addEventListener("click", handlerightbtn)

function handlerightbtn(){
    if(startslider>= -endslider+100 ){
        startslider = startslider - 100;
    }
    
    imgitem.forEach(element =>{
        element.style.transform=`translateX(${startslider}%)`;
    });
    
}

function renderSlideAuto(){
    if(startslider>=-endslider+100){
        handlerightbtn()
    }
    else{
        startslider=0;
    }
}
setInterval(renderSlideAuto, 4000);



