import React, { Component } from 'react';

interface IAppProps {
    color: string;
}

interface IAppState {
  count: number;
}


class CounterButton extends Component<IAppProps, IAppState> {
    constructor(props: IAppProps) {
        super(props);
        this.state = {
            count: 0
        }
    }

    //with this we make sure component will not update even if parent component is updated
    shouldComponentUpdate(nextProps: any, nextState:any) {        
        if(this.state.count !== nextState.count){
            return true;
        }
        return false; 
    }

    updateCount = () => {
        //improved way to update, why? I don´t know xD
        this.setState( state => {
            return {count: state.count + 1}
        });
    }
    
    render() {
        //console.log('CounterButton');
        return (
            <button 
                id='counter'    
                color={this.props.color} 
                onClick={this.updateCount}
            >
                Count: {this.state.count}
            </button>    
        )
    }  
}

export default CounterButton;
