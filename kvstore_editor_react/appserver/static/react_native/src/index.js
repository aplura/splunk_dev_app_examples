import React from 'react';
import App from './App';

class main extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <App style={{"height": "850px"}}
                 {...this.props.data}
                 app_context={this.props.utils.getCurrentApp()}
                 utils={this.props.utils}
                 splunk={this.props.splunk.createService({"owner": "nobody"})}
                 splunk_components={this.props.splunk_components}/>
        );
    }
}

export default main;
