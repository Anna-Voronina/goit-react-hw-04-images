import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ images, onToggleModal }) => {
  return (
    <ul className="gallery">
      {images.map(image => (
        <ImageGalleryItem
          key={image.tags}
          image={image}
          onToggleModal={onToggleModal}
        />
      ))}
    </ul>
  );
};
