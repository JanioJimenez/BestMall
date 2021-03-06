import React from "react";
import {
  Button,
  Container,
  Typography,
  Grid,
  TextField,
} from "@material-ui/core";
import googleIcon from '../../static/icons/google.svg';
import { makeStyles } from "@material-ui/core/styles";
import login from "../../static/css/login.css";

const useStyles = makeStyles((theme) => ({
  containerLogin: {
    marginTop: 30,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  inicioCuenta: {
    marginTop: 20,
    marginRight: "auto",
    color: "#F48C06",
    fontSize: 16,
    fontWeight: "500",
  },

  containerGoogleFacebook: {
    display: "flex",
    width: "100%",
    height: "9 vh",
  },

  button: {
    margin: theme.spacing(1),
    backgroundColor: "white",
  },

  cuadroTextoLogin: {
    color: "#C2C2C2",
  },

  containerRecoverPassword: {
    marginTop: 15,
    width: "100%",
    height: "5vh",
  },

  botonEnviar: {
    marginTop: theme.spacing(1.5),
  },

  user: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  recuperarPassword: {
    color: "#C2C2C2",
    fontSize: 16,
  },

  notCuenta: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    color: "#C2C2C2",
  },
  registrate: {
    color: "#DC2F02",
    marginLeft: 5,
    textDecoration: 'none',
  },
}));

function Login() {
  const classes = useStyles();

  return (
    <Container maxWidth="xs" className={classes.containerLogin}>
      <div>
        <Grid>
          <Typography
            component="h1"
            variant="h4"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#03071E"
            }}
          >
            Bestmall
          </Typography>
        </Grid>

        <p className={classes.inicioCuenta}>Inicia sesión en tu cuenta</p>
        <Grid item xs={12} className={classes.containerGoogleFacebook}>
          <Button
            className={classes.button}
            fullWidth
            variant="contained"
          >
            <img src={googleIcon} className='googleIcon' />
          </Button>

          <Button className={classes.button} fullWidth variant="contained">
            <span
              class="material-icons"
              style={{
                fontSize: 30,
                color: "#4967AA",
              }}
            >
              facebook
            </span>
          </Button>
        </Grid>
        <div className="opcion-cuenta">
          <div className="raya-opcion-izquierda"></div>
          <span className="opcion">o</span>
          <div className="raya-opcion-derecha"></div>
        </div>

        <form>
          
          <TextField
            className={classes.cuadroTextoLogin}
            variant="outlined"
            label="Email"
            autoComplete="email"
            name="email"
            fullWidth
            margin="normal"
            size="small"
          />

          <TextField
            className={classes.cuadroTextoLogin}
            variant="outlined"
            label="Password"
            type="password"
            name="password"
            fullWidth
            size="small"
            margin="dense"
          />


          <Button
            className={classes.botonEnviar}
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
          >
            <Typography style={{ fontSize: 18, textTransform: "initial" }}>
              Inicia sesión
            </Typography>
          </Button>

          <div className={classes.containerRecoverPassword}>
            <a href="#" className={classes.recuperarPassword}>
              ¿Olvidaste tu contraseña?
            </a>
          </div>

          <p className={classes.notCuenta}>
            ¿No tienes una cuenta?
            <a href="/registrarUsuario" className={classes.registrate}>
              Regístrate
            </a>
          </p>
        </form>
      </div>
    </Container>
  );
}

export default Login;
