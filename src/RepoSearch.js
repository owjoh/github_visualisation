import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
// import Link from '@material-ui/core/Link';
// import Grid from '@material-ui/core/Grid';
// import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Logo from './desktop-icon.svg';

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },

  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  button: {
    margin: theme.spacing(3, 0, 2),
    background: 'linear-gradient(45deg, #834d9b 30%,#d04ed6 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(208, 78, 214, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
}));



export default function RepoSearch() {
  const classes = useStyles();
  const [repo, setRepo] = React.useState('');
  const handleChange = event => {
    setRepo(event.target.value);
  };

  const doSomething = function(event) {
    alert(repo);
    event.preventDefault();
  };

  

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <img src={Logo} alt="Logo"/>
        <Typography component="h1" variant="h5">
          Enter Repository Name
        </Typography>
        <form className={classes.form} noValidate onSubmit={doSomething}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="repository-inputs"
            label="Repository"
            name="repository"
            className={classes.textField}
            autoComplete="repository"
            onChange={handleChange}
            autoFocus
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.button}
          >
            Search
          </Button>
        </form>
      </div>
    </Container>
  );
}