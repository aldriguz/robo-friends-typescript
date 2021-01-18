import React, { Component } from 'react';
import { connect } from 'react-redux';
import MainPage from './MainPage';
import { requestRobots, setSearchField } from '../actions';
//import IRobot from '../interfaces/IRobot';

interface IAppState {
  hasError: boolean;
}

const mapStateToProps = (state:any) => {
  return {
      searchField: state.searchRobots.searchField,
      robots: state.requestRobots.robots,
      isPending: state.requestRobots.isPending,
      error: state.requestRobots.error
  }
}

const mapDispatchToProps = (dispatch:any) => {
   return {
       onSearchChange: (event:any) => dispatch(setSearchField(event.target.value)),
       onRequestRobots: () => dispatch(requestRobots())
   }
}


class App extends Component<{}, IAppState> {
  render(){
    return <MainPage { ...this.props}/>;
  }
}

//connect returns another function that executes App as a parameter
export default connect(mapStateToProps, mapDispatchToProps)(App);

