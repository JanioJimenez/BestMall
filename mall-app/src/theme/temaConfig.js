import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    typography : {
        useNextVariants: true
    },
    palette : {
        primary:{
            main: '#FFBA08'
        },
        secondary: {
             main: '#03071E'
        },
        common: {
            main: '#DC2F02'
        },
        colorFour: {
            main: '#9D0208'
        },
        colorFive: {
            main: '#F48C06'
        }

    },
    spacing: 15
});

export default theme;
