var images=document.querySelectorAll('.image img')
var right=document.querySelector('.right')
var left=document.querySelector('.left')
var close=document.querySelector('.close')
var galleryimg=document.querySelector('.gallery_inner img')
var gallery=document.querySelector('.gallery')

var currentindex=0;

function gallery_show()
{
    if(currentindex == 0){
        left.classList.add('hide')
    }
    else{
        left.classList.remove('hide')
    }
    if(currentindex == 7){
        right.classList.add('hide')
    }
    else{
        right.classList.remove('hide')
    }
    galleryimg.src=images[currentindex].src
    gallery.classList.add('show')
}

images.forEach((item, index)=>{
    item.addEventListener('click', function(){
        currentindex=index
        gallery_show()
    })
})

close.addEventListener('click',function(){
    gallery.classList.remove('show')
})

document.addEventListener('keydown',function(e){
    if(e.keyCode==27){
        gallery.classList.remove('show')
    } 
})

right.addEventListener('click',function(){
    currentindex=currentindex+1
    gallery_show()
})

left.addEventListener('click',function(){
    currentindex=currentindex-1
    gallery_show()
})