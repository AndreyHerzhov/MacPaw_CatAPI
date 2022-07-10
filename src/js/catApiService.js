const BASE_URL = "https://api.thecatapi.com/v1/"
const API_KEY = '984907ed-4e7f-4546-9c87-f9d0754e6fea'
// https://api.thecatapi.com/v1/

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

    fetchCatByBreed() {
        const url = `${BASE_URL}breeds/search?q=${this.breedId}??api_key=${API_KEY}`;
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

    get query() {
        return this.searchQuery
    }

    set query(newQuery) {
        this.searchQuery = newQuery
    }
}

