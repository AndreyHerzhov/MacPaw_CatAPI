 import { createMainMarkup } from './render_main_markup'
 import mainPicture from '../images/hero/girl-and-pet.png'
 import iconLeft from 'bundle-text:../images/svg/left.svg'
//  import * as iconLeft from '../images/svg/left.svg'



 console.log(mainPicture)
 console.log(iconLeft)

const refs = {
    btnVoting: document.querySelector('[data-search="voting"]'),
    btnBreeds: document.querySelector('[data-search="breeds"]'),
    btnGallery: document.querySelector('[data-search="gallery"]'),
    main: document.querySelector('.container-main'),
    backgroundMain: document.querySelector('.container-main_background'),
    input: document.querySelector('.search-form__field'),
    logo: document.querySelector('.nav-logo'),
    btnBack: document.querySelector('[data-search="voting"]'),
    searchBtn: document.querySelector('.voting-button_search'),
    votingInput: document.querySelector('.voting-form_container')
}


 

refs.btnVoting.addEventListener('click', openVoting)
refs.logo.addEventListener('click', createMain)

function createMain() {
    refs.btnVoting.classList.remove('active-btn')
    refs.votingInput.classList.add('visually-hidden')
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
                            class="voting-button_back"
                            type="button"
                            data-back="back"
                            id="back"
                            >${iconLeft}</button>
                    <button
                            class="voting-button_right"
                            type="button"
                            data-voting="voting_main"
                            id="voting_main"
                            >VOTING</button>
                    </div>

                    <div class="voting-image_card">
                        <img src="" alt="" srcset="">

                        <div class="voting-image_button-wrapper">
                            <button type="button" class="voting-image_button-smile">
                                <svg class="icon-smile" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path class="voting-image_icons-path voting-icon_smile-path" fill-rule="evenodd" clip-rule="evenodd" d="M0 15C0 6.71573 6.71573 0 15 0C23.2843 0 30 6.71573 30 15C30 23.2843 23.2843 30 15 30C6.71573 30 0 23.2843 0 15ZM15 2C7.8203 2 2 7.8203 2 15C2 22.1797 7.8203 28 15 28C22.1797 28 28 22.1797 28 15C28 7.8203 22.1797 2 15 2ZM10 12H8V10H10V12ZM22 12H20V10H22V12ZM9.2 16.6L9.8 17.4C12.4 20.8667 17.6 20.8667 20.2 17.4L20.8 16.6L22.4 17.8L21.8 18.6C18.4 23.1333 11.6 23.1333 8.2 18.6L7.6 17.8L9.2 16.6Z" fill="#FF868E"/>
                                </svg>
                            </button>
                            
                            <button type="button" class="voting-image_button-heart">
                                <svg class="icon-heart" width="30" height="26" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path class="voting-image_icons-path voting-icon_heart-path" fill-rule="evenodd" clip-rule="evenodd" d="M5.38071 1.33333C3.14541 1.33333 1.33333 3.14541 1.33333 5.38071C1.33333 6.45414 1.75975 7.48361 2.51878 8.24264L10 15.7239L17.4812 8.24264C18.2402 7.48361 18.6667 6.45414 18.6667 5.38071C18.6667 3.14541 16.8546 1.33333 14.6193 1.33333C13.5459 1.33333 12.5164 1.75975 11.7574 2.51878L10.4714 3.80474C10.2111 4.06509 9.78895 4.06509 9.5286 3.80474L8.24264 2.51878C7.48361 1.75975 6.45414 1.33333 5.38071 1.33333ZM0 5.38071C0 2.40903 2.40903 0 5.38071 0C6.80777 0 8.17637 0.566895 9.18545 1.57597L10 2.39052L10.8146 1.57597C11.8236 0.566894 13.1922 0 14.6193 0C17.591 0 20 2.40903 20 5.38071C20 6.80777 19.4331 8.17637 18.424 9.18545L10.4714 17.1381C10.2111 17.3984 9.78895 17.3984 9.5286 17.1381L1.57597 9.18545C0.566893 8.17637 0 6.80777 0 5.38071Z" fill="#FF868E"/>
                                </svg>
                            </button>
                            
                            <button type="button" class="voting-image_button-sad">
                                <svg class="icon-sad" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path class="voting-image_icons-path voting-icon_sad-path" fill-rule="evenodd" clip-rule="evenodd" d="M0 15C0 6.71573 6.71573 0 15 0C23.2843 0 30 6.71573 30 15C30 23.2843 23.2843 30 15 30C6.71573 30 0 23.2843 0 15ZM15 2C7.8203 2 2 7.8203 2 15C2 22.1797 7.8203 28 15 28C22.1797 28 28 22.1797 28 15C28 7.8203 22.1797 2 15 2ZM10 12H8V10H10V12ZM22 12H20V10H22V12ZM7.6 20.2L8.2 19.4C11.6 14.8667 18.4 14.8667 21.8 19.4L22.4 20.2L20.8 21.4L20.2 20.6C17.6 17.1333 12.4 17.1333 9.8 20.6L9.2 21.4L7.6 20.2Z" fill="#FF868E"/>
                                </svg>
                            </button>
                        </div>
                    </div>

                    
                 </div>

                <div class="voting-container_list-wrapper">
                    <ul class="voting-container_list">
                        <li class="voting-container_list-item">
                            <div>22:40</div>
                            <p>Lorem ipsum</p>
                            <button type="button">Button</button>
                        </li>
                        <li class="voting-container_list-item">
                            <div>22:40</div>
                            <p>Lorem ipsum</p>
                            <button type="button">Button</button>
                        </li>
                        <li class="voting-container_list-item">
                            <div>22:40</div>
                            <p>Lorem ipsum</p>
                            <button type="button">Button</button>
                        </li>
                        <li class="voting-container_list-item">
                            <div>22:40</div>
                            <p>Lorem ipsum</p>
                            <button type="button">Button</button>
                        </li>
                    </ul>
                </div>

    `
}
 

function openVoting(e) {
    e.preventDefault()
    refs.btnVoting.classList.toggle('active-btn')
    refs.votingInput.classList.toggle('visually-hidden')
    refs.main.classList.toggle('voting')
    refs.backgroundMain.classList.toggle('container-main_voting')
    if(!refs.main.classList.contains('voting')) {
        return createMain()
    } else {

    }
    refs.backgroundMain.innerHTML = ''
    createVotingMarkup()
  
}