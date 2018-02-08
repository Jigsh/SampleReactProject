import React from 'react';
import Select from 'react-select';

class Combobox extends React.Component {

    constructor(props) {
        super(props);

        this.state = {

            options: this.props.options

        }
    }
        render() {

            return <div><Select name={this.props.name}  options={this.state.options}/></div>

        }
}

export default (Combobox);