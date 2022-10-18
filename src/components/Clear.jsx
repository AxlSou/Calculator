import React from "react";
import '../stylesheets/clear.css'

const Clear = (props) => (
    <div className="btn-clear" onClick={props.clearHandle}>
        {props.children}
    </div>
);

export default Clear