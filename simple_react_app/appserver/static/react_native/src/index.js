import React from 'react';
import App from './App';

class main extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            splunk_service: props.splunkjs.createService({"owner": "nobody"}),
            splunk_components: props.splunk_components || {}
        };
    }

    render() {
        return (
            <App style={{"height": "850px"}}
                 app_context={this.props.utils.getCurrentApp()}
                 utils={this.props.utils}
                 splunk={this.props.splunkjs.createService({"owner": "nobody"})}
                 splunk_components={this.state.splunk_components}/>
        );
    }
}

export default main;
