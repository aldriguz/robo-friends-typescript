import React, { Component } from 'react';

interface IAppProps {
    color: string;
}

interface IAppState {
    hasError: boolean;
}


class ErrorBoundry extends Component<IAppProps, IAppState> {
    constructor(props: IAppProps){
        super(props);
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error: any, info: any){
        this.setState({hasError: true});
    }

    render(){
        if (this.state.hasError) {
            return <h1>Oooops. This is an error</h1>
        }
        return this.props.children;
    }
}

export default ErrorBoundry;