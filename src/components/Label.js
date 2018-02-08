import React from 'react';


class Label extends React.Component {

    constructor(props) {
        super(props);
    }

        render(){

            return <label className={this.props.className}>{this.props.name}</label>
        }
}

export default (Label);