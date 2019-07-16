import {
	renderTitle
} from "../view/render";

class Album {
	constructor() {
		this.id = 1;
	}

	getAlbum(id = this.id) {
		fetch(`https://jsonplaceholder.typicode.com/albums/${id}`)
			.then((res) => res.json())
			.then(({
				title
			}) => renderTitle(title))
			.catch(console.error());
	}

	nextAlbum() {
		this.id += 1;
		this.getAlbum(this.id);
	}

	prevAlbum() {
		this.id -= 1;
		this.getAlbum(this.id);
	}

	getId() {
		return this.id;
	}

}

export default Album;