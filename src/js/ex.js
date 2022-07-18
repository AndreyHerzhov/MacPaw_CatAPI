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
