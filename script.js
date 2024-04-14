
const cards = document.querySelectorAll('.card')

;

cards.forEach((card) => {
    card.addEventListener('click', () =>{
        if(card.classList.contains('active')){
            card.classList.remove('active')
        } else{
            card.classList.add('active')
        }
        
    })
})
cards.forEach((card) =>{
    card.addEventListener('keydown', () =>{
        card.classList.toggle('active')
    })
})
