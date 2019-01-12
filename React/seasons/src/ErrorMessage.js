import React from 'react';

const ErrorMessage = (props) => {
    return (
        <div className="ui active dimmer">
            <div className="ui big text loader">{props.message}</div>
        </div>
    );
};

ErrorMessage.defaultProps = {
    message: 'Error..'
}

export default ErrorMessage;
