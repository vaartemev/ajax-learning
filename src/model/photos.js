import { renderImages, renderFullImage } from '../view/render';
import { clickOnThumbnail } from '../controller/clickOnThumbnail';

class Photo{
	constructor() {
		this.albumId = 1;
	}

	getPhotos(albumId = this.albumId){
		fetch(`http://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
			.then((res) => res.json())
			.then((data) => {
				data.forEach((photo) => renderImages(photo.id, photo.thumbnailUrl, photo.title));
				const photos = document.querySelectorAll('.album__photo');	
				photos.forEach((photo) => {
					photo.addEventListener('click', function(){
						let id = this.id;
						clickOnThumbnail(id);
					});
				});
			})
			.catch((error) => console.error(error));
	}
	getFullImage(id){
		fetch(`http://jsonplaceholder.typicode.com/photos?id=${id}`)
			.then((res) => res.json())
			.then((data) => {
				data.forEach((photo) => {
					renderFullImage(photo.url);
				});
			})
			.catch((error) => console.error(error));
	}
}

export default Photo;