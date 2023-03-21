var background=document.querySelector('body')
var text =document.querySelector('.text')
var sunset =document.querySelector('.sun')
var moon =document.querySelector('.moon')
var textspan =document.querySelector('.text span')
var  darkmode =false

moon.addEventListener('click', function(){

    background.style.backgroundColor='black'
    document.body.style.color ='white'
    textspan.textContent='Dark'

}
)



var  lightmode =false

sunset.addEventListener('click',function(){
   
    background.style.backgroundColor='white'
    document.body.style.color ='black'
    textspan.textContent='light'
   


}
)



