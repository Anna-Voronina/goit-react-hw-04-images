import { ImageGalleryItem } from 'components';
import css from './ImageGallery.module.css';

export const ImageGallery = ({ images }) => {
  return (
    <ul className={css.ImageGallery}>
      {images.map(image => (
        <ImageGalleryItem key={image.pageURL} image={image} />
      ))}
    </ul>
  );
};
