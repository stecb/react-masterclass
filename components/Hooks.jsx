import React, { useState, useEffect, useRef } from 'react';
import Button from 'module-tsl-ui-components/es5/components/buttons/Button';

const BaseHookExample = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h2>Base</h2>
      <div>Hooks: {count}</div>
      <Button
        type="button"
        onClick={() => setCount(count + 1)}
      >
        increment
      </Button>
    </div>
  );
}

const PopoverWithHooks = ({ children, content }) => {
  const popoverContainer = useRef({ current: null });
  const [show, toggle] = useState(false);
  useEffect(() => {
    const clickFn = ({ target }) => {
      if (popoverContainer.current && !popoverContainer.current.contains(target)) {
        toggle(false);
      }
    }
    document.body.addEventListener('click', clickFn);
    return () => {
      document.body.removeEventListener('click', clickFn);
    };
  });
  return (
    <div style={{ position: 'relative' }}>
    <div
      ref={popoverContainer}
      style={{ 
        position: 'absolute',
        top: -50,
        background: 'white',
        padding: 10,
        border: '1px solid #EEE',
        display: show ? 'block' : 'none',
      }}
    >
      {content}
    </div>
    <span onClick={() => toggle(!show)}>
      {React.Children.only(children)}
    </span>
  </div>
  );
}

const HookEffectsExample = () => {
  return (
    <React.Fragment>
      <h2 style={{ marginBottom: 30 }}>DOM interactions and lifecycle methods</h2>
      <PopoverWithHooks content={<div>Popover content</div>}>
        <Button>Press me</Button>
      </PopoverWithHooks>
    </React.Fragment>
  )
}

export default () =>
  <React.Fragment>
    <BaseHookExample />
    <HookEffectsExample />
  </React.Fragment>

