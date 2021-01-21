import React from "react";
import './App.css';
import Navbar from './componentes/layout/navbar'
import Login from './componentes/autenticacion/login';
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import theme from "./theme/temaConfig";


function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Navbar/>
      <Login/>
    </MuiThemeProvider>
      
  );
}

export default App;
