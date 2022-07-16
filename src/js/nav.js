import { refs } from './refs'
import { createVotingMarkup, createBreedsMarkup, createMainMarkup,createGalaryMarkup, createBreedsGaleryMarkup, createBreedFullInfoMarkup } from './render_markup'
import CatApiService from "./catApiService";
import Notiflix from 'notiflix';
 

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
 

window.onload = function() {
    
    // catApiService.fetchRandomCat().then(data => console.log(data))
    // catApiService.fetchAllBreeds().then(data => console.log(data))
    // catApiService.pagination().then(data => console.log(data))
    // catApiService.fetchAllFotos().then(data => console.log(data[0].url))
    // catApiService.fetchCatById().then(data => console.log(data))
    // catApiService.fetchBreedsImg().then(data => console.log(data)) 

    
  };

  const save = (key, value) => {
    try {
      const catArr = JSON.stringify(value);
      localStorage.setItem(key, catArr);
    } catch (error) {
      console.error("Set state error: ", error.message);
    }
  };

  function showFullInfoByBreedId(e) {
    photoIndex = 0
    if(e.target.nodeName !== 'IMG'){
        return
    }
    const mainBreedData = document.querySelector('.main-container_breeds-data')
    catApiService.id = e.target.id
     
        catApiService.limit = 100

    catApiService.pagination().then(data => {
      
        window.addEventListener('keydown', changePhotoByKey);
         
        const img = data[0].url
        const temperament = data[0].breeds[0].temperament;
        const origin = data[0].breeds[0].origin
        const weight =   data[0].breeds[0].weight.metric  
        const life =  data[0].breeds[0].life_span 
        const breedName = data[0].breeds[0].name
        const breedId = data[0].breeds[0].id

        savedCatsArr.push(data[0].breeds)
        
        save("arrOfCatsInfo", savedCatsArr)  
        const savedInfo = JSON.parse(localStorage.getItem("arrOfCatsInfo"))
        console.log(savedInfo)
        
        



        


        data.map(el => breedPhotosArr.push(el.url))
        Notiflix.Notify.success(`There are ${breedPhotosArr.length} photos`) 
        // console.log(img,temperament,origin,weight,life,breedName,breedId)
        mainBreedData.innerHTML = ''
        const fullInfo = createBreedFullInfoMarkup(img,breedId,breedName,temperament,origin,weight,life)     
        mainBreedData.insertAdjacentHTML('afterbegin', fullInfo)
 
        const nextFullBtn = document.querySelector('#next_full')
        const prevFullBtn = document.querySelector('#prev_full')
        const imgToChange = document.querySelector('.breeds_full-info-img')
        
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

        function changePhotoByKey(e) {
            if(e.key === 'ArrowRight' && photoIndex < breedPhotosArr.length - 1){
                photoIndex += 1
            } else if(e.key === 'ArrowLeft' && photoIndex > 0){
                photoIndex -= 1
            } else if(photoIndex === 0){
                Notiflix.Notify.warning(`Press Arrow right`) 
            } else if(photoIndex === breedPhotosArr.length - 1) {
                Notiflix.Notify.warning(`Press Arrow left`) 
            }
            imgToChange.src = breedPhotosArr[photoIndex]
             
        }
    })
}
 
function openVotingPgae(e) {
    e.preventDefault()
    photoIndex = 0
    breedPhotosArr = []
    catApiService.fetchRandomCat().then(data => {
            const imgUrl = data[0].url
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
            createVotingMarkup(imgUrl)
            console.log(imgUrl)
            console.log(data)
    })
   
   
  
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
    catApiService.fetchAllBreeds().then(data => {
        
        const resultWithImg = data.filter(el => el.image !== undefined) 
        const breedsOptions = resultWithImg.map(el => 
           ` 
           <option value="${el.id}">${el.name}</option>
           `
            )

        breedsList.insertAdjacentHTML('beforeend', breedsOptions)  

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
                    <div class="breed-name">${el.name}</div>
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
    limitOption.addEventListener('change', function(e) {
        currentLimit = e.target.value
        catApiService.limit = currentLimit
        console.log(catApiService.limit)
    })
    
    breedNameOption.addEventListener('change', function(e) {
        
        catApiService.id = e.target.value
        catApiService.limit = 100
    catApiService.pagination().then(data => {
        console.log(data)
        window.addEventListener('keydown', changePhotoByKey);
        const img = data[0].url
        const temperament = data[0].breeds[0].temperament;
        const origin = data[0].breeds[0].origin
        const weight =   data[0].breeds[0].weight.metric  
        const life =  data[0].breeds[0].life_span 
        const breedName = data[0].breeds[0].name
        const breedId = data[0].breeds[0].id
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
        // console.log(imgToChange)
        function changePhotoByKey(e) {
            if(e.key === 'ArrowRight' && photoIndex < breedPhotosArr.length - 1){
                photoIndex += 1
                
            } else if(e.key === 'ArrowLeft' && photoIndex > 0){
                photoIndex -= 1
                
            } else {
                 
                 
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
        if(initianlPage >= 6){
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
    updateBtn.addEventListener('click', showFilteredCatInGallery) 
        
     
    
    function showFilteredCatInGallery(e) {
        // console.log("ORDER :", order.value ,",",
        //             "BREED ID :", breedId.value ,",", 
        //             "PHOTO TYPE :", type.value ,",", 
        //             "LIMIT :", limit.value ,"," )
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
                                alt="${el.breeds[0].name}" 
                                id="${el.breeds[0].id}"  
            
                                loading="lazy" 
                                class="img image${index}"
                                width ="200px"
                                />       
                                
                        </div>
                    `  
                        
                        ).join('')
                        // console.log(markup)
                        gallery.innerHTML = ''
                        gallery.insertAdjacentHTML('afterbegin', markup)
                    })
                        
                    
                    }
                } 
                  
 
 
 