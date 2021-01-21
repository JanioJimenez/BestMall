import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar } from "@material-ui/core";
import BarSesion from "./barSesion";

const useStyles = makeStyles((theme) => ({
  offSet: theme.mixins.toolbar,
}));

function Navbar() {
  const classes = useStyles();
  
  return (
    <div>
      <AppBar position="fixed">
        <BarSesion />
      </AppBar>
      <div className={classes.offSet}></div>
    </div>
  );
}

export default Navbar;
