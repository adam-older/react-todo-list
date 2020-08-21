import React from 'react'

export default function Header() {
    return (
        <div>
            <h1 style={headerStyle}>TodoList</h1>
        </div>
    )
}

const headerStyle = {
    textAlign: 'center',
    color: 'white',
    backgroundColor: 'black'
}