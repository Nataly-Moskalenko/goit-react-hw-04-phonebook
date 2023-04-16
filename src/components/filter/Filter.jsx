import css from './Filter.module.css';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

export default function Filter({ value, handleChange }) {
  const nameInputValue = nanoid();
  return (
    <div className={css.filter}>
      <label className={css.filterLabel} htmlFor={nameInputValue}>
        Find contacts by name
      </label>
      <input
        className={css.filterInput}
        id={nameInputValue}
        type="text"
        value={value}
        onChange={handleChange}
      />
    </div>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,  
};
