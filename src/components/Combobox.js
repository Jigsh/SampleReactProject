import React from 'react';
import Select from 'react-select';

class Combobox extends React.Component {

    constructor(props) {
        super(props);
console.log("options :" + props.options);
        this.state = {
            value : "",
            options: this.props.options

        }
        this.handelOnchange = this.handelOnchange.bind(this);
    }

    handelOnchange(selectedOption)  {
this.setState({value:selectedOption.value});
this.props.changeName(this.props.name,selectedOption.value);
    }
        render() {

            return <div><Select value={this.state.value} onChange={this.handelOnchange} className = {this.props.className} name={this.props.name}  options={this.state.options}/></div>

        }
}

export default (Combobox);