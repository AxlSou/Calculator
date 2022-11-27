import React from "react";
import '../stylesheets/clear.css'

const Clear = (props) => (
    <div id="clear" className="btn-clear" onClick={props.clearHandle}>
        {props.children}
    </div>
);

export default Clear