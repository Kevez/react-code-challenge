import React, {Component} from 'react';

class Results extends Component {
  render() {
    let tableData = this.props.results.map(result => {
      return (
        <tr key={result.id}>
          <td className="col-1">{result.id}</td>
          <td className="col-2">{result.name}</td>
          <td className="col-3">{result.main_address.postcode}</td>
          <td className="col-4">{result.review_rating.toFixed(2)}</td>
        </tr>
      );
    });
  
    return (
      <table>
        <tbody>
        <tr>
          <th className="col-1">Id</th>
          <th className="col-2">Name</th>
          <th className="col-3">Postcode</th>
          <th className="col-4">Review Rating</th>
        </tr>
          {tableData}
        </tbody>
      </table>
    );
  }
}

export default Results;