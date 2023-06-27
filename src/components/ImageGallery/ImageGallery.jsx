import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ images }) => {
  console.log(images);
  return (
    <ul className="gallery">
      {images.map(image => (
        <ImageGalleryItem key={image.tags} image={image} />
      ))}
    </ul>
  );
};
