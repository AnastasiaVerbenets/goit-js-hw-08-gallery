const galleryItems = [
    {
        preview:
            'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
        original:
            'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
        description: 'Hokkaido Flower',
    },
    {
        preview:
            'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
        original:
            'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
        description: 'Container Haulage Freight',
    },
    {
        preview:
            'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
        original:
            'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
        description: 'Aerial Beach View',
    },
    {
        preview:
            'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
        original:
            'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
        description: 'Flower Blooms',
    },
    {
        preview:
            'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
        original:
            'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
        description: 'Alpine Mountains',
    },
    {
        preview:
            'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
        original:
            'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
        description: 'Mountain Lake Sailing',
    },
    {
        preview:
            'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
        original:
            'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
        description: 'Alpine Spring Meadows',
    },
    {
        preview:
            'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
        original:
            'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
        description: 'Nature Landscape',
    },
    {
        preview:
            'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
        original:
            'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
        description: 'Lighthouse Coast Sea',
    },
];

const galleryList = document.querySelector('.js-gallery');
const lightbox = document.querySelector('.js-lightbox');
const lightboxImg = document.querySelector('.lightbox__image');
const closeLightbox = document.querySelector('[data-action="close-lightbox"]');
const overlay = document.querySelector('.lightbox__overlay');

let currentIdx = null;


galleryList.addEventListener("click", onLightbox);
closeLightbox.addEventListener("click", onCloseLightbox);
window.addEventListener('keydown', onBackdropOrEscape);
window.addEventListener('click', onBackdropOrEscape);
window.addEventListener('keydown', onKeydown);

const galleryMarkup = galleryItems
    .map(({ preview, original, description }) => {
        return `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}" />
        </a>
        </li>`
    }).join("");

galleryList.insertAdjacentHTML("beforeend", galleryMarkup);

function onLightbox(e) {
    e.preventDefault();

    lightbox.classList.add('is-open');
    lightboxImg.src = e.target.dataset.source;
    lightboxImg.alt = e.target.alt;

    currentIdx = galleryItems.findIndex((item) => item.original === e.target.dataset.source);
}

function onCloseLightbox() {
    lightbox.classList.remove('is-open');
    currentIdx = null;
}

function onBackdropOrEscape(e) {
    if (e.target === overlay || e.code === "Escape") onCloseLightbox();
}

function onKeydown(e) {
    if (e.code === "ArrowRight") {
        const nextIdx = currentIdx === galleryItems.length - 1 ? 0 : currentIdx + 1;
        const nextItem = galleryItems[nextIdx];
        lightboxImg.src = nextItem.original;
        currentIdx = nextIdx;
    }

    if (e.code === "ArrowLeft") {
        const prevIdx = currentIdx === 0 ? galleryItems.length - 1 : currentIdx - 1;
        const prevItem = galleryItems[prevIdx];
        lightboxImg.src = prevItem.original;
        currentIdx = prevIdx;
    }
}