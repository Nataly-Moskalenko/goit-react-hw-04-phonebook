import css from './ContactItem.module.css';
import PropTypes from 'prop-types';

export default function ContactItem({ name, number, id, onDeleteContact }) {
  return (
    <>
      <span>{name}: </span>
      <span>{number}</span>
      <button
        className={css.contactDeleteButton}
        type="button"
        onClick={() => onDeleteContact(id)}
      >
        Delete
      </button>
    </>
  );
}

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
