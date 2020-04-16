import React from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Everything from './components/Everything';
import Header from './components/Header';
import Prevention from './Prevention';
import Symptoms from './Symptoms';
import Facts from './Facts';
import Links from './UsefulLinks';


const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#eee'
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Header />
      <Router>
        <Switch>
          <Route exact path="/" component={Everything} />
          <Route exact path="/symptoms" component={Symptoms} />
          <Route exact path="/prevention" component={Prevention} />
          <Route exact path="/facts" component={Facts} />
          <Route exact path="/links" component={Links} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;