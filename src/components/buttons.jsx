import React from "react";
import '../stylesheets/button.css'

function Button(props) {

    const isOperator = value => {
        return isNaN(value) && (value !== '.') && (value !== '=')
    };

    return (
        <div
            className={`btn-container ${isOperator(props.children) ? 'operator' : ''}`.trimEnd()}
            onClick={() => props.clickHandle(props.children)}>
            {props.children}
        </div>
    );
}

export default Button