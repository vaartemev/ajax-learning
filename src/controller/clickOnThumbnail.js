import Photo from "../model/photos";

export const clickOnThumbnail = (id) => {
	const photo = new Photo();
	photo.getFullImage(id);
};
