/*
  LEVEL: NORMAL

  Here we want to focus an input after 500ms after the component
  has mounted (so w/out relying on autofocus).
  But, we have 1 Element and 1 Component.
    - What's the difference?
    - How do they differ?
    - Can we set refs to stateless components? (hint: hooks)
*/

import React from 'react';

import Input from 'module-tsl-ui-components/es5/components/input/Input';

function Refs() {
  return (
    <React.Fragment>
      <h2>Refs</h2>
      <div>
        <input placeholder="native" type="text" className="tds-control" />
      </div>
      <br />
      <div>
        <Input placeholder="custom" />
      </div>
    </React.Fragment>
  );
}

export default Refs;






















/*

POSSIBLE SOLUTION:

example:

  class Refs extends Component {
    componentDidMount() {
      setTimeout(() => {
        // this._native.focus();
        // this._custom.focus();
      }, 500);
    }
    
    render() {
      return (
        <React.Fragment>
          <h2>Refs</h2>
          <div>
            <input ref={(native) => {this._native = native;}} placeholder="native" type="text" className="tds-control" />
          </div>
          <br />
          <div ref={(custom) => {this._custom = custom;}}>
            <Input placeholder="custom" />
          </div>
        </React.Fragment>
      )
    }
  }

*/