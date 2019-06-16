import React from 'react';
import {connect} from 'react-redux';
import Pagination from '../pagination/Pagination';
import SearchBar from '../searchBar/SearchBar';
import Results from '../results/Results';
import Error from '../error/Error';
import {actions} from '../../actions';

// app config
const PAGINATION_LIMIT = 20;
const PAGINATION_RANGE = 4;

class App extends React.Component {
  constructor() {
    super();
  }
  
  componentDidMount() {
    this.props.getCategories();
  }
  
  handleSubmit(searchData, offset) {
    this.props.performSearch(searchData, offset);
  }
  
  handlePageChange(pageNumber) {
    this.props.performSearch(this.props.results.previousQuery, (pageNumber - 1) * PAGINATION_LIMIT);
  }
  
  render() {
    return (
      <div>
        <div className="container">
          <h2>Find a Pro</h2>
          <hr/>
          <SearchBar categories={this.props.categories} onSubmit={this.handleSubmit.bind(this)}/>
          {this.props.results.resultsToShow.length > 0 && <Results results={this.props.results.resultsToShow}/>}
          {this.props.results.errorMessage && <Error message={this.props.results.errorMessage}/>}
          {this.props.results.resultsToShow.length > 0 &&
          <Pagination items={this.props.results}
                      totalResults={this.props.results.totalResults}
                      itemsPerPage={PAGINATION_LIMIT}
                      range={PAGINATION_RANGE}
                      onPageChange={this.handlePageChange.bind(this)}/>
          }
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    results: state.results,
    categories: state.categories
  };
}

const mapDispatchToProps = dispatch => {
  return {
    performSearch: (query, offset) => {
      dispatch(actions.performSearch(query, offset));
    },
    getCategories: () => {
      dispatch(actions.getCategories());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

