import React from "react";
import { ButttonWC as Button } from "./components/ButtonWrapper";

function App() {
  return (
    <div style={{ margin: "20px" }}>
      <Button variant="primary">Lit Button</Button>
      <Button variant="secondary">Lit Button</Button>
      <Button size="small" variant="success">
        Small Button
      </Button>
      <Button variant="error">Lit Button</Button>
      <Button variant="glass-dark">Lit Button</Button>
      <Button variant="glass-light">Lit Button</Button>
      <Button variant="dark">Lit Button</Button>
      <Button variant="base">Lit Button</Button>
      <Button disabled fullWidth>
        Disabled
      </Button>
      <Button iconOnly icon="submit" width='56px' height='56px' />
      <Button iconOnly icon="home" width="120px" height="54px">Home </Button>

    </div>
  );
}

export default App;
