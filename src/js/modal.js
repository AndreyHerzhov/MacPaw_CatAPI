 
 
 document.querySelectorAll('.drop-zone__input').forEach(inputElement => {
    const dropZoneElement = inputElement.closest('.drop-zone')
    console.log(dropZoneElement)
    dropZoneElement.addEventListener('dragover', function(e) {
        e.preventDefault();
        // console.log(dropZoneElement)
        dropZoneElement.classList.add('drop-zone--over')
    })
    const arrr = ['dragleave', 'dragend']
    arrr.forEach(type => {
        dropZoneElement.addEventListener(type, function(e) {
            e.preventDefault();
            dropZoneElement.classList.remove('drop-zone--over')
        })
    })
    dropZoneElement.addEventListener('drop', function(e) {
        e.preventDefault();
        if(e.dataTransfer.files.length) {
            inputElement.files = e.dataTransfer.files
            updateThumbnail(dropZoneElement, e.dataTransfer.files)
        }
        dropZoneElement.classList.remove('drop-zone--over')
        // console.log(e.dataTransfer.files)
    })
 })


 function updateThumbnail(dropZoneElement, file) {
   let thumbNailElement = dropZoneElement.querySelector('.drop-zone__thumb')

//    console.log(file)
   if(dropZoneElement.querySelector('.drop-zone_text')){
    dropZoneElement.querySelector('.drop-zone_text').remove();
   }

   if(!thumbNailElement) {
    thumbNailElement = document.createElement('div')
    thumbNailElement.classList.add('drop-zone__thumb')
    dropZoneElement.appendChild(thumbNailElement)
   } 

   thumbNailElement.dataset.label = file[0].name

   console.log(file[0].type)

   const fileToUpload = file[0]

   if (fileToUpload) {
    const reader = new FileReader();
    reader.readAsDataURL(fileToUpload);
    reader.onload = function(e) {
        thumbNailElement.style.backgroundImage = `url('${reader.result}')`
    const button = document.createElement('button')
    button.classList.add('drop-zone__upload-btn')
    button.innerText = 'UPLOAD PHOTO'
    thumbNailElement.appendChild(button)     
    };
 }
}
    
