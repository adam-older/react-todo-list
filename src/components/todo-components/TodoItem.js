import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class TodoItem extends Component {
    getStyle = () => {
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: (this.props.todo.completed) ? 'line-through' : 'none'
        }
    }



    render() {
        const { id, title } = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <p>
                    <input type='checkbox' onChange={this.props.toggleComplete.bind(this, id)}/>
                    {' '}
                    { this.props.todo.title }
                    <button style={btnStyle} onClick={this.props.delTodo.bind(this, id)}>x</button>
                </p>
            </div>
            
        )
    }
}

// PropTypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    toggleComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired,
}

const btnStyle = {
    backgroundColor: '#ff0000',
    color: '#fff',
    float: 'right',
    border: 'none',
    padding: '5px 10px',
    borderRadius: '50%',
    cursor: 'pointer'
}


export default TodoItem