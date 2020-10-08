import galleryArray from './gallery-items.js';
console.log(galleryArray)


const galleryCollection = galleryArray.reduce((acc, {preview, original, description}) => {
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

    console.log(galleryCollection)

const galleryEl = document.querySelector('.gallery')

    galleryEl.insertAdjacentHTML("beforeend", galleryCollection);