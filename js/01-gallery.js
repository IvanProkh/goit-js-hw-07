import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

// В файле gallery - items.js есть массив galleryItems, который содержит объекты с информацией
//  о изображениях: маленькое(превью), оригинальное(большое) и описание.Мы уже подключили его
//   к каждому из JS - файлов проекта.

// Создай галерею с возможностью клика по её элементам и просмотра полноразмерного изображения
//  в модальном окне.

// Создание и рендер разметки по массиву данных galleryItems и предоставленному шаблону
//  элемента галереи.
// Реализация делегирования на div.gallery и получение url большого изображения.
// Подключение скрипта и стилей библиотеки модального окна basicLightbox.Используй CDN сервис
//  jsdelivr и добавь в проект ссылки на минифицированные(.min) файлы библиотеки.
// Открытие модального окна по клику на элементе галереи.Для этого ознакомься с документацией
//  и примерами.
// Замена значения атрибута src элемента < img > в модальном окне перед открытием.Используй
//  готовую разметку модального окна с изображением из примеров библиотеки basicLightbox.
// Разметка элемента галереи
// Ссылка на оригинальное изображение должна храниться в data - атрибуте source на элементе
//     < img >, и указываться в href ссылки.Не добавляй другие HTML теги или CSS классы кроме
// тех, что есть в этом шаблоне.

// <div class="gallery__item">
//   <a class="gallery__link" href="large-image.jpg">
//     <img
//       class="gallery__image"
//       src="small-image.jpg"
//       data-source="large-image.jpg"
//       alt="Image description"
//     />
//   </a>
// </div>
//     Обрати внимание на то, что изображение обернуто в ссылку, а значит при клике по умолчанию
//  пользователь будет перенаправлен на другую страницу.Запрети это поведение по умолчанию.

// Этот функционал не обязателен при сдаче задания, но будет хорошей дополнительной практикой.

// Добавь закрытие модального окна по нажатию клавиши Escape.Сделай так, чтобы прослушивание
//  клавиатуры было только пока открыто модальное окно.У библиотеки basicLightbox есть метод 
//  для программного закрытия модального окна.


const gallery = document.querySelector('.gallery');
console.log("~ gallery", gallery)


function createImageGalleryMarkup (galleryItems) {

    const markup = galleryItems.map(image => {
        const { preview, original, description } = galleryItems;
        return `
        <div class="gallery__item">
        <a class="gallery__link" href="large-image.jpg">
        <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
        />
        </a>
    </div>
        `
    
    });


};


console.log("~ image", image)

gallery.map(image).join('')

console.log("~ gallery", gallery)

