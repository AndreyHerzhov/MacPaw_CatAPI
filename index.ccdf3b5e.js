const n={btnVoting:document.querySelector('[data-search="voting"]'),btnBreeds:document.querySelector('[data-search="breeds"]'),btnGallery:document.querySelector('[data-search="gallery"]'),main:document.querySelector(".container-main"),backgroundMain:document.querySelector(".container-main_background"),input:document.querySelector(".search-form__field"),logo:document.querySelector(".nav-logo"),btnBack:document.querySelector('[data-search="voting"]')};function t(){n.btnVoting.classList.remove("active-btn"),n.input.classList.add("visually-hidden"),n.main.classList.remove("voting"),n.backgroundMain.classList.remove("container-main_voting"),n.backgroundMain.innerHTML='\n    <img \n        src="/girl-and-pet.93026548.png" \n        alt="girl-and-pet" \n        width="775">\n        '}n.btnVoting.addEventListener("click",(function(e){if(e.preventDefault(),n.btnVoting.classList.toggle("active-btn"),n.input.classList.toggle("visually-hidden"),n.main.classList.toggle("voting"),n.backgroundMain.classList.toggle("container-main_voting"),!n.main.classList.contains("voting"))return t();n.backgroundMain.innerHTML="",n.backgroundMain.innerHTML='\n                <div class="voting-container">\n                    <div class="voting-button_wrapper">\n                        <button\n                            class="voting_button"\n                            type="button"\n                            data-search="back"\n                            id="back"\n                            ></button>\n                    <button\n                            class="voting_button"\n                            type="button"\n                            data-search="voting_main"\n                            id="voting_main"\n                            >VOTING</button>\n                    </div>\n\n                    <div class="voting-image_card">\n                        <img src="" alt="" srcset="">\n                    </div>\n                 </div>\n\n    '})),n.logo.addEventListener("click",t);
//# sourceMappingURL=index.ccdf3b5e.js.map
