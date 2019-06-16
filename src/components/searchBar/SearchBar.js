import React, {Component} from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      "category_id": null,
      "location": ""
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
    this.props.onSubmit(this.state, 0);
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
          <select id="selectCategory" name="category_id" class="form-control" onChange={this.handleOnChange}>
            <option selected>--- Please select ---</option>
            {categoryOptions}
          </select>
        </div>
        <div class="form-block">
          <label htmlFor="inputPostcode">Postcode</label>
          <input class="form-control" id="inputPostcode" name="location" onChange={this.handleOnChange}/>
        </div>
        <div class="form-block">
          <button type="submit" class="btn btn-primary mb-2" onClick={this.handleSubmit}>Submit</button>
        </div>
      </form>
    );
  }
}

export default SearchBar;
