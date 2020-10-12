import galleryArray from './gallery-items.js';
console.log(galleryArray)


const galleryString = galleryArray.reduce((acc, {preview, original, description}) => {
        acc += `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"/>
        </a>
      </li>`;
        return acc;
    }, '')

    

const galleryEl = document.querySelector('.js-gallery');
galleryEl.insertAdjacentHTML("beforeend", galleryString);

galleryEl.addEventListener('click', onGalleryClick);
const lightboxEl = document.querySelector('.lightbox');
const lightboxImageEl = document.querySelector('.lightbox__image');
const btnCloseEl = document.querySelector('[data-action="close-lightbox"]');

function onGalleryClick(evt) {
    evt.preventDefault()
    if (evt.target.nodeName !== 'IMG') {
        return;
    }
        
    lightboxEl.classList.add('is-open');
    lightboxImageEl.src = evt.target.dataset.source;
    lightboxImageEl.alt = evt.target.alt;

    btnCloseEl.addEventListener('click', onBtnClose);
    
    return evt.target.dataset.source;
}
 
    

    function onBtnClose() {
        
        lightboxEl.classList.remove('is-open');
        clearImageBox();

    }

    function clearImageBox() {
        lightboxImageEl.src = "";
        lightboxImageEl.alt = "";
    }

    // const lightboxEl = document.querySelector('.lightbox');
    // lightboxEl.classList.remove('is-open');
    
    // console.log(lightboxImageEl)
    



    
    
 
 


