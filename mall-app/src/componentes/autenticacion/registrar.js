import React from "react";
import {
  Container,
  Typography,
  Grid,
  TextField,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles((theme) => ({
  nameBestmall: {
    marginTop: '5vh',
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#03071E",
  },
  crearCuenta: {
    margin: 0,
    marginTop: 20,
    marginRight: "auto",
    color: "#F48C06",
    fontSize: 16,
    fontWeight: "500",
  },
  botonRegistrar: {
    marginTop: theme.spacing(1),
  },

  tienesCuenta: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: '5vh',
    color: "#C2C2C2",
  },
  rutaLogin: {
    color: "#DC2F02",
    marginLeft: 5,
    textDecoration: 'none',
  },

}));

function registrar() {
  const classes = styles();

  return (
    <Container maxWidth="xs">
      <div>
        <Typography
          className={classes.nameBestmall}
          component="h1"
          variant="h4"
        >
          Bestmall
        </Typography>
      </div>

      <p className={classes.crearCuenta}>Crea una cuenta</p>

      <form>

        <TextField
          variant="outlined"
          label="Nombre usuario"
          name="Nombre usuario"
          fullWidth
          margin="normal"
          size="small"
        />

        <TextField
            variant="outlined"
            label="E-mail"
            autoComplete="email"
            name="email"
            fullWidth
            size="small"
            margin="dense"

        />

        <TextField
            variant="outlined"
            label="Celular"
            name="celular"
            fullWidth
            size="small"
            margin="dense"

        />

        <TextField
          variant="outlined"
          label="Password"
          type="password"
          name="password"
          fullWidth
          size="small"
          margin="dense"
        />

        <Button
            className={classes.botonRegistrar}
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
          >
            <Typography style={{ fontSize: 18, textTransform: "initial" }}>
              ¡Registrar!
            </Typography>
        </Button>

        <p className={classes.tienesCuenta}>
            ¿Ya tienes cuenta?
            <a href="/login" className={classes.rutaLogin}>
              Inicia sesión
            </a>
        </p>

      </form>
    </Container>
  );
}

export default registrar;
