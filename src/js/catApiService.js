const BASE_URL = "https://api.thecatapi.com/v1/"
const API_KEY = '984907ed-4e7f-4546-9c87-f9d0754e6fea'
// https://api.thecatapi.com/v1/
// https://api.thecatapi.com/v1/images/search?breed_ids={breed-id}
// https://api.thecatapi.com/v1/images/search?limit=5&page=10&order=Desc
// https://api.thecatapi.com/v1/images

export default class CatApiService {
    constructor(){
        this.breedId = 'asho';
        this.page = 1;
        this.limit = 10;
        this.type = 'jpg,png,gif'
    }

    // show random Cat photo
    fetchRandomCat() {
       const url = `${BASE_URL}images/search?api_key=${API_KEY}`;
       return fetch(url)
          .then(response =>  response.json())
          .then((data) => {
            this.page += 1 
            return data
        })
    }

    // Load linfo by breed_id. Several photos for one breed.(Breed ID, number of result, type of foto) Return full info.
    pagination() {
        const url = `${BASE_URL}images/search?limit=${this.limit}&page=${this.page}&breed_ids=${this.breedId}&order=DESC&mime_types=${this.type}`;
        return fetch(url)
          .then(response =>  response.json())
          .then((data) => {
            this.page += 1 
            return data
        })
    }

   
   // return 67 breeds with full info about Cat
    fetchAllBreeds() {
        const url = `${BASE_URL}breeds`;
        return fetch(url)
          .then(response =>  response.json())
          .then((data) => {
            this.page += 1 
            return data
        })
    }

    // Return 67 breeds with ability to set limits
    fetchAllBreedsWithPagination() {
        const url = `${BASE_URL}breeds?limit=${this.limit}&page=${this.page}`;
        return fetch(url)
          .then(response =>  response.json())
          .then((data) => {
            this.page += 1 
            return data
        })
    }

    // Full info ById and one photo
    fetchCatById() {
        const url = `${BASE_URL}images/search?breed_ids=${this.breedId}`;
        return fetch(url)
          .then(response =>  response.json())
          .then((data) => {
            return data
        })
    }


    // Find random photo
    fetchAllFotos() {
        const url = `${BASE_URL}images/search`;
        return fetch(url)
          .then(response =>  response.json())
          .then((data) => {
            return data
        })
    }
    
    resetPage() {
        this.page = 1 
    }

    get id() {
        return this.breedId
    }

    set id(newId) {
        this.breedId = newId
    }
}

