import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

// import SimpleLightbox from "simplelightbox";

const gallery = document.querySelector('.gallery');

const imagesMarkup = createImageGalleryMarkup(galleryItems);

gallery.insertAdjacentHTML('beforeend', imagesMarkup);
gallery.addEventListener('click', onGalleryImageClick)

function createImageGalleryMarkup (galleryItems) {
    return galleryItems
        .map(({ preview, original, description }) => {
        return `
        <a class="gallery__item" href="${original}" onclick="event.preventDefault()">
    <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
    `;
    })
    .join('');
};

function onGalleryImageClick(e) {
    const openImage = !e.target.classList.contains('gallery__image');

    if (openImage) {
        return
    }
    else {
        
        const instance = SimpleLightbox.create(`
            <img src="${e.target.dataset.source}">
        `)
        
        instance.show()
    }

}
