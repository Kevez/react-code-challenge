import React from 'react';

class Error extends React.Component {
  render() {
    return (
      <div class="error">
        <h3>The following error occurred</h3>
        <p>{this.props.message}</p>
      </div>
    );
  }
}

export default Error;