import PropTypes from 'prop-types';

function fetchDataImage(name, page) {
  const KEY = '26842209-8060593a7142b471474d704cf';
  return fetch(
    `https://pixabay.com/api/?key=${KEY}&q=${name}&image_type=photo&pretty=true&per_page=12&page=${page}`
  ).then(r => {
    if (r.ok) {
      return r.json();
    }
    return Promise.reject(new Error(`Error: ${r.status} ${r.statusText}`));
  })
}

fetchDataImage.propTypes = {
  name: PropTypes.string.isRequired,
  page: PropTypes.string.isRequired,
};

export default fetchDataImage;
