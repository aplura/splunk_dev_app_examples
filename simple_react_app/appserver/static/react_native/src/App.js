import React from 'react';
class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            "server_info": {}
        }
        this.updateParentState = this.updateParentState.bind(this);
    }

    componentDidMount = () => {
        // do things on mount of component
        // This will use the native splunk JS object to "get" an endpoint. "post" is also supported.
        this.props.splunk.get("server/info").then((d)=>{
            let clear = JSON.parse(d);
            this.setState({"server_info": clear["entry"][0]["content"]})
        })
    };

    updateParentState = (prop) => {
        this.setState(Object.assign(this.state, prop));
    };

    render() {
        return (
            <div>
                <h1>Simple React App</h1>
                {Object.entries(this.state.server_info).map((i)=>{
                    let k = i[0], v = i[1];
                    if (["activeLicenseGroup", "cpu_arch", "host", "os_version", "os_name", "version"].includes(k)) {
                        return (<div><strong>{k}</strong>: <i>{JSON.stringify(v) || "N/A"}</i></div>)
                    }
                })}
            </div>
        );
    }
}


export default App;