import { refs } from './refs'
import { createVotingMarkup, createBreedsMarkup, createMainMarkup, createBreedsGaleryMarkup } from './render_markup'
import CatApiService from "./catApiService";
 

refs.btnVoting.addEventListener('click', openVotingPgae)
refs.btnBreeds.addEventListener('click', openBreedsPage)
refs.logo.addEventListener('click', createMainMarkup)

const catApiService = new CatApiService()
let imageArr= []
let breedsObj = {
    name: '',
    id: ''
}

function showFullInfoByBreedId(e) {
    catApiService.pagination().then(data => console.log(data))
    catApiService.id = e.target.id
    catApiService.fetchCatById().then(data => {
        const temperament = data[0].breeds[0].temperament;
        const origin = data[0].breeds[0].origin
        const weight =  data[0].breeds[0].weight
        const life = data[0].breeds[0].life_span
        // console.log(temperament,origin,weight,life)
        // console.log(data)
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
    })
   
   
  
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
    const breedsGallery = document.querySelector('.breeds-gallery')
    breedsGallery.addEventListener('click', showFullInfoByBreedId)
    catApiService.fetchAllBreeds().then(data => {
        const results = data.filter(el => el.image !== undefined) 
         
        const  markup =  results.map(el =>   
            `
             <div class="cat-breeds_image">
             
                <img 
                src=${JSON.stringify(el.image.url)} 
                alt="${el.name}" 
                id="${el.id}"  

                loading="lazy" 
                class="image"
                width = 100%
                />       
             
             
                <div class="info">
                       
                </div>
            </div>
           `  
           
          ).join('')

          breedsGallery.insertAdjacentHTML('afterbegin', markup)
          
    })
  
    
}