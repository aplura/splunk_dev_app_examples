import React, {forwardRef} from 'react';
import MaterialTable from 'material-table';
import uuid from 'react-uuid'
import Search from "@material-ui/icons/Search";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import ChevronRight from "@material-ui/icons/ChevronRight";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import Clear from "@material-ui/icons/Clear";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import Info from "@material-ui/icons/Info";
import Check from "@material-ui/icons/Check";
import Delete from "@material-ui/icons/Delete";
import Edit from "@material-ui/icons/Edit";
import Add from "@material-ui/icons/Add";
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import validator from 'validator';

const tableIcons = {
    Search: forwardRef((props, ref) => <Search {...props} ref={ref}/>),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref}/>),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref}/>),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref}/>),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref}/>),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref}/>),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref}/>),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref}/>),
    Info: forwardRef((props, ref) => <Info {...props} ref={ref}/>),
    DetailPanel: forwardRef((props, ref) => <Info {...props} ref={ref}/>),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref}/>),
    Delete: forwardRef((props, ref) => <Delete {...props} ref={ref}/>),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref}/>),
    Add: forwardRef((props, ref) => <Add {...props} ref={ref}/>),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref}/>),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref}/>)
};
const validators = {
    number: (field, value) => {
        if (validator.isEmpty(value)){
            return {helperText: `${field} is empty`, isValid: false};
        }
        if (!validator.isFloat(value) || !validator.isInt(value)) {
            return {helperText: `${field} is not a number`, isValid: false};
        }
        return true
    },
    bool: (field, value) => {
        if (validator.isEmpty(value)){
            return {helperText: `${field} is empty`, isValid: false};
        }
        if (!validator.isBoolean(value)) {
            return {helperText: `${field} is not a boolean`, isValid: false};
        }
        return true
    },
    string: (field, value) => {
        if (validator.isEmpty(value)){
            return {helperText: `${field} is empty`, isValid: false};
        }
        if (!validator.isAscii(value)) {
            return {helperText: `${field} is not an ASCII string`, isValid: false};
        }
        return true
    },
    time: (field, value) => {
        if (validator.isEmpty(value)){
            return {helperText: `${field} is empty`, isValid: false};
        }
        if (!validator.isDate(value)) {
            return {helperText: `${field} is not a date`, isValid: false};
        }
        return true
    }
}

class App extends React.Component {
    constructor(props) {
        super(props);
        let c = props.columns || "", use_config_columns = c.length > 0,
            c2 = [{title: "_key", field: '_key', readonly: true, hidden: true}];
        c.split(",").map((k) => {
            c2.push({
                title: k,
                field: k,
                hidden: false,
                readonly: false
            })
        })
        this.state = {
            data: [],
            columns: c2,
            use_config_columns: use_config_columns
        }
        this.updateParentState = this.updateParentState.bind(this);
    }

    get_kvstore_data = () => {
        return new Promise((resolve, reject) => {
            this.props.splunk.get(`storage/collections/data/${this.props.kvstore}`).then((d) => {
                let clear = JSON.parse(d);
                console.log({"action": "get_data", ...clear});
                resolve(clear);
            })
        });
    }
    get_kvstore_config = () => {
        return new Promise((resolve, reject) => {
            this.props.splunk.get(`storage/collections/config/${this.props.kvstore}`)
                .then((d) => {
                    let clear = JSON.parse(d);
                    resolve(clear["entry"][0]["content"]);
                });
        });
    }
    delete_kvstore_item = (item) => {
        return new Promise((resolve, reject) => {
            this.props.splunk.request(`storage/collections/data/${this.props.kvstore}/${item}`,
                "DELETE",
                {"output_mode": "json"},
                null,
                null,
                {"Content-Type": "application/json"}, null)
                .error(data => {
                    reject(data)
                })
                .done(data => {
                    resolve(data)
                });
        });
    }
    put_kvstore_item = (item) => {
        return new Promise((resolve, reject) => {
            this.props.splunk.request(`storage/collections/data/${this.props.kvstore}`,
                "POST",
                {"output_mode": "json"},
                null,
                JSON.stringify(item),
                {"Content-Type": "application/json"}, null)
                .error(data => {
                    reject(data)
                })
                .done(data => {
                    resolve(JSON.parse(data))
                });
        });
    }
    update_kvstore_item = (item) => {
        return new Promise((resolve, reject) => {
            this.props.splunk.request(`storage/collections/data/${this.props.kvstore}/${item["_key"]}`,
                "POST",
                {"output_mode": "json"},
                null,
                JSON.stringify(item),
                {"Content-Type": "application/json"}, null)
                .error(data => {
                    reject(data)
                })
                .done(data => {
                    resolve(JSON.parse(data))
                });
        });
    }
    put_kvstore_bulk_items = (items) => {
        return new Promise((resolve, reject) => {
            this.props.splunk.request(`storage/collections/data/${this.props.kvstore}/batch_save`,
                "POST",
                {"output_mode": "json"},
                null,
                JSON.stringify(items),
                {"Content-Type": "application/json"}, null)
                .error(data => {
                    reject(data)
                })
                .done(data => {
                    resolve(JSON.parse(data))
                });
        });
    }

    componentDidMount = () => {
        // do things on mount of component
        // This will use the native splunk JS object to "get" an endpoint. "post" is also supported.
        this.get_kvstore_data().then((d) => {
            this.setState({"data": d});
        })
        this.get_kvstore_config().then((d) => {
            let f = Object.keys(d);
            let c = this.state.columns.map((k) => {
                if (f.includes(`field.${k.field}`)) {
                    k["validate"] = rowData => validators[d[`field.${k.field}`]](k.field, `${rowData[k.field]}`);
                }
                return k;
            })
            this.setState({"columns": c});
        })
    };

    updateParentState = (prop) => {
        this.setState(Object.assign(this.state, prop));
    };

    render() {
        let self = this;
        return (
            <div className={"panel-element-row"}>
                <MaterialTable
                    title={
                        <div>
                            <h2>Edit {this.props.kvstore}</h2>
                        </div>
                    }
                    icons={tableIcons}
                    columns={this.state.columns}
                    data={self.state.data}
                    editable={{
                        onRowAdd: newData =>
                            new Promise((resolve, reject) => {
                                setTimeout(async () => {
                                    newData["_key"] = uuid();
                                    const dataNew = [...this.state.data];
                                    await this.put_kvstore_item(newData);
                                    dataNew.push(newData);
                                    self.setState({"data": dataNew});
                                    resolve();
                                }, 1000)
                            }),
                        onRowUpdate: (newData, oldData) =>
                            new Promise((resolve, reject) => {
                                setTimeout(async () => {
                                    const dataUpdate = [...this.state.data];
                                    const index = oldData.tableData.id;
                                    dataUpdate[index] = newData;
                                    await this.update_kvstore_item(newData);
                                    self.setState({"data": dataUpdate});
                                    resolve();
                                }, 1000)
                            }),
                        onBulkUpdate: changes =>
                            new Promise((resolve, reject) => {
                                setTimeout(() => {
                                    /* setData([...data, newData]); */
                                    let items = this.state.data, keyed = {}, change_items = [];
                                    Object.keys(changes).map((l) => {
                                            keyed[changes[l]["oldData"]["_key"]] = {...changes[l]["oldData"], ...changes[l]["newData"]};
                                            change_items.push(keyed[changes[l]["oldData"]["_key"]]);
                                            return l;
                                    })
                                    let keys = Object.keys(keyed);
                                    let updatedItems = items.map((k) => {
                                        if (keys.includes(k["_key"])){
                                            return keyed[k["_key"]];
                                        } else {
                                            return k;
                                        }
                                    })
                                    self.put_kvstore_bulk_items(change_items);
                                    self.setState({"data": updatedItems});
                                    resolve();
                                }, 1000);
                            }),
                        onRowDelete: oldData =>
                            new Promise((resolve, reject) => {
                                setTimeout(async () => {
                                    const dataDelete = [...this.state.data];
                                    const index = oldData.tableData.id;
                                    dataDelete.splice(index, 1);
                                    await this.delete_kvstore_item(oldData["_key"]);
                                    self.setState({"data": dataDelete});
                                    resolve();
                                }, 1000)
                            }),
                    }}
                    options={{
                        grouping: true,
                        exportButton: true,
                        exportFileName: `kvstore_export_${this.props.kvstore}`
                    }}
                />
            </div>
        );
    }
}


export default App;