
const cards = document.querySelectorAll('.card')
const btns = document.querySelectorAll('.btn-container')
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
// btns.forEach((btn) => {
//     btn.addEventListener('click', () => {
//         btn.parentNode.classList.toggle('active')
//     })
// })
//     console.log(p.parentNode);)



;
// p.forEach((p) => {
//     addEventListener( 'click', ()=> p.parentNode.classList.toggle('active'))
//     console.log(p.parentNode);
//})
// function toggleActive(){
//     cards.forEach((card) =>{
//         if(card.classList.contains('active')){
//             card.classList.remove('active')
//         } else{
//             card.classList.add('active')
//         }
//     })
// }

// cards.forEach((card) => addEventListener('click', toggleActive))
// icons.addEventListener('click', activateIcons)