import { cleanAlbum } from "../view/render";
import Album from '../model/albums';
import Photo from '../model/photos';

const album = new Album();
const photo = new Photo();

export function showPreviousAlbum(){
	if(album.getId() > 1){
		album.prevAlbum();
		cleanAlbum();
		photo.albumId = album.getId();
		photo.getPhotos(this.albumId);
	}
}

export function showNextAlbum(){
	if(album.getId() <= 100){
		album.nextAlbum();
		cleanAlbum();
		photo.albumId = album.getId();
		photo.getPhotos(this.albumId);
	} 
}

