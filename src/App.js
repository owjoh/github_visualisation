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
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme, VictoryArea, VictoryPolarAxis } from 'victory';
import { fontSize } from '@material-ui/system';
import { classDeclaration } from '@babel/types';


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
  card: {
    border: 0,
    borderRadius: 10,
    boxShadow: '0 3px 5px 2px rgba(0,0,0, .3)',
    color: 'white',
    width:'400px',
    height:'400px',
    minWidth:'400px',
    
  },
  barCard: {
    border: 0,
    borderRadius: 10,
    boxShadow: '0 3px 5px 2px rgba(0,0,0, .3)',
    color: 'white',
  },

  mediaCard: {
    border: 0,
    borderRadius: 10,
    boxShadow: '0 3px 5px 2px rgba(0,0,0, .3)',
    color: 'white',
    width:'400px',
  },


  searchCard: {
    border: 0,
    borderRadius: 10,
    boxShadow: '0 3px 5px 2px rgba(0,0,0, .3)',
    color: 'white',
    width:'400px',
    height:'400px',
  },

  flexCard: {
    border: 0,
    borderRadius: 10,
    boxShadow: '0 3px 5px 2px rgba(0,0,0, .3)',
    color: 'white',
    width:'100%',
    height:'400px',
    
  },
}));

function App() {
  const [name,setName] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [owner, setOwner] = React.useState('');
  const [stars, setStars] = React.useState('');
  const [input, setInput] = React.useState('github_visualisation');
  const [graphData, setGraphData] = React.useState('');
  const [radarData, setRadarData] = React.useState('');


  useEffect( () => {
    fetch("https://api.github.com/search/repositories?q=" + input)
    .then(res => res.json())
    .then(data => (
      findInputInData(data, input)
    ))
  },[input])

  const findInputInData = function(data, input) {
    let found = -1;
    if(data.total_count===0) {
      found = -2;
    }
    for (let i = 0; i < data.items.length; i++) {
      if(input === data.items[i].name) {
        found = i;
      }
    }
    if(found === -1) {
      setData(data.items[0]);
    }
    else if(found>-1){
      setData(data.items[found])
    }
  }

  const setData = ({name, owner, description, stargazers_count}) => {
    setName(name);
    setOwner(owner.login)
    setDescription(description);
    setStars(stargazers_count);
    console.log(owner.login + name);
    fetch("https://api.github.com/repos/"+owner.login+"/"+name+"/stats/contributors")
    .then(res=>res.json())
    .then(gdata => (
      formatGraphData(gdata)
    ));
  
  }

  const formatGraphData = (data)=> {
    var formatted = data;
    var currentAdditions;
    var currentDelections;
    var highestTotalAdd=0;
    var highestTotalDel=0;
    if(Array.isArray(formatted)){
      var highestTotalCommits=formatted[formatted.length-1].total;
    }
    for(let i =0; i < formatted.length; i++) {
      currentAdditions=0;
      currentDelections=0;
      for(let j = 0; j < formatted[i].weeks.length; j++) {
        currentAdditions=currentAdditions+formatted[i].weeks[j].a;
        currentDelections=currentDelections+formatted[i].weeks[j].d;
      }
      formatted[i]["totalAdd"] = currentAdditions;
      formatted[i]["totalDel"] = currentDelections;
      if(currentDelections>highestTotalDel){
        highestTotalDel=currentDelections;
      }
      if(currentAdditions>highestTotalAdd){
        highestTotalAdd=currentAdditions;
      }

    }
    formatted["highestTotalCom"]=highestTotalCommits;
    formatted["highestTotalAdd"]=highestTotalAdd;
    formatted["highestTotalDel"]=highestTotalDel;
    console.log(formatted);
    setGraphData(formatted);
  }

  const classes = useStyles();
  return (
    <div className="App">
      <div className='navbar'>
        <font color="white">GitHub Visualisation</font>
      </div>
      <div className={classes.paper}>
        <Card className={classes.searchCard}>
          {RepoSearch([input, setInput])}
        </Card>
      </div>
      <Container>
        <div className="repoCard" style={{display: 'flex',alignItems: 'center',justifyContent: 'center',}}>
          {MediaCard(name, owner, description, stars)}
        </div>
        <div style={{flexDirection:'row'}}>
          <div className="barChart">
            <Card className={classes.barCard}>
              {testBar(graphData,[radarData,setRadarData])}
            </Card>
          </div>
          <div style={{paddingBottom:20, display: 'flex',flexDirection: 'row',alignItems: 'center',}}>
              <Card className={classes.card}>
                {RadarChart(radarData)}
              </Card>
              <div style={{width:25}}></div>
              <Card className={classes.flexCard}>
                {RadarChart(radarData)}
              </Card>
          </div>
        </div>
      </Container>
    </div>
  );
}
function MediaCard(name, owner, description, stars) {
  const classes = useStyles();
  return (
    <Card style={{
        maxWidth: 400,
        minWidth: 400,
        border: 0,
        borderRadius: 10,
        boxShadow: '0 3px 5px 2px rgba(0,0,0, .3)',
      }}
    >
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


function testBar(inData,[radarData,setRadarData]) {
  
  if(!Array.isArray(inData)) {
    return(<h3>Loading graph...</h3>);
  }
  else {
    return (
      <VictoryChart domainPadding={20} theme={VictoryTheme.material} height={200} 
      animate={{
        duration: 1000,
        onLoad: { duration: 500}
      }}
      >
        <VictoryAxis
          label={"Users"}
          style={{
            axisLabel: {fontSize: 5, padding: 30},
            tickLabels: {fontSize: (5*(1/2)), angle: -90},
            grid: {strokeWidth: 0}
          }}
        />
        <VictoryAxis
          dependentAxis
          label={"Commits"}
          style={{
            axisLabel: {fontSize: 5, padding: 30},
            tickLabels: {fontSize: 5, },
          }}
        />
        <VictoryBar
          data={inData}
          x="author.login"
          y="total"
          style={{data:{fill: "#9D50BB"}}}
          events={[
            {
              target: "data",
              eventHandlers: {
                onMouseOver: (evt, props) => {
                  setRadarData([
                    {y: ((inData[props.index].total)/(inData.highestTotalCom)), login:(inData[props.index].author.login)},
                    {y: ((inData[props.index].totalAdd)/(inData.highestTotalAdd))},
                    {y: ((inData[props.index].totalDel)/(inData.highestTotalDel))},
                  ])
                  return [
                    {
                      // Add an event to reset all the points to the original color
                      target: "data",
                      eventKey: "all",
                      mutation: () => ({ style: { fill: "#9D50BB", strokeWidth:-5} })
                    },
                    {
                      // Then add an event to set changes. (eventKey will automatically use current target)
                      target: "data",
                      mutation: () => {
                        return { style: { fill: "#873ffb", strokeWidth:-15 } };
                      }
                    }
                  ];
                }
              }
            }
          ]}
          
        />
      </VictoryChart>
    );
  }
}


function RadarChart(data) {
  if(!Array.isArray(data)) {
    return(null);
  }
  console.log(data[0].login);
  return(
    <VictoryChart polar
      theme={VictoryTheme.material}
      maxDomain={{y:1}}
      
    >
      <VictoryPolarAxis dependentAxis
        style={{ axis: { stroke: "none" } }}
        tickFormat={(t)=>null}
      />
      <VictoryPolarAxis
        labelPlacement="perpendicular"
        tickCount={3}
        tickFormat={["Additions","Deletions","Commits"]}
      />
      <VictoryArea
        data={data}
        style={{
        data: { fill: "#873ffb", fillOpacity: .7,strokeWidth:2, stroke: "#873ffb"},
        }}
        animate={{
          duration: 500,
          onLoad: { duration: 500}
        }}
      />
    </VictoryChart>
  );

}
export default App;
