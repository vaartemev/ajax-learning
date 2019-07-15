import { cleanAlbum } from "../view/render";
import Album from '../model/albums';
import Photo from '../model/photos';

const album = new Album();
const photo = new Photo();

export function showPreviousAlbum(){
	if(album.getId() > 1){
		cleanAlbum();
		album.prevAlbum();
		photo.albumId = album.getId();
		photo.getPhotos(this.albumId);
	}
}

export function showNextAlbum(){
	if(album.getId() <= 100){
		cleanAlbum();
		album.nextAlbum();
		photo.albumId = album.getId();
		photo.getPhotos(this.albumId);
	} 
}
