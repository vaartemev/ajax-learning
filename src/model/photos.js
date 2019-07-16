import {
	renderImages,
	renderFullImage
} from '../view/render';
import {
	clickOnThumbnail
} from '../controller/clickOnThumbnail';

class Photo {
	constructor() {
		this.albumId = 1;
	}

	getPhotos(albumId = this.albumId) {
		fetch(`http://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
			.then((res) => res.json())
			.then((data) => {
				data.forEach(({
					id,
					thumbnailUrl,
					title
				}) => renderImages(id, thumbnailUrl, title));
				const photos = document.querySelectorAll('.album__photo');
				photos.forEach((photo) => {
					photo.addEventListener('click', function () {
						const id = this.id;
						clickOnThumbnail(id);
					});
				});
			})
			.catch(console.error());
	}
	getFullImage(id) {
		fetch(`http://jsonplaceholder.typicode.com/photos?id=${id}`)
			.then((res) => res.json())
			.then((data) => {
				data.forEach(({
					url
				}) => {
					renderFullImage(url);
				});
			})
			.catch(console.error());
	}
}

export default Photo;