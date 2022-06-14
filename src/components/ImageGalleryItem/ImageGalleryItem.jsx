import s from '../ImageGalleryItem/ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ image, tags, onModal, largeImageURL }) => {
  return (
    <>
      <li className={s.ImageGalleryItem} data-id={image.id}>
        <img
          className={s.ImageGalleryItemimage}
          src={image}
          alt={tags}
          onClick={() => onModal(largeImageURL)}
        />
      </li>
    </>
  );
};

ImageGalleryItem.propTypes = {
  image: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  onModal: PropTypes.func.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};

export default ImageGalleryItem;
