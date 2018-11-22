import React from 'react';
import Button from 'module-tsl-ui-components/es5/components/buttons/Button';

const ThemeContext = React.createContext('default');

const ContextConsumer = ({ onChange }) => (
  <ThemeContext.Consumer>
    {value =>
      <div style={{ padding: 50, backgroundColor: value === 'dark' ? '#272f5e' : '#FFF' }}>
        <Button theme={value === 'dark' ? 'primary-dark' : 'primary'} onClick={onChange}>Change theme yo</Button>
        <h4 style={{ color: value === 'dark' ? '#fff' : '#222' }}>{value} theme</h4>
      </div>
    }
  </ThemeContext.Consumer>
);

export default function ContextAPI() {
  const [theme, changeTheme] = React.useState('light');
  return (
    <React.Fragment>
      <ThemeContext.Provider value={theme}>
        <ContextConsumer onChange={() => changeTheme(theme === 'light' ? 'dark' : 'light')} />
      </ThemeContext.Provider>
    </React.Fragment>
  )
}
