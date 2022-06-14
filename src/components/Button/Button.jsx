import s from '../Button/Button.module.css';
import PropTypes from 'prop-types';

function Button({ onClick, text }) {
  return (
    <>
      <button type="button" className={s.Button} onClick={onClick}>
        {text}
      </button>
    </>
  );
}

Button.propTypes = {
  onClick : PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
}

export default Button;
