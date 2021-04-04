import './App.css';
import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './Home';
import ArticleEdit from './ArticleEdit';
import ArticleList from './ArticleList';
import ArticleAdd from './ArticleAdd';

class App extends Component {

  render() {
    return (
      <div className="App" class="container">
        <Router>
          <Switch>
            <Route path='/' exact={true} component={Home}/>
            <Route path='/article/add' exact={true} component={ArticleAdd} />
            <Route path='/articles' exact={true} component={ArticleList} />
            <Route path='/articles/:id' component={ArticleEdit} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
