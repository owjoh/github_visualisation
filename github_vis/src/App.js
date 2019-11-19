import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './RepoSearch';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import Star from '@material-ui/icons/Star';



function App() {
  const [name,setName] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [stars, setStars] = React.useState('');


  useEffect( () => {
    fetch("https://api.github.com/search/repositories?q=flutter")
    .then(res => res.json())
    .then(data => (
      setData(data.items[0])
    ))
  },[])

  const setData = ({name, description, stargazers_count}) => {
    setName(name);
    setDescription(description);
    setStars(stargazers_count);
  }

  return (
    <div className="App">
      <div className='navbar'>
        <font color="white">GitHub Visualisation</font>
      </div>
      < Form/>
      <div className="repoCard" style={{display: 'flex',alignItems: 'center',justifyContent: 'center',}}>
        {MediaCard(name, description, stars)}
      </div>
    </div>
  );
}

function MediaCard(name, description, stars) {

  return (
    <Card className="card" style={{maxWidth: 400}}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
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
export default App;
