import React from "react";
import './App.css';
import Login from './componentes/autenticacion/login';
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import theme from "./theme/temaConfig";


function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Login/>
    </MuiThemeProvider>
      
  );
}

export default App;
