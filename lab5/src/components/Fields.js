import React, { Fragment } from 'react';
import { Icon } from "./Icon";

/**
 * @return {null}
 */

function CreateText(props) {
    if(!props.value){
        return null;
    }
    return(
        <Fragment>
            <Icon icon={props.icon}/>
            <p className={props.className}>{props.value}</p>
        </Fragment>
    )
}

/**
 * @return {null}
 */

function CreateImg(props) {
    if(!props.src){
        return null
    }
    return(
        <img alt="Your avatar" src={props.src} className={props.className}/>
    )
}

/**
 * @return {null}
 */

function CreateLink(props) {
    if (!props.value){
        return null
    }
    return(
        <Fragment>
            <Icon icon={props.icon}/>
            <a href={props.value} className={props.className}>{props.value}</a>
        </Fragment>
    )
}

/**
 * @return {null}
 */

function CreateList(props) {
    if (!(props.from && props.from.length)){
        return(
            <p className={props.className}>List is empty</p>
        )
    }
    return(
        <ul className={props.className}>
            {props.from.map((item, i) => <li key={i}>{item[props.property]}</li>)}
        </ul>
    )
}

function CreateListForRepos(props) {
    if (!(props.from && props.from.length)){
        return(
            <p className={props.className}>List is empty</p>
        )
    }
    return(
        <ul className={props.className}>
            {props.from.map((item, i) => <li key={i}>{'Name: '+item[props.property]+' - '+'Language: '+item[props.property1]+' - '+' Private status: '+item[props.property2]}</li>)}
        </ul>
    )
}


export { CreateText, CreateImg, CreateLink, CreateList, CreateListForRepos }