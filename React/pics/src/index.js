import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component {

    componentDidMount(){
        
        console.log('Component was rendered on the screen!');
    }
    componentDidUpdate(){
        console.log('Component updated, so it rerendered!');
    }

    renderContent(){
        
        return <div>Hello!</div>;
    }

    render () {
        return (
            <div>
                {this.renderContent()}
            </div>
        )
    }
}

ReactDOM.render(
<App/>, 
document.querySelector('#root'));