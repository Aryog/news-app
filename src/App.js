import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  country = "au";
  pageSize = 5;
  apiKey= process.env.REACT_APP_NEWS_API
  state={
    progress:0
  }
  setProgress =(progress)=>{
    this.setState({progress:progress})
  }
  render() {
    return (
      <div>
        <Router>
        <LoadingBar color="#0095a2" height="3px" progress={this.state.progress} />
          <Navbar />
          <Switch>
            <Route exact path="/">
              <News apiKey={this.apiKey}  setProgress={this.setProgress} 
                pageSize={this.pageSize}
                key="general"
                country={this.country}
                category="general"
              />
            </Route>
            <Route exact path="/business">
              <News apiKey={this.apiKey}  setProgress={this.setProgress} 
                pageSize={this.pageSize}
                key="business"
                country={this.country}
                category="business"
              />
            </Route>
            <Route exact path="/entertainment">
              <News apiKey={this.apiKey}  setProgress={this.setProgress} 
                pageSize={this.pageSize}
                key="entertainment"
                country={this.country}
                category="entertainment"
              />
            </Route>
            <Route exact path="/general">
              <News apiKey={this.apiKey}  setProgress={this.setProgress} 
                pageSize={this.pageSize}
                key="general"
                country={this.country}
                category="general"
              />
            </Route>
            <Route exact path="/health">
              <News apiKey={this.apiKey}  setProgress={this.setProgress} 
                pageSize={this.pageSize}
                key="health"
                country={this.country}
                category="health"
              />
            </Route>
            <Route exact path="/science">
              <News apiKey={this.apiKey}  setProgress={this.setProgress} 
                pageSize={this.pageSize}
                key="science"
                country={this.country}
                category="science"
              />
            </Route>
            <Route exact path="/sports">
              <News apiKey={this.apiKey}  setProgress={this.setProgress} 
                pageSize={this.pageSize}
                key="sports"
                country={this.country}
                category="sports"
              />
            </Route>
            <Route exact path="/technology">
              <News apiKey={this.apiKey}  setProgress={this.setProgress} 
                pageSize={this.pageSize}
                key="technology"
                country={this.country}
                category="technology"
              />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
