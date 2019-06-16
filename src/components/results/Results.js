import React, {Component} from 'react';

class Results extends Component {
  render() {
    let tableData = this.props.results.map(result => {
      return (
        <tr key={result.id}>
          <td class="col-1">{result.id}</td>
          <td class="col-2">{result.name}</td>
          <td class="col-3">{result.main_address.postcode}</td>
          <td class="col-4">{result.review_rating}</td>
        </tr>
      );
    });
  
    return (
      <table>
        <tbody>
        <tr>
          <th class="col-1">Id</th>
          <th class="col-2">Name</th>
          <th class="col-3">Postcode</th>
          <th class="col-4">Review Rating</th>
        </tr>
          {tableData}
        </tbody>
      </table>
    );
  }
}

export default Results;