import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import s from '../ImageGallery/ImageGallery.module.css';
import PropTypes from 'prop-types';

function ImageGallery({ images, modalOpen }) {
  return (
    <>
      <ul className={s.ImageGallery}>
        {images &&
          images.map(({ id, largeImageURL, webformatURL, tags }) => (
            <ImageGalleryItem
              key={id}
              image={webformatURL}
              largeImageURL={largeImageURL}
              onModal={modalOpen}
              tags={tags}
            />
          ))}
      </ul>
    </>
  );
}

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
  modalOpen: PropTypes.func.isRequired
};

export default ImageGallery;
