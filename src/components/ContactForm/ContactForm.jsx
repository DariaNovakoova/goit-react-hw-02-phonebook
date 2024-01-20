import { Component } from 'react';
import { nanoid } from 'nanoid';

import styles from './contact-form.module.css';

const INITIAL_STATE = {
  name: '',
  number: '',
};

class ContactForm extends Component {
  nameInputId = nanoid();
  numberInputId = nanoid();

  state = { ...INITIAL_STATE };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit({ name: this.state.name, number: this.state.number });

    this.reset();
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  reset() {
    this.setState({ ...INITIAL_STATE });
  }

  render() {
    const { contacts, name } = this.state;
    const { nameInputId, numberInputId, handleSubmit, handleChange } = this;

    return (
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor={nameInputId}>Name</label>
          <input
            type="text"
            name="name"
            value={name}
            id={nameInputId}
            onChange={handleChange}
            placeholder="Name"
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor={numberInputId}>Number</label>
          <input
            type="tel"
            name="number"
            value={contacts}
            id={numberInputId}
            onChange={handleChange}
            placeholder="Number"
            required
          />
        </div>

        <button type="submit">Add contact</button>
      </form>
    );
  }
}

export default ContactForm;
