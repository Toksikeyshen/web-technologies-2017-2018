import React from "react"

function CreateInput(props) {
    return(
        <div>
            <input type="text" id="search"/>
            <button onClick={props.action}>Find</button>
        </div>
    )
}

export { CreateInput }