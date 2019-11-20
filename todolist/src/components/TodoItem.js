// type rec and the tab wich will generate this format
import PropTypes from 'prop-types';


import React, { Component } from 'react'

export class TodoItem extends Component {
    getStyle =()=>{
        return{
            background: '#f4f4f4',
            padding:'10px',
            borderBottom:'1px #ccc dotted',
            textDecoration: this.props.item.completed?
            'line-through': 'none'
        }
    }



    render() {

        const {id,title} = this.props.item;

        return (
            // <div style={{ backgroundColor:'#f4f4f4' }}>
            <div style={this.getStyle()}>
                <p>
                    <input type='checkbox' onChange={ this.props.markComplete.bind(this,id)}/>{'  '}
                    { title  }
                    <button onClick={this.props.delTodo.bind(this, id)} style = {btnStyle}>x</button>
                    
                </p>
            </div>
        )
    }
}
TodoItem.propTypes= {
    item: PropTypes.object.isRequired
}

const btnStyle = {
    background: '#ff0000',
    color:'#fff',
    border:'none',
    padding: '5px 9px',
    borderRadius: '50%',
    cursor: 'pointer',
    float:'right'
}

//this is a variable
// const itemStyle ={
//     backgroundColor:'#f4f4f4'
// }

export default TodoItem
