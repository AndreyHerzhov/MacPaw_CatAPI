 import { createMainMarkup } from './render_main_markup'
 import mainPicture from '../images/hero/girl-and-pet.png'

 console.log(mainPicture)

const refs = {
    btnVoting: document.querySelector('[data-search="voting"]'),
    btnBreeds: document.querySelector('[data-search="breeds"]'),
    btnGallery: document.querySelector('[data-search="gallery"]'),
    main: document.querySelector('.container-main'),
    backgroundMain: document.querySelector('.container-main_background'),
    input: document.querySelector('.search-form__field'),
    logo: document.querySelector('.nav-logo'),
    btnBack: document.querySelector('[data-search="voting"]')

}


 

refs.btnVoting.addEventListener('click', openVoting)
refs.logo.addEventListener('click', createMain)

function createMain() {
    refs.btnVoting.classList.remove('active-btn')
    refs.input.classList.add('visually-hidden')
    refs.main.classList.remove('voting')
    refs.backgroundMain.classList.remove('container-main_voting')
    refs.backgroundMain.innerHTML =   `
    <img 
        src="${mainPicture}" 
        alt="girl-and-pet" 
        width="775">
        `                     
}

function createVotingMarkup() {
    refs.backgroundMain.innerHTML = `
                <div class="voting-container">
                    <div class="voting-button_wrapper">
                        <button
                            class="voting_button"
                            type="button"
                            data-search="back"
                            id="back"
                            ></button>
                    <button
                            class="voting_button"
                            type="button"
                            data-search="voting_main"
                            id="voting_main"
                            >VOTING</button>
                    </div>

                    <div class="voting-image_card">
                        <img src="" alt="" srcset="">
                    </div>
                 </div>

    `
}
 

function openVoting(e) {
    e.preventDefault()
    refs.btnVoting.classList.toggle('active-btn')
    refs.input.classList.toggle('visually-hidden')
    refs.main.classList.toggle('voting')
    refs.backgroundMain.classList.toggle('container-main_voting')
    if(!refs.main.classList.contains('voting')) {
        return createMain()
    } else {

    }
    refs.backgroundMain.innerHTML = ''
    createVotingMarkup()
  
}