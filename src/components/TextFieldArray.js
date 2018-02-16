import React,{Component} from 'react';
import '../style/textbox.css';
import ReactDom from 'react-dom';
import {connect} from "react-redux";

class TextFieldArray extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isReadOnly: props.readOnly,
            isHidden: false,
            placeHolder: props.placeHolder,
            name: props.name,
            value : '',
            type : props.validateType
        }

        this.handleOnchange = this.handleOnchange.bind(this);
    }

    handleOnchange(e)  {

        if(this.props.validate(e.target.value)){

            this.setState({value : e.target.value});
            this.props.changeName(this.props.name,e.target.value,this.props.arrayIndex);
        }

    }
    validate(e) {

        // Call parent methid
        this.props.validate(e.traget.value);
    }
    getValue() {
        return this.state.value;
    }

    render() {
        return (
            <div>
                    <input name={this.state.name + this.props.index} className={this.props.className} value={this.props.value === '' || this.props.value === undefined ? this.state.value : this.props.value }  onChange={this.handleOnchange} type="text"  placeholder={this.state.placeHolder}/>

            </div>

        );
    };

}

export default (TextFieldArray);
