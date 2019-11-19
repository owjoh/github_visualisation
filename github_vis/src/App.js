import React, { useEffect } from 'react';
import './App.css';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import Star from '@material-ui/icons/Star';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Logo from './desktop-icon.svg';
import { makeStyles } from '@material-ui/core/styles';

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

function App() {
  const [name,setName] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [owner, setOwner] = React.useState('');
  const [stars, setStars] = React.useState('');
  const [input, setInput] = React.useState('flutter');


  useEffect( () => {
    fetch("https://api.github.com/search/repositories?q=" + input)
    .then(res => res.json())
    .then(data => (
      findInputInData(data, input)
    ))
  },[input])

  const findInputInData = function(data, input) {
    let found = -1;
    for (let i = 0; i < data.items.length; i++) {
      if(input === data.items[i].name) {
        found = i;
      }
    }
    if(found === -1) {
      setData(data.items[0]);
    }
    else {
      setData(data.items[found])
    }
  }

  const setData = ({name, owner, description, stargazers_count}) => {
    setName(name);
    setOwner(owner.login)
    setDescription(description);
    setStars(stargazers_count);
  }

  return (
    <div className="App">
      <div className='navbar'>
        <font color="white">GitHub Visualisation</font>
      </div>
      {RepoSearch([input, setInput])}
      <div className="repoCard" style={{display: 'flex',alignItems: 'center',justifyContent: 'center',}}>
        {MediaCard(name, owner, description, stars)}
      </div>
    </div>
  );
}



function MediaCard(name, owner, description, stars) {

  return (
    <Card className="card" style={{maxWidth: 400, minWidth: 400}}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography variant="h6" color="textSecondary" component="h2">
            {owner}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        < Star/>
        {stars}
      </CardActions>
    </Card>
  );
}




function RepoSearch([input, setInput]) {
  const classes = useStyles();
  const [repo, setRepo] = React.useState('');
  const handleChange = event => {
    setRepo(event.target.value);
  };

  const doSomething = function(event) {
    setInput(repo);
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
export default App;
