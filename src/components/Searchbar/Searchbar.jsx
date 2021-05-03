import {Component} from 'react';
import styles from './Searchbar.module.css';

class Searchbar extends Component {
  state = {
    query: '',
  }
  
  handleChange = ({ target }) => {
    const {value} = target
    // const { query } = this.state;
    this.setState({query: value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { onSubmit } = this.props
    onSubmit(this.state)
  }

  render() {
    const { handleChange, handleSubmit } = this
    return (
      <header className={styles.Searchbar}>
  <form onSubmit={handleSubmit} className={styles.SearchForm}>
    <button type="submit" className={styles.SearchFormButton}>
      <span className={styles.SearchFormButtonLabel}>Search</span>
    </button>

    <input
      className={styles.SearchFormInput}
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
      onChange={handleChange }
    />
  </form>
</header>
    );
  }
}

export default Searchbar;