import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');
const imagesMarkup = createImageGalleryMarkup(galleryItems);

gallery.insertAdjacentHTML('beforeend', imagesMarkup);
// gallery.addEventListener('click', onGalleryImageClick, { once: true });

// function onGalleryImageClick(e) {
//     console.log(e);
    const lightbox = new SimpleLightbox(".gallery a", { captionsData: "alt", captionDelay: 250, });
// }

function createImageGalleryMarkup (galleryItems) {
    return galleryItems
        .map(({ preview, original, description }) => {
        return `
        <a 
        class="gallery__item"
        href="${original}"
        onclick="event.preventDefault()">
            <img
            class="gallery__image"
            src="${preview}" 
            alt="${description}"
            />
        </a>
    `;
    })
    .join('');
};




