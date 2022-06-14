import { Component } from 'react';

import fetchDataImage from 'servises/fetchRequaest';
import ImageGallery from '../ImageGallery/ImageGallery';
import SearchForm from '../SearchForm/SearchForm';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import Loader from '../Loader/Loader';

class Searchbar extends Component {
  state = {
    images: [],
    page: 1,
    query: '',
    showModal: false,
    modalImage: '',
    loader: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query) {
      this.fetchImages();
    }
  }

  fetchImages = () => {
    const { query, page } = this.state;
    this.setState({ loader: true });

    fetchDataImage(query, page).then(images => {
      this.setState(prevState => ({
        images: [...prevState.images, ...images.hits],
        page: prevState.page + 1,
        loader: false,
      }));
    });
  };

  fromData = data => {
    this.setState({
      images: [],
      page: 1,
      query: data,
      loader: true,
    });
  };

  openModal = largeImageURL => {
    this.setState({
      showModal: true,
      modalImage: largeImageURL,
    });
  };

  toggleModal = () => {
    this.setState({
      showModal: false,
      modalImage: '',
    });
  };

  render() {
    const { images, showModal, modalImage, page, loader } = this.state;
    return (
      <>
        <SearchForm onSubmit={this.fromData} />
        <ImageGallery images={images} modalOpen={this.openModal} />
        {loader && <Loader />}
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <img src={modalImage} alt="" />
          </Modal>
        )}
        {page > 1 && <Button onClick={this.fetchImages} text="Load more" />}
      </>
    );
  }
}

export default Searchbar;
