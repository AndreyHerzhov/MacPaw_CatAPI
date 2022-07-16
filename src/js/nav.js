import { refs } from './refs'
import { createVotingMarkup, createBreedsMarkup, createMainMarkup,createGalaryMarkup, createBreedsGaleryMarkup, createBreedFullInfoMarkup } from './render_markup'
import CatApiService from "./catApiService";
 

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

 

window.onload = function() {
    
    // catApiService.fetchRandomCat().then(data => console.log(data))
    // catApiService.fetchAllBreeds().then(data => console.log(data))
    // catApiService.pagination().then(data => console.log(data))
    // catApiService.fetchAllFotos().then(data => console.log(data[0].url))
    // catApiService.fetchCatById().then(data => console.log(data))
    // catApiService.fetchBreedsImg().then(data => console.log(data)) 

    
  };


function showFullInfoByBreedId(e) {
    if(e.target.nodeName !== 'IMG'){
        // console.log("Not img")
        return
    }
    catApiService.id = e.target.id
    // catApiService.id = e.target.value
    catApiService.pagination().then(data => {
        const temperament = data[0].breeds[0].temperament;
        const origin = data[0].breeds[0].origin
        const weight =  data[0].breeds[0].weight.metric
        const life = (data[0].breeds[0].life_span, 'kg')
        console.log(temperament,origin,weight,life)
        console.log(data)
    }
      
    )
    console.log(e.target.id)
}
 
function openVotingPgae(e) {
    e.preventDefault()
    
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
    breedNameOption.addEventListener('change', function(e) {
        catApiService.id = e.target.value
        catApiService.limit = 100
    catApiService.pagination().then(data => {

        const img = data[0].url
        const temperament = data[0].breeds[0].temperament;
        const origin = data[0].breeds[0].origin
        const weight =   data[0].breeds[0].weight.metric  
        const life =  data[0].breeds[0].life_span 
        const breedName = data[0].breeds[0].name
        data.map(el => breedPhotosArr.push(el.url))
        console.log(breedPhotosArr)
        mainBreedData.innerHTML = ''
        const fullInfo = createBreedFullInfoMarkup(img,breedName,temperament,origin,weight,life)     
        
        mainBreedData.insertAdjacentHTML('afterbegin', fullInfo)
    })


})
    limitOption.addEventListener('change', function(e) {console.log(e.target.value)})
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
                    
            </div>
        `  
           
          ).join('')
          breedsGallery.innerHTML = ''
          breedsGallery.insertAdjacentHTML('afterbegin', markup)
        })
        }
    }
        
  



function openGallaryPage(e){
    
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
                  
 
 
 