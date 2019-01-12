import React from 'react';
import ReactDOM from 'react-dom';
import './SeasonDisplay.css';

class Clock extends React.Component {
    state = { time: new Date().toLocaleTimeString() };
    componentDidMount() {
        setInterval(() => { this.setState({time: new Date().toLocaleTimeString()}) }, 1000)
    }

    render() {
        return (
            <div className="time">
                    The time is: {new Date().toLocaleTimeString()}
            </div>
        );
    }
}


// Renders the App component into a div with id 'root'
ReactDOM.render(<Clock />, document.querySelector('#root'));

export default Clock;