import React from 'react';
import axios from 'axios';
import GraphicsHeader from './GraphicsHeader';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      listing: [],
    };
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    const query = window.location.search.substring(1);
    axios.get(
      `http://localhost:3001/listings/${query}`,
    )
      .then((data) => {
        this.setState({
          listing: data.data[0],
        });
      });
  }

  render() {
    return (
      <div>
        <h1 className="title-line">Facts and features</h1>
        <GraphicsHeader listing={this.state.listing} />
      </div>
    );
  }
}

export default App;
