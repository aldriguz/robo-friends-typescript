import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import Header from '../components/Header';
import IRobot from '../interfaces/IRobot';

import './MainPage.css';

interface IAppProps {
    onRequestRobots?: any;
    onSearchChange?: any;
    searchField?: any;
    isPending?: boolean;
    error?: any;
    robots?: Array<IRobot>;
}

interface IAppState {
    hasError: boolean;
}

class MainPage extends Component<IAppProps, IAppState> {
    componentDidMount() {        
        this.props.onRequestRobots();
    }

    filterRobots() {
        if(this.props.robots === undefined){
            return [];
        } else {
            return this.props.robots.filter(robot =>{ 
                return robot.name.toLowerCase().includes(this.props.searchField.toLowerCase());
            });
        }
        
    }

    render(){
        const {onSearchChange, isPending, error} = this.props;
        
        if(!isPending && error !== '')
            return <h1>An error has ocurred</h1>

        return isPending ?
            <h1>Loading</h1> : 
           (               
                <div className='tc'>
                    <Header />
                    <SearchBox searchChange={onSearchChange}/>
                    <Scroll>
                        <ErrorBoundry color=''>
                            <CardList robots={this.filterRobots()} />
                        </ErrorBoundry>
                    </Scroll>
                </div>
            );
    }
}

export default MainPage;
