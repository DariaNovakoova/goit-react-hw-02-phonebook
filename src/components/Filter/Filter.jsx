import styles from './filter.module.css';

const Filter = ({ value, changeFilter }) => {
  return (
    <div className={styles.filter}>
      <label> Find contacts by name </label>
      <input
        type="text"
        name="filter"
        value={value}
        onChange={changeFilter}
        placeholder="Search"
      />
    </div>
  );
};

export default Filter;
