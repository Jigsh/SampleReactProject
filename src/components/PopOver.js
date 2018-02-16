import React from 'react';

export const MyPopOver = (props) => {
    return(
        <Popover id="popover-positioned-bottom" title="ff">
            <strong>Holy guacamole!</strong> {this.props.loginObj.userName}
        </Popover>
    )
}