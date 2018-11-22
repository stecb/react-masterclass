/*
  LEVEL: ADVANCED

  We want to create a popover component. When you click on
  the children, we want the popover to appear at the top.
  When we click outside BUT not inside we want the popover to
  hide.
*/

import React, { Component } from 'react';
import Button from 'module-tsl-ui-components/es5/components/buttons/Button';

class Popover extends Component {  
  render() {
    return (
      <div style={{ position: 'relative' }}>
      </div>
    )
  }
}

export default function DomInteraction() {
  return (
    <React.Fragment>
      <h2 style={{ marginBottom: 30 }}>DOM interactions and lifecycle methods</h2>
      <Popover content={<div>Popover content</div>}>
        <Button>Press me</Button>
      </Popover>
    </React.Fragment>
  )
}



/*

POSSIBLE SOLUTION:

example:

  
class Popover extends Component {
  constructor(props) {
    super(props);
    this.state = { show: false };
    this.toggleTooltip = this.toggleTooltip.bind(this);
  }

  componentDidMount() {
    this.clickFn = ({ target }) => {
      if (!this._popover.contains(target)) {
        this.toggleTooltip(false);
      }
    }
    document.body.addEventListener('click', this.clickFn);
  }

  toggleTooltip(value) {
    this.setState(state => ({ show: value || !state.show }));
  }
  
  render() {
    const { show } = this.state;
    return (
      <div style={{ position: 'relative' }}>
        <div
          ref={(popover) => { this._popover = popover; }}
          style={{ 
            position: 'absolute',
            top: -50,
            background: 'white',
            padding: 10,
            border: '1px solid #EEE',
            display: show ? 'block' : 'none',
          }}
        >
          {this.props.content}
        </div>
        <span onClick={this.toggleTooltip}>
          {React.Children.only(this.props.children)}
        </span>
      </div>
    )
  }
}

*/