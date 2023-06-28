export const ImageGalleryItem = ({
  image: { webformatURL, tags },
  onToggleModal,
}) => {
  return (
    <li className="gallery-item">
      <img src={webformatURL} alt={tags} />
    </li>
  );
};
