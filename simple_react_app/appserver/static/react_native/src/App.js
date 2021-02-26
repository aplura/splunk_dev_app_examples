import React from 'react';
class App extends React.Component {

    constructor(props) {
        super(props);
        this.updateParentState = this.updateParentState.bind(this);
    }

    componentDidMount = () => {
        // do things on mount of component
    };

    updateParentState = (prop) => {
        this.setState(Object.assign(this.state, prop));
    };

    render() {
        console.log(this.props.splunk);
        return (
            <div>
                <h1>Simple React App</h1>
            </div>
        );
    }
}


export default App;