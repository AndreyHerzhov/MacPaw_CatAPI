import { refs } from './refs'
import { createVotingMarkup, createBreedsMarkup, createMainMarkup,createGalaryMarkup, createBreedsGaleryMarkup, createBreedFullInfoMarkup } from './render_markup'
import CatApiService from "./catApiService";
import Notiflix from 'notiflix';
import fav_user_log from 'bundle-text:../images/svg/fav_user_log.svg'
import like_user_log from 'bundle-text:../images/svg/like_user_log.svg'
import dislike_user_log from 'bundle-text:../images/svg/dislike_user_log.svg'
import iconLeft from 'bundle-text:../images/svg/left.svg'
 

refs.btnVoting.addEventListener('click', openVotingPgae)
refs.btnBreeds.addEventListener('click', openBreedsPage)
refs.logo.addEventListener('click', createMainMarkup)
refs.btnGallery.addEventListener('click', openGallaryPage)

const catApiService = new CatApiService()
let breedPhotosArr = []
let initianlPage = 0
let initialIndex = 0
let breedsArr = []
let allBreeds = []
let start = 0;
let end = 10;
const numberOfBreeds = 67
let photoIndex = 0
let currentLimit = 10
const savedCatsArr = []
let dataToAdd =[]
const objLikes = {
    src: '',
    id: 0,
    hours: 0,
    minutes: 0,
    date: 0
}
const objFav = {
    src: '',
    id: 0,
    hours: 0,
    minutes: 0,
    date: 0
}
const objDisLikes = {
    src: '',
    id: 0,
    hours: 0,
    minutes: 0,
    date: 0
}

const breedInfo = {
    temperament: '',
    origin: '', 
    weight: 0,
    life_span: 0
}

const breedInfoArr = []

const userActionLog = []

 

window.onload = function() {
    catApiService.limit = 20
    // console.log(catApiService.limit) 
    // catApiService.fetchRandomCat().then(data => console.log(data))
    // catApiService.fetchAllBreeds().then(data => console.log(data))
    // catApiService.pagination().then(data => console.log(data))
    // catApiService.fetchAllFotos().then(data => console.log(data))
    // catApiService.fetchCatById().then(data => console.log(data))
    // catApiService.fetchBreedsImg().then(data => console.log(data)) 

    
  };




  const saveInfoInLocalStorage = (key, value) => {
    try {
      const catObj = JSON.stringify(value);
      localStorage.setItem(key, catObj);
    } catch (error) {
      console.error("Set state error: ", error.message);
    }
  };

  const readInfoFromLocalStorage = key => {
    try {
      const serializedState = localStorage.getItem(key);
      return serializedState === null ? undefined : JSON.parse(serializedState);
    } catch (error) {
      console.error("Get state error: ", error.message);
    }
  };

  function showFullInfoAboutCat(id) {
    const savedFullInfo = readInfoFromLocalStorage('fullInfoAboutBreed')
    const thisCatFullInfo = savedFullInfo.filter(el => el.id === `${id}`)
    console.log(thisCatFullInfo)
    
    const temperament = thisCatFullInfo[0].temperament;
    const origin = thisCatFullInfo[0].origin
    const weight =   thisCatFullInfo[0].weight.metric  
    const life =  thisCatFullInfo[0].life_span 
    const breedName = thisCatFullInfo[0].name
    const breedId = thisCatFullInfo[0].id
    console.log(temperament,origin,weight,life,breedName,breedId)
  }

  function showFullInfoByBreedId(e) {
    photoIndex = 0
    if(!e.target.classList.contains('breed-name_button')){
        // console.log('Ето не бокс')
        // console.log(e.target)
        return

    }
    console.log(e.target.id)
  

    const mainBreedData = document.querySelector('.main-container_breeds-data')
    const clickedCatBreedId = e.target.id
    catApiService.id = clickedCatBreedId
    catApiService.limit = 100
    catApiService.pagination().then(data => {
        console.log(data)
        const img = data[0].url
        const savedFullInfo = readInfoFromLocalStorage('fullInfoAboutBreed')
        const thisCatFullInfo = savedFullInfo.filter(el => el.id === clickedCatBreedId)
        console.log(thisCatFullInfo)
        const dexription = thisCatFullInfo[0].description
        const temperament = thisCatFullInfo[0].temperament;
        const origin = thisCatFullInfo[0].origin
        const weight =   thisCatFullInfo[0].weight.metric  
        const life =  thisCatFullInfo[0].life_span 
        const breedName = thisCatFullInfo[0].name
        const breedId = thisCatFullInfo[0].id
        console.log(temperament,origin,weight,life,breedName,breedId) 

        data.map(el => breedPhotosArr.push(el.url))
        Notiflix.Notify.info(`There are ${breedPhotosArr.length} photos`)
        mainBreedData.innerHTML = ''
        const fullInfo = createBreedFullInfoMarkup(img,breedId,breedName,temperament,origin,weight,life) 
        mainBreedData.insertAdjacentHTML('afterbegin', fullInfo)

        const imgToChange = document.querySelector('.breeds_full-info-img')
        const nextFullBtn = document.querySelector('#next_full')
        const prevFullBtn = document.querySelector('#prev_full')

        nextFullBtn.addEventListener('click', showNextPhoto)
        prevFullBtn.addEventListener('click', showPrevPhoto)
        function showPrevPhoto(e) {
            if(photoIndex > 0){
                photoIndex -= 1
            } else if(photoIndex === 0){
                Notiflix.Notify.warning(`Press Arrow right`) 
        }
        imgToChange.src = breedPhotosArr[photoIndex]
        console.log(photoIndex)
    }
        function showNextPhoto(e) {
            if(photoIndex < breedPhotosArr.length - 1){
                photoIndex += 1
            } else if(photoIndex === breedPhotosArr.length - 1) {
                Notiflix.Notify.warning(`Press Arrow left`) 
            } 
            imgToChange.src = breedPhotosArr[photoIndex]
            console.log(photoIndex)
        }
    })
    

    }
 
function openVotingPgae(e) {
    e.preventDefault()
    photoIndex = 0
    breedPhotosArr = []
    Notiflix.Loading.hourglass();
    catApiService.fetchRandomCat().then(data => {
        Notiflix.Loading.remove();       
            const imgUrl = data[0].url
            const imgId = data[0].id
            refs.main.classList.remove('breeds')
            refs.btnBreeds.classList.remove('active-btn')
            refs.btnGallery.classList.remove('active-btn')
            refs.btnVoting.classList.toggle('active-btn')
            refs.backgroundMain.classList.toggle('container-main_voting')
            refs.main.classList.toggle('voting')
            refs.main.classList.remove('first')
            if(!refs.main.classList.contains('voting')) {
                return createMainMarkup()
            }  
            refs.backgroundMain.innerHTML = ''
            createVotingMarkup(imgUrl,imgId)
                        
          
            const likes = document.querySelector('.voting-image_button-smile')
            const favourites = document.querySelector('.voting-image_button-heart')
            const dislikes = document.querySelector('.voting-image_button-sad ')
            const actionLog = document.querySelector('.main-container_voting-data_list')
            const userLogFromLocalStorage = readInfoFromLocalStorage("user-log")
            const likesSaved = document.querySelector('#smile')
            const dislikesSaved = document.querySelector('#sad')
            const favSaved = document.querySelector('#heart')

            likesSaved.addEventListener('click', showAllLikedPhotos)
            favSaved.addEventListener('click', showAllFavdPhotos)
            dislikesSaved.addEventListener('click', showAllDisLikedPhotos)

            const mainContainer = document.querySelector('.main-container_voting-data')

            function showAllLikedPhotos() {
                
                console.log('Click like')
                mainContainer.innerHTML = ''

                const likeMarkup = `
                      
                            
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
                                    id="breeds_main">LIKES
                                </button>
              
                            </div>
                        <div class="breeds-gallery"></div>
                `
                mainContainer.insertAdjacentHTML('afterbegin',likeMarkup)
                const breedsGallery = document.querySelector('.breeds-gallery')

                const likedFotos = readInfoFromLocalStorage('likes')
                if(likedFotos) {
                    console.log(likedFotos)
                    const  likesPhotoMarkup =  likedFotos.map((el,index) =>   
            
                    `
                        <div class="box cat-breeds_image${index}">
                                
                                <img 
                                src=${el.src} 
                                alt="${el.id}" 
                                id="${el.id}"  
            
                                loading="lazy" 
                                class="img image${index}"
                                width ="200px"
                                />       
                                
                        </div>
                    `  
                    ).join('')
    
                    breedsGallery.insertAdjacentHTML('afterbegin',likesPhotoMarkup)
                } else {
                    return
                }
                
            }

            function showAllFavdPhotos() {
                console.log('Click like')
                mainContainer.innerHTML = ''

                const favMarkup = `
                      
                            
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
                                    id="breeds_main">FAVOURITES
                                </button>
              
                            </div>
                        <div class="breeds-gallery"></div>
                `
                mainContainer.insertAdjacentHTML('afterbegin',favMarkup)
                const breedsGallery = document.querySelector('.breeds-gallery')

                const favFotos = readInfoFromLocalStorage('favourites')
                if(favFotos) {
                    console.log(favFotos)
                    const  favPhotoMarkup =  favFotos.map((el,index) =>   
            
                    `
                        <div class="box cat-breeds_image${index}">
                                
                                <img 
                                src=${el.src} 
                                alt="${el.id}" 
                                id="${el.id}"  
            
                                loading="lazy" 
                                class="img image${index}"
                                width ="200px"
                                />       
                                
                        </div>
                    `  
                    ).join('')
    
                    breedsGallery.insertAdjacentHTML('afterbegin',favPhotoMarkup)
                } else {
                    return
                }
            }

            function showAllDisLikedPhotos() {
                console.log('Click like')
                mainContainer.innerHTML = ''

                const dislikeMarkup = `
                      
                            
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
                                    id="breeds_main">DISLIKES
                                </button>
              
                            </div>
                        <div class="breeds-gallery"></div>
                `
                mainContainer.insertAdjacentHTML('afterbegin',dislikeMarkup)
                const breedsGallery = document.querySelector('.breeds-gallery')

                const disLikedFotos = readInfoFromLocalStorage('dislike')
                if(disLikedFotos) {
                    console.log(disLikedFotos)
                    const  disLikesPhotoMarkup =  disLikedFotos.map((el,index) =>   
            
                    `
                        <div class="box cat-breeds_image${index}">
                                
                                <img 
                                src=${el.src} 
                                alt="${el.id}" 
                                id="${el.id}"  
            
                                loading="lazy" 
                                class="img image${index}"
                                width ="200px"
                                />       
                                
                        </div>
                    `  
                    ).join('')
    
                    breedsGallery.insertAdjacentHTML('afterbegin',disLikesPhotoMarkup)
                } else {
                    return
                }
            }

            if(userLogFromLocalStorage){
                // console.log(userLogFromLocalStorage)
                userLogFromLocalStorage.map(el => 
                    actionLog.insertAdjacentHTML('afterbegin', el))
            } else {
                console.log('empty')
            }
            
            
            
            likes.addEventListener('click', addToLikes)
            favourites.addEventListener('click', addToFavourites)
            dislikes.addEventListener('click', addToDislikes)
             
    })
  function addToLikes(e) {
    dataToAdd = []  
    let dateOfAdd = new Date().getTime()
    let timeHours = new Date().getHours();
    let timeMinutes = new Date().getMinutes()
    const savedLikes = readInfoFromLocalStorage("likes")
    const userLogFromLocalStorage = readInfoFromLocalStorage("user-log")
    
    if(!savedLikes) {
        objLikes.src = e.currentTarget.dataset.src
        objLikes.id = e.currentTarget.id
        objLikes.hours = timeHours
        objLikes.minutes = timeMinutes
        objLikes.date = dateOfAdd
        dataToAdd.push(objLikes)
        saveInfoInLocalStorage("likes", dataToAdd)  
    } else {
        objLikes.src = e.currentTarget.dataset.src
        objLikes.id = e.currentTarget.id
        objLikes.hours = timeHours
        objLikes.minutes = timeMinutes
        objLikes.date = dateOfAdd
        savedLikes.push(objLikes)
        saveInfoInLocalStorage("likes", savedLikes)  
    }
     
    Notiflix.Notify.success('Added to likes', {
        position: 'center-top',
    });
    const actioLogInfoMarkup = `
                    <li class="main-container_voting-data_list-item">
                            <div class="user-log_wrapper">
                                <button class="user-log_time" >${timeHours}:${timeMinutes}</button>
                                <p class="user-info_id" >Image ID: ${e.currentTarget.id}was added to Likes</p>
                            </div>
                            <button class="user-log_button" type="button">${like_user_log}</button>
                    </li>
    `
    if(!userLogFromLocalStorage){
        userActionLog.push(actioLogInfoMarkup)
        saveInfoInLocalStorage("user-log", userActionLog)
    } else {
        userLogFromLocalStorage.push(actioLogInfoMarkup)
        saveInfoInLocalStorage("user-log", userLogFromLocalStorage)
    }
    const actionLog = document.querySelector('.main-container_voting-data_list')
    actionLog.insertAdjacentHTML('afterbegin', actioLogInfoMarkup)
      
       
  }

  function addToFavourites(e) {
    dataToAdd = []
    let dateOfAdd = new Date().getTime()
    let timeHours = new Date().getHours();
    let timeMinutes = new Date().getMinutes()
    const savedFavourites =  readInfoFromLocalStorage("favourites")
    const userLogFromLocalStorage = readInfoFromLocalStorage("user-log")
    
    if(!savedFavourites) {
        objFav.src = e.currentTarget.dataset.src
        objFav.id = e.currentTarget.id
        objFav.hours = timeHours
        objFav.minutes = timeMinutes
        objFav.date = dateOfAdd
        dataToAdd.push(objFav)
        saveInfoInLocalStorage("favourites", dataToAdd)  
    } else {
        objFav.src = e.currentTarget.dataset.src
        objFav.id = e.currentTarget.id
        objFav.hours = timeHours
        objFav.minutes = timeMinutes
        objFav.date = dateOfAdd
        savedFavourites.push(objFav)
        saveInfoInLocalStorage("favourites", savedFavourites)  
        
    }
    Notiflix.Notify.success('Added to favourites',{
        position: 'center-top',
    });
    const actioLogInfoMarkup = `
                <li class="main-container_voting-data_list-item">
                        <div class="user-log_wrapper">
                            <button class="user-log_time" >${timeHours}:${timeMinutes}</button>
                            <p class="user-info_id" >Image ID: ${e.currentTarget.id}was added to favourites</p>
                        </div>
                        
                        <button class="user-log_button" type="button">${fav_user_log}</button>
                </li> 
    `
    if(!userLogFromLocalStorage){
    userActionLog.push(actioLogInfoMarkup)
    saveInfoInLocalStorage("user-log", userActionLog)
    } else {
    userLogFromLocalStorage.push(actioLogInfoMarkup)
    saveInfoInLocalStorage("user-log", userLogFromLocalStorage)
    }
    const actionLog = document.querySelector('.main-container_voting-data_list')
    actionLog.insertAdjacentHTML('afterbegin', actioLogInfoMarkup)
        
  }

  function addToDislikes(e) {
    dataToAdd = []
    let dateOfAdd = new Date().getTime()
    let timeHours = new Date().getHours();
    let timeMinutes = new Date().getMinutes()
    const savedDislikes =  readInfoFromLocalStorage("dislike")
    const userLogFromLocalStorage = readInfoFromLocalStorage("user-log")

    if(!savedDislikes) {
        objDisLikes.src = e.currentTarget.dataset.src
        objDisLikes.id = e.currentTarget.id
        objDisLikes.hours = timeHours
        objDisLikes.minutes = timeMinutes
        objDisLikes.date = dateOfAdd
        dataToAdd.push(objDisLikes)
        saveInfoInLocalStorage("dislike", dataToAdd)  
    } else {
        objDisLikes.src = e.currentTarget.dataset.src
        objDisLikes.id = e.currentTarget.id
        objDisLikes.hours = timeHours
        objDisLikes.minutes = timeMinutes
        objDisLikes.date = dateOfAdd
        savedDislikes.push(objDisLikes)
        saveInfoInLocalStorage("dislike", savedDislikes)  
        
    }
    Notiflix.Notify.success('Added to dislikes',{
        position: 'center-top',
    });
    const actioLogInfoMarkup = `
                    <li class="main-container_voting-data_list-item">
                            <div class="user-log_wrapper">
                                    <button class="user-log_time" >${timeHours}:${timeMinutes}</button>
                                    <p class="user-info_id" >Image ID: ${e.currentTarget.id}was added to dislike</p>
                            </div>
                                                
                            <button class="user-log_button" type="button">${dislike_user_log}</button>
                    </li>
    `
    if(!userLogFromLocalStorage){
        userActionLog.push(actioLogInfoMarkup)
        saveInfoInLocalStorage("user-log", userActionLog)
    } else {
        userLogFromLocalStorage.push(actioLogInfoMarkup)
        saveInfoInLocalStorage("user-log", userLogFromLocalStorage)
    }
    const actionLog = document.querySelector('.main-container_voting-data_list')
    actionLog.insertAdjacentHTML('afterbegin', actioLogInfoMarkup)
     
     
  }
  
    }

function openBreedsPage(e) {
    e.preventDefault()
    photoIndex = 0
    breedPhotosArr = []
    refs.main.classList.remove('first')
    refs.main.classList.remove('voting')
    refs.main.classList.remove('gallery')
    refs.main.classList.remove('gallery')
    refs.btnGallery.classList.remove('active-btn')
    refs.main.classList.toggle('breeds')
    refs.btnVoting.classList.remove('active-btn')
    refs.btnBreeds.classList.toggle('active-btn')
    if(!refs.main.classList.contains('breeds')) {
        return createMainMarkup()
    }  
    refs.backgroundMain.innerHTML = ''
   
    createBreedsMarkup()  
    const breedsGallery = document.querySelector('.breeds-gallery')
    const breedsList = document.querySelector('#breeds_options')    
     
    breedsGallery.addEventListener('click', showFullInfoByBreedId)
    catApiService.limit = 67
    catApiService.page = 0
    Notiflix.Loading.hourglass();
    catApiService.fetchAllBreeds().then(data => {
        Notiflix.Loading.remove();
        const savedInfoInLocalStorage = readInfoFromLocalStorage('fullInfoAboutBreed')
        if(!savedInfoInLocalStorage) {
            breedInfoArr.push(...data)
            saveInfoInLocalStorage('fullInfoAboutBreed', breedInfoArr)
            const resultWithImg = data.filter(el => el.image !== undefined) 
            const breedsOptions = resultWithImg.map(el => 
            ` 
            <option value="${el.id}">${el.name}</option>
            `
                )
             
            breedsList.insertAdjacentHTML('beforeend', breedsOptions)  
        } else {
            const resultWithImg = data.filter(el => el.image !== undefined) 
            const breedsOptions = resultWithImg.map(el => 
            ` 
            <option value="${el.id}">${el.name}</option>
            `
                )
              
            breedsList.insertAdjacentHTML('beforeend', breedsOptions)  
            return
        }
        

        

    })

        catApiService.limit = 10
        catApiService.page = 0
        
        
        catApiService.fetchAllBreeds().then(data => {
        
            const resultWithImg = data.filter(el => el.image !== undefined) 
        
            const  markup =  resultWithImg.map((el,index) =>   
            
        `
            <div class="box cat-breeds_image${index}">
                    
                    <img 
                    src=${JSON.stringify(el.image.url)} 
                    alt="${el.name}" 
                    id="${el.id}"  

                    loading="lazy" 
                    class="img image${index}"
                    width ="200px"
                    />       
                    <div class="breed-name" id="${el.id}"><button id="${el.id}" class="breed-name_button">${el.name}</button></div>
            </div>
        `  
           
          ).join('')
         
          breedsGallery.insertAdjacentHTML('afterbegin', markup)
        })



    const prevBtn = document.querySelector('#prev_btn')
    const nextBtn = document.querySelector('#next_btn')
    const limitOption = document.querySelector("#limit")
    const breedNameOption = document.querySelector("#breeds_options")
    const mainBreedData = document.querySelector('.main-container_breeds-data')
    
     
    const likesSaved = document.querySelector('#smile')
    const dislikesSaved = document.querySelector('#sad')
    const favSaved = document.querySelector('#heart')
     

    likesSaved.addEventListener('click', showAllLikedPhotos)
    favSaved.addEventListener('click', showAllFavdPhotos)
    dislikesSaved.addEventListener('click', showAllDisLikedPhotos)

    const mainContainer = document.querySelector('.main-container_breeds-data')

    function showAllLikedPhotos() {
        
        console.log('Click like')
        mainContainer.innerHTML = ''

        const likeMarkup = `
              
                    
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
                            id="breeds_main">LIKES
                        </button>
      
                    </div>
                <div class="breeds-gallery"></div>
        `
        mainContainer.insertAdjacentHTML('afterbegin',likeMarkup)
        const breedsGallery = document.querySelector('.breeds-gallery')

        const likedFotos = readInfoFromLocalStorage('likes')
        if(likedFotos) {
            console.log(likedFotos)
            const  likesPhotoMarkup =  likedFotos.map((el,index) =>   
    
            `
                <div class="box cat-breeds_image${index}">
                        
                        <img 
                        src=${el.src} 
                        alt="${el.id}" 
                        id="${el.id}"  
    
                        loading="lazy" 
                        class="img image${index}"
                        width ="200px"
                        />       
                        
                </div>
            `  
            ).join('')

            breedsGallery.insertAdjacentHTML('afterbegin',likesPhotoMarkup)
        } else {
            return
        }
        
    }

    function showAllFavdPhotos() {
        console.log('Click like')
        mainContainer.innerHTML = ''

        const favMarkup = `
              
                    
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
                            id="breeds_main">FAVOURITES
                        </button>
      
                    </div>
                <div class="breeds-gallery"></div>
        `
        mainContainer.insertAdjacentHTML('afterbegin',favMarkup)
        const breedsGallery = document.querySelector('.breeds-gallery')

        const favFotos = readInfoFromLocalStorage('favourites')
        if(favFotos) {
            console.log(favFotos)
            const  favPhotoMarkup =  favFotos.map((el,index) =>   
    
            `
                <div class="box cat-breeds_image${index}">
                        
                        <img 
                        src=${el.src} 
                        alt="${el.id}" 
                        id="${el.id}"  
    
                        loading="lazy" 
                        class="img image${index}"
                        width ="200px"
                        />       
                        
                </div>
            `  
            ).join('')

            breedsGallery.insertAdjacentHTML('afterbegin',favPhotoMarkup)
        } else {
            return
        }
    }

    function showAllDisLikedPhotos() {
        console.log('Click like')
        mainContainer.innerHTML = ''

        const dislikeMarkup = `
              
                    
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
                            id="breeds_main">DISLIKES
                        </button>
      
                    </div>
                <div class="breeds-gallery"></div>
        `
        mainContainer.insertAdjacentHTML('afterbegin',dislikeMarkup)
        const breedsGallery = document.querySelector('.breeds-gallery')

        const disLikedFotos = readInfoFromLocalStorage('dislike')
        if(disLikedFotos) {
            console.log(disLikedFotos)
            const  disLikesPhotoMarkup =  disLikedFotos.map((el,index) =>   
    
            `
                <div class="box cat-breeds_image${index}">
                        
                        <img 
                        src=${el.src} 
                        alt="${el.id}" 
                        id="${el.id}"  
    
                        loading="lazy" 
                        class="img image${index}"
                        width ="200px"
                        />       
                        
                </div>
            `  
            ).join('')

            breedsGallery.insertAdjacentHTML('afterbegin',disLikesPhotoMarkup)
        } else {
            return
        }
    }

  
    limitOption.addEventListener('change', function(e) {
        currentLimit = e.target.value
        catApiService.limit = currentLimit
        console.log(catApiService.limit)
    })
    
    breedNameOption.addEventListener('change', function(e) {
        console.log(e.target.value)
        const chosenBreedId = e.target.value
        catApiService.id = chosenBreedId
        catApiService.limit = 100
        catApiService.pagination().then(data => {
            console.log(data)
            const img = data[0].url
            const savedFullInfo = readInfoFromLocalStorage('fullInfoAboutBreed')
            const thisCatFullInfo = savedFullInfo.filter(el => el.id === chosenBreedId)
            console.log(thisCatFullInfo)
            const dexription = thisCatFullInfo[0].description
            const temperament = thisCatFullInfo[0].temperament;
            const origin = thisCatFullInfo[0].origin
            const weight =   thisCatFullInfo[0].weight.metric  
            const life =  thisCatFullInfo[0].life_span 
            const breedName = thisCatFullInfo[0].name
            const breedId = thisCatFullInfo[0].id
            console.log(temperament,origin,weight,life,breedName,breedId) 
            data.map(el => breedPhotosArr.push(el.url))
            Notiflix.Notify.info(`There are ${breedPhotosArr.length} photos`)
            mainBreedData.innerHTML = ''
            const fullInfo = createBreedFullInfoMarkup(img,breedId,breedName,temperament,origin,weight,life) 
            mainBreedData.insertAdjacentHTML('afterbegin', fullInfo)

            const imgToChange = document.querySelector('.breeds_full-info-img')
            const nextFullBtn = document.querySelector('#next_full')
            const prevFullBtn = document.querySelector('#prev_full')

            nextFullBtn.addEventListener('click', showNextPhoto)
            prevFullBtn.addEventListener('click', showPrevPhoto)
            function showPrevPhoto(e) {
                if(photoIndex > 0){
                    photoIndex -= 1
                } else if(photoIndex === 0){
                    Notiflix.Notify.warning(`Press Arrow right`) 
            }
            imgToChange.src = breedPhotosArr[photoIndex]
            console.log(photoIndex)
        }
            function showNextPhoto(e) {
                if(photoIndex < breedPhotosArr.length - 1){
                    photoIndex += 1
                } else if(photoIndex === breedPhotosArr.length - 1) {
                    Notiflix.Notify.warning(`Press Arrow left`) 
                } 
                imgToChange.src = breedPhotosArr[photoIndex]
                console.log(photoIndex)
            }
        })
        

})

    prevBtn.addEventListener('click', showPrevTen)
    nextBtn.addEventListener('click', showNextTen)

    function showPrevTen(e) {
        if(initianlPage <= 0){
            console.log("This is the first page")
            return
        }
        initianlPage -= 1
        catApiService.page = initianlPage
        
        
        catApiService.fetchAllBreeds().then(data => {
        
            const resultWithImg = data.filter(el => el.image !== undefined) 
        
            const  markup =  resultWithImg.map((el,index) =>   
            
        `
            <div class="box cat-breeds_image${index}">
                    
                    <img 
                    src=${JSON.stringify(el.image.url)} 
                    alt="${el.name}" 
                    id="${el.id}"  

                    loading="lazy" 
                    class="img image${index}"
                    width ="200px"
                    />       
                    <div class="breed-name">${el.name}</div>
            </div>
        `  
           
          ).join('')
          breedsGallery.innerHTML = ''
          breedsGallery.insertAdjacentHTML('afterbegin', markup)
        })
        }
    
    function showNextTen(e) {
        if(initianlPage >= (67 / catApiService.limit - 1) ){
            Notiflix.Notify.info("There are no cats more") 
            console.log("There are no cats more")
            return
        }
        initianlPage += 1
        catApiService.page = initianlPage 
        
        
        catApiService.fetchAllBreeds().then(data => {
        
            const resultWithImg = data.filter(el => el.image !== undefined) 
        
            const  markup =  resultWithImg.map((el,index) =>   
            
        `
            <div class="box cat-breeds_image${index}">
                    
                    <img 
                    src=${JSON.stringify(el.image.url)} 
                    alt="${el.name}" 
                    id="${el.id}"  

                    loading="lazy" 
                    class="img image${index}"
                    width ="200px"
                    />       
                    <div class="breed-name">${el.name}</div>
            </div>
        `  
           
          ).join('')
          breedsGallery.innerHTML = ''
          breedsGallery.insertAdjacentHTML('afterbegin', markup)
        })
        }
    }
        
function openGallaryPage(e){
    breedPhotosArr = []
    photoIndex = 0
    refs.main.classList.remove('first')
    refs.main.classList.remove('voting')
    refs.main.classList.remove('breeds')
    refs.main.classList.toggle('gallery')
    refs.btnVoting.classList.remove('active-btn')
    refs.btnBreeds.classList.remove('active-btn')
    refs.btnGallery.classList.toggle('active-btn')
    if(!refs.main.classList.contains('gallery')) {
        return createMainMarkup()
    }  
    refs.backgroundMain.innerHTML = ''
    createGalaryMarkup()
    
    const updateBtn = document.querySelector('#update')
    const order = document.querySelector('#order')
    const breedId = document.querySelector('#breed')
    const type = document.querySelector('#type')
    const limit = document.querySelector('#page_limit')
    const upload = document.querySelector('#upload')
    const modal = document.getElementById("myModal");
    // Get the <span> element that closes the modal
    const span = document.getElementsByClassName("close")[0];
    upload.addEventListener('click', function () {
        modal.style.display = "block";
        console.log('click')
       

        

        // When the user clicks on <span> (x), close the modal
        span.onclick = function() {
        modal.style.display = "none";
        }

        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
        }

    })
    updateBtn.addEventListener('click', showFilteredCatInGallery) 
        
     
    
    function showFilteredCatInGallery(e) {
        console.log("ORDER :", order.value ,",",
                    "BREED ID :", breedId.value ,",", 
                    "PHOTO TYPE :", type.value ,",", 
                    "LIMIT :", limit.value ,",",)
        const gallery = document.querySelector('.gallery-gallery')
                    catApiService.id = breedId.value
                    catApiService.limit = limit.value
                    catApiService.type = type.value
                    catApiService.order = order.value
                    catApiService.pagination().then(data => {
                        const  markup =  data.map((el,index) =>   
        
                    `
                        <div class="box cat-breeds_image${index}">
                                
                                <img 
                                src=${JSON.stringify(el.url)} 
                                alt="${el.id}" 
                                id="${el.id}"  
            
                                loading="lazy" 
                                class="img image${index}"
                                width ="200px"
                                />       
                                
                        </div>
                    `  
                        
                        ).join('')
                        console.log(markup)
                        gallery.innerHTML = ''
                        gallery.insertAdjacentHTML('afterbegin', markup)
                    })
    
                        
                    
                    }
                     
    const likesSaved = document.querySelector('#smile')
    const dislikesSaved = document.querySelector('#sad')
    const favSaved = document.querySelector('#heart')
     

    likesSaved.addEventListener('click', showAllLikedPhotos)
    favSaved.addEventListener('click', showAllFavdPhotos)
    dislikesSaved.addEventListener('click', showAllDisLikedPhotos)
     

    const mainContainer = document.querySelector('.main-container_gallery-data')

    function showAllLikedPhotos() {
        
        console.log('Click like')
        mainContainer.innerHTML = ''

        const likeMarkup = `
              
                    
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
                            id="breeds_main">LIKES
                        </button>
      
                    </div>
                <div class="breeds-gallery"></div>
        `
        mainContainer.insertAdjacentHTML('afterbegin',likeMarkup)
        const breedsGallery = document.querySelector('.breeds-gallery')

        const likedFotos = readInfoFromLocalStorage('likes')
        if(likedFotos) {
            console.log(likedFotos)
            const  likesPhotoMarkup =  likedFotos.map((el,index) =>   
    
            `
                <div class="box cat-breeds_image${index}">
                        
                        <img 
                        src=${el.src} 
                        alt="${el.id}" 
                        id="${el.id}"  
    
                        loading="lazy" 
                        class="img image${index}"
                        width ="200px"
                        />       
                        
                </div>
            `  
            ).join('')

            breedsGallery.insertAdjacentHTML('afterbegin',likesPhotoMarkup)
        } else {
            return
        }
        
    }

    function showAllFavdPhotos() {
        console.log('Click like')
        mainContainer.innerHTML = ''

        const favMarkup = `
              
                    
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
                            id="breeds_main">FAVOURITES
                        </button>
      
                    </div>
                <div class="breeds-gallery"></div>
        `
        mainContainer.insertAdjacentHTML('afterbegin',favMarkup)
        const breedsGallery = document.querySelector('.breeds-gallery')

        const favFotos = readInfoFromLocalStorage('favourites')
        if(favFotos) {
            console.log(favFotos)
            const  favPhotoMarkup =  favFotos.map((el,index) =>   
    
            `
                <div class="box cat-breeds_image${index}">
                        
                        <img 
                        src=${el.src} 
                        alt="${el.id}" 
                        id="${el.id}"  
    
                        loading="lazy" 
                        class="img image${index}"
                        width ="200px"
                        />       
                        
                </div>
            `  
            ).join('')

            breedsGallery.insertAdjacentHTML('afterbegin',favPhotoMarkup)
        } else {
            return
        }
    }

    function showAllDisLikedPhotos() {
        console.log('Click like')
        mainContainer.innerHTML = ''

        const dislikeMarkup = `
              
                    
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
                            id="breeds_main">DISLIKES
                        </button>
      
                    </div>
                <div class="breeds-gallery"></div>
        `
        mainContainer.insertAdjacentHTML('afterbegin',dislikeMarkup)
        const breedsGallery = document.querySelector('.breeds-gallery')

        const disLikedFotos = readInfoFromLocalStorage('dislike')
        if(disLikedFotos) {
            console.log(disLikedFotos)
            const  disLikesPhotoMarkup =  disLikedFotos.map((el,index) =>   
    
            `
                <div class="box cat-breeds_image${index}">
                        
                        <img 
                        src=${el.src} 
                        alt="${el.id}" 
                        id="${el.id}"  
    
                        loading="lazy" 
                        class="img image${index}"
                        width ="200px"
                        />       
                        
                </div>
            `  
            ).join('')

            breedsGallery.insertAdjacentHTML('afterbegin',disLikesPhotoMarkup)
        } else {
            return
        }
    }
    } 
                  
 
 
 