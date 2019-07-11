import { renderTitle } from "../view/render";

class Album {
	constructor() {
		this.id = 1;
	}
	
	getAlbum(id = this.id){
		fetch(`https://jsonplaceholder.typicode.com/albums/${id}`)
			.then((res) => res.json())
			.then((data) => {
				renderTitle(data.title);
			})
			.catch((error) => console.error(error));
	}
	
	nextAlbum(){
		this.id += 1;
		this.getAlbum(this.id);
	}

	prevAlbum(){
		this.id -= 1;
		this.getAlbum(this.id);
	}

	getId(){
		return this.id;
	}
	
}

export default Album;













// async nextAlbum(){
// 	this.id += 1;
// 	const album = await fetch(`https://jsonplaceholder.typicode.com/albums/${this.id}`);
// 	const data = await album.json();
// 	this.album = data;
// }

// async prevAlbum(){
// 	this.id -= 1;
// 	const album = await fetch(`https://jsonplaceholder.typicode.com/albums/${this.id}`);
// 	const data = await album.json();
// 	this.album = data;
// }

// getAlbum() {
// 	return this.album;
// }

// getId(){
// 	return this.id;
// }
// }