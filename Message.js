import React from "react";

function Message(props) {

    return (    
            <div class="container">
                <h1>{props.name} {props.question}</h1>
            </div>
    );
}

export default Message;