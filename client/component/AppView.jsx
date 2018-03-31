import React from 'react';

class AppView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: this.props.number,
    };
  }

  render() {
    console.log(this.state.number);
    return (
      <div>
        WE GOT THIS
      </div>
    );
  }
}

module.exports = AppView;
