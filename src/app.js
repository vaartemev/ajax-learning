import './scss/base.scss';

import { showPreviousAlbum, showNextAlbum } from './controller/clickOnPrevAndNext';
import Album from './model/albums';
import Photo from './model/photos';

const album = new Album().getAlbum();
const photos = new Photo().getPhotos();

document.querySelector('.button-prev').addEventListener('click', showPreviousAlbum);
document.querySelector('.button-next').addEventListener('click', showNextAlbum);