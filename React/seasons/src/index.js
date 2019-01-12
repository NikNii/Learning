import React from 'react';
import ReactDOM from 'react-dom';

import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';
import ErrorMessage from './ErrorMessage';
import Clock from './Clock';

class App extends React.Component {
    state = { lat: null, errorMessage: '', city: ''};

    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude }),
            err =>      this.setState({ errorMessage: err.message })
        );
        console.log('Component was rendered on the screen!');
    }
    componentDidUpdate(){
        console.log('Component updated, so it rerendered!');
    }

    renderContent(){
        if(this.state.errorMessage && !this.state.lat) {
            return <div>
                <ErrorMessage message={this.state.errorMessage} />
                </div>
        }
        if (!this.state.errorMessage && this.state.lat) {
            return (
            <div>
                <SeasonDisplay lat={this.state.lat} />
            </div>
            )
        }
        return <div><Spinner message="Please accept the location request.."/></div>;
    }

    render () {
        return (
            <div className="border-red">
                {this.renderContent()}
            </div>
        )
    }
}

ReactDOM.render(
<App/>, 
document.querySelector('#root'));