const BASE_URL = "https://api.thecatapi.com/v1/"
const API_KEY = '984907ed-4e7f-4546-9c87-f9d0754e6fea'
// https://api.thecatapi.com/v1/
// https://api.thecatapi.com/v1/images/search?breed_ids={breed-id}
// https://api.thecatapi.com/v1/images/search?limit=5&page=10&order=Desc
// https://api.thecatapi.com/v1/images

export default class CatApiService {
    constructor(){
        this.breedId = '';
        this.page = 1;
    }

    fetchRandomCat() {
       
       const url = `${BASE_URL}images/search?api_key=${API_KEY}`;
       return fetch(url)
          .then(response =>  response.json())
          .then((data) => {
            this.page += 1 
            return data
        })
    }
    pagination() {
        const url = `https://api.thecatapi.com/v1/images/search?mime_types=gif?limit=100&page=1&order=DESC`;
        return fetch(url)
          .then(response =>  response.json())
          .then((data) => {
            this.page += 1 
            return data
        })
    }

   

    fetchAllBreeds() {
        const url = `${BASE_URL}breeds?limit=${this.limit}&page=${this.page}&order=Desc`;
        return fetch(url)
          .then(response =>  response.json())
          .then((data) => {
            this.page += 1 
            return data
        })
    }

    fetchCatById() {
        const url = `${BASE_URL}images/search?breed_ids=${this.breedId}`;
        return fetch(url)
          .then(response =>  response.json())
          .then((data) => {
            this.page += 1 
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

