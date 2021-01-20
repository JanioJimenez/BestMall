import React from "react";
import { Button, Container, Typography, Grid, TextField,} from "@material-ui/core";
import FacebookIcon from '@material-ui/icons/Facebook';
import { makeStyles } from '@material-ui/core/styles';
import SvgIcon from '@material-ui/core/SvgIcon';
import login from "../../css/login.css";


const useStyles = makeStyles((theme) => ({
  
  containerLogin: {
    marginTop: 20,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  inicioCuenta: {
    marginTop: 40,
    marginRight: 'auto',
    color: '#F48C06',
    fontSize: 16,
    fontWeight: '500'
  },

  containerGoogleFacebook: {
    display: 'flex',
    width: '100%',
    height: '9 vh'
  },
  
  button: {
    margin: theme.spacing(1),
    backgroundColor: "white"
  },

  form: {
    width: "100%",
    marginTop: 8,
  },

  cuadroTextoLogin: {
    color: '#C2C2C2',
  },

  containerRecoverPassword:{
    marginTop: 15,
    width: '100%',
    height: '5vh'
  },

  botonEnviar:{
    marginTop: theme.spacing(2)
  },

  recuperarPassword:{
    color: '#C2C2C2',
    fontSize: 16,
  },
  
  notCuenta:{
    display: 'flex',
    justifyContent: 'center',
    alignItems: "center",
    marginTop: 30,
    color: '#C2C2C2'
  },
  registrate:{
    color: '#FFBA08',
    marginLeft: 7
  }

}));



function Login() {

  const classes = useStyles();

  return (
    <Container maxWidth="xs" className={classes.containerLogin}>
      <div >
        <Grid>
          <Typography component="h1" variant="h4" 
              style={{
                display: 'flex',
                alignItems: "center",
                justifyContent: 'center'
              }}
          >
            Bestmall
          </Typography>
        </Grid>

        <p className={classes.inicioCuenta}>Inicia sesión en tu cuenta</p>

        <Grid className={classes.containerGoogleFacebook}>

                <Button
                  className={classes.button} 
                  fullWidth
                  variant="contained" >
                </Button>

                <Button 
                    className={classes.button}
                    fullWidth
                    variant="contained"
                    startIcon={<FacebookIcon  
                        style={{ 
                          fontSize: 30, 
                          color: '#4967AA',
                        }} 
                    />}
                >
                </Button>
          
        </Grid>

        <form clasName={classes.form}>
          <TextField
            className={classes.cuadroTextoLogin}
            variant="outlined"
            label="Email"
            name="email"
            fullWidth
            margin="normal"
          />
          <TextField
            className={classes.cuadroTextoLogin}
            variant="outlined"
            label="Password"
            type="password"
            name="password"
            fullWidth
            margin="normal"
          />

          <Button
            className={classes.botonEnviar}
            type="submit"
            fullWidth 
            variant="contained" 
            color="secondary"
            >
            <Typography style={{fontSize: 18, textTransform: 'initial' }}>
              Inicia sesión
            </Typography>
          </Button>

          <div className={classes.containerRecoverPassword}>
            <a href="#" className={classes.recuperarPassword}>¿Olvidaste tu contraseña?</a> 
          </div>

          <p className={classes.notCuenta}>
            ¿No tienes una cuenta? 
            <a href="#" className={classes.registrate}>Regístrate</a>
          </p>

        </form>
      </div>
    </Container>
  );
}

export default Login;
