const filterButtons=document.querySelector("#filter-btns").children;
const items=document.querySelector(".portfolio-gallery").children;

for(var i=0; i<filterButtons.length; i++){
    filterButtons[i].addEventListener("click",function(){
        for(var j=0; j<filterButtons.length; j++){
            filterButtons[j].classList.remove("active")
        }
        this.classList.add("active");
        const target=this.getAttribute("data-target")

        for(let k=0; k<items.length; k++){
            items[k].style.display="none";
            if(target==items[k].getAttribute("data-id"))
            {
                items[k].style.display="block";
            }
            if(target=="all"){
                 items[k].style.display="block";
            }
        }
    })
}


//on click close the zoomedin image//
const closelightbox=document.querySelector(".close-lightbox");
const lightbox=document.querySelector(".lightbox");
const lightboxImage=lightbox.querySelector("img")

    lightbox.addEventListener("click",function(){
        if(event.target!=lightboxImage){
            lightbox.classList.remove("show");
            lightbox.classList.add("hide");
        }
    })

    closelightbox.addEventListener("click",function(){
        lightbox.classList.remove("show");
        lightbox.classList.add("hide");
    })

const gallery=document.querySelector(".portfolio-gallery");
const galleryItem=gallery.querySelectorAll(".item");

galleryItem.forEach(function(element){
    element.querySelector(".fa-plus").addEventListener("click",function(){
        lightbox.classList.remove("hide");
        lightbox.classList.add("show");
        lightboxImage.src=element.querySelector("img").getAttribute("src")
    })
})



//const sliderContainer=document.querySelector(".testi-slider");
/*const slides=sliderContainer.children;
const containerWidth=sliderContainer.offsetWidth;
const margin=15;
var itemPerSlide=0;

const responsive=[
    {breakpoint:{width:0,item:1}},
    {breakpoint:{width:991,item:2}}
]

function load(){
    for(var i=0;i<responsive.length;i++){
        if(window.innerWidth>responsive[i].breakpoint.width){
            itemPerSlide=responsive[i].breakpoint.item;
        }
    }
    start();
}
function start(){
    totalWidth=0;
    for(var i=0;i<slides.length;i++){
        slides[i].style.width=(containerWidth/itemPerSlide)-margin + "px";
        slides[i].style.margin=margin/2 + "px";
        totalWidth+=containerWidth/itemPerSlide;
    }
    sliderContainer.style.width=totalWidth + "px";

    const slideDots=Math.ceil(slides.length/itemPerSlide);

    for(var i=0;i<slideDots;i++){
        const div=document.createElement("div");
            div.id=i;
            div.setAttribute("onclick","controlSlide(this)");
            if(i==0){
                div.classList.add("active")
            }
        document.querySelector(".slide-controls").appendChild(div);
    }
}

window.onload=load();*/

window.onscroll=function(){
    const docScrollTop=document.documentElement.scrollTop;

    if(window.innerWidth>991){
        if(docScrollTop>100){
            document.querySelector("header").classList.add("fixed")
        }
        else{
            document.querySelector("header").classList.remove("fixed")
        }
    }
}