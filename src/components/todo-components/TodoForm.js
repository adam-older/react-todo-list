import React, { Component } from 'react';
// import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

export class TodoForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: ''
        }
    }

    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.title) {
            this.props.submitTodo(this.state.title);
        }
        this.setState({ title: '' });
    }

    // Set Component level state
    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    render() {
        return (
            <form onSubmit={this.onSubmit} style={{ display: 'flex' }}>
                <input 
                type="text" 
                name='title' 
                placeholder='Add Todo...' 
                style={{ flex: '10', padding: '5px' }}
                value={this.state.title}
                onChange={this.onChange}
                />
                <input type="submit"
                value="submit"
                className="btn"
                style={{ flex: '1' }}
                />
            </form>
        )
    }
}

TodoForm.propTypes = {
    submitTodo: PropTypes.func.isRequired,
}

export default TodoForm
