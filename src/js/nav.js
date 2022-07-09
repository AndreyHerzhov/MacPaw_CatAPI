import { refs } from './refs'
import { createVotingMarkup, createBreedsMarkup, createMainMarkup } from './render_markup'
 

refs.btnVoting.addEventListener('click', openVotingPgae)
refs.btnBreeds.addEventListener('click', openBreedsPage)
refs.logo.addEventListener('click', createMainMarkup)


 
function openVotingPgae(e) {
    e.preventDefault()
    refs.main.classList.remove('breeds')
    refs.btnBreeds.classList.remove('active-btn')
    refs.btnVoting.classList.toggle('active-btn')
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
    refs.main.classList.remove('first')
    refs.main.classList.remove('voting')
    refs.main.classList.toggle('breeds')
    refs.btnVoting.classList.remove('active-btn')
    refs.btnBreeds.classList.toggle('active-btn')
    if(!refs.main.classList.contains('breeds')) {
        return createMainMarkup()
    }  
    refs.backgroundMain.innerHTML = ''
    createBreedsMarkup()    
     
}