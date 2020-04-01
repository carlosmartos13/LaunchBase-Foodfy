
// const cards = document.querySelectorAll('.content_detale')

// for (let card of cards){
//     card.addEventListener("click", function(){
//         const receitaId = card.getAttribute("id")
//         window.location.href = `/recipe?id=${receitaId}`
//     })
// }

const cards = document.querySelectorAll('.content_detale')

for(let i = 0; i < cards.length; i++){
    cards[i].addEventListener('click', function(){
        window.location.href = `/recipes/${i}`
    })
}


const hideButtons = document.querySelectorAll('p.default')


for (let hideButton of hideButtons){
    hideButton.addEventListener('click', function(){
        if(hideButton.classList.contains('hidden')) {
            hideButton.classList.remove('hidden')
            hideButton.innerHTML = ('Esconder')
        } else {
            hideButton.classList.add('hidden')
            hideButton.innerHTML = 'Mostrar'
        }
    })
}