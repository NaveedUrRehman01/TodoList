import React from 'react'

const ToDolist = (props) => {

    
    return (
    <>
    <div style={{textAlign:'left'}}>
    
    <li>
    <i className="fa fa-close "  onClick={()=>{
        props.onSelect(props.id);
    }}/> 
       {' '} { props.text } </li>
    <hr />
    </div>
    </>
    )
}

export default ToDolist;