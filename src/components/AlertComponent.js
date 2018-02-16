import React from 'react';
import { Alert } from 'react-bootstrap';
export const AlertComponent = (props) => {
    
    return(
        <Alert bsStyle="warning">
            <strong>{props.message}</strong>
        </Alert>
    )
}
