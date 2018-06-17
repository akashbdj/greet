import React from 'react'
import ReactDOM from 'react-dom'
import Styles from './style/main.css'

const TestComponent = ({ name = "Akash" }) => {
    return <div>This is a Test Component! Your name is {name}</div>
}

ReactDOM.render(
    <TestComponent />,
    document.getElementById('root')
)