function n(n,t,e,i){Object.defineProperty(n,t,{get:e,set:i,enumerable:!0,configurable:!0})}function t(n){return n&&n.__esModule?n.default:n}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},o={},a=e.parcelRequire0618;null==a&&((a=function(n){if(n in i)return i[n].exports;if(n in o){var t=o[n];delete o[n];var e={id:n,exports:{}};return i[n]=e,t.call(e.exports,e,e.exports),e.exports}var a=new Error("Cannot find module '"+n+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(n,t){o[n]=t},e.parcelRequire0618=a),a.register("kyEFX",(function(t,e){var i,o;n(t.exports,"register",(function(){return i}),(function(n){return i=n})),n(t.exports,"resolve",(function(){return o}),(function(n){return o=n}));var a={};i=function(n){for(var t=Object.keys(n),e=0;e<t.length;e++)a[t[e]]=n[t[e]]},o=function(n){var t=a[n];if(null==t)throw new Error("Could not resolve bundle with id "+n);return t}})),a("kyEFX").register(JSON.parse('{"5ZPII":"index.4a55a537.js","6v6mg":"girl-and-pet.cb465363.png","5UbS1":"index.b31b5de5.css"}'));var r;r=new URL(a("kyEFX").resolve("6v6mg"),import.meta.url).toString();var l;l='<svg class="icon-left" width="12" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"><path class="icon-left_path" d="m.71 10.99 8.6 8.6a1.4 1.4 0 1 0 1.98-1.98L3.681 10l7.61-7.609A1.4 1.4 0 0 0 9.308.411L.71 9.01a1.396 1.396 0 0 0 0 1.98Z" fill="#FF868E"/></svg>',console.log(t(r)),console.log(t(l));const s={btnVoting:document.querySelector('[data-search="voting"]'),btnBreeds:document.querySelector('[data-search="breeds"]'),btnGallery:document.querySelector('[data-search="gallery"]'),main:document.querySelector(".container-main"),backgroundMain:document.querySelector(".container-main_background"),input:document.querySelector(".search-form__field"),logo:document.querySelector(".nav-logo"),btnBack:document.querySelector('[data-search="voting"]'),searchBtn:document.querySelector(".voting-button_search"),votingInput:document.querySelector(".voting-form_container")};function c(){s.btnVoting.classList.remove("active-btn"),s.votingInput.classList.add("visually-hidden"),s.main.classList.remove("voting"),s.backgroundMain.classList.remove("container-main_voting"),s.backgroundMain.innerHTML=`\n    <img \n        src="${t(r)}" \n        alt="girl-and-pet" \n        width="775">\n        `}s.btnVoting.addEventListener("click",(function(n){if(n.preventDefault(),s.btnVoting.classList.toggle("active-btn"),s.votingInput.classList.toggle("visually-hidden"),s.main.classList.toggle("voting"),s.backgroundMain.classList.toggle("container-main_voting"),!s.main.classList.contains("voting"))return c();s.backgroundMain.innerHTML="",s.backgroundMain.innerHTML=`\n                <div class="voting-container">\n                    <div class="voting-button_wrapper">\n                        <button\n                            class="voting-button_back"\n                            type="button"\n                            data-back="back"\n                            id="back"\n                            >${t(l)}</button>\n                    <button\n                            class="voting-button_right"\n                            type="button"\n                            data-voting="voting_main"\n                            id="voting_main"\n                            >VOTING</button>\n                    </div>\n\n                    <div class="voting-image_card">\n                        <img src="" alt="" srcset="">\n\n                        <div class="voting-image_button-wrapper">\n                            <button type="button" class="voting-image_button-smile">\n                                <svg class="icon-smile" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">\n                                    <path class="voting-image_icons-path voting-icon_smile-path" fill-rule="evenodd" clip-rule="evenodd" d="M0 15C0 6.71573 6.71573 0 15 0C23.2843 0 30 6.71573 30 15C30 23.2843 23.2843 30 15 30C6.71573 30 0 23.2843 0 15ZM15 2C7.8203 2 2 7.8203 2 15C2 22.1797 7.8203 28 15 28C22.1797 28 28 22.1797 28 15C28 7.8203 22.1797 2 15 2ZM10 12H8V10H10V12ZM22 12H20V10H22V12ZM9.2 16.6L9.8 17.4C12.4 20.8667 17.6 20.8667 20.2 17.4L20.8 16.6L22.4 17.8L21.8 18.6C18.4 23.1333 11.6 23.1333 8.2 18.6L7.6 17.8L9.2 16.6Z" fill="#FF868E"/>\n                                </svg>\n                            </button>\n                            \n                            <button type="button" class="voting-image_button-heart">\n                                <svg class="icon-heart" width="30" height="26" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">\n                                    <path class="voting-image_icons-path voting-icon_heart-path" fill-rule="evenodd" clip-rule="evenodd" d="M5.38071 1.33333C3.14541 1.33333 1.33333 3.14541 1.33333 5.38071C1.33333 6.45414 1.75975 7.48361 2.51878 8.24264L10 15.7239L17.4812 8.24264C18.2402 7.48361 18.6667 6.45414 18.6667 5.38071C18.6667 3.14541 16.8546 1.33333 14.6193 1.33333C13.5459 1.33333 12.5164 1.75975 11.7574 2.51878L10.4714 3.80474C10.2111 4.06509 9.78895 4.06509 9.5286 3.80474L8.24264 2.51878C7.48361 1.75975 6.45414 1.33333 5.38071 1.33333ZM0 5.38071C0 2.40903 2.40903 0 5.38071 0C6.80777 0 8.17637 0.566895 9.18545 1.57597L10 2.39052L10.8146 1.57597C11.8236 0.566894 13.1922 0 14.6193 0C17.591 0 20 2.40903 20 5.38071C20 6.80777 19.4331 8.17637 18.424 9.18545L10.4714 17.1381C10.2111 17.3984 9.78895 17.3984 9.5286 17.1381L1.57597 9.18545C0.566893 8.17637 0 6.80777 0 5.38071Z" fill="#FF868E"/>\n                                </svg>\n                            </button>\n                            \n                            <button type="button" class="voting-image_button-sad">\n                                <svg class="icon-sad" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">\n                                    <path class="voting-image_icons-path voting-icon_sad-path" fill-rule="evenodd" clip-rule="evenodd" d="M0 15C0 6.71573 6.71573 0 15 0C23.2843 0 30 6.71573 30 15C30 23.2843 23.2843 30 15 30C6.71573 30 0 23.2843 0 15ZM15 2C7.8203 2 2 7.8203 2 15C2 22.1797 7.8203 28 15 28C22.1797 28 28 22.1797 28 15C28 7.8203 22.1797 2 15 2ZM10 12H8V10H10V12ZM22 12H20V10H22V12ZM7.6 20.2L8.2 19.4C11.6 14.8667 18.4 14.8667 21.8 19.4L22.4 20.2L20.8 21.4L20.2 20.6C17.6 17.1333 12.4 17.1333 9.8 20.6L9.2 21.4L7.6 20.2Z" fill="#FF868E"/>\n                                </svg>\n                            </button>\n                        </div>\n                    </div>\n\n                    \n                 </div>\n\n                <div class="voting-container_list-wrapper">\n                    <ul class="voting-container_list">\n                        <li class="voting-container_list-item">\n                            <div>22:40</div>\n                            <p>Lorem ipsum</p>\n                            <button type="button">Button</button>\n                        </li>\n                        <li class="voting-container_list-item">\n                            <div>22:40</div>\n                            <p>Lorem ipsum</p>\n                            <button type="button">Button</button>\n                        </li>\n                        <li class="voting-container_list-item">\n                            <div>22:40</div>\n                            <p>Lorem ipsum</p>\n                            <button type="button">Button</button>\n                        </li>\n                        <li class="voting-container_list-item">\n                            <div>22:40</div>\n                            <p>Lorem ipsum</p>\n                            <button type="button">Button</button>\n                        </li>\n                    </ul>\n                </div>\n\n    `})),s.logo.addEventListener("click",c);
//# sourceMappingURL=index.4a55a537.js.map