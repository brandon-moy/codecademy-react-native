import React from 'react';
import ReactDOM from 'react-dom';
import { CopyCat } from './CopyCat'

const images = {
  copycat: 'https://content.codecademy.com/courses/React/react_photo_copycat.png',
  quietcat: 'https://content.codecademy.com/courses/React/react_photo_quietcat.png'
};


class CopyCatContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      copying: true
    };
    this.handleChange = this.handleChange.bind(this);
    this.toggleTape = this.toggleTape.bind(this);
  }

  handleChange(e) {
    this.setState({ input: e.target.value })
  }

  toggleTape() {
    this.setState({ copying: !this.state.copying })
  }

  render() {
    const copying = this.state.copying;
    const toggleTape = this.toggleTape
    const input = this.state.input;
    return (
      <CopyCat
        copying={copying}
        toggleTape={toggleTape}
        input={input}
        handleChange={this.handleChange} />
    );
  };
}


ReactDOM.render(<CopyCatContainer />, document.getElementById('app'));
