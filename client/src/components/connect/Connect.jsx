import React from 'react'
import './Connect.sass'

export const Connect = ({ onClick }) => {

    return (
        <div className='connect'>
            <button
                onClick={onClick}
                className='connect__btn'>Connect to Wallet</button>
        </div>
    )
}