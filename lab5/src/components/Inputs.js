import React from "react"

function CreateInput(props) {
    return(
        <div>
            <input type="text" id="search"/>
            <button onClick={props.action}>Find</button>
        </div>
    )
}

function InputForRepos(props) {
    return(
        <div>
            <input type="text" id="repos"/>
            <button onClick={props.action}>Find repo</button>
        </div>
    )
}

export { CreateInput, InputForRepos }