const album = document.querySelector('.album');
const title = document.querySelector('.title');
const popup = document.querySelector('.popup');


export const renderImages = (id, imageSrc, imageAlt) => {
	const albumItem = document.createElement('li');
	const image = document.createElement('img');

	albumItem.id = id;
	albumItem.classList.add('album__photo');

	image.src = imageSrc;
	image.alt = imageAlt;

	albumItem.appendChild(image);
	album.appendChild(albumItem);
};


export const cleanAlbum = () => album.innerHTML = '';


export const renderTitle = (titleContent) => {
	title.innerHTML = '';

	const titleText = document.createElement('h3');
	titleText.classList.add('title__text');
	titleText.innerHTML = titleContent;

	title.appendChild(titleText);
};


export const renderFullImage = (imageSrc) => {
	const closeBtn = document.createElement('div');
	const popupImg = document.createElement('img');

	closeBtn.classList.add('popup__close');
	popupImg.classList.add('popup__img');
	popup.classList.add('active');

	closeBtn.innerHTML = 'Close';
	popupImg.src = imageSrc;

	popup.appendChild(closeBtn);
	popup.appendChild(popupImg);

	document.querySelector('.popup__close').addEventListener('click', () => {
		popup.classList.remove('active');
		popup.innerHTML = '';
	});
};
