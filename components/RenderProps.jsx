/*
  LEVEL: ADVANCED

  Say, we want to tell to the button of the popover
  to display "active" when the popover is active.
  So we want to display a different theme of the Button.
  - How can we do that? hint: render props
*/

import React, { Component } from 'react';
import Button from 'module-tsl-ui-components/es5/components/buttons/Button';

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

  componentWillUnmount() {
    document.body.removeEventListener('click', this.clickFn);
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
