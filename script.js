var add = document.querySelectorAll(".fa-plus-square");
var minus = document.querySelectorAll(".fa-minus-square");
var container = document.querySelectorAll(".container");
var qte = document.querySelectorAll('.qte');
var deletebtn = document.querySelectorAll('.deletebtn');
var card = document.querySelectorAll('.card');
var total = document.querySelector('.total');
var price = document.querySelectorAll('.price');
var heart = document.querySelectorAll('.fa-heart');



/*function plus*/
add.forEach(elm => {
    elm.addEventListener ('click', () => {
        plus=  elm.nextElementSibling.innerHTML++
        priceunit= elm.nextElementSibling.nextElementSibling.nextElementSibling.innerHTML.replace('€', '')

        total.innerHTML= (parseFloat(total.innerHTML))+(parseFloat(priceunit));
        
}) 
    });


// minus.addEventListener("click",()=>{

minus.forEach(elm => {
    elm.addEventListener ('click', () => {
        if(min=  elm.previousElementSibling.innerHTML >0){
            min=  elm.previousElementSibling.innerHTML--
            priceunit= elm.nextElementSibling.innerHTML.replace("€","")
    
            total.innerHTML= (parseFloat(total.innerHTML))-(parseFloat(priceunit));
        }
})  
    });


Array.from(deletebtn).map(deletebtn => {
    deletebtn.addEventListener("click", () => {
        deletebtn.parentElement.parentElement.remove();
    })
})

Array.from(heart).map(heart => {
    heart.addEventListener ('click',  () => {
        heart.classList.toggle('mystyle')
        });
} )
