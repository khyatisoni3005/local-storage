import React from 'react'

export default function Button({ onClick, content }) {
    return (
        <button className='btnn' onClick={onClick} >{content}</button>
    )
}
