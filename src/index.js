import React from 'react'
import ReactDOM from 'react-dom'


const TestComponent = ({ name = "Akash" }) => {
    return <div>This is a Test Component! Your name is {name}</div>
}

ReactDOM.render(
    <TestComponent />,
    document.getElementById('root')
)