import React from "react";
import './App.css';
import Navbar from './componentes/layout/navbar'
import Login from './componentes/autenticacion/login';
import Registrar from './componentes/autenticacion/registrar';
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import theme from "./theme/temaConfig";
import { Grid } from "@material-ui/core";


function App() {
  return (
    <Router>
      <MuiThemeProvider theme={theme}>
        <Navbar/>
        <Grid container>
          <Switch>
            <Route
              path="/login" exact component={Login}
            > 
            </Route>
            <Route
              path="/registrarUsuario" exact component={Registrar}
            > 
            </Route>
          </Switch>
        </Grid>
        
      </MuiThemeProvider>

    </Router>
      
  );
}

export default App;
