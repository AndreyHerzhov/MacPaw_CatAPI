import { refs } from './refs'
import mainPicture from '../images/hero/girl-and-pet.png'
import iconLeft from 'bundle-text:../images/svg/left.svg'
import alphabet from 'bundle-text:../images/svg/alfabet.svg'
import reverse_alphabet from 'bundle-text:../images/svg/alphabet-reverse.svg'
import update from 'bundle-text:../images/svg/update.svg'

export function createMainMarkup() {
    refs.main.classList.add('first')
    refs.btnVoting.classList.remove('active-btn')
    refs.btnBreeds.classList.remove('active-btn')
    refs.btnGallery.classList.remove('active-btn')
    refs.main.classList.remove('voting')
    refs.main.classList.remove('breeds')
    refs.main.classList.remove('gallery')
    
   
    refs.backgroundMain.classList.remove('main-container_voting')
    refs.main.innerHTML =   `
                    <div class="main-container_background">
                        <img 
                            src="${mainPicture}" 
                            alt="girl-and-pet" 
                            width="775">
                    </div>    
                    `                     
}

export function createVotingMarkup(img) {
    refs.main.innerHTML = `
    <div class="main-container_voting">
     

            <div class="main-container_voting-form">
                    <form class="search-form js-search-form" id="search-form">
                        <input
                        type="text"
                        name="search"
                        autocomplete="off"
                        class="search-form__field js-search-input"
                        placeholder="Search for breeds by name"
                        /> 
                        <button
                            class="voting-button_search"
                            type="button"
                            data-search="voting_main"
                            id="voting_search">
                            <svg class="icon-search " twidth="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path class="icon-search_path search-form_icons-path" d="M19.3613 18.2168L14.6012 13.2662C15.8251 11.8113 16.4957 9.98069 16.4957 8.07499C16.4957 3.62251 12.8732 0 8.4207 0C3.96821 0 0.345703 3.62251 0.345703 8.07499C0.345703 12.5275 3.96821 16.15 8.4207 16.15C10.0922 16.15 11.6851 15.6458 13.047 14.6888L17.8432 19.677C18.0436 19.8852 18.3133 20 18.6022 20C18.8757 20 19.1352 19.8957 19.3321 19.7061C19.7506 19.3034 19.764 18.6357 19.3613 18.2168ZM8.4207 2.10652C11.7118 2.10652 14.3892 4.78391 14.3892 8.07499C14.3892 11.3661 11.7118 14.0435 8.4207 14.0435C5.12961 14.0435 2.45222 11.3661 2.45222 8.07499C2.45222 4.78391 5.12961 2.10652 8.4207 2.10652Z" fill="#FF868E"/>
                            </svg>  
                        </button>
                    </form>

                    <button type="button" class="voting-button_links search-form_button">
                        <svg class="icon-smile " width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path class="icon-smile_path search-form_icons-path"fill-rule="evenodd" clip-rule="evenodd" d="M0 15C0 6.71573 6.71573 0 15 0C23.2843 0 30 6.71573 30 15C30 23.2843 23.2843 30 15 30C6.71573 30 0 23.2843 0 15ZM15 2C7.8203 2 2 7.8203 2 15C2 22.1797 7.8203 28 15 28C22.1797 28 28 22.1797 28 15C28 7.8203 22.1797 2 15 2ZM10 12H8V10H10V12ZM22 12H20V10H22V12ZM9.2 16.6L9.8 17.4C12.4 20.8667 17.6 20.8667 20.2 17.4L20.8 16.6L22.4 17.8L21.8 18.6C18.4 23.1333 11.6 23.1333 8.2 18.6L7.6 17.8L9.2 16.6Z" fill="#FF868E"/>
                        </svg>
                    </button>
                    
                    <button type="button" class="voting-button_links search-form_button">
                        <svg class="icon-heart " width="30" height="26" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path class="icon-heart_path search-form_icons-path"fill-rule="evenodd" clip-rule="evenodd" d="M5.38071 1.33333C3.14541 1.33333 1.33333 3.14541 1.33333 5.38071C1.33333 6.45414 1.75975 7.48361 2.51878 8.24264L10 15.7239L17.4812 8.24264C18.2402 7.48361 18.6667 6.45414 18.6667 5.38071C18.6667 3.14541 16.8546 1.33333 14.6193 1.33333C13.5459 1.33333 12.5164 1.75975 11.7574 2.51878L10.4714 3.80474C10.2111 4.06509 9.78895 4.06509 9.5286 3.80474L8.24264 2.51878C7.48361 1.75975 6.45414 1.33333 5.38071 1.33333ZM0 5.38071C0 2.40903 2.40903 0 5.38071 0C6.80777 0 8.17637 0.566895 9.18545 1.57597L10 2.39052L10.8146 1.57597C11.8236 0.566894 13.1922 0 14.6193 0C17.591 0 20 2.40903 20 5.38071C20 6.80777 19.4331 8.17637 18.424 9.18545L10.4714 17.1381C10.2111 17.3984 9.78895 17.3984 9.5286 17.1381L1.57597 9.18545C0.566893 8.17637 0 6.80777 0 5.38071Z" fill="#FF868E"/>
                            </svg>
                        </button>
                        
                        <button type="button" class="voting-button_links search-form_button">
                            <svg class="icon-sad " width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path class="icon-sad_path search-form_icons-path"fill-rule="evenodd" clip-rule="evenodd" d="M0 15C0 6.71573 6.71573 0 15 0C23.2843 0 30 6.71573 30 15C30 23.2843 23.2843 30 15 30C6.71573 30 0 23.2843 0 15ZM15 2C7.8203 2 2 7.8203 2 15C2 22.1797 7.8203 28 15 28C22.1797 28 28 22.1797 28 15C28 7.8203 22.1797 2 15 2ZM10 12H8V10H10V12ZM22 12H20V10H22V12ZM7.6 20.2L8.2 19.4C11.6 14.8667 18.4 14.8667 21.8 19.4L22.4 20.2L20.8 21.4L20.2 20.6C17.6 17.1333 12.4 17.1333 9.8 20.6L9.2 21.4L7.6 20.2Z" fill="#FF868E"/>
                            </svg>
                        </button>
                    </div>  


                    <div class="main-container_voting-data">
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
                                <img class="random-cat"
                                        src="${img}" 
                                        alt="picture" 
                                        width="640px" 
                                        height="360px" 
                                        srcset="">


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
                            <div class="voting-data_list-wrapper">
                                <ul class="main-container_voting-data_list">
                                    <li class="main-container_voting-data_list-item">
                                        <div>22:40</div>
                                        <p>Lorem ipsum</p>
                                        <button type="button">Button</button>
                                    </li>
                                    <li class="main-container_voting-data_list-item">
                                        <div>22:40</div>
                                        <p>Lorem ipsum</p>
                                        <button type="button">Button</button>
                                    </li>
                                    <li class="main-container_voting-data_list-item">
                                        <div>22:40</div>
                                        <p>Lorem ipsum</p>
                                        <button type="button">Button</button>
                                    </li>
                                    <li class="main-container_voting-data_list-item">
                                        <div>22:40</div>
                                        <p>Lorem ipsum</p>
                                        <button type="button">Button</button>
                                    </li>
                                </ul>
                            </div>

                            
                        </div>

                        
            </div>
    `
}

export function createBreedsMarkup() {
    refs.main.innerHTML = `
    <div class="main-container_breeds">
     

            <div class="main-container_voting-form">
                    <form class="search-form js-search-form" id="search-form">
                        <input
                        type="text"
                        name="search"
                        autocomplete="off"
                        class="search-form__field js-search-input"
                        placeholder="Search for breeds by name"
                        /> 
                        <button
                            class="voting-button_search"
                            type="button"
                            data-search="voting_main"
                            id="voting_search">
                            <svg class="icon-search " twidth="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path class="icon-search_path search-form_icons-path" d="M19.3613 18.2168L14.6012 13.2662C15.8251 11.8113 16.4957 9.98069 16.4957 8.07499C16.4957 3.62251 12.8732 0 8.4207 0C3.96821 0 0.345703 3.62251 0.345703 8.07499C0.345703 12.5275 3.96821 16.15 8.4207 16.15C10.0922 16.15 11.6851 15.6458 13.047 14.6888L17.8432 19.677C18.0436 19.8852 18.3133 20 18.6022 20C18.8757 20 19.1352 19.8957 19.3321 19.7061C19.7506 19.3034 19.764 18.6357 19.3613 18.2168ZM8.4207 2.10652C11.7118 2.10652 14.3892 4.78391 14.3892 8.07499C14.3892 11.3661 11.7118 14.0435 8.4207 14.0435C5.12961 14.0435 2.45222 11.3661 2.45222 8.07499C2.45222 4.78391 5.12961 2.10652 8.4207 2.10652Z" fill="#FF868E"/>
                            </svg>  
                        </button>
                    </form>

                    <button type="button" class="voting-button_links search-form_button">
                        <svg class="icon-smile " width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path class="icon-smile_path search-form_icons-path"fill-rule="evenodd" clip-rule="evenodd" d="M0 15C0 6.71573 6.71573 0 15 0C23.2843 0 30 6.71573 30 15C30 23.2843 23.2843 30 15 30C6.71573 30 0 23.2843 0 15ZM15 2C7.8203 2 2 7.8203 2 15C2 22.1797 7.8203 28 15 28C22.1797 28 28 22.1797 28 15C28 7.8203 22.1797 2 15 2ZM10 12H8V10H10V12ZM22 12H20V10H22V12ZM9.2 16.6L9.8 17.4C12.4 20.8667 17.6 20.8667 20.2 17.4L20.8 16.6L22.4 17.8L21.8 18.6C18.4 23.1333 11.6 23.1333 8.2 18.6L7.6 17.8L9.2 16.6Z" fill="#FF868E"/>
                        </svg>
                    </button>
                    
                    <button type="button" class="voting-button_links search-form_button">
                        <svg class="icon-heart " width="30" height="26" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path class="icon-heart_path search-form_icons-path"fill-rule="evenodd" clip-rule="evenodd" d="M5.38071 1.33333C3.14541 1.33333 1.33333 3.14541 1.33333 5.38071C1.33333 6.45414 1.75975 7.48361 2.51878 8.24264L10 15.7239L17.4812 8.24264C18.2402 7.48361 18.6667 6.45414 18.6667 5.38071C18.6667 3.14541 16.8546 1.33333 14.6193 1.33333C13.5459 1.33333 12.5164 1.75975 11.7574 2.51878L10.4714 3.80474C10.2111 4.06509 9.78895 4.06509 9.5286 3.80474L8.24264 2.51878C7.48361 1.75975 6.45414 1.33333 5.38071 1.33333ZM0 5.38071C0 2.40903 2.40903 0 5.38071 0C6.80777 0 8.17637 0.566895 9.18545 1.57597L10 2.39052L10.8146 1.57597C11.8236 0.566894 13.1922 0 14.6193 0C17.591 0 20 2.40903 20 5.38071C20 6.80777 19.4331 8.17637 18.424 9.18545L10.4714 17.1381C10.2111 17.3984 9.78895 17.3984 9.5286 17.1381L1.57597 9.18545C0.566893 8.17637 0 6.80777 0 5.38071Z" fill="#FF868E"/>
                            </svg>
                        </button>
                        
                        <button type="button" class="voting-button_links search-form_button">
                            <svg class="icon-sad " width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path class="icon-sad_path search-form_icons-path"fill-rule="evenodd" clip-rule="evenodd" d="M0 15C0 6.71573 6.71573 0 15 0C23.2843 0 30 6.71573 30 15C30 23.2843 23.2843 30 15 30C6.71573 30 0 23.2843 0 15ZM15 2C7.8203 2 2 7.8203 2 15C2 22.1797 7.8203 28 15 28C22.1797 28 28 22.1797 28 15C28 7.8203 22.1797 2 15 2ZM10 12H8V10H10V12ZM22 12H20V10H22V12ZM7.6 20.2L8.2 19.4C11.6 14.8667 18.4 14.8667 21.8 19.4L22.4 20.2L20.8 21.4L20.2 20.6C17.6 17.1333 12.4 17.1333 9.8 20.6L9.2 21.4L7.6 20.2Z" fill="#FF868E"/>
                            </svg>
                        </button>
                    </div>  

                    <div class="main-container_breeds-data">
                    
                            <div class="breeds-button_wrapper">
                                <button
                                    class="breeds-button_back"
                                    type="button"
                                    data-back="back"
                                    id="back">${iconLeft}
                                </button>
                                
                                <button
                                    class="breeds-button_right"
                                    type="button"
                                    data-breeds="breeds_main"
                                    id="breeds_main">BREEDS
                                </button>

                                <button type="button" id="breeds_list">All breeds</button>
                                 
                                <select class="filter-button" name="Page_limit" id="limit">
                                     
                                    <option value="10">Limit: 10</option>
                                    <option value="15">Limit: 15</option>
                                    <option value="20">Limit: 20</option>
                                 </select>

                                <button type="button" id="alphabet">${alphabet}</button>
                                <button type="button" id="reverse">${reverse_alphabet}</button>

                                
                            </div>

                            <div class="breeds-gallery">
                                
                            </div>        
                            <div class="pagination-button_wrapper">
                                <button type="button-bottom" id="prev_btn">PREV</button>
                                <button type="button-bottom" id="next_btn">NEXT</button>
                            </div>
                            
                        
                    </div>

                            
    `
}

export function createBreedsGaleryMarkup() {
    console.log(refs.breedsGalery)
}

export function createGalaryMarkup(){
    refs.main.innerHTML = `
    <div class="main-container_gallery">
     

            <div class="main-container_voting-form">
                    <form class="search-form js-search-form" id="search-form">
                        <input
                        type="text"
                        name="search"
                        autocomplete="off"
                        class="search-form__field js-search-input"
                        placeholder="Search for breeds by name"
                        /> 
                        <button
                            class="voting-button_search"
                            type="button"
                            data-search="voting_main"
                            id="voting_search">
                            <svg class="icon-search " twidth="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path class="icon-search_path search-form_icons-path" d="M19.3613 18.2168L14.6012 13.2662C15.8251 11.8113 16.4957 9.98069 16.4957 8.07499C16.4957 3.62251 12.8732 0 8.4207 0C3.96821 0 0.345703 3.62251 0.345703 8.07499C0.345703 12.5275 3.96821 16.15 8.4207 16.15C10.0922 16.15 11.6851 15.6458 13.047 14.6888L17.8432 19.677C18.0436 19.8852 18.3133 20 18.6022 20C18.8757 20 19.1352 19.8957 19.3321 19.7061C19.7506 19.3034 19.764 18.6357 19.3613 18.2168ZM8.4207 2.10652C11.7118 2.10652 14.3892 4.78391 14.3892 8.07499C14.3892 11.3661 11.7118 14.0435 8.4207 14.0435C5.12961 14.0435 2.45222 11.3661 2.45222 8.07499C2.45222 4.78391 5.12961 2.10652 8.4207 2.10652Z" fill="#FF868E"/>
                            </svg>  
                        </button>
                    </form>

                    <button type="button" class="voting-button_links search-form_button">
                        <svg class="icon-smile " width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path class="icon-smile_path search-form_icons-path"fill-rule="evenodd" clip-rule="evenodd" d="M0 15C0 6.71573 6.71573 0 15 0C23.2843 0 30 6.71573 30 15C30 23.2843 23.2843 30 15 30C6.71573 30 0 23.2843 0 15ZM15 2C7.8203 2 2 7.8203 2 15C2 22.1797 7.8203 28 15 28C22.1797 28 28 22.1797 28 15C28 7.8203 22.1797 2 15 2ZM10 12H8V10H10V12ZM22 12H20V10H22V12ZM9.2 16.6L9.8 17.4C12.4 20.8667 17.6 20.8667 20.2 17.4L20.8 16.6L22.4 17.8L21.8 18.6C18.4 23.1333 11.6 23.1333 8.2 18.6L7.6 17.8L9.2 16.6Z" fill="#FF868E"/>
                        </svg>
                    </button>
                    
                    <button type="button" class="voting-button_links search-form_button">
                        <svg class="icon-heart " width="30" height="26" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path class="icon-heart_path search-form_icons-path"fill-rule="evenodd" clip-rule="evenodd" d="M5.38071 1.33333C3.14541 1.33333 1.33333 3.14541 1.33333 5.38071C1.33333 6.45414 1.75975 7.48361 2.51878 8.24264L10 15.7239L17.4812 8.24264C18.2402 7.48361 18.6667 6.45414 18.6667 5.38071C18.6667 3.14541 16.8546 1.33333 14.6193 1.33333C13.5459 1.33333 12.5164 1.75975 11.7574 2.51878L10.4714 3.80474C10.2111 4.06509 9.78895 4.06509 9.5286 3.80474L8.24264 2.51878C7.48361 1.75975 6.45414 1.33333 5.38071 1.33333ZM0 5.38071C0 2.40903 2.40903 0 5.38071 0C6.80777 0 8.17637 0.566895 9.18545 1.57597L10 2.39052L10.8146 1.57597C11.8236 0.566894 13.1922 0 14.6193 0C17.591 0 20 2.40903 20 5.38071C20 6.80777 19.4331 8.17637 18.424 9.18545L10.4714 17.1381C10.2111 17.3984 9.78895 17.3984 9.5286 17.1381L1.57597 9.18545C0.566893 8.17637 0 6.80777 0 5.38071Z" fill="#FF868E"/>
                            </svg>
                        </button>
                        
                        <button type="button" class="voting-button_links search-form_button">
                            <svg class="icon-sad " width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path class="icon-sad_path search-form_icons-path"fill-rule="evenodd" clip-rule="evenodd" d="M0 15C0 6.71573 6.71573 0 15 0C23.2843 0 30 6.71573 30 15C30 23.2843 23.2843 30 15 30C6.71573 30 0 23.2843 0 15ZM15 2C7.8203 2 2 7.8203 2 15C2 22.1797 7.8203 28 15 28C22.1797 28 28 22.1797 28 15C28 7.8203 22.1797 2 15 2ZM10 12H8V10H10V12ZM22 12H20V10H22V12ZM7.6 20.2L8.2 19.4C11.6 14.8667 18.4 14.8667 21.8 19.4L22.4 20.2L20.8 21.4L20.2 20.6C17.6 17.1333 12.4 17.1333 9.8 20.6L9.2 21.4L7.6 20.2Z" fill="#FF868E"/>
                            </svg>
                        </button>
                    </div>  

                    <div class="main-container_gallery-data">
                    
                            <div class="gallery-button_wrapper">
                                    <div class="back-gallary_wrapper">
                                        <button
                                            class="gallery-button_back"
                                            type="button"
                                            data-back="back"
                                            id="back">${iconLeft}
                                        </button>
                                        
                                        <button
                                            class="gallery-button_right"
                                            type="button"
                                            data-gallery="gallery_main"
                                            id="gallery_main">GALLERY
                                        </button>
                                    </div>

                                    
                                    <button
                                        class="button"
                                        type="button"
                                        data-upload="upload_main"
                                        id="upload">UPLOAD
                                    </button>
                            </div>
                                
                                  
                                <div class="gallery-filter">
                                    
                                    <div class="gallery-filter_left">
                                        <p class="filter-name">ORDER</p>
                                       
                                        <select class="filter-button" name="Order" id="order">
                                            <option value="DESC">Random</option>
                                            <option value="DESC">Desc</option>
                                            <option value="ASC">Asc</option>
                                        </select>
                                         

                                        <p class="filter-name">BREED</p>
                                        <select class="filter-button" name="Breed" id="breed">
                                            <option id="abys" value="">All breeds</option>
                                            <option id="abys" value="abys">Abyssinian</option>
                                            <option id="aege" value="aege">Aegean</option>
                                            <option id="abob" value="abob">American Bobtail</option>
                                            <option id="acur" value="acur">American Curl</option>
                                            <option id="asho" value="asho">American Shorthair</option>
                                            <option id="awir" value="awir">American Wirehair</option>
                                            <option id="amau" value="amau">Arabian Mau</option>
                                            <option id="amis" value="amis">Australian Mist</option>
                                            <option id="bali" value="bali">Balinese</option>
                                            <option id="bamb" value="bamb">Bambino</option>
                                            <option id="beng" value="beng">Bengal</option>
                                            <option id="birm" value="birm">Birman</option>
                                            <option id="bomb" value="bomb">Bombay</option>
                                            <option id="bslo" value="bslo">British Longhair</option>
                                            <option id="bsho" value="bsho">British Shorthair</option>
                                            <option id="bure" value="bure">Burmese</option>
                                            <option id="buri" value="buri">Burmilla</option>
                                            <option id="cspa" value="cspa">California Spangled</option>
                                            <option id="ctif" value="ctif">Chantilly-Tiffany</option>
                                            <option id="char" value="char">Chartreux</option>
                                            <option id="chau" value="chau">Chausie</option>
                                            <option id="chee" value="chee">Cheetoh</option>
                                            <option id="csho" value="csho">Colorpoint Shorthair</option>
                                            <option id="crex" value="crex">Cornish Rex</option>
                                            <option id="cymr" value="cymr">Cymric</option>
                                            <option id="cypr" value="cypr">Cyprus</option>
                                            <option id="drex" value="drex">Devon Rex</option>
                                            <option id="dons" value="dons">Donskoy</option>
                                            <option id="lihu" value="lihu">Dragon Li</option>
                                            <option id="emau" value="emau">Egyptian Mau</option>
                                            <option id="ebur" value="ebur">European Burmese</option>
                                            <option id="esho" value="esho">Exotic Shorthair</option>
                                            <option id="hbro" value="hbro">Havana Brown</option>
                                            <option id="hima" value="hima">Himalayan</option>
                                            <option id="jbob" value="jbob">Japanese Bobtail</option>
                                            <option id="java" value="java">Javanese</option>
                                            <option id="khao" value="khao">Khao Manee</option>
                                            <option id="kora" value="kora">Korat</option>
                                            <option id="kuri" value="kuri">Kurilian</option>
                                            <option id="lape" value="lape">LaPerm</option>
                                            <option id="mcoo" value="mcoo">Maine Coon</option>
                                            <option id="mala" value="mala">Malayan</option>
                                            <option id="manx" value="manx">Manx</option>
                                            <option id="munc" value="munc">Munchkin</option>
                                            <option id="nebe" value="nebe">Nebelung</option>
                                            <option id="norw" value="norw">Norwegian Forest Cat</option>
                                            <option id="ocic" value="ocic">Ocicat</option>
                                            <option id="orie" value="orie">Oriental</option>
                                            <option id="pers" value="pers">Persian</option>
                                            <option id="pixi" value="pixi">Pixie-bob</option>
                                            <option id="raga" value="raga">Ragamuffin</option>
                                            <option id="ragd" value="ragd">Ragdoll</option>
                                            <option id="rblu" value="rblu">Russian Blue</option>
                                            <option id="sava" value="sava">Savannah</option>
                                            <option id="sfol" value="sfol">Scottish Fold</option>
                                            <option id="srex" value="srex">Selkirk Rex</option>
                                            <option id="siam" value="siam">Siamese</option>
                                            <option id="sibe" value="sibe">Siberian</option>
                                            <option id="sing" value="sing">Singapura</option>
                                            <option id="snow" value="snow">Snowshoe</option>
                                            <option id="soma" value="soma">Somali</option>
                                            <option id="sphy" value="sphy">Sphynx</option>
                                            <option id="tonk" value="tonk">Tonkinese</option>
                                            <option id="toyg" value="toyg">Toyger</option>
                                            <option id="tang" value="tang">Turkish Angora</option>
                                            <option id="tvan" value="tvan">Turkish Van</option>
                                            <option id="ycho" value="ycho">York Chocolate</option>
                                        </select>
                                         
                                        
                                    </div>

                                    <div class="gallery-filter_right">
                                        <p class="filter-name">TYPE</p>
                                        
                                        <select class="filter-button" name="Type" id="type">
                                            <option value="gif,jpg,png">All</option>
                                            <option value="jpg,png">Static</option>
                                            <option value="gif">Animated</option>
                                        </select>     
                                        
                                        
                                        <div class="limit_update">
                                            <div class="limit_wrapper">
                                            <p class="filter-name">LIMIT</p>
                                                <select class="filter-button" name="Page_limit" id="page_limit">
                                                    <option value="5">5 items per page</option>
                                                    <option value="10">10 items per page</option>
                                                    <option value="15">15 items per page</option>
                                                    <option value="20">20 items per page</option>
                                                </select>
                                            </div>
                                            <button type="button"  id="update">${update}</button>
                                        </div>
                                    </div>
                                    
                                </div>

                                <div class="gallery-gallery">
                                
                                </div>  
                                
                                   
                        
                        
                    </div>

                            
    `

}