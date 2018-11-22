import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  state = {
    mounted: false,
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ mounted: true });
    }, 1000)
  }
  
  render() {
    return (
      <div style={{ width: 500, float: 'left', padding: 20 }}>
        <h3>This is my main app</h3>
        {this.state.mounted && ReactDOM.createPortal(
            <div>I want this to appear on RHC, but I'm from the main app. (magic)</div>,
            document.getElementById('right-hand-column')
          )
        }
      </div>
    );
  }
}

const Portals = () => (
  <React.Fragment>
    <h2>Portals</h2>
    <div style={{ clear: 'both', marginTop: 30 }}>
      <App />
      <div style={{ width: 200, float: 'left', minHeight: 300, backgroundColor: '#DDD', padding: 20 }} id="right-hand-column">
        <h3>and this is the right hand column</h3>
        <p>I'm already on the right hand column</p>
      </div>
    </div>
  </React.Fragment>
)

export default Portals;
