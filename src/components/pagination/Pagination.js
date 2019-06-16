import React from 'react';

class Pagination extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
      currentPage: 1
    };
  }
  
  onPageChange(pageNumber) {
    this.setState({
      currentPage: pageNumber
    }, () => {
      this.props.onPageChange(this.state.currentPage);
    });
  }
  
  render() {
    let numberOfPages = Math.ceil(this.props.totalResults / this.props.itemsPerPage);
    let pageNumbers = [];
    
    for (let i = this.state.currentPage - this.props.range; i < this.state.currentPage + this.props.range + 1; i++) {
      if (i > 0 && i <= numberOfPages) {
        pageNumbers.push(i);
      }
    }
    
    return (
      <ul className="pagination">
        {pageNumbers.map(pageNumber =>
          <li key={pageNumber}><a href="#" onClick={() => this.onPageChange(pageNumber)}>{pageNumber}</a></li>
        )}
      </ul>
    );
  }
}

export default Pagination;