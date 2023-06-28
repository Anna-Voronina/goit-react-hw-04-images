import { Component } from 'react';
import { SearchBar } from './SearchBar/SearchBar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { fetchImages } from 'services/pixabay-api';
import { Loader } from './Loader/Loader';

const INITIAL_STATE = {
  images: [],
  query: '',
  page: 1,
  perPage: 12,
  showBtn: false,
  loading: false,
};

export class App extends Component {
  state = {
    ...INITIAL_STATE,
  };

  componentDidMount() {}

  async componentDidUpdate(prevProps, prevState) {
    const { query, page, perPage } = this.state;

    if (prevState.query !== query || prevState.page !== page) {
      this.setState({ loading: true });
      try {
        const { data } = await fetchImages({ query, page, perPage });
        this.setState(prevState => ({
          images: [...prevState.images, ...data.hits],
          showBtn: page < Math.ceil(data.totalHits / perPage),
        }));
      } catch (error) {
        console.log(error);
      } finally {
        this.setState({ loading: false });
      }
    }
  }

  handleSearchFormSubmit = inputValue => {
    this.setState({ query: inputValue });
  };

  handleLoadMoreBtnClick = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    const { images, showBtn, loading } = this.state;

    return (
      <>
        <SearchBar onSubmit={this.handleSearchFormSubmit} />
        <ImageGallery images={images} />
        {showBtn && <Button onLoadMoreBtnClick={this.handleLoadMoreBtnClick} />}
        {loading && <Loader />}
      </>
    );
  }
}
