import React from 'react';
import Button from './components/Button';

function App() {
    const handleClick = () => {
      console.log('Button clicked!');
    };
  
    return (
      <div style={{margin: '20px'}} >
        <Button onClick={handleClick} variant="primary">Primary Button</Button>
        <Button variant="secondary">Secondary Button</Button>
        <Button size="small" variant="success">Small Button</Button>
        <Button  variant="error" >Button</Button>
        <Button variant="glass-dark">Button</Button>
        <Button variant="glass-light">Button</Button>
        <Button variant="dark">Button</Button>
        <Button variant="base">Button</Button>
        <Button disabled fullWidth >Disabled</Button>
      </div>
    );
}

export default App;
