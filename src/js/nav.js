 import { createMainMarkup } from './render_markup'
 import { refs } from './refs'
 import { createVotingMarkup } from './render_markup'
 

refs.btnVoting.addEventListener('click', openVotingPgae)
refs.btnBreeds.addEventListener('click', openBreedsPage)
refs.logo.addEventListener('click', createMainMarkup)


 
function openVotingPgae(e) {
    e.preventDefault()
   refs.backgroundMain.classList.toggle('container-main_voting')
    refs.main.classList.toggle('voting')
    refs.main.classList.remove('first')
    if(!refs.main.classList.contains('voting')) {
        return createMainMarkup()
    }  
    refs.backgroundMain.innerHTML = ''
    createVotingMarkup()
  
}

function openBreedsPage(e) {
    e.preventDefault()
       
         

        refs.backgroundMain.classList.remove('main-container_voting')
        refs.btnVoting.classList.remove('active-btn')
        refs.btnBreeds.classList.toggle('active-btn')
        // refs.votingInput.classList.toggle('visually-hidden')
        refs.main.classList.toggle('breeds')
        refs.main.classList.remove('first')
        refs.main.classList.remove('voting')
        refs.backgroundMain.classList.toggle('main-container_breeds')
         
     
}