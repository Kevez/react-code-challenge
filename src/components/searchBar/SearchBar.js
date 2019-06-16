import React, {Component} from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      "category_id": null,
      "location": "",
      "category_id_error": false,
      "location_error": false,
    };
    
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleOnChange(event) {
    const target = event.target;
    const value = target.value;
    
    this.setState({
      [target.name]: value
    });
  }
  
  handleSubmit(event) {
    event.preventDefault();
    let valid = true;
  
    this.setState({
      ['category_id_error']: false,
      ['location_error']: false
    });
    
    if (this.state['category_id'] === null) {
      valid = false;
      this.setState({
        ['category_id_error']: true
      });
    }
    
    if (this.state['location'] === '') {
      valid = false;
      this.setState({
        ['location_error']: true
      });
    }
    
    if (valid) {
      this.props.onSubmit(this.state, 0);
    }
  }
  
  render() {
    let categoryOptions = this.props.categories.map(category => {
      return (
        <option value={category.id}>{category.name}</option>
      );
    });
    
    return (
      <form action="#">
        <div class="form-block">
          <label htmlFor="selectCategory">Category</label>
          <select className={this.state.category_id_error ? "error" : ""} id="selectCategory" name="category_id" class="form-control" onChange={this.handleOnChange}>
            <option selected disabled>--- Please select ---</option>
            {categoryOptions}
          </select>
        </div>
        <div class="form-block">
          <label htmlFor="inputPostcode">Postcode</label>
          <input className={this.state.location_error ? "error" : ""} id="inputPostcode" name="location" required onChange={this.handleOnChange}/>
        </div>
        <div class="form-block">
          <button type="submit" class="btn btn-primary mb-2" onClick={this.handleSubmit}>Submit</button>
        </div>
      </form>
    );
  }
}

export default SearchBar;
