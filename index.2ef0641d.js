function n(n,t,e,i){Object.defineProperty(n,t,{get:e,set:i,enumerable:!0,configurable:!0})}function t(n){return n&&n.__esModule?n.default:n}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},o={},s=e.parcelRequire0618;null==s&&((s=function(n){if(n in i)return i[n].exports;if(n in o){var t=o[n];delete o[n];var e={id:n,exports:{}};return i[n]=e,t.call(e.exports,e,e.exports),e.exports}var s=new Error("Cannot find module '"+n+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(n,t){o[n]=t},e.parcelRequire0618=s),s.register("kyEFX",(function(t,e){var i,o;n(t.exports,"register",(function(){return i}),(function(n){return i=n})),n(t.exports,"resolve",(function(){return o}),(function(n){return o=n}));var s={};i=function(n){for(var t=Object.keys(n),e=0;e<t.length;e++)s[t[e]]=n[t[e]]},o=function(n){var t=s[n];if(null==t)throw new Error("Could not resolve bundle with id "+n);return t}})),s("kyEFX").register(JSON.parse('{"5ZPII":"index.2ef0641d.js","6v6mg":"girl-and-pet.cb465363.png","5UbS1":"index.587c2775.css"}'));const a={btnVoting:document.querySelector('[data-search="voting"]'),btnBreeds:document.querySelector('[data-search="breeds"]'),btnGallery:document.querySelector('[data-search="gallery"]'),main:document.querySelector(".main-container"),backgroundMain:document.querySelector(".main-container_background"),input:document.querySelector(".search-form__field"),logo:document.querySelector(".nav-logo"),btnBack:document.querySelector('[data-search="voting"]'),searchBtn:document.querySelector(".voting-button_search"),votingInput:document.querySelector(".main-container_voting-form"),breedsGalery:document.querySelector(".breeds-gallery"),prevBtn:document.querySelector("#prev_btn"),nextBtn:document.querySelector("#next_btn")};var r;r=new URL(s("kyEFX").resolve("6v6mg"),import.meta.url).toString();var l;l='<svg class="icon-left" width="12" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"><path class="icon-left_path" d="m.71 10.99 8.6 8.6a1.4 1.4 0 1 0 1.98-1.98L3.681 10l7.61-7.609A1.4 1.4 0 0 0 9.308.411L.71 9.01a1.396 1.396 0 0 0 0 1.98Z" fill="#FF868E"/></svg>';function c(){a.main.classList.add("first"),a.btnVoting.classList.remove("active-btn"),a.main.classList.remove("voting"),a.backgroundMain.classList.remove("main-container_voting"),a.main.innerHTML=`\n                    <div class="main-container_background">\n                        <img \n                            src="${t(r)}" \n                            alt="girl-and-pet" \n                            width="775">\n                    </div>    \n                    `}a.btnVoting.addEventListener("click",(function(n){n.preventDefault(),d.fetchRandomCat().then((n=>{const e=n[0].url;if(a.main.classList.remove("breeds"),a.btnBreeds.classList.remove("active-btn"),a.btnVoting.classList.toggle("active-btn"),a.backgroundMain.classList.toggle("container-main_voting"),a.main.classList.toggle("voting"),a.main.classList.remove("first"),!a.main.classList.contains("voting"))return c();var i;a.backgroundMain.innerHTML="",i=e,a.main.innerHTML=`\n    <div class="main-container_voting">\n     \n\n            <div class="main-container_voting-form">\n                    <form class="search-form js-search-form" id="search-form">\n                        <input\n                        type="text"\n                        name="search"\n                        autocomplete="off"\n                        class="search-form__field js-search-input"\n                        placeholder="Search for breeds by name"\n                        /> \n                        <button\n                            class="voting-button_search"\n                            type="button"\n                            data-search="voting_main"\n                            id="voting_search">\n                            <svg class="icon-search " twidth="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">\n                                <path class="icon-search_path search-form_icons-path" d="M19.3613 18.2168L14.6012 13.2662C15.8251 11.8113 16.4957 9.98069 16.4957 8.07499C16.4957 3.62251 12.8732 0 8.4207 0C3.96821 0 0.345703 3.62251 0.345703 8.07499C0.345703 12.5275 3.96821 16.15 8.4207 16.15C10.0922 16.15 11.6851 15.6458 13.047 14.6888L17.8432 19.677C18.0436 19.8852 18.3133 20 18.6022 20C18.8757 20 19.1352 19.8957 19.3321 19.7061C19.7506 19.3034 19.764 18.6357 19.3613 18.2168ZM8.4207 2.10652C11.7118 2.10652 14.3892 4.78391 14.3892 8.07499C14.3892 11.3661 11.7118 14.0435 8.4207 14.0435C5.12961 14.0435 2.45222 11.3661 2.45222 8.07499C2.45222 4.78391 5.12961 2.10652 8.4207 2.10652Z" fill="#FF868E"/>\n                            </svg>  \n                        </button>\n                    </form>\n\n                    <button type="button" class="voting-button_links search-form_button">\n                        <svg class="icon-smile " width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">\n                            <path class="icon-smile_path search-form_icons-path"fill-rule="evenodd" clip-rule="evenodd" d="M0 15C0 6.71573 6.71573 0 15 0C23.2843 0 30 6.71573 30 15C30 23.2843 23.2843 30 15 30C6.71573 30 0 23.2843 0 15ZM15 2C7.8203 2 2 7.8203 2 15C2 22.1797 7.8203 28 15 28C22.1797 28 28 22.1797 28 15C28 7.8203 22.1797 2 15 2ZM10 12H8V10H10V12ZM22 12H20V10H22V12ZM9.2 16.6L9.8 17.4C12.4 20.8667 17.6 20.8667 20.2 17.4L20.8 16.6L22.4 17.8L21.8 18.6C18.4 23.1333 11.6 23.1333 8.2 18.6L7.6 17.8L9.2 16.6Z" fill="#FF868E"/>\n                        </svg>\n                    </button>\n                    \n                    <button type="button" class="voting-button_links search-form_button">\n                        <svg class="icon-heart " width="30" height="26" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">\n                                <path class="icon-heart_path search-form_icons-path"fill-rule="evenodd" clip-rule="evenodd" d="M5.38071 1.33333C3.14541 1.33333 1.33333 3.14541 1.33333 5.38071C1.33333 6.45414 1.75975 7.48361 2.51878 8.24264L10 15.7239L17.4812 8.24264C18.2402 7.48361 18.6667 6.45414 18.6667 5.38071C18.6667 3.14541 16.8546 1.33333 14.6193 1.33333C13.5459 1.33333 12.5164 1.75975 11.7574 2.51878L10.4714 3.80474C10.2111 4.06509 9.78895 4.06509 9.5286 3.80474L8.24264 2.51878C7.48361 1.75975 6.45414 1.33333 5.38071 1.33333ZM0 5.38071C0 2.40903 2.40903 0 5.38071 0C6.80777 0 8.17637 0.566895 9.18545 1.57597L10 2.39052L10.8146 1.57597C11.8236 0.566894 13.1922 0 14.6193 0C17.591 0 20 2.40903 20 5.38071C20 6.80777 19.4331 8.17637 18.424 9.18545L10.4714 17.1381C10.2111 17.3984 9.78895 17.3984 9.5286 17.1381L1.57597 9.18545C0.566893 8.17637 0 6.80777 0 5.38071Z" fill="#FF868E"/>\n                            </svg>\n                        </button>\n                        \n                        <button type="button" class="voting-button_links search-form_button">\n                            <svg class="icon-sad " width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">\n                                <path class="icon-sad_path search-form_icons-path"fill-rule="evenodd" clip-rule="evenodd" d="M0 15C0 6.71573 6.71573 0 15 0C23.2843 0 30 6.71573 30 15C30 23.2843 23.2843 30 15 30C6.71573 30 0 23.2843 0 15ZM15 2C7.8203 2 2 7.8203 2 15C2 22.1797 7.8203 28 15 28C22.1797 28 28 22.1797 28 15C28 7.8203 22.1797 2 15 2ZM10 12H8V10H10V12ZM22 12H20V10H22V12ZM7.6 20.2L8.2 19.4C11.6 14.8667 18.4 14.8667 21.8 19.4L22.4 20.2L20.8 21.4L20.2 20.6C17.6 17.1333 12.4 17.1333 9.8 20.6L9.2 21.4L7.6 20.2Z" fill="#FF868E"/>\n                            </svg>\n                        </button>\n                    </div>  \n\n\n                    <div class="main-container_voting-data">\n                            <div class="voting-button_wrapper">\n                                <button\n                                    class="voting-button_back"\n                                    type="button"\n                                    data-back="back"\n                                    id="back"\n                                    >${t(l)}</button>\n                            <button\n                                    class="voting-button_right"\n                                    type="button"\n                                    data-voting="voting_main"\n                                    id="voting_main"\n                                    >VOTING</button>\n                            </div>\n\n                            <div class="voting-image_card">\n                                <img class="random-cat"\n                                        src="${i}" \n                                        alt="picture" \n                                        width="640px" \n                                        height="360px" \n                                        srcset="">\n\n\n                                <div class="voting-image_button-wrapper">\n                                    <button type="button" class="voting-image_button-smile">\n                                        <svg class="icon-smile" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">\n                                            <path class="voting-image_icons-path voting-icon_smile-path" fill-rule="evenodd" clip-rule="evenodd" d="M0 15C0 6.71573 6.71573 0 15 0C23.2843 0 30 6.71573 30 15C30 23.2843 23.2843 30 15 30C6.71573 30 0 23.2843 0 15ZM15 2C7.8203 2 2 7.8203 2 15C2 22.1797 7.8203 28 15 28C22.1797 28 28 22.1797 28 15C28 7.8203 22.1797 2 15 2ZM10 12H8V10H10V12ZM22 12H20V10H22V12ZM9.2 16.6L9.8 17.4C12.4 20.8667 17.6 20.8667 20.2 17.4L20.8 16.6L22.4 17.8L21.8 18.6C18.4 23.1333 11.6 23.1333 8.2 18.6L7.6 17.8L9.2 16.6Z" fill="#FF868E"/>\n                                        </svg>\n                                    </button>\n                                    \n                                    <button type="button" class="voting-image_button-heart">\n                                        <svg class="icon-heart" width="30" height="26" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">\n                                            <path class="voting-image_icons-path voting-icon_heart-path" fill-rule="evenodd" clip-rule="evenodd" d="M5.38071 1.33333C3.14541 1.33333 1.33333 3.14541 1.33333 5.38071C1.33333 6.45414 1.75975 7.48361 2.51878 8.24264L10 15.7239L17.4812 8.24264C18.2402 7.48361 18.6667 6.45414 18.6667 5.38071C18.6667 3.14541 16.8546 1.33333 14.6193 1.33333C13.5459 1.33333 12.5164 1.75975 11.7574 2.51878L10.4714 3.80474C10.2111 4.06509 9.78895 4.06509 9.5286 3.80474L8.24264 2.51878C7.48361 1.75975 6.45414 1.33333 5.38071 1.33333ZM0 5.38071C0 2.40903 2.40903 0 5.38071 0C6.80777 0 8.17637 0.566895 9.18545 1.57597L10 2.39052L10.8146 1.57597C11.8236 0.566894 13.1922 0 14.6193 0C17.591 0 20 2.40903 20 5.38071C20 6.80777 19.4331 8.17637 18.424 9.18545L10.4714 17.1381C10.2111 17.3984 9.78895 17.3984 9.5286 17.1381L1.57597 9.18545C0.566893 8.17637 0 6.80777 0 5.38071Z" fill="#FF868E"/>\n                                        </svg>\n                                    </button>\n                                    \n                                    <button type="button" class="voting-image_button-sad">\n                                        <svg class="icon-sad" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">\n                                            <path class="voting-image_icons-path voting-icon_sad-path" fill-rule="evenodd" clip-rule="evenodd" d="M0 15C0 6.71573 6.71573 0 15 0C23.2843 0 30 6.71573 30 15C30 23.2843 23.2843 30 15 30C6.71573 30 0 23.2843 0 15ZM15 2C7.8203 2 2 7.8203 2 15C2 22.1797 7.8203 28 15 28C22.1797 28 28 22.1797 28 15C28 7.8203 22.1797 2 15 2ZM10 12H8V10H10V12ZM22 12H20V10H22V12ZM7.6 20.2L8.2 19.4C11.6 14.8667 18.4 14.8667 21.8 19.4L22.4 20.2L20.8 21.4L20.2 20.6C17.6 17.1333 12.4 17.1333 9.8 20.6L9.2 21.4L7.6 20.2Z" fill="#FF868E"/>\n                                        </svg>\n                                    </button>\n                                </div>\n                            </div>\n                            <div class="voting-data_list-wrapper">\n                                <ul class="main-container_voting-data_list">\n                                    <li class="main-container_voting-data_list-item">\n                                        <div>22:40</div>\n                                        <p>Lorem ipsum</p>\n                                        <button type="button">Button</button>\n                                    </li>\n                                    <li class="main-container_voting-data_list-item">\n                                        <div>22:40</div>\n                                        <p>Lorem ipsum</p>\n                                        <button type="button">Button</button>\n                                    </li>\n                                    <li class="main-container_voting-data_list-item">\n                                        <div>22:40</div>\n                                        <p>Lorem ipsum</p>\n                                        <button type="button">Button</button>\n                                    </li>\n                                    <li class="main-container_voting-data_list-item">\n                                        <div>22:40</div>\n                                        <p>Lorem ipsum</p>\n                                        <button type="button">Button</button>\n                                    </li>\n                                </ul>\n                            </div>\n\n                            \n                        </div>\n\n                        \n            </div>\n    `,console.log(e)}))})),a.btnBreeds.addEventListener("click",(function(n){if(n.preventDefault(),a.main.classList.remove("first"),a.main.classList.remove("voting"),a.main.classList.toggle("breeds"),a.btnVoting.classList.remove("active-btn"),a.btnBreeds.classList.toggle("active-btn"),!a.main.classList.contains("breeds"))return c();a.backgroundMain.innerHTML="",a.main.innerHTML=`\n    <div class="main-container_breeds">\n     \n\n            <div class="main-container_voting-form">\n                    <form class="search-form js-search-form" id="search-form">\n                        <input\n                        type="text"\n                        name="search"\n                        autocomplete="off"\n                        class="search-form__field js-search-input"\n                        placeholder="Search for breeds by name"\n                        /> \n                        <button\n                            class="voting-button_search"\n                            type="button"\n                            data-search="voting_main"\n                            id="voting_search">\n                            <svg class="icon-search " twidth="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">\n                                <path class="icon-search_path search-form_icons-path" d="M19.3613 18.2168L14.6012 13.2662C15.8251 11.8113 16.4957 9.98069 16.4957 8.07499C16.4957 3.62251 12.8732 0 8.4207 0C3.96821 0 0.345703 3.62251 0.345703 8.07499C0.345703 12.5275 3.96821 16.15 8.4207 16.15C10.0922 16.15 11.6851 15.6458 13.047 14.6888L17.8432 19.677C18.0436 19.8852 18.3133 20 18.6022 20C18.8757 20 19.1352 19.8957 19.3321 19.7061C19.7506 19.3034 19.764 18.6357 19.3613 18.2168ZM8.4207 2.10652C11.7118 2.10652 14.3892 4.78391 14.3892 8.07499C14.3892 11.3661 11.7118 14.0435 8.4207 14.0435C5.12961 14.0435 2.45222 11.3661 2.45222 8.07499C2.45222 4.78391 5.12961 2.10652 8.4207 2.10652Z" fill="#FF868E"/>\n                            </svg>  \n                        </button>\n                    </form>\n\n                    <button type="button" class="voting-button_links search-form_button">\n                        <svg class="icon-smile " width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">\n                            <path class="icon-smile_path search-form_icons-path"fill-rule="evenodd" clip-rule="evenodd" d="M0 15C0 6.71573 6.71573 0 15 0C23.2843 0 30 6.71573 30 15C30 23.2843 23.2843 30 15 30C6.71573 30 0 23.2843 0 15ZM15 2C7.8203 2 2 7.8203 2 15C2 22.1797 7.8203 28 15 28C22.1797 28 28 22.1797 28 15C28 7.8203 22.1797 2 15 2ZM10 12H8V10H10V12ZM22 12H20V10H22V12ZM9.2 16.6L9.8 17.4C12.4 20.8667 17.6 20.8667 20.2 17.4L20.8 16.6L22.4 17.8L21.8 18.6C18.4 23.1333 11.6 23.1333 8.2 18.6L7.6 17.8L9.2 16.6Z" fill="#FF868E"/>\n                        </svg>\n                    </button>\n                    \n                    <button type="button" class="voting-button_links search-form_button">\n                        <svg class="icon-heart " width="30" height="26" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">\n                                <path class="icon-heart_path search-form_icons-path"fill-rule="evenodd" clip-rule="evenodd" d="M5.38071 1.33333C3.14541 1.33333 1.33333 3.14541 1.33333 5.38071C1.33333 6.45414 1.75975 7.48361 2.51878 8.24264L10 15.7239L17.4812 8.24264C18.2402 7.48361 18.6667 6.45414 18.6667 5.38071C18.6667 3.14541 16.8546 1.33333 14.6193 1.33333C13.5459 1.33333 12.5164 1.75975 11.7574 2.51878L10.4714 3.80474C10.2111 4.06509 9.78895 4.06509 9.5286 3.80474L8.24264 2.51878C7.48361 1.75975 6.45414 1.33333 5.38071 1.33333ZM0 5.38071C0 2.40903 2.40903 0 5.38071 0C6.80777 0 8.17637 0.566895 9.18545 1.57597L10 2.39052L10.8146 1.57597C11.8236 0.566894 13.1922 0 14.6193 0C17.591 0 20 2.40903 20 5.38071C20 6.80777 19.4331 8.17637 18.424 9.18545L10.4714 17.1381C10.2111 17.3984 9.78895 17.3984 9.5286 17.1381L1.57597 9.18545C0.566893 8.17637 0 6.80777 0 5.38071Z" fill="#FF868E"/>\n                            </svg>\n                        </button>\n                        \n                        <button type="button" class="voting-button_links search-form_button">\n                            <svg class="icon-sad " width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">\n                                <path class="icon-sad_path search-form_icons-path"fill-rule="evenodd" clip-rule="evenodd" d="M0 15C0 6.71573 6.71573 0 15 0C23.2843 0 30 6.71573 30 15C30 23.2843 23.2843 30 15 30C6.71573 30 0 23.2843 0 15ZM15 2C7.8203 2 2 7.8203 2 15C2 22.1797 7.8203 28 15 28C22.1797 28 28 22.1797 28 15C28 7.8203 22.1797 2 15 2ZM10 12H8V10H10V12ZM22 12H20V10H22V12ZM7.6 20.2L8.2 19.4C11.6 14.8667 18.4 14.8667 21.8 19.4L22.4 20.2L20.8 21.4L20.2 20.6C17.6 17.1333 12.4 17.1333 9.8 20.6L9.2 21.4L7.6 20.2Z" fill="#FF868E"/>\n                            </svg>\n                        </button>\n                    </div>  \n\n                    <div class="main-container_breeds-data">\n                    \n                            <div class="breeds-button_wrapper">\n                                <button\n                                    class="breeds-button_back"\n                                    type="button"\n                                    data-back="back"\n                                    id="back">${t(l)}\n                                </button>\n                                \n                                <button\n                                    class="breeds-button_right"\n                                    type="button"\n                                    data-breeds="breeds_main"\n                                    id="breeds_main">BREEDS\n                                </button>\n\n                                <button type="button" id="breeds_list">All breeds</button>\n                                <button type="button" id="limit">Limit: 10</button>\n                                <button type="button" id="alphabet">${t('<svg width="19" height="22" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4 .213a.628.628 0 0 1 .943 0l4 4.36L8 5.6 5.138 2.482V21.8H3.805V2.481L.943 5.601 0 4.572l4-4.36Zm11.138 1.24c-1.104 0-2 .976-2 2.18v2.18h4v-2.18c0-1.204-.895-2.18-2-2.18Zm2 5.814v2.906h1.333v-6.54C18.471 1.627 16.98 0 15.138 0c-1.84 0-3.333 1.627-3.333 3.633v6.54h1.333V7.267h4Zm-5.333 4.36h4c1.473 0 2.666 1.301 2.666 2.906 0 .869-.349 1.648-.902 2.18.553.533.902 1.312.902 2.18 0 1.606-1.194 2.907-2.666 2.907h-4V11.627Zm4 4.36c.736 0 1.333-.651 1.333-1.454 0-.802-.597-1.453-1.333-1.453h-2.667v2.907h2.667Zm-2.667 1.453h2.667c.736 0 1.333.65 1.333 1.453s-.597 1.454-1.333 1.454h-2.667V17.44Z" fill="#8C8C8C"/></svg>')}</button>\n                                <button type="button" id="reverse">${t('<svg width="19" height="22" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.805 19.319V0h1.333v19.319L8 16.199l.943 1.028-4 4.36a.64.64 0 0 1-.472.213.64.64 0 0 1-.471-.213l-4-4.36.943-1.027 2.862 3.119ZM15.138 1.453c-1.104 0-2 .976-2 2.18v2.18h4v-2.18c0-1.204-.895-2.18-2-2.18Zm2 5.814v2.906h1.333v-6.54C18.471 1.627 16.98 0 15.138 0c-1.84 0-3.333 1.627-3.333 3.633v6.54h1.333V7.267h4Zm-5.333 4.36h4c1.473 0 2.666 1.301 2.666 2.906 0 .869-.349 1.648-.902 2.18.553.533.902 1.312.902 2.18 0 1.606-1.194 2.907-2.666 2.907h-4V11.627Zm4 4.36c.736 0 1.333-.651 1.333-1.454 0-.802-.597-1.453-1.333-1.453h-2.667v2.907h2.667Zm-2.667 1.453h2.667c.736 0 1.333.65 1.333 1.453s-.597 1.454-1.333 1.454h-2.667V17.44Z" fill="#8C8C8C"/></svg>')}</button>\n\n                                \n                            </div>\n\n                            <div class="breeds-gallery">\n                                \n                            </div>        \n                            <div class="pagination-button_wrapper">\n                                <button type="button-bottom" id="prev_btn">PREV</button>\n                                <button type="button-bottom" id="next_btn">NEXT</button>\n                            </div>\n                            \n                        \n                    </div>\n\n                            \n    `;const e=document.querySelector(".breeds-gallery");e.addEventListener("click",u),d.fetchAllBreeds().then((n=>{const t=n.filter((n=>void 0!==n.image)),i=t.slice(0,10),o=t.slice(10,20),s=t.slice(20,30),a=t.slice(30,40),r=t.slice(40,50),l=t.slice(50,60),c=t.slice(60,64);g.push(i,o,s,a,r,l,c),console.log(t);const d=g[0].map(((n,t)=>`\n            <div class="box cat-breeds_image${t}">\n                    \n                    <img \n                    src=${JSON.stringify(n.image.url)} \n                    alt="${n.name}" \n                    id="${n.id}"  \n\n                    loading="lazy" \n                    class="img image${t}"\n                    width ="200px"\n                    />       \n                    \n            </div>\n        `)).join("");e.insertAdjacentHTML("afterbegin",d)}));const i=document.querySelector("#prev_btn"),o=document.querySelector("#next_btn");i.addEventListener("click",(function(n){if(h<1)return void console.log("This is the begining");h-=1,console.log(h);const t=g[h].map(((n,t)=>`\n            <div class="box cat-breeds_image${t}">\n            \n                    <img \n                            src=${JSON.stringify(n.image.url)} \n                            alt="${n.name}" \n                            id="${n.id}"  \n\n                            loading="lazy" \n                            class="img image${t}"\n                            width ="200px"\n                    />       \n                       \n             </div>\n        `)).join("");e.innerHTML=t})),o.addEventListener("click",(function(n){if(h>=6)return void console.log("This is the end");h+=1,console.log(h);const t=g[h].map(((n,t)=>`\n            <div class="box cat-breeds_image${t}">\n            \n                    <img \n                            src=${JSON.stringify(n.image.url)} \n                            alt="${n.name}" \n                            id="${n.id}"  \n\n                            loading="lazy" \n                            class="img image${t}"\n                            width ="200px"\n                    />       \n                       \n             </div>\n        `)).join("");e.innerHTML=t}))})),a.logo.addEventListener("click",c);const d=new class{fetchRandomCat(){return fetch("https://api.thecatapi.com/v1/images/search?api_key=984907ed-4e7f-4546-9c87-f9d0754e6fea").then((n=>n.json())).then((n=>(this.page+=1,n)))}pagination(){const n=`https://api.thecatapi.com/v1/images/search?limit=${this.limit}&page=${this.page}&breed_ids=${this.breedId}&order=DESC&mime_types=${this.type}`;return fetch(n).then((n=>n.json())).then((n=>(this.page+=1,n)))}fetchAllBreeds(){return fetch("https://api.thecatapi.com/v1/breeds").then((n=>n.json())).then((n=>(this.page+=1,n)))}fetchAllBreedsWithPagination(){const n=`https://api.thecatapi.com/v1/breeds?limit=${this.limit}&page=${this.page}`;return fetch(n).then((n=>n.json())).then((n=>(this.page+=1,n)))}fetchCatById(){const n=`https://api.thecatapi.com/v1/images/search?breed_ids=${this.breedId}`;return fetch(n).then((n=>n.json())).then((n=>n))}fetchAllFotos(){return fetch("https://api.thecatapi.com/v1/images/search").then((n=>n.json())).then((n=>n))}resetPage(){this.page=1}get id(){return this.breedId}set id(n){this.breedId=n}constructor(){this.breedId="asho",this.page=1,this.limit=10,this.type="jpg,png,gif"}};let h=0,g=[];function u(n){"IMG"===n.target.nodeName&&(d.id=n.target.id,d.pagination().then((n=>{const t=n[0].breeds[0].temperament,e=n[0].breeds[0].origin,i=n[0].breeds[0].weight.metric,o=(n[0].breeds[0].life_span,"kg");console.log(t,e,i,o),console.log(n)})),console.log(n.target.id))}window.onload=function(){};
//# sourceMappingURL=index.2ef0641d.js.map