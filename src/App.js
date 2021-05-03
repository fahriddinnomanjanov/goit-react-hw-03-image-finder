import { Component, createRef } from 'react';
import styles from './App.module.css';
import Searchbar from './components/Searchbar/Searchbar';
import axios from 'axios'
import ImageGallery from './components/ImageGallery/ImageGallery';
import Loader from './components/Loader/Loader';
import Modal from './components/Modal/Modal';
import Button from './components/Button/Button';

  class App extends Component {
    state = {
      hits: [],
      query: '',
      loading: false,
      showModal: false,
      src: null,
      currentPage: 1,
      perPage: 12
    }
    
    componentDidMount() {
      const { query, currentPage, perPage} = this.state
      
      axios.get(`https://pixabay.com/api/?q=${query}&page=${currentPage}&key=20962897-331ac5a967e647c87b669ac14&image_type=photo&orientation=horizontal&per_page=${perPage}`)
        .then(({data}) => { 
          this.setState({ hits: data.hits });
          console.log(data.hits);
      })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
      const {query, loading, currentPage, perPage } = this.state
      if (loading) {
      axios.get(`https://pixabay.com/api/?q=${query}&page=${currentPage}&key=20962897-331ac5a967e647c87b669ac14&image_type=photo&orientation=horizontal&per_page=${perPage}`)
          .then(({data}) => { 
          this.setState(({hits}) => ({hits: [...hits, ...data.hits], loading:false }));
        })
      }


      if (snapshot !== null) {
        window.scrollTo({
          top: snapshot,
          behavior: 'smooth',
        })
      }

    }

    listRef = createRef()

    getSnapshotBeforeUpdate(prevProps, prevState) {
      if (prevState.hits.length < this.state.hits.length) {
        const { current } = this.listRef
        return current.scrollHeight
      }
      return null
    }
    
    handleClick = () => {
            // this.setState({ hits: data.hits, loading: false });
      const {currentPage} = this.state
            this.setState(() => ({
              currentPage: currentPage + 1,
               loading: true
              // hits: data.hits, loading: false,
      }));
        console.log(this.state)

    }

    handleQuery = ({ query }) => {
      this.setState({
        query,
        loading: true,
        hits: [],
        currentPage: 1
      })
    }

    toggleModal = () => {
      this.setState(({ showModal }) => ({
        showModal: !showModal
      }));
    }

    openModal = (src) => {
      this.toggleModal()
      this.setState({
        src
      })
    }

    render() {
      const { handleQuery, toggleModal, openModal, handleClick} = this
      const {loading, showModal, src} = this.state
      return (
        <div className={styles.App}>
          <Searchbar onSubmit={handleQuery} />
          <div ref={this.listRef}>

          <ImageGallery
            openModal={openModal}
            list={this.state.hits} />
          </div>
          

          {loading && <Loader />}
          {showModal && <Modal onClose={toggleModal}>
            <img src={src} alt="" />
          </Modal>}
          <Button handleClick={handleClick}/>
        </div>
      );
    }
  } 
  
  export default App;