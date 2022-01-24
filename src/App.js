import React, { useCallback, useState } from 'react';
import useDarkTheme from "./hooks/useDarkTheme/useDarkTheme";
import Card from "./components/Card/Card";
import ThemeSwitch from "./components/ThemeSwitch/ThemeSwitch";
import './App.scss';

function App() {
  const {switchTheme, theme, isDark} = useDarkTheme();
  const [value, setValue] = useState(isDark);

  const onSwitchToggle = useCallback(()=> {
    switchTheme();
    setValue(!value)
  }, [value])

  return (
    <div className='App' data-theme={theme}>
      <ThemeSwitch isOn={value} handleToggle={onSwitchToggle}/>
      <Card/>
    </div>
  )
}

export default App;
