import {
	cleanAlbum
} from "../view/render";
import Album from '../model/albums';
import Photo from '../model/photos';

const album = new Album();
const photo = new Photo();

export function showPreviousAlbum() {
	if (album.getId() > 1) {
		cleanAlbum();
		album.prevAlbum();
		photo.getPhotos(album.getId());
	}
}

export function showNextAlbum() {
	if (album.getId() <= 100) {
		cleanAlbum();
		album.nextAlbum();
		photo.getPhotos(album.getId());
	}
}